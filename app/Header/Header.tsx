import styles from './Header.module.css'; 

export default function Header() {
    return <section className={styles.dashboard}>
        <header className={styles.h1}>
            BrainStorm
        </header>
    </section>
  }