/** @jsxImportSource theme-ui */
import type { NextPage } from "next"
import Head from "next/head"
import dynamic from "next/dynamic"

import MintSection from "../components/MintSection/MintSection"
import Logo from "../components/Images/Icons/Logo"
import ConnectWalletButton from "../components/ConnectWalletButton/ConnectWalletButton"
import { Button, Flex, Text } from "theme-ui"
import LogoMobile from "../components/Images/Icons/LogoMobile"
import { useWindowSize } from "../hooks/useWindowSize"
import theme from "../styles/theme"

const WalletProvider = dynamic(
  () => import("../components/WalletProvider/WalletProvider"),
  {
    ssr: false,
  }
)

const a_sx = {
  border: '3px solid #362F24',
  borderRadius: '10px',
  background: 'linear-gradient(183.33deg, rgba(255, 255, 255, 0) 5.05%, #FFC51F 5.04%)',

  "&:hover": {
    background: '#FFC51F'
  },

  fontFamily: 'Burbank Big Wide',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '20px',
  lineHeight: '20px',
  color: '#1F1B15',
  textDecoration: 'none',
  padding: '8px 16px',
  zIndex: '2',
}

const li_sx = {
  listStyle: "none",
  marginRight: "50px",
  fontFamily: "Burbank Big Wide",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: '18px',
  lineHeight: '16px',
  cursor: 'pointer'
}

const findPos = (obj) => {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop];
  }
}

const scrollToElement = (id) => {
  const element = document.getElementById(id)
  const pos = findPos(element)
  console.log(pos)
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

const Home: NextPage = () => {
  const size = useWindowSize()
  return (
    <div sx={{
      overflow: 'hidden',
      position: 'relative'
    }}>
      <Head>
        <title>Kitten Cadoodle - Solana NFT project</title>
        <meta
          name="description"
          content="A Solana NFT Project's official minting page. Get yourself an unique NFT from our collection now!"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link href="/fonts/style.css" rel="stylesheet" />

      </Head>
      {/* Header */}
      <WalletProvider>
        <div style={{ backgroundColor: '#ffc5c4', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '27px 0', height: '95px', borderBottom: '2px solid #7A6B52' }}>
          <div sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '1080px'
          }}>
            {size.width > 1080 ? <Logo /> : <LogoMobile />}
            <ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              {size.width > 1080 && <li sx={li_sx} ><a style={{ textDecoration: 'none', color: '#362F24' }} href='#'>Home</a></li>}
              <li sx={li_sx} ><a style={{ textDecoration: 'none', color: '#362F24' }} onClick={() => scrollToElement('roadmap')}>Roadmap</a></li>
            </ul>
            {size.width > 1080 &&
              <ConnectWalletButton />
            }
          </div>
        </div>

        <MintSection />
      </WalletProvider>
      {/* Footer */}
      <Flex sx={{
        flexDirection: 'row',
        marginTop: '200px',
        justifyContent: 'space-between',
        borderTop: '2px solid #7A6B52',
        paddingTop: '40px',
        paddingBottom: '40px',

        "@media screen and (max-width: 1080px)": {
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 20px',
        }
      }}>
        <Flex sx={{
          flexDirection: 'column',

          '@media screen and (min-width: 1080px)': {
            marginLeft: '70px'
          },

          '@media screen and (max-width: 1080px)': {
            marginBottom: '20px'
          }
        }}>
          <Logo />
          <Text variant="text.normal" sx={{ maxWidth: '600px', marginTop: '12px' }}>
          1,111 kittens napping on the Solana Blockchain.
          </Text>
        </Flex>
        <Flex sx={{
          flexDirection: 'column',
          marginRight: '70px',
        }}>

            <a sx={{...a_sx, marginBottom: '30px', textAlign: 'center'}} rel="noreferrer" target="_blank" href="https://cryptocubs.tv/">Join our Discord</a>
          <a sx={{...a_sx, textAlign: 'center'}} rel="noreferrer" target="_blank" href="https://twitter.com/Kitten_CaDoodle">Follow our Twitter</a>
        </Flex>
      </Flex>
    </div>
  )
}

export default Home
