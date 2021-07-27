import styles from './Profile.module.css';
import { CgProfile } from 'react-icons/cg';
import { ImSad} from 'react-icons/im';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Libs from '../libs/index.js'; 

function Profilecom() {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`${Libs.baseUrl}/student/profile/:email`)
        .then(res=> {
            setData(res);
        })
        .catch(error=> console.log(error))
    })
    return (
        <>
        <div className={styles.features}>
            <div className={styles.featurescontainer}>
            <div className={styles.featureswrapper}>
                        <CgProfile className={styles.icons} />
                        <h2>Mubasshir Ahmed</h2>
                        <p>student</p>
                    <div className={styles.content}>
                        <div>
                                <h2>Achievements</h2>
                        </div>

                            <div className={styles.sorry}>
                                <ImSad /> Under maintaince
                             </div>
                        
                    </div>
                        
            </div>
                    {/* <div>
                        <div className={styles.hammer}>
                            <div className={styles.face}></div>
                            <div className={styles.head}></div>
                            <div className={styles.handle}></div>
                        </div>
                    </div> */}

                    
            </div>
            
        </div>
        </>
    )
}
export default Profilecom;
