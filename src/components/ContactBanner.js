import React from 'react'
import classes from './ContactBanner.module.css'
function ContactBanner() {
  return (
    <div className={classes.banner}>
       <div className={classes.content}>
            <h2>Contact Us</h2>
            <p>Please contact us for any additional questions, concerns, or suggestions that you may have. In order to help our community grow, we'd love to hear from you. We are here to help and connect with our customers the best way possible.</p>
        </div>
    </div>
  )
}

export default ContactBanner