import styles from './Payment.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import Libs from '../../libs/index.js';

function Payment() {
    const [product, setProduct] = useState({
        name: "Deploma in English",
        price: 350,
        productBy: "Mastering Study"
    })

    const makePayment = (token) => {
        console.log("hello token", token);
        const body = {
            token,
            product
        }
        fetch(`${Libs.baseUrl}/payment/create`, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response=> {
            response.json()
                .then(result => console.log(result))
        })
        .catch(error=> console.log("hello error", error))
    }
    return (
        <>

        {/* features */}
        <div className={styles.diploma}>
        <div className={styles.featuesWrap}>
        <div className={styles.featuresContainer}>
        <div className={styles.title}>Courses</div>
        <div className={styles.diplomaFeaturesContent}>
        <Link href="/"><a>Home </a></Link>
        <Link href="#">
            <FiChevronRight className={styles.icon} />
        </Link>
        <Link href="/">
            <a>payment</a>
        </Link>
        </div>
        </div>
        </div>
        </div> 

        {/* features end */}

        <div className={`${styles.diplomaMainContent} ${styles.clearfix}`}>
        <div className={styles.mainContentContainer}>
        <div className={`${styles.mainContentSite} ${styles.clearfix}}`}>
        <div className={styles.innerContent}>
        <div className={styles.innerContentWrap}>
            
        <p>Already have an account? 
        <span className={styles.linkLog}> 
        <Link href="/">Log in</Link> </span> 
        </p>

        {/* account input */}
        <p>Create an Account</p>

        <p>Username*</p>
        <input type="text"/>

        <p>Email*</p>
        <input type="email"/>

       {/* payment table */}
        <p>Payment Information</p>
        <table className={styles.edrpaymenttable}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
            <a href="https://masteringstudy.com/courses/foundation-diploma-in-english-for-higher-education/" target="_blank">
                Foundation Diploma in English for Higher Education
            </a>
                    </td>
        <td>£ 350</td>
        </tr>
        </tbody>
        </table>

        <p style={{fontWeight:"bold"}}>Total</p>
        <p>£ 350</p>
        <p>Payment Method*</p>

        <label className="edr-radio">
          <input style={{ marginLeft: "-2px" }} checked type="radio" name="payment_method" defaultValue="stripe" />
          <span >Stripe</span>
       </label>
        </div>
        <StripeCheckout 
        stripeKey="pk_test_51InW5OSGfM8nYfiboqjt8KS1G57HqzBpfGiX8Yxr7URsu4pQjAFykB4xuaclXWG21L81kHYnt1YW6EQMXNAtZVnh00yYrdgwYh"
        token={makePayment} 
        name={product.name}
        amount={product.price * 100}
        billingAddress
        shippingAddress
        />
            {/* <button>
                <Link href="/payment">
                    Continue
                </Link>
            </button> */}
        {/* </StripeCheckout> */}
        
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Payment
