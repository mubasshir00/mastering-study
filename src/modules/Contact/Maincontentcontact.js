import styles from './Maincontentcontact.module.css'

function Maincontentcontact() {
    return (
        <>
            <div id={styles.mainContent} className={`${styles.siteMain} ${styles.clearfix}`}>
                <div id={styles.contentWrap}>
                    <div id={styles.siteContent} className={`${styles.siteContent} ${styles.clearfix}`}>
                        <div id={styles.innerContent} className={styles.innerContentWrap}>
            <article className={`${styles.pageContent} ${styles.post1339} ${styles.page} ${styles.typePage} ${styles.statusPublish} ${styles.hentry}`}>
                <div className={`${styles.vcCustomColSpacing} ${styles.clearfix} ${styles.vcColSpacing30}`}>
                    <section className={`${styles.wpbRow} ${styles.vcRowFluid} ${styles.rowContentPositionDefault}`}>
            <div className={styles.edukulContainer}>
                <div className={`${styles.rowInner} ${styles.clearfix}`}>
                    <div className={`${styles.wpbColumn} ${styles.vcColumnContainer} ${styles.vcColSm12}`}>
            <div className={styles.vcColumnInner}>
                <div className={styles.wpbWrapper}>
                    <div className={`${styles.edukulSpacer} ${styles.clearfix}`}>
            <div className={`${styles.edukulContentBox} ${styles.clearfix}`}>

                {/* input form */}
                <div className={styles.wrap}>

                <div className={styles.wrapContentHead}>
                <h2>Get In Touch</h2>
                </div>

                <div className={styles.wrapContentInput}>
                <input type="text" placeholder="Full Name Here" />
                <input type="text" placeholder="Email Here" />
                </div>

                <textarea name="" id="" cols="40" rows="10" placeholder="Message">

                </textarea>

                <p className={styles.note} style={{fontSize:'14px'}}>
                 * I agree that my submitted data is being collected and stored. For further details on handling user data, see our Privacy Policy.
                </p>

                <button>SEND MESSAGE</button>

                </div>

            </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
                    </section>
                </div>
                
                
            <div className={`${styles.vcCustomColSpacing} ${styles.clearfix} ${styles.vcColSpacing30}`}>


        

            
            </div>
            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maincontentcontact
