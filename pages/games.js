import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Countdown from "../components/Countdown/Countdown";
import styles from "../styles/Games.module.scss";

const Games = () => {
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
            <h1>Clive Game Centre</h1>
            <h2>Show your support for the Clive Community by taking part!</h2>
            </div>
        </header>
        <Navigation />
        <main>
            <section>
            <h1>Our Games</h1>
            <div className={styles.gameGrid}>
                <div className={`${styles.game} ${styles.cliveleTile}`}>
                    <a target="_blank" rel="noreferrer" href="https://clivele.shutupc.live">
                        <div className={styles.info}>
                            <h1>Clivele</h1>
                            <p>I wonder what the word of the day could be...</p>
                        </div>
                    </a>
                </div>
            </div>
            </section>
        </main>
        </div>
    );
}

export default Games;