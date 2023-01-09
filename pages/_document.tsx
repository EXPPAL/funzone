import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="description" content="FunZone is a free online, real-time, multiplayer game place!" />
          <meta name="keywords" content="free, online, multiplayer, game, mmorpg, mmo, rpg, sow, sowgame" />
          <link rel="icon" type="image/icon type" href="/favicon.png"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href='https://fonts.googleapis.com/css?family=Poppins&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Montserrat&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
