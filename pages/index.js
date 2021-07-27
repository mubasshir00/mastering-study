import Head from 'next/head'
import Landing from '../src/landing/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mastering Study</title>
        <meta name="description" content="The best education system on the planet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <h1>Mastering Study</h1> */}
        <Landing/>
      </div>
      
    </>
  )
}
