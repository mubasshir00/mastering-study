import styles from './Student.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'

function Student() {
    return (
        <>
            <div className={styles.diploma}>
                <div className={styles.featuesWrap}>
                    <div className={styles.featuresContainer}>
                        <div className={styles.title}>
                            Become a Learner / Student
                        </div>
                        <div className={styles.diplomaFeaturesContent}>
                            <Link href="/">
                                <a >Home  </a>
                            </Link>
                            <Link href="#">
                                <FiChevronRight className={styles.icon} />
                            </Link>
                            <Link href="/">
                                <a>Become a Learner / Student</a>
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
                                            <Image src="/images/studentimg1.jpg" alt="course" height={675} width={637} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.card1content}>
                                <Image src="/images/separator2-1.png" alt="spearator" height={8} width={83} />
                                <h2 style={{ fontSize: '2rem' }}>Why Mastering Study?</h2>
                                <p>What makes Mastering Study unique?</p>
                                <p>Mastering Study is a leading awarding body in Computing, Business and Law, providing assessment and certification through recognised British qualifications throughout the world.</p>
                                <p>We design qualifications and teaching programmes which allow candidates to progress through levels on their degree journey at their own pace and receive a certificate at each stage. We currently have more than 50 centres running our qualifications and programmes.</p>
                            </div>

                        </div>


                        <div className={styles.card1}>

                            <div className={styles.card2content} style={{ paddingRight: '1rem' }}>
                                <Image src="/images/separator2-1.png" alt="spearator" height={8} width={83} />
                                <h2 style={{ fontSize: '2rem' }}>Mastering Study Journey</h2>
                                <p>Mastering Study offers a range of Computing, Business and Law qualifications to Accredited Centres.</p>
                                <p>Through a global network of more than 50 centres located in over 5 countries. Mastering Study provides a range of Computing, Business and Law qualifications to learners from around the world. Partner centres have full access to our teaching programmes and assessment services, and are given support to deliver the same high-quality education to all learners.</p>
                            </div>

                            <div className={styles.inner}
                                style={{
                                    backgroundPosition: 'left top',
                                    backgroundRepeat: 'no-repeat',
                                    padding: '0px 55px 0px 0px'
                                }}>
                                <div className={styles.edukulfancyimg} data-in-viewport="true">
                                    <div className={styles.edukulfancyimginner}>
                                        <span className={styles.edukulfancyimgbg2nd} />
                                        <div className={styles.edukulfancyimgholder} style={{}}>
                                            <Image src="/images/student-section-img1-1-1.jpg" alt="course" height={675} width={637} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.whitespace}></div>

            <div className={styles.university}>

                <div className={styles.universitywrapper}>
                    <div className={styles.universitycontent}>

                        <Image src="/images/separator2-1.png" alt="spearator" height={8} width={83} />
                        <div className={styles.heading}>
                            <h2>University</h2>
                            <h2>Progression</h2>
                        </div>
                        <p>Mastering Study offers students complete undergraduate and master’s degree pathways with university partners. For students who want to complete their degree overseas at a university campus, we also have recognition with over 100 universities in the UK and overseas including Canada, USA and Australia. These provide direct entry to progression routes and subject disciplines from our foundation and Diploma qualifications which enable students to develop the further study and career of their choice.</p>
                        <p>Here you can find details of all the universities which recognise Mastering Study qualifications. Our agreements include universities which recognize Mastering Study qualifications for entry on to various degree programmes in many subject disciplines as well as Advanced Standing and Exemption agreements to enable students to advance on to a particular year of a degree course.</p>
                        <p>For further information and advice on articulation options, you may contact Mastering Study</p>
                        <p>Customer Service team or +44 (0)7478 766 194.</p>
                        <div style={{ height: '2rem' }}></div>
                    </div>
                </div>

            </div>

            <div className={styles.entry}>
                <div className={styles.entrywrapper}>
                    <div className={styles.entrycontainer}>
                        <div className={styles.entrycontent}>
                            <div className={styles.left}>
                                <h2>Guaranteed Entry</h2>
                                <p>Universities that guarantee Mastering Study students a place on their chosen course after successful completion of Mastering Study qualifications. Mastering Study is very proud to hold guaranteed entry agreements with Coventry University, Birmingham City University, Carroll University, CQU University, Limerick Institute of Technology, Liverpool Hope University, National College of</p>
                                <p>Ireland and the University of Derby.</p>
                                <Image src="/images/slider-university-bg2.jpg" width={570} height={284} />
                            </div>
                            <div className={styles.right}>
                                <h2>Standard Entry</h2>
                                <p>Universities that may not guarantee a place but welcome applications from Mastering Study students for entry onto year 1 of a Bachelor’s or Master’s degree, as the Mastering Study qualification satisfies the university entry requirements.</p>
                                <p>All students who wish to attend a UK university usually have to apply through the University and Colleges Application Service known as UCAS. Please check with the University you wish to apply to as to their admissions procedure.</p>
                                <p>University progression routes and entry requirements available for Foundation Diploma in English for Higher Education students can be found here</p>
                                <p>For more information about available progression routes, please see the ‘What Next?’ progression booklet below:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Student
