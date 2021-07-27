import styles from './Ourlearningmodel.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi';
import { BiAnchor} from 'react-icons/bi'
import { FaAnchor, FaPeopleCarry} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiGoogleanalytics } from 'react-icons/si'
import Reviews from './Reviews';
// import {sectImg} from '../About/images/divimg'
function Ourlearningmodel() {
    return (
        <>
        <div className={styles.features}>
          <div className={styles.content}>
            <div className={styles.contentwrapper}>
                <div className={styles.title}>
                    <h2>Our Learning Model</h2>
                </div>
                <div className={styles.rightcontent}>
                    <Link href="/">
                    <a>home</a>
                    </Link>
                    <FiChevronRight />
                    <Link href="/">
                        <a>Our Learning Model</a>
                    </Link>
                </div>
            </div>
          </div>
        </div> 

    <div className={`${styles.maincontent} ${styles.clearfix}`}>
    <div className={styles.maincontentwraper}>
    <div className={`${styles.rowinner} ${styles.clearfix}`}>
    <div className={styles.innerContentWrapper}>

    <div className={styles.card1}>

    <div className={styles.inner}
     style={{
         backgroundPosition:'left top',
         backgroundRepeat:'no-repeat',
         padding:'0px 55px 0px 0px'
         }}>
        <div className={styles.edukulfancyimg} data-in-viewport="true">
        <div className={styles.edukulfancyimginner}>
        <span className={styles.edukulfancyimgbg} />
        <div className={styles.edukulfancyimgholder} style={{}}>
            <Image src="/images/section1-2.jpg"
            alt="course"
                height={275}
                width={237} />
        </div>
        </div>
        </div>
    </div>

    <div className={styles.card1content}>
        <Image src="/images/separator2-1.png" 
        alt="spearator"
        height={8}
        width={83}
        />
    <p>Our unique learning model puts you first. Drive the bulk of your learning experience individually and with your peers through engaging and meaningful activities.</p>
    <p>We have developed a Learning Cycle that helps students learn new skills and master concepts. This 4-part Learning Cycle incorporates the need to discover gaps in your knowledge and skillset, self-paced learning, peer learning (students teaching and learning from each other) and facilitated group learning. Every stage of the Learning Cycle is incorporated into the classes you take in your Leadership Core.</p>
    </div>

    </div>

    <div className={styles.card2}>

    <div className={styles.innerCard1} >

    <div className={styles.wrapinner} style={{ position: 'relative' }}>
    <div className={`${styles.edukulicon} ${styles.icon1915790530} ${styles.accent} ${styles.custom}`} data-background>
    <span className={styles.icon} style={{ fontSize: '30', width: '60', height: '60'}}>
        <FaAnchor className={styles.anchor} />
    </span>
    </div>
    <h3 className={styles.heading} style={{}}>
        <span>Discover</span>
    </h3>
    <div className={styles.desc} style={{}}>
    <p>Realize what you don’t know and what you need to learn<br />
    Part of learning with a purpose is knowing what skills are needed to achieve your mission. Through<br />
    a series of fun, engaging activities, each of your Leadership Core Courses gives you an opportunity<br />
    to discover important gaps in your skillset that you work towards developing with Mastering Study..</p>
    </div>
    </div>

    </div>


    <div className={styles.innerCard1} >

    <div className={styles.wrapinner} style={{ position: 'relative' }}>
    <div className={`${styles.edukulicon} ${styles.icon1915790530} ${styles.accent} ${styles.custom}`} data-background>
    <span className={styles.icon} style={{ fontSize: '30', width: '60', height: '60',  }}>
        <FaPeopleCarry className={styles.anchor} />
    </span>
    </div>
    <h3 className={styles.heading} style={{}}>
        <span>Individual</span>
    </h3>
    <div className={styles.desc} style={{}}>
    <p>Learn at your own pace and in your own way<br />
    We recognize that not all students work the same way. In order for you to be most effective at<br />
    mastering concepts, Mastering Study has created a space where you take ownership of your<br />
    learning. Using Mastering Study’s own academic platform MSi, you will take courses and work on<br/>
    assigned projects at your own time and pace.

    </p>
    </div>
    </div>

    </div>


    <div className={styles.innerCard1} >

    <div className={styles.wrapinner} style={{ position: 'relative' }}>
    <div className={`${styles.edukulicon} ${styles.icon1915790530} ${styles.accent} ${styles.custom}`} data-background>
    <span className={styles.icon} style={{ fontSize: '30', width: '60', height: '60' }}>
        <BsFillPersonLinesFill className={styles.anchor} />
    </span>
    </div>
    <h3 className={styles.heading} style={{}}>
        <span>Peer Learning</span>
    </h3>
    <div className={styles.desc} style={{}}>
    <p>Learn from others who have learned it and can explain it to you<br />
    Learn by teaching. Work with your peers to exchange knowledge because the more you explain<br />
    concepts to others, the better you understand them yourself. Peer Learning is an opportunity to<br/>
    learn from others who have a better grasp on concepts and can teach you.
    </p>
    </div>
    </div>

    </div>



    <div className={styles.innerCard1} >

    <div className={styles.wrapinner} style={{ position: 'relative' }}>
    <div className={`${styles.edukulicon} ${styles.icon1915790530} ${styles.accent} ${styles.custom}`} data-background>
    <span className={styles.icon} style={{ fontSize: '30', width: '60', height: '60' }}>
    <SiGoogleanalytics className={styles.anchor} />
    </span>
    </div>
    <h3 className={styles.heading} style={{}}>
        <span>Facilitated Group Learning</span>
    </h3>
    <div className={styles.desc} style={{}}>
    <p>Apply and extend your learning to other contexts and wider problems<br />
    Put your learning into perspective by thinking about the applicability of your skills and knowledge.<br />
    With a faculty facilitator, you will engage in lively class discussions about how to make your classroom experience relevant in the real world- how proposed solutions can solve global problems<br/>
    or help you achieve your mission.
    </p>
    </div>
    </div>

    </div>


    </div>


    {/* card div 3 */}
    <div className={styles.card3}>
    <div className = { styles.card3content }>

        <div className={styles.card3left}>
        <Image src="/images/separator2-1.png" alt="spearator"
            height={8} width={83} />
        <h2>Meet Our Expert Advisors</h2>
        </div>

        <div className={styles.card3right}>
            <div></div>
            <div></div>
            <button>view more</button>
        </div>

    </div>
    </div>
    
    <div className={styles.randomspace}></div>
 
    <div className={styles.card4}>
        <div className={styles.studentpartner}>
        <Image src="/images/separator2-1.png" alt="spearator" height={8} width={83} />
        <h1>Our Student Parents Say About Us</h1>

        <div>

        <Reviews />
        
        </div>

    </div>
    </div>

    </div>
    </div>
    </div>
    </div>
    
    </>
    )
}

export default Ourlearningmodel

