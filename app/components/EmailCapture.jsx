import React from 'react'

export default function EmailCapture() {
  return (
    <div className="emailCapture-container">
    <div className="filter"></div>
        <form action="">
            <label htmlFor="" className="headers">Enjoy out best deals</label>
            <span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</span>
            <div className="input">
                <input type="text" placeholder="send us your email to get our latest sale & discount updates" className="news-letter" name="news-letter" id="news-letter" />
                <button className="news-letter-submit" type="submit">Sign Up</button>
            </div>
        </form>
    </div>
  )
}
