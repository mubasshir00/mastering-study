import React from 'react'
// import styles from './Myaccount.module.css'
// import Link from 'next/link'
// import { FiChevronRight } from 'react-icons/fi'
import Loginregister from './Loginregister'
function Myaccount() {

    // const [rotate, setRotate] = useState(false)

    // const openRegister = (e) =>{
    //     console.log(e)
    //     e.preventDefault()
    //     e.target.style.transform ="translateY(-180deg)"
    //     e.target.classList.add("innerbox")
    // }
    // const openLogin = (e) => {
    //     e.preventDefault()
    //     e.target.style.transform = "translateY(0deg)"
    //     e.target.classList.add("innerbox")
    // }

    return (
        <>
            {/* <div className={styles.diploma}>
                <div className={styles.featuesWrap}>
                    <div className={styles.featuresContainer}>
                        <div className={styles.title}>
                            Courses
                        </div>
                        <div className={styles.diplomaFeaturesContent}>
                            <Link href="/">
                                <a >Home  </a>
                            </Link>
                            <Link href="#">
                                <FiChevronRight className={styles.icon} />
                            </Link>
                            <Link href="/">
                                <a>Foundation Diploma in English for Higher Education</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
    <Loginregister/>
    {/* <div className={styles.container}>
    <div className={styles.card}>
    <div className={styles.innerbox} id={styles.card}>
    <div className={styles.cardfront}>

    <h2>Login Form</h2>
    <form className="loginform" action="">
        <input type="text" className={styles.inputbox} placeholder="Username or Email Address"
        required/>
        <input type="password" className={styles.inputbox} placeholder="Password"
        required />
        <button type="submit" className={styles.submitbtn}>Register</button>
        <input type="checkbox"/> <span>Remember Me</span>
    </form>
    <button type="button" className="btn" onClick={openRegister}>New Here ? </button>
    <a href="">Forget Password</a>
    </div>

    <div className={styles.cardback}>

        <h2>Register Form</h2>
        <form className="loginform" action="">
        <input type="text" className={styles.inputbox} placeholder="Username or Email Address" required />
        <input type="password" className={styles.inputbox} placeholder="Password" required />
        <button type="submit" className={styles.submitbtn}>Submit</button>
        <input type="checkbox" /> <span>Remember Me</span>
        </form>
        <button type="button" className="btn" onClick={openLogin}>Already Registered ? </button>
        <a href="">Forget Password</a>

    </div>
    </div>
    </div>
    </div> */}

    </>
    )
}

export default Myaccount
