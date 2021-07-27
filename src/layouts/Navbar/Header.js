import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { FiChevronDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import Libs from "../../libs/index.js";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [logged, setLogged] = useState(false);
 
  useEffect(() => {
    let verified = Libs.auth();
    if (verified) setLogged(true);
    console.log("I am verified fgg", verified);
  }, [logged]);

  const logoutHandler = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("secretToken");
    setLogged(false);
    Router.push("/");
  };
  
  return (
    <>
<header id={styles.siteheader} style={{}}>

<div id={styles.siteHeaderInner} className={styles.edukulContainer}>
<div className={styles.wrapInner} style={{cursor: 'pointer'}}>
            {/* logo */}
<Link href="/" title="Mastering Study" rel="home">
  <Image src="/images/logo.png" height={43} width={200} alt="Mastering Study"/>
</Link>

<div type="button" className={styles.menuicon} onClick={handleClick}>
{/* <FaBars /> */}
  {click ? <ImCross /> : <FaBars />}
</div>

{/* menu section */}
<div className={ click ? `${styles.topnav} ${styles.active}` : `${styles.topnav} `}
id="myTopnav"
>

<Link href="/">
  <a className={styles.homeText} href="/" style={{ fontSize: "15px" }}>
    Home
  </a>
</Link>

              
      

<div className={styles.dropdown}>
<button className={styles.dropbtn}>
    About Us <FiChevronDown className={styles.downIcon} />
</button>
<div className={styles.dropdowncontent}>

<div className={styles.animate}>
 <a href="/aboutus/our-learning-model">Our Learning Model</a>
 <a href="/aboutus/21st-century-skills">21st Century Skills</a>
 <a href="/aboutus/career-development"> Career Development & Work Experience </a>
</div>
</div>
</div>

<div className={styles.dropdown}>
  <button className={styles.dropbtn}>
    Learning 
  <FiChevronDown className={styles.downIcon} />
  </button>
<div className={styles.dropdowncontent}>
  <div className={styles.animate}>
    <a href="/courses/become-a-learner-student">Become a Student</a>
  <a href="#" className={styles.dropdownCourse}>
     Courses & Qualifications
<div className={styles.dropdowncontent2nd}>
  <Link href="/courses/foundation-diploma-in-english-for-higher-education">
    Foundation Diploma in English for Higher Education
  </Link>
</div>
</a>
<a href="/courses/exams-certifications">Exams & Certifications</a>
</div>
</div>
</div>

              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                  Teaching
                  <FiChevronDown className={styles.downIcon} />
                </button>
                <div className={styles.dropdowncontent}>
                  <div className={styles.animate}>
                    <a href="/teaching/mentor">Mentor</a>
                    <a href="/teaching/tuition-provider">Tuition Provider</a>
                    <a href="/teaching/authorized-partnership">Authorized PArtnership</a>
                  </div>
                </div>
              </div>
              <div className={styles.dropdown}>
                <Link href="/contact">
                  <button className={styles.dropbtn}>Contact Us</button>
                </Link>
                {/* <div className={styles.dropdowncontent}>
    <div className={styles.animate}>
    <a href="#">Shop by brand</a>
    <a href="#">Faq</a>
    </div>
    </div> */}
              </div>
              {logged ? (
                <div className={styles.headerButton}>
                  <Link href="">
                    <a onClick={logoutHandler} style={{ fontSize: "15px" }}>Logout</a>
                  </Link>
                </div>
              ) : (
                <div className={styles.headerButton}>
                  <Link href="/my-account/">
                      <a style={{ fontSize: "15px" }}>Login/Registration</a>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* {logged ? (
            <div className={styles.headerButton}>
              <Link href="">
                <a onClick={logoutHandler} style={{ fontSize: "15px" }}>Logout</a>
              </Link>
            </div>
          ) : (
            <div className={styles.headerButton}>
              <Link href="/my-account/">
                <a style={{ fontSize: "15px" }}>Login/Registration</a>
              </Link>
            </div>
          )} */}
        </div>
        {/* /#site-header-inner */}
      </header>
    </>
  );
};

export default Header;
