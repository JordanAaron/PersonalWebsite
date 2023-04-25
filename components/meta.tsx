import Head from 'next/head'

export const Meta = (): JSX.Element => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/jq-apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/jq-favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/jq-favicon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/jq-favicon.svg" color="#1C1C1C" />
      <link rel="shortcut icon" href="/favicon/jq-favicon.ico" />
      <meta name="msapplication-TileColor" content="#1C1C1C" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#1C1C1C" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`A frontend developer.`} />
    </Head>
  )
}
