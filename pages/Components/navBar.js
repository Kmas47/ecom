import Link from 'next/link'
import styles from './navBar.module.css'
import Bag from '../../public/bag1.svg'

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.col}>
                <ul className={styles.ul}>
                    <li className={styles.first}><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="men"><a>Men</a></Link></li>
                    <li><Link href="women"><a>Women</a></Link></li>
                </ul>
            </div>
            <div className={styles.col}>
                <ul className={styles.ul}>
                    <li className={styles.tjs}><Link href="/"><a>The Jacket Store</a></Link></li>
                </ul>
            </div>
            <div className={styles.col}>
                <ul className={styles.ul}>
                    <li className={styles.right}><Link href="/cart"><a><Bag width={28} className={styles.cart}></Bag></a></Link></li>
                </ul>
            </div>
        </div>
    )
}