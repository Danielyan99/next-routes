import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li><Link href="/artiklar">articles</Link></li>
        <li><Link href="/omOss">about</Link></li>
      </ul>
    </div>
  )
}
