#!/usr/bin/env python3
"""Convert docs/**/*.md to HTML for GitHub Pages.

The site is deployed with the GitHub Pages artifact actions, which serve
files verbatim (no Jekyll processing). Markdown sources are therefore
compiled to HTML at build time. Generated files are excluded from Git
via .gitignore.
"""

import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

TEMPLATE = """<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{title} | CtxOS Documentation</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header class="site-header">
    <nav>
        <a class="brand" href="/">CtxOS</a>
        <div class="nav-links">
            <a href="/docs/">Documentation</a>
            <a href="/install/">Installation</a>
            <a href="/releases/">Releases</a>
            <a href="/iso/">ISO</a>
            <a href="/deb.ctxos.github.io/">Packages</a>
        </div>
    </nav>
</header>

<main class="docs">
<article>
{body}
</article>
</main>

<footer>
    <p>&copy; CtxOS</p>
</footer>
</body>
</html>
"""


def inline(text):
    """Apply inline Markdown formatting to an already escaped string."""
    text = html.escape(text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", r'<a href="\2">\1</a>', text)
    return text


def convert(md):
    """Convert a small Markdown subset to HTML."""
    out = []
    in_list = None

    def close_list():
        nonlocal in_list
        if in_list:
            out.append("</%s>" % in_list)
            in_list = None

    lines = md.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if stripped.startswith("```"):
            i += 1
            buf = []
            while i < len(lines) and not lines[i].strip().startswith("```"):
                buf.append(lines[i])
                i += 1
            i += 1
            out.append("<pre><code>%s</code></pre>" % html.escape("\n".join(buf)))
            continue

        heading = re.match(r"^(#{1,4})\s+(.*?)\s*$", line)
        if heading:
            close_list()
            level = len(heading.group(1))
            out.append("<h%d>%s</h%d>" % (level, inline(heading.group(2)), level))
            i += 1
            continue

        if re.match(r"^\s*[-*]\s+\S", line):
            if in_list != "ul":
                close_list()
                out.append("<ul>")
                in_list = "ul"
            out.append("<li>%s</li>" % inline(re.sub(r"^\s*[-*]\s+", "", line)))
            i += 1
            continue

        if re.match(r"^\s*\d+\.\s+\S", line):
            if in_list != "ol":
                close_list()
                out.append("<ol>")
                in_list = "ol"
            out.append("<li>%s</li>" % inline(re.sub(r"^\s*\d+\.\s+", "", line)))
            i += 1
            continue

        if not stripped:
            close_list()
            i += 1
            continue

        if stripped == "---":
            close_list()
            out.append("<hr>")
            i += 1
            continue

        close_list()
        out.append("<p>%s</p>" % inline(line))
        i += 1

    close_list()
    return "\n".join(out)


def main():
    if not DOCS.is_dir():
        print("error: docs/ directory not found", file=sys.stderr)
        return 1

    count = 0
    for md in sorted(DOCS.rglob("*.md")):
        title = "CtxOS Documentation"
        for line in md.read_text(encoding="utf-8").splitlines():
            match = re.match(r"^#\s+(.*?)\s*$", line)
            if match:
                title = match.group(1)
                break

        body = convert(md.read_text(encoding="utf-8"))
        page = TEMPLATE.format(title=title, body=body)

        if md.name == "index.md":
            out = md.parent / "index.html"
        else:
            out = md.with_suffix(".html")

        out.write_text(page, encoding="utf-8")
        print("generated %s" % out.relative_to(ROOT))
        count += 1

    print("build-docs: %d page(s)" % count)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
