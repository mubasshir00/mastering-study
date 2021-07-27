import styles from './Diploma.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'
import { FaUserGraduate, FaRegStar} from 'react-icons/fa';
function Diploma() {
    return (
        <>
            <div className={styles.diploma}>
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
                                <FiChevronRight className={styles.icon}/>
                            </Link>
                            <Link href="/">
                                <a>Foundation Diploma in English for Higher Education</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.diplomaMainContent} ${styles.clearfix}`}>
            <div className={styles.mainContentContainer}>
            <div className={`${styles.mainContentSite} ${styles.clearfix}}`}>
            <div className={styles.innerContent}>
            <div className={styles.innerContentWrap}>
                <Image src="/images/landing-fcourse1-1.jpg"
                    alt="course"
                    height={450}
                    width={870} 
                    className={styles.innerContentWrapimage} />
                <h2>Foundation Diploma in English for Higher Education</h2>

            <div className={styles.info}>
                <div className={styles.infoContent}>
                 <div className={styles.innerInfoContent}>

                    <div className={styles.col-1}>
                        <FaUserGraduate className={styles.iconGrad} />
                    </div>

                    <div className={styles.col}>
                      <p>Lecturer</p>
                      <p>ADMIN</p>
                    </div>
                    <div className={styles.col}>
                      <p>Category</p>
                      <p>EDUCATION</p>
                    </div>
                    <div>
                    <div className={styles.col}>
                        <ul className={` ${styles.colitem}`} style={{ listStyleType: 'none' }}>
                            <li><FaRegStar /></li>
                             <li><FaRegStar /></li>
                             <li><FaRegStar /></li>
                             <li><FaRegStar /></li>
                            <li><FaRegStar /></li>
                        </ul>
                    </div>
                    
                    </div>
                    {/* <div className={styles.reviewContent}>
                        <p>0 Reviews</p>
                    </div> */}
                  </div>

             <div className={styles.rightContent}>
                    <p>£ 350</p>
                    <button>
                        <Link href="/payment">
                            TAKE THIS COURSE
                        </Link>
                    </button>
              </div>

              </div>
              </div>

              <div className={styles.desCol}>
                <div className={styles.detailsDescription}>

                    <h3 style={{color:'black'}}>Course Description</h3>
                    <h3>Overview</h3>
                    <p>The Foundation Diploma in English for Higher Education is a one-year pre-university qualification that includes a significant degree of English language teaching. The qualification is designed to provide an entry route to UK and international university courses. The Foundation Diploma in English for Higher Education aims to improve general and academic English language ability, enhance study skills and cultural understanding and introduce academic study in English in the fields of computing and/or business at a suitable level.</p>

                    <h3>Why choose this course?</h3>
                    <ul>
                        <li>
                            <h3>IMPROVE YOUR ENGLISH</h3>
                            <p>Gain the oral and written English language skills you need for degree-level study through our course modules and practical exercise.</p>
                        </li>
                        <li>
                            <h3>BOOST YOUR SKILLS </h3>
                            <p>Start building your knowledge of computing, business and management for further study and future work in industry.</p>
                        </li>
                    </ul>
                    <h3>Entry requirements</h3>
                        <p>For entry onto the Mastering Study Foundation Diploma for Higher Education Studies qualification students must have successfully completed secondary school education with English language.</p>

                    <h3>Modules</h3>
                        <p>On the Foundation Year, you will study six core modules and have the option of choosing papers from across several streams and gain subject knowledge relevant to your future degree course as well as being introduced to new subjects and approaches. You can select the two electives for specialization in computer science, business, engineering, health sciences and higher finance.The qualification consists of six core modules:</p>

                    <h3>Beginner user:</h3>
                        <p>Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce themselves and others and can ask and answer questions about personal details such as where they live, people they know and things they have. Can interact in a simple way provided the other person talks slowly and clearly and is prepared to help.</p>

                    <h3>Elementary user:</h3>
                        <p>Can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment). Can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters. Can describe in simple terms aspects of their background, immediate environment and matters in areas of immediate need.</p>

                    <h3>Intermediate user:</h3>
                        <p>Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc. Can deal with most situations likely to arise while travelling in an area where the language is spoken. Can produce simple connected text on topics that are familiar or of personal interest.Can describe experiences and events, dreams, hopes and ambitions and briefly give reasons and explanations for opinions and plans.</p>

                    <h3>Upper intermediate user:</h3>
                        <p>Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in their field of specialization. Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. Can produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue giving the advantages and disadvantages of various options.</p>

                    <h3>Advanced user:</h3>
                        <p>Can understand a wide range of demanding, longer clauses, and recognize implicit meaning. Can express ideas fluently and spontaneously without much obvious searching for expressions. Can use language flexibly and effectively for social, academic and professional purposes. Can produce clear, well-structured, detailed text on complex subjects, showing controlled use of organizational patterns, connectors and cohesive devices.</p>

                    <h3>Proficient user:</h3>
                        <p>Can understand with ease virtually everything heard or read. Can summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation.Can express themselves spontaneously, very fluently and precisely, differentiating finer shades of meaning even in the most complex situations. Plus, two elective modules from the following:</p>

                    <h3>Business Stream</h3>
                        <p>Introduction to Business– This module provides an introduction to the purpose, types and organisation of businesses. Students become familiar with a range of business concepts such as basic marketing practices. Introduction to Accounting and Economics– This module introduces the key principles of accounting and economics. Students become accustomed to concepts such as market structures and monetary policy and also learn how to produce simple financial statements.</p>

                    <h3>Higher Finance</h3>
                        <p>Introduction to Accounting and Economics– This module introduces the key principles of accounting and economics. Students become accustomed to concepts such as market structures and monetary policy and also learn how to produce simple financial statements. Further Mathematics– This module provides students with an understanding of different mathematical concepts and ideas, building on the work covered in the Foundation Mathematics module. It will allow students to develop further algebraic techniques on a broad range of mathematical topics, building towards area often seen and used in university courses.</p>

                    <h3>Computing Stream</h3>
                        <p> <span>Introduction to Computer Science–</span> This module provides a basic introduction to a range of IT topics including organisation of a computer system, the relationship between hardware and software, applications of computers, databases, networking (with a focus on the Internet), graphics and multimedia.</p>
                        <p> <span>Introduction to Programming–</span> This module exposes students to extensive practical use of the modern programming language Visual Basic, to illustrate the classic programming principles of sequencing, selection and iteration in the context of object-oriented computer programming.</p>

                    <h3>Engineering Stream</h3>
                        <p> <span>Further Mathematics–</span> This module provides students with an understanding of different mathematical concepts and ideas, building on the work covered in the Foundation Mathematics module. It will allow students to develop further algebraic techniques on a broad range of mathematical topics, building towards area often seen and used in university courses.</p>

                        <p> <span>Physics–</span> This module equips students with a fundamental background of the principles of physics. It focuses on Newton’s mechanics, electrostaticsand electrodynamics. The principles of thermal physics and magnetism are also introduced.</p>

                        <p>Chemical Engineering Stream</p>

                        <p><span>Physics–</span> This module equips students with a fundamental background of the principles of physics. It focuses on Newton’s mechanics, electrostatics and electrodynamics. The principles of thermal physics and magnetism are also introduced.</p>

                        <p> <span>Chemistry–</span> This module enables you to gain an understanding of the three main branches of chemistry: inorganic, physical and organic. Theoretical concepts will be illustrated using several practical laboratory sessions.</p>

                        <p>Health Science Stream</p>

                        <p> <span>Biology–</span> This module introduces the fundamental ideas of how the human body works. Starting with the cell as the building blocks of life and the looking at each of the major body systems. The purpose of this to give the underpinning knowledge which will prepare students to study health related subjects at higher levels.</p>

                        <p> <span>Chemistry–</span> This module enables you to gain an understanding of the three main branches of chemistry: inorganic, physical and organic. Theoretical concepts will be illustrated using several practical laboratory sessions.The modules listed above for this course are regularly reviewed to ensure they are up to date and informed by industry as well as the latest teaching methods. On occasion, we may need to make unexpected changes to modules – if this occurs, we will contact all offer holders as soon as possible.</p>

                    <h2>Academic Progression</h2>

                    <div className={styles.academicProg}>
                        <p>Mastering Study has agreements with over 100 universities in many</p>
                        <p>countries, including the UK, Australia, Canada and the USA. View the</p>
                        <p>list of university progression routes available to students that</p>
                        <p>complete the Foundation Diploma for Higher Education Studies.</p>
                        <p>New 2021 University Progression Routes:</p>
                        <p>University of Exeter, UK</p>
                        <p>La Trobe University, Victoria, Australia</p>
                        <p>Northwood University, Michigan, USA</p>
                        <p>Keele University, UK</p>
                        <p>University of Canberra, Australia</p>
                        <p>University of Nicosia Medical School, Cyprus</p>
                        <p>Arts University Bournemouth, UK</p>
                        <p>Southern Cross University, Australia</p>
                        <p>Click here to view an interactive map of universities that offer</p>
                        <p>progression routes for Foundation Diploma</p>
                        
                    </div>

                </div>
                <div className={styles.right}>
                    <h2 style={{ color: 'black' }}>Course Info</h2>
                    <div className={styles.card}>
                        <p> <span>START COURSE: </span> March (2021)</p>
                        <p> <span>DURATION: </span> One Academic Year </p>
                        <p> <span>PREREQUISITES : </span> No </p>
                        <p> <span>SKILL LEVEL: </span> Beginner </p>
                    </div>
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

export default Diploma
