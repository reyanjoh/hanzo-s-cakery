import React from 'react'
import styles from '../css/components.module.css'


export default function EmailCapture() {
  return (
    <div className={styles.emailCaptureContainer}>
    <div className="filter"></div>
        <form action="">
            <label htmlFor="news-letter" className="headers">Enjoy out best deals</label>
            <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</span>
            <div className={styles.input}>
                <input type="text" placeholder="send us your email to get our latest sale & discount updates" className={styles.newsLetter} name="news-letter" id="news-letter" />

                <button className={styles.newsLetterSubmit} type="submit">Sign Up</button>
            </div>
        </form>
    </div>
  )
}
