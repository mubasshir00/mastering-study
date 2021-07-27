import React from 'react'
import styles from './Landing.module.css'
import Link from 'next/link'
import Image from 'next/image'
function Landing() {
    return (
<>

<div className={styles.features}>
<div className={styles.content}>
<div className={styles.contentwrapper}>
<div className={styles.title}>
    <h2>The Best Education System On The Planet</h2>
    <p>A brilliant Learning Route For Guaranteed  Pass</p>
    <button>OUR COURSES</button>
</div>
{/* <div className={styles.spacecol}></div> */}
<div className={styles.rightcontent}>
    <Image src="/images/landing-slider-img.png" height={640} width={600}/>
</div>
</div>
</div>
</div>

<div className={styles.content}>
<div className={styles.learningcontent}>
    <div className={styles.learncontentwrapper}>
        <div className={styles.leftimg}>
        <Image src="/images/landing-sdf.png" height={610} width={525} />
        </div>

                        {/* <div className={styles.spacecol}></div> */}
        <div className={styles.rightcontainer}>
        <h2>Our Learning Model</h2>
        <p>Our unique learning model puts you first. Drive the bulk of your learning experience individually and with your peers through engaging and meaningful activities.</p>
        <p>We have developed a Learning Cycle that helps students learn new skills and master concepts. This 4-part Learning Cycle incorporates the need to discover gaps in your knowledge and skillset, selfpaced learning, peer learning (students teaching and learning from each other) and facilitated group learning. Every stage of the Learning Cycle is incorporated into the classes you take in your Leadership Core.</p>
        <button>OUR COURSES</button>
        </div>
     </div>
    </div>
</div>

<div className={styles.featuredcourse}>
  <div className={styles.featuredcourseContainer}>
      <div className={styles.featuredcourseWrapper}>
        <Image src='/images/landing-fcourse1-1.jpg' height={417} width={623}/>
        <div className={styles.featuredcourseContent}>
            <h2>Foundation Diploma in English for Higher Education</h2>
            <p>The Foundation Diploma in English for Higher Education is a one-year pre-university qualification that includes a significant degree of English language teaching. The qualification is designed to provide an entry route to UK and international university courses.</p>
            <button className={styles.learnbtn}>Learn More</button>
        </div>
      </div>
  </div>
</div>

<div className={styles.centuryskills}>
    <div className={styles.centuryskillswrapper}>
        <div className={styles.centuryskillsContainer}>
        <Image src="/images/separator2-1.png" width={83} height={8} />
        <h2>21st Century Skills</h2>
        <Image src="/images/moja.jpg" width={570} height={500} />
        </div>
    </div>
</div>

<div className={styles.student}>
    <div className={styles.studentwrapper}>
        <div className={styles.studentcontainer}>

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
        <Image src="/images/landing-older-man2.jpg" alt="course" height={581} width={515} />
        </div>
        </div>
        </div>
        </div>

        <div className={styles.rightsidecontent}>
        <h2>Our Student Parents Say About Us</h2>
        <p>Mastering Study mentoring programme provides a package of opportunities to raise the aspirations of students and close the gap between those aspirations and their attainment. As a Mastering Study Registered Mentor, you will enhance the profile of your institution and attract students offering the world’s best education system to become more confident with more options for their successful careers.</p>
        </div>

        </div>
    </div>
</div>

<div className={styles.apply}>
    <div className={styles.applywrapper}>
        <div className={styles.applycontent}>
            <div className={styles.applytext}>
            <h4>Apply now</h4>
            <p>To apply to join the Registered Tuition Provider scheme click “Apply” below or for more information contact your local Mastering Study office.</p>
            </div>
            <div className={styles.applybtn}>
                    <Link href="/contact">
                        <button>Apply Now</button>
                    </Link>
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default Landing
