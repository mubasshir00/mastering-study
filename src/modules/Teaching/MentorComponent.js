import styles from './Mentor.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'
import { FaAnchor, FaChalkboardTeacher} from 'react-icons/fa'
import { GiTeacher}from 'react-icons/gi'
import { SiGoogleanalytics} from 'react-icons/si'
function MentorComponent() {
    return (

<>

<div className={styles.mentor}>
<div className={styles.featuesWrap}>
<div className={styles.featuresContainer}>
<div className={styles.title}>Mentor</div>
    <div className={styles.mentorFeaturesContent}>
        <Link href="/"><a>Home</a></Link>
        <Link href="#">
            <FiChevronRight className={styles.icon} />
        </Link>
        <Link href="/">
            <a>Mentor</a>
        </Link>
    </div>
    </div>
</div>
</div>

<div className={styles.whymastering}>
    <div className={styles.whymasteringwrapper}>
        <div className={styles.whymasteringcontent}>

        <div className={styles.card1}>

        <div className={styles.inner}
            style={{
            backgroundPosition: 'left top',
            backgroundRepeat: 'no-repeat',
            padding: '0px 55px 0px 0px'
        }}>
        <div className={styles.edukulfancyimg} data-in-viewport="true">
        <div className={styles.edukulfancyimginner}>
        <span className={styles.edukulfancyimgbg} />
        <div className={styles.edukulfancyimgholder} style={{}}>
        <Image src="/images/studentimg1.jpg" alt="course" height={275} width={237} />
        </div>
        </div>
        </div>
        </div>

        <div className={styles.card1content}>
        <Image src="/images/separator2-1.png" alt="spearator" height={8} width={83} />
        <h2>Mentoring Program/Scheme</h2>
        <p>Mastering Study mentoring programme provides a package of opportunities to raise the aspirations of students and close the gap between those aspirations and their attainment.</p>
        <p>As a Mastering Study Registered Mentor, you will enhance the profile of your institution and attract students offering the world’s best education system to become more confident with more options for their successful career.</p>
        </div>

        </div>


        </div>

    <div className={styles.OurStudentParents}>
        <div className={styles.studentParentContainer}>
            <div className={styles.studentParentWrapper}>
                <Image src="/images/separator2-1.png" width={83} height={8} />
                <h2>Our Student Parents Say About Us</h2>
            </div>
        </div>
        <p>Mastering Study mentoring programme provides a package of opportunities to raise the aspirations of students and close the gap between those aspirations and their attainment.</p>
        <p>As a Mastering Study Registered Mentor, you will enhance the profile of your institution and attract students offering the world’s best education system to become more confident with more options for their successful career.</p>
    </div>

    <div className={styles.iconcontent}>
        <div className={styles.iconDiv1}>
            <FaAnchor className={styles.icons}/>
            <div className={styles.text}>
              <h3>Explore</h3>
              <p>We DESIGN an effective MENTORING FRAMEWORK for your institution laying solid foundations for Mentoring success.</p>
            </div>
        </div>
        <div className={styles.iconDiv2}>
            <GiTeacher className={styles.icons}/>
            <div className={styles.text}>
                <h3>Extablish</h3>
                <p>We DEVELOP MENTORS within your institution, including comprehensive TRAINING (remote & face to face)</p>
            </div>
        </div>
        <div className={styles.iconDiv3}>
            <FaChalkboardTeacher className={styles.icons}/>
            <div className={styles.text}>
                <h3>Embed</h3>
                <p>Supported PRACTICAL EXPERIENCE to cement learning and develop MENTORING CHAMPIONS</p>
            </div>
        </div>
        <div className={styles.iconDiv4}>
            <SiGoogleanalytics className={styles.icons}/>
            <div className={styles.text}>
                <h3>Evolve</h3>
                <p>ONGOING SUPPORT to evolve and maintain an effective Mentoring Culture and Champions</p>
            </div>
        </div>
    </div>

    </div>
</div>

<div className={styles.becomeMentor}>
    <div className={styles.becomeMentorContainer}>
        <div className={styles.becomeMentorWrapper}>
            <p>How to become a mentor</p>
            <p className={styles.becomeMentorText}>If you'd like to apply to become a mentor on our scheme, please complete our short application form.</p>
            <button>APPLY NOW</button>
        </div>
    </div>
</div>

</>
    )
}

export default MentorComponent
