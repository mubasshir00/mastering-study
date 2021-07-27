import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header id={styles.siteheader} style={{}}>
            <div id={styles.siteHeaderInner} className={styles.edukulContainer}>
                <div className={styles.wrapInner}>

                    {/* logo */}
                    <Link href="https://masteringstudy.com/" title="Mastering Study" rel="home" className="main-logo">
                        <Image src="/images/logo.png"
                            height={43} // Desired size with correct aspect ratio
                            width={200} // Desired size with correct aspect ratio
                            alt="Mastering Study" />
                    </Link>

                    {/* menu section */}
                    <div className={styles.topnav} id="myTopnav">
                        {/* <a href="#" className={styles.active}>Home</a> */}
                        <a href="" style={{ fontSize: '15px' }}>Home</a>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>About Us
                         <i className="fa fa-caret-down" />
                            </button>
                            <div className={styles.dropdowncontent}>
                                <div className={styles.animate}>
                                    <a href="#">Our Learning Model</a>
                                    <a href="#">21st Century Skills</a>
                                    <a href="#">Career</a>
                                    <a href="#">Development & Work Experience</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Learning
                         <i className="fa fa-caret-down" />
                            </button>
                            <div className={styles.dropdowncontent}>
                                <div className={styles.animate}>
                                    <a href="#">Become a Student</a>
                                    <a href="#">Courses & Qualifications</a>
                                    <a href="#">Exams & Certifications</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Teaching
                         <i className="fa fa-caret-down" />
                            </button>
                            <div className={styles.dropdowncontent}>
                                <div className={styles.animate}>
                                    <a href="#">Mentor</a>
                                    <a href="#">Tuition Provider</a>
                                    <a href="#">Authorized PArtnership</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Contact Us
                         <i className="fa fa-caret-down" />
                            </button>
                            <div className={styles.dropdowncontent}>
                                <div className={styles.animate}>
                                    <a href="#">Shop by brand</a>
                                    <a href="#">Faq</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.headerButton}>
                            <Link href="https://masteringstudy.com/my-account/">
                                <a style={{ fontSize: '15px' }}>
                                    Login/Register
                               </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>{/* /#site-header-inner */}
        </header>

    )
}

export default Header
