// import React from 'react'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';
import styles from './Review.module.css'
const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { id, text, name, job, image } = people[index];
    const checkNumber = (number) =>{
        if(number>people.length-1){
            return 0;
        }
        if(number<0){
            return people.length-1;
        }
        return number;
    }

    const nextPerson = () =>{
        setIndex((index)=>{
            let newIndex = index+1;
            return checkNumber(newIndex);
        })
    }

    const prevPerson = () =>{
            setIndex((index)=>{
                let newIndex = index-1;
                return checkNumber(newIndex)
            })  
    }


    return (
        <>
            <article className={styles.review}>

                <div className={styles.reviewwrapper}>
                    <div className={styles.reviewcontent}>
                        <button className={styles.prevbtn} onClick={prevPerson}>
                            <FaChevronLeft className={styles.icon} />
                        </button>

                        <div>
                            <div className={styles.textcontent}>
                                <p className={styles.info}>{text}</p>
                            </div>
                            <div className={styles.imgcontainer}>
                                <img src={image} alt={name} className={styles.personimg} />
                                <div className={styles.imgcontainerText}>
                                    <h4 className={styles.author}>{name}</h4>
                                    <p className={styles.job}>{job}</p>
                                </div>
                            </div>
                        </div>

                        <button className={styles.nextbtn} onClick={nextPerson}>
                            <FaChevronRight className={styles.icon} />
                        </button>
                    </div>
                </div>

                <img src={people[1].image} alt="" onClick={() => setIndex(checkNumber(1))} />
                <img src={people[2].image} alt="" onClick={() => setIndex(checkNumber(2))} />
                <img src={people[3].image} alt="" onClick={() => setIndex(checkNumber(3))} />
                <img src={people[0].image} alt="" onClick={() => setIndex(checkNumber(0))} />
                {/* <img src={people[4].image} alt="" onClick={() => setIndex(checkNumber(4))} /> */}
            </article>
        </>
    )
}

export default Reviews
