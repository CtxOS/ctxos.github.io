/* eslint-disable react/display-name */
import { Button, Link, styled, Typography } from '@mui/material'
import { createElement, HTMLProps, ReactNode } from 'react'
import rehypeHighlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import { unified } from 'unified'

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5)
}))

export default async function markdownToHtml(markdown: string): Promise<ReactNode> {
  return (
    await unified()
      .use(remarkParse)
      .use(remarkSlug)
      .use(remarkToc)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeReact, {
        createElement,
        components: {
          a: ({ children, href }: HTMLProps<HTMLAnchorElement>) => {
            const text = String(children)

            if (text.startsWith('button:')) {
              return (
                <Button variant="contained" href={href} sx={{ textTransform: 'capitalize' }}>
                  {text.replace('button:', '')}
                </Button>
              )
            }

            return <Link href={href}>{children}</Link>
          },
          p: ({ children, id }: HTMLProps<HTMLParagraphElement>) => (
            <Typography
              variant="body1"
              id={id}
              style={{ opacity: 1, paddingTop: 10, paddingBottom: 10 }}
            >
              {children}
            </Typography>
          ),
          li: ({ children, id }: HTMLProps<HTMLLIElement>) => (
            <li id={id} style={{ color: '#8799B5' }}>
              {children}
            </li>
          ),
          h1: ({ children, id }: HTMLProps<HTMLHeadingElement>) => (
            <StyledTypography variant="h3" id={id}>
              {children}
            </StyledTypography>
          ),
          h2: ({ children, id }: HTMLProps<HTMLHeadingElement>) => (
            <StyledTypography variant="h4" id={id} sx={{ marginTop: 2.5 }}>
              {children}
            </StyledTypography>
          ),
          h3: ({ children, id }: HTMLProps<HTMLHeadingElement>) => (
            <StyledTypography variant="h5" id={id}>
              {children}
            </StyledTypography>
          ),
          h4: ({ children, id }: HTMLProps<HTMLHeadingElement>) => (
            <StyledTypography variant="h6" id={id}>
              {children}
            </StyledTypography>
          ),
          h5: ({ children, id }: HTMLProps<HTMLHeadingElement>) => (
            <StyledTypography variant="h6" id={id}>
              {children}
            </StyledTypography>
          ),
          h6: ({ children, id }: HTMLProps<HTMLHeadingElement>) => (
            <StyledTypography variant="h6" id={id}>
              {children}
            </StyledTypography>
          )
        }
      })
      .process(markdown)
  ).result
}
