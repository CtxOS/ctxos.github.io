import { Box, ButtonBase, Grid, GridProps, Link, Typography, useTheme } from '@mui/material'
import { useSnackbar } from 'notistack'

import Bitcoin from './assets/bitcoin.svg'
import bunny from './assets/bunny.png'
import Patreon from './assets/patreon.svg'
import Paypal from './assets/paypal.svg'
import Referral from './assets/referral.svg'
import {
  StyledDonateSectionBitcoinBox,
  StyledDonateSectionIconHolder,
  StyledDonateSectionLink,
  StyledDonateSectionPaper,
  StyledDonateSectionTypography
} from './index.styles'

import PFeatureBlock from 'components/PFeatureBlock'
import Arrow from 'components/PFeatureBlock/assets/arrow.svg'

const RoundedBitcoinIcon = () => {
  const theme = useTheme()

  return (
    <StyledDonateSectionBitcoinBox width={32} height={32}>
      <Bitcoin style={{ fill: theme.palette.mode === 'light' ? '#06043E' : '#FFFFFF' }} />
    </StyledDonateSectionBitcoinBox>
  )
}

const DonateSection = (props: GridProps) => {
  const theme = useTheme()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Grid container item xs={12} md={9} spacing={4} justifyContent="center" {...props}>
      <Grid container item xs={12} lg={4} spacing={4} direction="column">
        <Grid item>
          <PFeatureBlock
            Icon={Patreon}
            title="Patreon"
            buttonText="Adopt us"
            buttonLink="https://patreon.com/ctx"
            outLink
          >
            Adopt us and become a recurring contributor
          </PFeatureBlock>
        </Grid>
        <Grid item>
          <PFeatureBlock
            Icon={Paypal}
            title="Paypal"
            buttonText="Send us a tip"
            buttonLink="https://www.paypal.me/palinuro"
            outLink
          >
            Send us a tip on PayPal
          </PFeatureBlock>
        </Grid>
        <Grid item>
          <PFeatureBlock
            Icon={Referral}
            title="Referral Links"
            CustomFooter={
              <>
                <Box marginTop={2} display="flex" alignItems="center">
                  <StyledDonateSectionIconHolder>
                    <img
                      src={bunny.src}
                      alt="BunnyCDN"
                      style={{ display: 'block', margin: 'auto' }}
                    />
                  </StyledDonateSectionIconHolder>
                  <Link href="https://bunny.net?ref=ppalfbefw3">
                    <StyledDonateSectionLink>
                      BunnyCDN{' '}
                      <Arrow
                        style={{
                          fill: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
                          marginLeft: 8
                        }}
                      />
                    </StyledDonateSectionLink>
                  </Link>
                </Box>
              </>
            }
          >
            Even if we host most of our infrastructure on bare metal servers, some of our servers
            are hosted on popular cloud providers that have referral programs.
          </PFeatureBlock>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={8}>
        <PFeatureBlock
          Icon={RoundedBitcoinIcon}
          title="Cryptocurrencies"
          style={{ height: '100%' }}
          CustomFooter={
            <Box marginTop={4}>
              <Grid container direction="column" spacing={1}>
                {Array<{ crypto: string; address: string }>(
                  { crypto: 'BTC', address: '1PaRrotouWgDVeiGTaoGRdXYQdFcjoo7fw' },
                  { crypto: 'BTC BECH32', address: 'bc1qsuqck5xl5su02cyh92gyv3v2rl9k5yq49rs939' },
                  { crypto: 'LTC', address: 'MH4HAW2ZwDGde7USi8XS41YGcfPpczSKqt' },
                  { crypto: 'LTC BECH32', address: 'ltc1q9jcsve8cfjxlaygtz2ts49ydgksrz8d96hus6y' },
                  {
                    crypto: 'XLM',
                    address: 'GA7OVMQNTET4ZDUZSUFADOQUFENNMB3PNJCQFWQDBNW5Q2VI4FW2WYXE'
                  },
                  { crypto: 'ETH', address: '0xbb40037943af35B40bf6cDBFda6063982d466e95' },
                  { crypto: 'DOGE', address: 'D8fDCq1nAPBN1AfLC2mzLfgL95uz2S3DDh' },
                  { crypto: 'DASH', address: 'Xx8o5x7tarm37g1tAtPgGRExLhYLPgRpG4' },
                  { crypto: 'ZCASH', address: 't1daB37ZGJWki6JovW341Sr8uzx1UebxKWM' }
                ).map(({ crypto, address }, i) => (
                  <Grid item key={`crypto-button-${i}`}>
                    <ButtonBase
                      focusRipple
                      onClick={async () => {
                        await navigator.clipboard.writeText(address)
                        enqueueSnackbar(`${crypto} address copied!`, { variant: 'success' })
                      }}
                      style={{ width: '100%', borderRadius: 24 }}
                    >
                      <StyledDonateSectionPaper elevation={0}>
                        <StyledDonateSectionTypography
                          variant="subtitle2"
                          style={{ fontWeight: 700, marginRight: '1rem', whiteSpace: 'nowrap' }}
                        >
                          {crypto}
                        </StyledDonateSectionTypography>
                        <StyledDonateSectionTypography
                          variant="body2"
                          style={{ wordWrap: 'break-word' }}
                        >
                          {address}
                        </StyledDonateSectionTypography>
                      </StyledDonateSectionPaper>
                    </ButtonBase>
                  </Grid>
                ))}
              </Grid>
              <Box marginTop={4}>
                <Typography variant="body1">
                  ETH ERC20: We support USDT, USDC, PAXG, BAT, DAI, MKR, Link, WBTC, ZRX, KNC and
                  more.
                </Typography>
              </Box>
            </Box>
          }
        >
          We believe in cryptocurrencies and we accept donations on several chains.
        </PFeatureBlock>
      </Grid>
    </Grid>
  )
}

export default DonateSection
