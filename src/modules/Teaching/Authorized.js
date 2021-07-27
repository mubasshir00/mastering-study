import styles from './Authorized.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'
import { FaAnchor, FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher} from 'react-icons/gi'
import { SiGoogleanalytics} from 'react-icons/si'

function Authorized() {
    return (
        <>
            <div className={styles.mentor}>
                <div className={styles.featuesWrap}>
                    <div className={styles.featuresContainer}>
                        <div className={styles.title}>Authorized Partnership</div>
                        <div className={styles.mentorFeaturesContent}>
                            <Link href="/"><a>Home</a></Link>
                            <Link href="#">
                                <FiChevronRight className={styles.icon} />
                            </Link>
                            <Link href="/">
                                <a>Authorized Partnership</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

<div className={styles.AuthorizedPartner}>
    <div className={styles.AuthorizedPartnerContainer}>
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
                                            <Image src="/images/section1-2.jpg" alt="course" height={275} width={237} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.card1content}>
                                <Image src="/images/separator2-1.png" alt="spearator" height={8} width={83} />
                                <h2>Mastering Study Authorized Partner Program</h2>
                                <p>The goal of the Mastering Study Authorized Partner Program is to provide valuable tools and resources to help academic institutions, training organizations and content publishers in preparing learners for Foundation certification. Mastering Study also collaborates with partners to attract future learners and provide them with the necessary tools to pursue a successful career in IT.</p>
                                <p>As a Mastering Study Registered Mentor, you will enhance the profile of your institution and attract students offering the world’s best education system to become more confident with more options for their successful career.</p>
                            </div>
                        </div>
                    </div>
    </div>
</div>

<div className={styles.joinMasteringStudy}>
<div className={styles.joinMasteringStudyContent}>
<div className={styles.joinMasteringStudyContainer}>
    <Image src="/images/separator2-1.png" alt="spearator" height={8} width={83} />
    <h2>Why join the Mastering Study Authorized Partner Program?</h2>
</div>
<div>
</div>
</div>
</div>
<div className={styles.joinMasteringStudyDetails}>
    <div className={styles.joinMasteringStudyDetailsContent}>
        <p style={{ fontSize: '14px' }}>Authorized partners receive a number of exclusive benefits, including.</p>
        <div className={styles.lowIcon}>

            <div className={styles.joinDescription}>
            <FaAnchor className={styles.icons} />
            <p>Financial relief</p>
            </div>

            <div className={styles.joinDescription}>
            <GiTeacher className={styles.icons}/>
            <p>Instructional resources</p>
            </div>

            <div className={styles.joinDescription}>
            <FaChalkboardTeacher className={styles.icons}/>
            <p>Embed</p>
            <p style={{ fontSize: '14px', color: 'gray' }}>Supported PRACTICAL EXPERIENCE to cement learning and develop MENTORING CHAMPIONS</p>
            </div>

            <div className={styles.joinDescription}>
            <SiGoogleanalytics className={styles.icons}/>
            <p>Evolve</p>
            <p style={{fontSize:'14px',color:'gray'}}>ONGOING SUPPORT to evolve and maintain an effective Mentoring Culture and Champions</p>
            </div>

            

            <div className={styles.joinDescription}>
            <button>HIRE A MENTOR</button>
            </div>

        </div>
    </div>            
</div>

<div className={styles.ReadytoBecome}>
    <div className={styles.ReadytoBecomeContent}>
        <div className={styles.ReadytoBecomeContentContainer}>
            <div>
                <h2>Ready to Become an Authorized Partner?</h2>
                <p>Your organization may participate in any of the following Authorized Partner Programs, depending on certain eligibility requirements. For more information, click on one of the links below or visit our Mastering Study Partner Website.</p>
            </div>
            <div>
                <p>Delivery Partner Program: This program is for professional training organizations that currently teach or intend to teach Mastering Study certifications. Email capp@masteringstudy.com for more information.</p>
            </div>
            <div>
                <p>Academy Partner Program: This program is for academic institutions, not-for-profit organizations and government retraining agencies with a focus on preparing students for careers in IT. Email academy@masteringstudy.com for more information.</p>
            </div>
            <div>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div>
                <h2>MORE ABOUT PARTNERING</h2>
                <p>Mastering Study regularly partners with many different types of organizations from all around the world – academic institutions (from large research universities to polytechnics and liberal arts colleges), non-profit institutions, national governments, non-governmental organizations (NGOs), and multinational corporations in connection with its academic program and other educational programs and related services.</p>
            </div>
            <div>
                <p>Where there is strong mission alignment with Mastering Study and the ability to commit strategic, course content, and/or financial contributions back to the consortium, we are eager to hear from your institution on where it is today and where it is planning to go with online/blended learning and MOOCs. In turn, for participating member institutions in the academic program and other educational programs, Mastering Study offers its members a variety of technical, marketing, and educational services (i.e., training, onboarding, high-level program management, learner technical support, course strategy, design, build, run and re-run consultations involving data analytics, and so on).</p>
            </div>
            <div>
                <p>If you are interested in partnering with Mastering Study to offer courses and programs, please visit partnerships. masteringstudy.com</p>
            </div>
            <div>
                <p>If you are a business or corporation interested in using Mastering Study to train and develop your employees, please visit business. masteringstudy.com</p>
            </div>
        </div>
    </div>
</div>

<div className={styles.Informationforcandidates}>
    <div className={styles.InformationContainer}>
        <div className={styles.InformationWrapper}>
            <div className={styles.leftInfo}>
                <h4>Information for candidates</h4>
                <p>If you can’t find the information you’re looking for, please contact: recruitment@masteringstudy.com</p>
            </div>
            <div className={styles.rightInfo}>
                <h4>Information for candidates</h4>
                <p>If you can’t find the information you’re looking for, please contact: academicmentoring@masteringstudy.com</p>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Authorized
