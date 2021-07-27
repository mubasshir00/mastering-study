// import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight, FaLaptopCode, FaBlenderPhone} from 'react-icons/fa'
import { ImGift} from 'react-icons/im'
import { GrReactjs} from 'react-icons/gr'
import { GiThink} from 'react-icons/gi'
import { SiGoogleanalytics} from 'react-icons/si'
import { BsPersonLinesFill} from 'react-icons/bs'
import styles from './Centurycomponent.module.css'

function Centurycomponent() {
    return (
        <>
            <div className={styles.features}>
                <div className={styles.content}>
                    <div className={styles.contentwrapper}>
                        <div className={styles.title}>
                            <h2>21st Century Skills</h2>
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

            <div className={styles.content}>
            <div className={styles.contentpara}>
                <p>Mastering Study prioritizes the development of 21st century skills— things like self-leading, leading others, entrepreneurial thinking, quantitative reasoning, critical thinking, managing complex projects, and communication. Most institutions hope that students pick up some of these skills during their education. At Mastering Study, we intentionally and explicitly develop these skills in students through practice, on-the-job experience, coaching, and regular feedback.</p>
                <p>
                Mastering Study graduates benefit from an innovative, individualized learning experience driven by seven key Meta Skills—the 21st-century skills and characteristics that top employers around the globe seek and that define leaders and entrepreneurs. This approach is designed to augment academic theory and provide you with the development you need to remain relevant in an ever-changing world. With these Meta Skills, you’ll answer questions like “Who do I lead?” and “How do I lead?”
                </p>
                <p>
                With Mastering Study, you’ll prepare for jobs that haven’t even been created yet.
                </p>
            </div>
            </div>
            <div className={styles.randomSpace}></div>
            <div className={styles.ourservice}>
                <div className={styles.ourservicewraper}>
                <div className={styles.ourserviceContent}>
                    <div className={styles.left}>

                            <ImGift className={styles.icon}/>
                            <h3>LEADING OTHERS</h3>
                            <p>Today’s employers seek people who can take charge, define a project’s direction, and manage coworkers.</p>
                            <p>Key Characteristics:</p>
                            <ul>
                                <li><p>Empathy</p></li>
                                <li><p>DiversityRelationship Building</p></li>
                                <li><p>Feedback</p></li>
                                <li><p>Collaboration</p></li>
                            </ul>

                            <GrReactjs className={styles.icon}/>
                            <h3>QUANTITATIVE REASONING</h3>
                            <p>Employers want quantifiable results. The ability to evaluate a situation’s data and determine the</p>
                            <p>most effective and efficient way to approach it is crucial.</p>
                            <p>Key Characteristics:</p>
                            <ul>
                                <li><p>Data Contextualisation</p></li>
                                <li><p>Uncertainty and Modelling of the Real World</p></li>
                                <li><p>Empirical Research</p></li>
                                <li><p>Data-based Decision Making</p></li>
                            </ul>

                            <GiThink className={styles.icon}/>
                            <h3>CRITICAL THINKING</h3>
                            <p>Today’s successful professionals don’t jump to conclusions or assume outcomes—they critically</p>
                            <p>examine facts and carefully consider solutions.</p>
                            <p>Key Characteristics:</p>
                            <ul>
                                <li><p>Authentic Inquiry</p></li>
                                <li><p>Evidence/Research Analysis</p></li>
                                <li><p>Arguments and Judgement</p></li>
                                <li><p>Synthesis</p></li>
                            </ul>

                            <FaLaptopCode className={styles.icon}/>
                            <h3>MANAGING COMPLEX TASKS</h3>
                            <p>The ability to look at a complex project from multiple perspectives is critical to success.</p>
                            <p>Key Characteristics:</p>
                            <ul>
                                <li>
                                    <p>Scoping</p>
                                </li>
                                <li>
                                    <p>Structuring</p>
                                </li>
                                <li>
                                    <p>Planning</p>
                                </li>
                                <li>
                                    <p>Coordination</p>
                                </li>
                            </ul>

                    </div>
                    <div className={styles.right}>
                        <SiGoogleanalytics className={styles.icon}/>
                            <h3>ENTREPRENEURIAL THINKING</h3>
                            <p>Entrepreneurs see failure as a learning opportunity. They pursue their vision even through</p>
                            <p>adversity. They use real-world experience for growth.</p>
                            <p>Key Characteristics:</p>
                            <ul>
                                <li>
                                    <p>Systems Thinking</p>
                                </li>
                                <li>
                                    <p>Identifying Opportunities</p>
                                </li>
                                <li>
                                    <p>Human-centered Thinking</p>
                                </li>
                                <li>
                                    <p>Creativity and Innovation</p>
                                </li>
                                <li>
                                    <p>Continuous Iteration</p>
                                </li>
                            </ul>

                            <BsPersonLinesFill className={styles.icon}/>
                            <h3>
                                LEADING SELF
                            </h3>
                            <p>Entrepreneurs see failure as a learning opportunity. They pursue their vision even through</p>
                            <p>adversity. They use real-world experience for growth.</p>
                            <p>Key Characteristics:</p>
                            <ul>
                                <li> <p>Self-awareness</p> </li>
                                <li> <p>Proactivity</p> </li>
                                <li> <p>Lifelong Values</p> </li>
                                <li> <p>Self-improvement</p> </li>
                                <li> <p>Self-regulation</p> </li>
                            </ul>

                            <FaBlenderPhone className={styles.icon}/>
                            <h3>COMMUNICATION FOR IMPACT</h3>
                            <p>A deep understanding of your audience is just as important as what you say and how you say it.</p>
                            <p>Key Characteristics:</p>
                            <ul>
                                <li><p>Audience</p></li>
                                <li><p>Writing Process</p></li>
                                <li><p>Voice</p></li>
                                <li><p>Organising for Effective Communication</p></li>
                                <li><p>Storytelling and Presentation</p></li>
                            </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.whitespace}>
                   
            </div>
        </>
    )
}

export default Centurycomponent
