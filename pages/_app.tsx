// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import { Box, CssBaseline } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import CookieConsentBanner from 'components/CookieConsent'
import { BottomEllipse, LeftEllipse, RightEllipse } from 'components/GradientBG'
import Footer from 'containers/Footer'
import Header from 'containers/Header'
import SwitchThemeProvider from 'containers/ThemeProvider'
import '../styles/globals.css'
import { AppPropsWithLayout } from 'src/types'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter()
  const hideEllipses = Component.hideEllipses
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [router.pathname])

  return (
    <>
      <Head>
        <title>Ctx Security</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Ctx Security website" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <SwitchThemeProvider>
        <Box>
          <CssBaseline />
          {!hideEllipses && <RightEllipse />}
          {!hideEllipses && <LeftEllipse />}
          {!hideEllipses && <BottomEllipse />}
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Box>
        <CookieConsentBanner />
      </SwitchThemeProvider>
    </>
  )
}

export default MyApp
