import styles from './Career.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight, FaArrowCircleRight } from 'react-icons/fa'

function Career() {
    return (
        <>
            <div className={styles.features}>
                <div className={styles.content}>
                    <div className={styles.contentwrapper}>
                        <div className={styles.title}>
                            <h2>CAREER DEVELOPMENT & WORK EXPERIENCE</h2>
                            {/* <h2>& WORK EXPERIENCE</h2> */}
                        </div>
                        <div className={styles.rightcontent}>
                            <Link href="/">
                                <a>home</a>
                            </Link>
                            <FaChevronRight className={styles.icontop} />
                            <Link href="/aboutus/21st-century-skills">
                                <a>21st Century Skills</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.whitespace}></div>

            <div className={styles.content}>
                <div className={styles.contentwraper}>
                    <div className={styles.contetncontainer}>
                        <p>
                            Many institutions provide little to no practical work experience. They don’t start talking about life after education/graduation until a student’s final year. At Mastering Study, students begin their career development journey on day one. Students benefit from a three-month-long internship during each year of study.
                        </p>
                        <p>
                            By the time you graduate, you’ll have a full year of work experience in a variety of organizations. This experience enables you to build deep connections with potential employers and provides practice in solving real-world problems. You’ll have been exposed to the world of work, giving you an advantage over traditional education graduates in gaining employment or starting your own organization.
                       </p>
                        <p>
                            Our approach to career development is centered on five pillars that research, top global employers, and entrepreneurship incubators have said are the keys to thriving in the professional world.
                        </p>
                    </div>
                    <div className={styles.contentwithlogo}>
                        <div className={styles.left}>
                           <div className={styles.content1}>
                                <div className={styles.leftcontent}>
                                    <FaArrowCircleRight className={styles.leftcontenticon} />
                                    <h2>
                                        01. Building a core character
                                    </h2>
                                </div>
                                <div className={styles.content1}>
                                    <div className={styles.rightcontent2}>
                                        <FaArrowCircleRight className={styles.leftcontenticon} />
                                        <h2>02. Developing 21st-century skills</h2>
                                    </div>
                                </div>
                           </div>
                            <div className={styles.content1}>
                                <div className={styles.leftcontent}>
                                    <FaArrowCircleRight className={styles.leftcontenticon} />
                                    <h2>
                                        03. Building experience
                                    </h2>
                                </div>
                                <div className={styles.content1}>
                                    <div className={styles.rightcontent2}>
                                        <FaArrowCircleRight className={styles.leftcontenticon} />
                                        <h2>04. Gaining perspective</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.content1}>
                                <div className={styles.leftcontent}>
                                    <FaArrowCircleRight className={styles.leftcontenticon} />
                                    <h2>
                                        05. Building a network
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="right">

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.midHead}>
                <div className={styles.midHeadContent}>
                    <div>
                        <h2>MASTERING STUDY STUDENTS WILL HAVE OPPORTUNITY TO INTERNED AT COMPANIES
                            <p>LIKE:</p>
                        </h2>
                    </div>
                </div>
            </div>
            <div className={styles.whitespace}></div>
            <div className={styles.lowdiv}>
            <div className={styles.lowdivcontainer}>
                <div className={styles.pwrapper}>
                <p>MTN, cellulant, Bain & Company, ABB, Graqa Machel Trust, L’OREAL, McKinsey&Company, PWC, Swiss Re</p>
                </div>
                <p className={styles.lowcontent}>In addition to career development and internships, Mastering Study students have opportunities to do real work throughout the year. The first-year Projects Course exposes students to real life problems by allowing them to work on unique real-time projects with clients in different industries. Those who are interested in entrepreneurship can apply to the Student Ventures Program, a series of structured experiences and resources to help MS students develop their entrepreneurial skills.</p>
            </div>
            </div>
            <div className={styles.whitespace}></div>
        </>
    )
}

export default Career
