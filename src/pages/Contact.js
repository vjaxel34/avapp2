import classes from './Contact.module.css';

function Contact() {
  return (
    <section className={classes.contact}>
        <div className = {classes.contactContent}>
            <h2> Contact Us</h2>
            <p>Please contact us for any additional questions, concerns, or suggestions that you may have. In order to help our community grow, we'd love to hear from you. We are here to help and connect with our customers the best way possible.</p>
        </div>
        <div className= {classes.contactContainer}>
        <div class={classes.contactInfo}>
                <div class={classes.box}>
                    <div class={classes.icon}><i class="fa fa-location-arrow" aria-hidden="true"></i></div>
                    <div class={classes.text}>
                        <h2>Address</h2>
                        <p>345 Wonderville Dr</p>
                    </div>
                </div>
                <div class={classes.box}>
                    <div class={classes.icon}><i class="fa fa-phone" aria-hidden="true"></i></div>
                    <div class={classes.text}>
                        <h2>Phone</h2>
                        <p>(555)555-5555</p>
                    </div>
                </div>
                <div class={classes.box}>
                    <div class={classes.icon}><i class="fa fa-envelope" aria-hidden="true"></i></div>
                    <div class={classes.text}>
                        <h2>Email</h2>
                        <p>vjaxel30@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class={classes.contactform}>
            <form>
                <h2>Send Message</h2>
                <div class={classes.inputbox}>
                    <input type="text" name="text" placeholder="type name here"></input>
                    <label>Full Name</label>
                </div>
                <div class={classes.inputbox}>
                    <input type="text" name="text" placeholder="type email here"></input>
                    <label>Email</label>
                </div>
                <div class={classes.inputbox}>
                    <textarea placeholder="type message here"></textarea>
                    <label>Message</label>
                </div>
                <div class={classes.inputbox}>
                    <input type="submit" name="text" value="send"></input>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact