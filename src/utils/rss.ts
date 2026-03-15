import fs from 'fs'

import RSS from 'rss'

import { PostType } from 'src/types'

interface FeedOptions {
  title: string
  description: string
  site_url: string
  feed_url: string
  pubDate: Date
  copyright: string
}

export default async function generateRssFeed(allPosts: PostType[]) {
  const _siteURL: string = 'https://ctxos.github.io/'
  //   const _siteURL: string = "http://localhost:3000";

  const feedOptions: FeedOptions = {
    title: 'CtxOS Blog | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: _siteURL,
    feed_url: `${_siteURL}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`
  }

  const feed: RSS = new RSS(feedOptions)

  allPosts.map((post: PostType) => {
    feed.item({
      description: post.description ?? '',
      title: post.title,
      author: post.author,
      date: post.date,
      url: `${_siteURL}/posts/${post.slug}`
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }))
}
