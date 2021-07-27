import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={`${styles.footerWidgets} ${styles.edukulContainer}`}>
                <div className={`${styles.footerGrid} ${styles.gutter30}`}>

                    <div className="col">
                        <Link href="https://masteringstudy.com/" title="Mastering Study" rel="home" className="main-logo">
                        <Image src="/images/logo.png"
                            height={43} // Desired size with correct aspect ratio
                            width={200} // Desired size with correct aspect ratio
                            alt="Mastering Study" />
                        </Link>
                        <p>The best education system on the planet. Awarding 21st Century qualifications.</p>
                    </div>

                    <div className="col">
                        <h2>ABOUT</h2>
                        <p>Our Learning Model</p>
                        <p>21st Century Skills</p>
                        <p>Career Development & Work Experience</p>
                    </div>
                    <div className="col">
                        <h2>LEARNING</h2>
                        <p>Become a Student</p>
                        <p>Foundation Diploma in English for Higher Education</p>
                        <p>Exams & Certifications</p>
                    </div>
                    <div className="col">
                        <h2>TEACHING</h2>
                        <p>Mentor</p>
                        <p>Tuition Provider</p>
                        <p>Authorized Partner</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;