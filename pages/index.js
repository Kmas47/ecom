import Head from 'next/head'
import NavBar from './Components/navBar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
      <Head>
        <title>TJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
        
  </div>
  )
}
