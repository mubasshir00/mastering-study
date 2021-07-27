import styles from './Topnavbar.module.css'
import Link from 'next/link'
import { AiOutlineTwitter } from 'react-icons/ai'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faTwitter, faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Topnavbar = () =>{
    return(
        <>
        <div id={styles.topbar} style={{}}>
            <div id={styles.topbarinner} className={styles.edukulcontainer}>
                <div className={styles.topBarInnerWrap}>
                    <div className={styles.topBarContent}>
                    {/* phone content className cilo */}
                  <span className={styles.content}> 
                    +44 7478 766 194      </span>
                    {/* email content */}
                  <span className={styles.content}>
                    info@masteringstudy.com      </span>
                    {/* address content */}
                  <span className={styles.content}>
                    12 Brick Lane, London E1 6RF      </span>
                </div>{/* /.top-bar-content */}
                <div className={styles.topBarSocials}>
                 <div className="inner">
                    <span className={styles.icons}>

                    <Link href="https://twitter.com/masteringstudysssdg/" target="_blank" title="Twitter">
                       <a target="_blank">
                        {/* <span className="core-icon-twitter" aria-hidden="true"/> */}
                            <AiOutlineTwitter />
                            <span className={styles.screenReaderText}>Twitter Profile</span>
                       </a>
                    </Link>
                    <Link href="https://www.facebook.com/masteringstudyghggk/" target="_blank" title="Facebook">
                        <a target="_blank">
                        <FaFacebookF/>
                        <span className={styles.screenReaderText}>Facebook Profile</span>
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/masteringstudyhghgkjg/" target="_blank" title="Instagram">
                        <a target="_blank">
                            <FaInstagram/>
                            <span className={styles.screenReaderText}>Instagram Profile</span>
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/masteringstudykjhhl/" target="_blank" title="Youtube">
                        <a target="_blank">
                            <FaYoutube/>
                            <span className={styles.screenReaderText}>Youtube Profile</span>
                        </a>
                    </Link>  
                    </span>
                 </div>
               </div>{/* /.top-bar-socials */}
            </div>
          </div>
        </div>

        </>
    )
}
export default Topnavbar