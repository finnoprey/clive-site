import { useEffect, useState } from 'react';
import styles from './Countdown.module.scss';
const Countdown = () => {
    const [secondsRemaining, setSecondsRemaining] = useState(0);
    const [countdownClass, setCountdownClass] = useState(``);

    useEffect(() => {
        getTimeToClive();
        setInterval(getTimeToClive, 1000);
    },[]);
    
    const getTimeToClive = () => {
        //CALCULATE TIME UNTIL CLIVE TIME
        const currentDate = new Date();
        const ausTime = currentDate.toLocaleString("en-US", {timeZone: "Australia/Melbourne"});

        const currentSeconds = new Date(ausTime).getTime();
        const CLIVE_TODAY_SECONDS = new Date(ausTime);
        CLIVE_TODAY_SECONDS.setHours(20,45,6,0);

        const secs = (CLIVE_TODAY_SECONDS - currentSeconds) / 1000;

        if (Math.abs(secs) <= 300) {
            setCountdownClass(`${styles.active}`);
        }
        setSecondsRemaining( secs );
    }

    const toHMS = (time) => {
        return `${new Date(time * 1000).toISOString().substr(11, 8)}`;
    }

    return (
        <section className={`${styles.countdownContainer} ${countdownClass}`}>
            <h1>Clive Time!</h1>
            <h2>{toHMS(secondsRemaining)}</h2>
        </section>
    )
}

export default Countdown;