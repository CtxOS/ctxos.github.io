export type PostType = {
  slug: string
  title: string
  description?: string
  date: string
  image: string
  author: string
  content: string
}

type NextPageWithLayout = NextPage & {
  hideEllipses?: boolean
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type NextPageExtended = NextPage & {
  hideEllipses?: boolean
  getLayout?: (page: React.ReactNode) => React.ReactNode
}

export type Edition = {
  type: DownloadComponentType
  key: Editions
  title: string
  subtitle: string
  description: string
  background: string
  downloadOptions?: {
    buttonText?: string
    direct: string
    torrent: string
  }
  accordionOptions?: {
    buttonText?: string
    direct: DownloadItem[]
    torrent: DownloadItem[]
  }
  info: EditionInfo[]
  includes_list: string[]
  release_info: ReleaseInfo
  system_requirements: Requirements
}

export type Suggestion = {
  title: string
  subtitle: string
  link: string
  icon: React.ReactNode
}

export type Question = {
  question: string
  answer: string
}

export type ComponentIconProps = {
  color: string
  width: string
  height: string
  style?: object
}

export type Requirements = {
  processor: string
  memory: string
  storage: string
  graphics: string
  network: string
}

export type ReleaseInfo = {
  version: string
  release_date: string
  size: string
  architecture_tags: string[]
}

export type EditionInfo = {
  iconName: string
  title: string
  subtitle: string
}

export type DownloadItem = {
  key: string
  title: string
  subtitle: string
  link: string
}
export type Editions = 'security' | 'home' | 'hackthebox' | 'raspberry' | 'special' | 'spins'

export type DownloadComponentType = 'menu' | 'accordion'
