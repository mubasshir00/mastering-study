import styles from './Test.module.css'

function Testheader() {
    return (
        <div className={styles.topnav} id="myTopnav">
          <a href="#" className={styles.active}>Home</a>
            <a href="#">Blog</a>
              <div className={styles.dropdown}>
           <button className={styles.dropbtn}>Features
              <i className="fa fa-caret-down" />
           </button>
          <div className={styles.dropdowncontent}>
          <div className={styles.animate}>
            <a href="#">Shop by brand</a>
            <a href="#">Faq</a>
           </div>
          </div>
          </div>
        </div>

    )
}

export default Testheader
