import React from 'react'
import { useState } from 'react';
import Courses from './data'
import styles from './Exams.module.css'
const Coursestab = () => {

    const [index, setIndex] = useState(0);
    const { id, name, image, text } = Courses[index];

    const checkNumber = (number) => {
        if (number > Courses.length - 1) {
            return 0;
        }
        if (number < 0) {
            return Courses.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }


    return (
        <>
<div className={styles.examCertifications}>
    <div className={styles.examCertificationsContainer}>

    <div className={styles.topcontent}>
    <img src="/images/separator1-1.png" width={83} height={8} />
    <h2>Exams & Certifications ‍System</h2>
    </div>

    <div className={styles.examCertificationsWrapper}>
    <div className={styles.bodyContent}>

    <div className={styles.btnContent1}>
        <button onClick={() => setIndex(checkNumber(0))}>Exam ethics and policies</button>
    </div>

    <div className={styles.btnContent1}>
    <button onClick={() => setIndex(checkNumber(1))}>Exam social media guidance</button>
    </div>

</div>

<div className={styles.bodyContent2}>
    <div className={styles.btnContent2}>
    <button onClick={() => setIndex(checkNumber(2))}>How to get ahead in your exams</button>
    </div>

<div className={styles.btnContent2}>
<button onClick={() => setIndex(checkNumber(3))}>After your exam / Result</button>
</div>

<div className={styles.btnContent2}>
    <button onClick={() => setIndex(checkNumber(4))}>Certificates</button>
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
        <img src={image} alt="course" height={436} width={386} />
    </div>
</div>

</div>
    </div>

<div className={styles.card1content}>
<p>
{text}                                 
</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Coursestab
