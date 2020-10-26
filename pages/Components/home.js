import styles from './home.module.css'
import Homesvg from '../../public/homepage.svg'

export default function MainPage() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Every Product has a story</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className={styles.button}>View More</button>
            </div>
            <div className={styles.svg}>
                <Homesvg  />
            </div>
        </div>
    )
}