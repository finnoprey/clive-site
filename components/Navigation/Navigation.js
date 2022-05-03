import Link from "next/link";
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={styles.mainNav}>
            <Link href="/">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Members</Link>
            <Link href="/games">Games Centre</Link>
        </nav>
    )
}
export default Navigation;