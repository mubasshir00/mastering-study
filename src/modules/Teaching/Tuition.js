import styles from './Tuition.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'
import { FaAnchor, FaChalkboardTeacher, FaCheck, FaAngleDoubleRight} from 'react-icons/fa'
import { GiTeacher} from 'react-icons/gi'

function Tuition() {
    return (
        <>
            <div className={styles.mentor}>
                <div className={styles.featuesWrap}>
                    <div className={styles.featuresContainer}>
                        <div className={styles.title}>Tuition Provider</div>
                        <div className={styles.mentorFeaturesContent}>
                            <Link href="/"><a>Home</a></Link>
                            <Link href="#">
                                <FiChevronRight className={styles.icon} />
                            </Link>
                            <Link href="/">
                                <a>Tuition Provider</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
<div className={styles.WorkWith}>
    <div className={styles.WorkWithContainer}>

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
            <h2>Work With Mastering Study</h2>
           <p>Work With Mastering Study</p>
            <p>As a Mastering Study Registered Tuition Provider, you will enhance the profile of your college and attract students who are keen to study the world’s most relevant qualifications for a career in business and finance.</p>
            <Image src="/images/separator2-1.png"
                    alt="spearator"
                    height={8}
                    width={83}
            />
        </div>
        </div>
    </div>
</div>

<div className={styles.RegisteredTuitionProvider}>
    <div className={styles.RegisteredTuitionProviderContainer}>
    <h2>Registered Tuition Provider Scheme</h2>
    <p>Offer your students a world-renowned qualification and join us as a member of the Mastering Study Registered Tuition Provider Scheme. Your college will benefit from a higher profile and a set of valuable benefits helping you attract both students and staff. Your relationship with Mastering Study</p>
    <p>will give students confidence that in studying with you, they are making the right career choice and giving themselves the best chance of success in the exams.</p>
    </div>
</div>

<div className={styles.cardDown}>
    <div className={styles.cardDownContent}>
        <div className={styles.cardDownContainer}>
<div className={styles.leftcard}>
    <div className={styles.downCard1}>
        <FaAnchor className={styles.icons}/>
        <h2>Why teach Mastering Study?</h2>
        <p>We promote the benefits of structured study using a Mastering Study Registered Tuition Provider widely through a range of online and offline media channels, ensuring that colleges and tuition providers who work with us are the first choice for thousands of students and their employers.</p>
    </div>
    <div className={styles.downCard2}>
        <FaChalkboardTeacher className={styles.icons}/>
            <h2>Benefits of joining the Registration scheme</h2>
            <p>The Mastering Study Registered Tuition Provider Scheme is simple to join and offers access to a range of really valuable benefits. These are benefits which our research over many years of working collaboratively with tutors, has told us they want.</p>
    </div>
    <div className={styles.inner}
        style={{
            backgroundPosition: 'left top',
            backgroundRepeat: 'no-repeat',
            padding: '0px 55px 0px 0px'
        }}>
        <div style={{paddingTop:'2rem'}} className={styles.edukulfancyimg} data-in-viewport="true">
            <div className={styles.edukulfancyimginner}>
            <span className={styles.edukulfancyimgbg} />
            <div className={styles.edukulfancyimgholder} style={{}}>
            <Image src="/images/studient.jpg"
                alt="course"
                height={662}
                width={570} />
            </div>
            </div>
         </div>
        </div>
    </div>
                        
<div className={styles.rightcard}>
    <div>
        <GiTeacher className={styles.icons} />
         <h2>Benefit from a great relationship with Mastering Study</h2>
            <p>Working with Mastering Study as a member of the Registered Tuition Provider Scheme is the best way to attract, prepare and progress your students, ensuring that those who join your courses stay with you for their next set of examinations. Through our marketing and messaging, we show students that their best chance of passing the examinations and progressing quickly through their careers is to study with a Registered Tuition Provider. In addition, we provide you with the support and resources to deliver successful courses for the Mastering Study Qualification. What’s more, you will be able to promote your relationship with the Mastering Study Brand, which features in the top 100 brands in the UK.</p>
         </div>
    <div>
    <h2>What Students Want</h2>
        <div className={styles.iconWithContent}>
        <FaCheck style={{ color:'#ff9900'}} />
            <p>An effective learning channel that delivers learning when, where, and how they want it.</p>
        </div>

        <div className={styles.iconWithContent}>
            <FaCheck style={{ color: '#ff9900' }} />
            <p>To feel confident their investment in their learning and future careers is money well spent.</p>
        </div>

        <div className={styles.iconWithContent}>
            <FaCheck style={{ color: '#ff9900' }} />
            <p>Flexibility to study and take exams at their own pace around their work/lifestyle.</p>
        </div>

        <div className={styles.iconWithContent}>
            <FaCheck style={{ color: '#ff9900' }} />
            <p>To pass the exams and progress quickly through the qualification and in their careers.</p>
        </div>

        <div className={styles.iconWithContent}>
            <FaCheck style={{ color: '#ff9900' }}/>
            <p>To feel part of a community of adult-learners and to be able to seek advice, ask questions etc.</p>
        </div>
                            </div>
                        </div>
        </div>
    </div>
</div>

<div className={styles.WhyYouShould}>
    <div className={styles.WhyYouShouldContainer}>
        <div className={styles.WhyYouShouldContent}>
            <div className={styles.WhyYouShouldCard1}>
            <h2>Why You Should Join The Mastering Study Registered Tuition Provider Scheme</h2>
            </div>
            <div className={styles.WhyYouContainerDeep}>
                <div className={styles.WhyYouLeft}>

                    <div className={styles.WhyYouLeftCard1}>

                        <h2>What Mentors Want</h2>
                        <div className={styles.iconWithContent}>
                        <FaCheck style={{ color: '#ff9900' }} />
                        <p>A range of tuition options to meet their students’ preferences and employer’s business needs.</p>
                        </div>

                        <div className={styles.iconWithContent}>
                        <FaCheck style={{ color: '#ff9900' }} />
                        <p>To feel confident that their investment in their students’ learning is money well spent.</p>
                        </div>

                        <div className={styles.iconWithContent}>
                        <FaCheck style={{ color: '#ff9900' }} />
                        <p>Flexibility over when, where and how students sit the exams so that they can manage studies around business needs</p>
                        </div>

                        <div className={styles.iconWithContent}>
                        <FaCheck style={{ color: '#ff9900' }} />
                        <p>For their students to pass the exams, progress through the qualification and bring the skills acquired back into the workplace</p>
                        </div>

                        <div className={styles.iconWithContent}>
                                        <FaCheck style={{ color: '#ff9900' }} />
                        <p>Their students feel supported and have someone to ask for help when they are struggling</p>
                        </div>

                    </div>
                    <div className={styles.WhyYouLeftCard2}>
                        <h2>WHAT THE MASTERING STUDY REGISTERED TRAINING PROVIDER SCHEME DELIVERS</h2>
                        <div className={styles.iconWithContent}>
                                        <FaCheck style={{ color: '#ff9900' }} />
                            <p>A working relationship with Mastering Study which ensures tuition providers are kept up to date, meaning students and employers can feel confident about the investment in their studies.</p>
                        </div>

                        <div className={styles.iconWithContent}>
                                        <FaCheck style={{ color: '#ff9900' }} />
                            <p>Access to a range of tuition options which can be matched to student and employer needs and preferences</p>
                        </div>
                        
                        <div className={styles.WhiteSpace}></div>

                        <div className={styles.iconWithContent}>
                                        <FaCheck style={{ color: '#ff9900' }} />
                            <p>A working relationship with Mastering Study which ensures tuition providers are kept up to date, meaning students and employers can feel confident about the investment in their studies.</p>
                        </div>

                        <div className={styles.iconWithContent}>
                                        <FaCheck style={{ color: '#ff9900' }} />
                            <p>Research shows that students who follow formal tuition programmes do better than those who study alone.</p>
                        </div>

                        <div className={styles.iconWithContent}>
                                        <FaCheck style={{ color: '#ff9900' }} />
                            <p>Research shows that students who follow formal tuition programmes do better than those who study alone.</p>
                        </div>

                    </div>
                </div>

            <div className={styles.WhyYouRight}>
                <Image src="/images/img2.jpg" height={662} width={570}/>
            </div>

            </div>
        </div>
    </div>
</div>

<div className={styles.HowtoApply}>
<div className={styles.HowtoApplyContainer}>
    <div className={styles.HowtoApplyContent}>
        <div>
            <Image src="/images/section-img1-1-2 (1).jpg" height={683} width={598} />
            <div className={styles.btn}>
                <button >Register Now</button>
            </div>
        </div>
        <div className={styles.content}>
            <h2>How to Apply</h2>
            <p>How to Become a Mastering Study Registered Tuition Provider</p>
            <ul>
            <li>
                <p className={styles.HowToText}>If you are already a member of the Mastering Study Global Mentoring Scheme, after certain period you will be invited to join the Mastering Study Registered Tuition Provider Scheme via your local office and sent a simple application form.</p>
            </li>
            <li>
                <p>If you do not receive an invite, or are new to Mastering Study, you can request one from your local office. Alternatively, click “Register Now” below to download an application form.</p>
            </li>
            <li>
                <div>
                    <p>Complete the simple application form and return via email to registration@masteringstudy.com</p>
                    <p>Please note, in applying to join the Registered Tuition Provider scheme, you/your Institution agree to abide by the Terms and Conditions of scheme membership.</p>
                </div>
            </li>
            <li>
                <p>Once your fee has been received, you will be issued with the Mastering Study Registered Tuition Provider logo and an e-Certificate confirming your institution’s membership of the scheme.</p>
            </li>
            <li>
                <p>Logos must be displayed in accordance with Mastering Study Brand Guidelines which you will receive alongside the logo.</p>
            </li>
            <li>
                                    
                <p>Account management will be provided through your local Mastering Study office, offering an opportunity for more immediate, local market-centric support.
                </p>
            </li>
            </ul>
        </div>
    </div>
</div>
</div>

<div className={styles.applynowHolder}>
    <div className={styles.applynowContainer}>
        <div className={styles.applynowWrapper}>
                        <div className={styles.applynowContent}>
                            <h2>Apply now</h2>
                            <p>o apply to join the Registered Tuition Provider scheme click “Apply” below or for more information contact your local Mastering Study office.</p>
                        </div>
                        <div className={styles.applynowbtn}>
                            <button>Apply Now</button>
                        </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Tuition
