import React from 'react'
import styles from './Exams.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Coursestab from './Coursestab'
function Exams() {
    return (
        <>
{/* showcase div */}
<div className={styles.examcontainer}>
<div className={styles.examcontent}>
    <div className={styles.examwrapper}>
    <div className={styles.exampcontentholder}>
    <h2>Exams & Certifications</h2>
    <p>We take exam at end of every module from the courses. And finally we find out them who complete the course with MERITS in every batch. And provide them the course completion certificate with the results.</p>
    <p>Who are able to complete our course they- Everyone is PASS with mastery skills. In the exam mainly we will find out who are passed with MERIT positions.</p>
    </div>
</div>
</div>
</div>

<Coursestab/>

{/* Exams & Certifications ‍System div */}
{/* <div className={styles.examCertifications}>
    <div className={styles.examCertificationsContainer}>

        <div className={styles.topcontent}>
        <Image src="/images/separator1-1.png" width={83} height={8} />
            <h2>Exams & Certifications ‍System</h2>
        </div>

        <div className={styles.examCertificationsWrapper}>
            
        <div className={styles.bodyContent}>

          <div className={styles.btnContent1}>
            <button>Exam ethics and policies</button>
          </div>

          <div className={styles.btnContent1}>
            <button>Exam social media guidance</button>
          </div>

        </div>

        <div className={styles.bodyContent2}>
          <div className={styles.btnContent2}>
            <button>How to get ahead in your exams</button>
          </div>
          <div className={styles.btnContent2}>
            <button>After your exam / Result</button>
          </div>
          <div className={styles.btnContent2}>
            <button>Certificates</button>
          </div>
        </div>


<div className={styles.bodyContent3}>
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
          <Image src="/images/example.jpg" alt="course" height={436} width={386} />
       </div>
    </div>

</div>
</div>

<div className={styles.card1content}>
<p>
    We are committed to ensuring that our exams are carried out ethically, honestly and to the highest standard for the benefit of students and our key partners. Enhance your knowledge of unethical behaviour and better understand how to comply with the Mastering Study Code of Conduct and exam rules.
</p>
</div>

</div>

</div>
        
    </div>
  </div>
</div> */}
        </>
    )
}

export default Exams
