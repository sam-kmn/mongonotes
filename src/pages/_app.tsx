import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>MongoNotes</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className='bg-sky-100 w-screen h-screen flex flex-col'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  </>)
}

export default MyApp
