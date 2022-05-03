import Head from 'next/head'
import Image from 'next/image'
import Countdown from '../components/Countdown/Countdown'
import Navigation from '../components/Navigation/Navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shut Up Clive</title>
        <meta name="description" content="The home of the Clive Community" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Countdown />
      <header>
        <div className="headerContent">
          <h1>Shut Up Clive!</h1>
          <h2>Enjoying the Small Things in Life</h2>
        </div>
      </header>
      <Navigation />
      <main>
        <section>
          <h1>Welcome to the Clive Community!</h1>
          <p>
            Going to the footy with mates, enjoying a beer down at the pub, the feeling of the fresh sea breeze running through your hair. These are things that unite us as people. The Clive Community is simply helping to build unity around the world by transcending geographical barriers. We are a growing community of avid supporters of The Pin - a fantastic comedy duo who have been nothing short of an inspiration to us all.
            <br /><br />
            
          </p>
        </section>
      </main>
    </div>
  )
}
