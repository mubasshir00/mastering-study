import styles from './Contact.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Contact() {
    return (
       <>
        <div id={styles.featuredTitle} className={`${styles.clearfix} ${styles.simple}`}style={{}}

        >
            <div className={`${styles.edukulContainer} ${styles.clearfix}`}>
                <div className={styles.innerWrap}>
                    <div className={styles.col1}>
                        <h2>Contact Us</h2>
                    </div>
                    <div className={styles.col2}>
                        <p>Home</p>
                        <p> - </p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Contact
