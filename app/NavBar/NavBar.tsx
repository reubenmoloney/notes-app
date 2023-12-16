//import './NavBar-styles.css';
import styles from './NavBar.module.css'; 
/*
export function NavBar() {
    return (
        <nav>
            <ul>
                <li>My Groups</li>
                <li>Browse</li>
                <li>Help</li>
            </ul>
        </nav>
    )
}
*/
export default function NavBar() {
    return <section className={styles.dashboard}>
        <nav>
            <ul className={styles.list}>
                <li className={styles.item}>My Groups</li>
                <li className={styles.item}>Browse</li>
                <li className={styles.item}>Help</li>
            </ul>
        </nav>
    </section>
  }