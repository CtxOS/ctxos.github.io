import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
  alpha
} from '@mui/material'
import { ThemeProviderProps } from '@mui/styles'
import { createContext, useContext, useEffect, useState } from 'react'
import { useCookie } from 'react-use'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties
    body4: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties
    body4?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
    body4: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyClasses {
    body3: string
    body4: string
  }
}

export const ThemeContext = createContext({
  switchTheme: () => {}
})

export const useThemeSwitch = () => useContext(ThemeContext)

const SwitchThemeProvider = ({ children, ...rest }: Omit<ThemeProviderProps, 'theme'>) => {
  const [themeCookie, setCookie] = useCookie('theme')
  const [themeType, _setThemeType] = useState<'light' | 'dark'>('dark')
  const initialTheme = createTheme({
    // spacing: (factor: any) => `${0.25 * factor}rem`,
    shape: {
      borderRadius: 4
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    palette: {
      mode: themeType,
      // TODO: figure out what to do with these
      // text: {
      //   primary: '#ffffff',
      //   secondary: '#8799B5'
      // },
      primary: {
        main: '#00FFF0',
        light: '#00FFF0',
        dark: '#02ABB5'
      },
      secondary: {
        main: '#06043E',
        dark: '#052E5C',
        light: '#045879'
      },
      ...(themeType === 'light'
        ? {
            background: {
              default: '#FFFFFF',
              paper: '#052E5C'
            },
            text: {
              primary: '#03232E'
            }
          }
        : {
            background: {
              default: '#06043E',
              paper: '#052E5C'
            }
          })
    },
    typography: {
      fontFamily: 'Inter',
      fontSize: 16,
      h1: {
        fontSize: 72, //theme.spacing(9)
        fontWeight: 900
      },
      h2: {
        fontSize: 56, //theme.spacing(8)
        fontWeight: 700
      },
      h3: {
        fontSize: 48, //theme.spacing(6)
        fontWeight: 700
      },
      h4: {
        fontSize: 42, //theme.spacing(5)
        fontWeight: 700
      },
      h5: {
        fontSize: 28, //theme.spacing(3.5)
        fontWeight: 700
      },
      h6: {
        fontSize: 20, //theme.spacing(3)
        fontWeight: 400
      },
      body1: {
        fontWeight: 500,
        fontSize: 16,
        fontFamily: 'Inter'
      },
      body2: {
        fontWeight: 500,
        fontSize: 16,
        fontFamily: 'Inter'
      },
      body3: {
        fontWeight: 400,
        fontSize: 14,
        fontFamily: 'Inter'
      },
      body4: {
        fontWeight: 400,
        fontSize: 18,
        fontFamily: 'Inter'
      },
      subtitle1: {
        fontSize: 20,
        fontWeight: 400,
        fontFamily: 'Inter'
      },
      subtitle2: {
        fontSize: 14,
        fontFamily: 'Inter'
      }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: '4px'
          }
        }
      },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            borderRadius: '4px'
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          paragraph: {
            marginBottom: 20
          },
          body1: {
            color: '#8799B5'
          },
          body2: {
            color: '#FFFFFF'
          },
          body3: {
            color: '#8799B5'
          },
          body4: {
            color: '#D1D5DC',
            lineHeight: '1.725rem'
          },
          h4: {
            color: '#FFFFFF',
            lineHeight: '2.8rem'
          },
          subtitle2: {
            color: '#8799B5'
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontWeight: 700
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontWeight: 400
          }
        }
      }
    }
  })
  const setThemeType = (theme: 'light' | 'dark') => {
    console.log('theme changed')
    _setThemeType(theme)
    setCookie(theme)
  }
  useEffect(() => {
    setThemeType((themeCookie as 'light' | 'dark') ?? 'dark')
  }, [themeCookie])
  return (
    <ThemeContext.Provider
      value={{ switchTheme: () => setThemeType(themeType === 'light' ? 'dark' : 'light') }}
    >
      <MuiThemeProvider
        {...rest}
        theme={responsiveFontSizes(
          createTheme(initialTheme, {
            palette: {
              text: {
                secondary: alpha(initialTheme.palette.text.primary, 0.5)
              }
            },
            typography: {
              body1Semi: {
                ...initialTheme.typography.body1,
                color: alpha(initialTheme.palette.text.secondary, 0.5)
              },
              body2Semi: {
                ...initialTheme.typography.body2,
                color: alpha(initialTheme.palette.text.secondary, 0.5)
              },
              subtitle1Semi: {
                ...initialTheme.typography.subtitle1,
                color: alpha(initialTheme.palette.text.primary, 0.5)
              },
              subtitle2Semi: {
                ...initialTheme.typography.subtitle2,
                color: alpha(initialTheme.palette.text.primary, 0.5)
              }
            },
            components: {
              MuiLink: {
                ...(themeType === 'light'
                  ? {
                      styleOverrides: {
                        root: {
                          color: initialTheme.palette.text.primary,
                          textDecorationColor: initialTheme.palette.text.primary,
                          transition: initialTheme.transitions.create([
                            'color',
                            'text-decoration-color'
                          ]),
                          '&:hover': {
                            color: initialTheme.palette.primary.main,
                            textDecorationColor: initialTheme.palette.primary.main
                          }
                        }
                      }
                    }
                  : {})
              }
            }
          })
        )}
      >
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default SwitchThemeProvider
