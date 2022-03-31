import classes from "./Contact.module.css";
import ContactBanner from "../components/ContactBanner";
function validateForm() {
  let x = document.contactForm["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function Contact() {
  return (
    <div>
      <ContactBanner />
      <section className={classes.contactForm}>
        <div className={classes.image}></div>
        <form
          className={classes.contactInput}
          name="myForm"
          action="/action_page.php"
          onsubmit= 'return validateForm()'
          method="post"
        >
          Name: 
<input type="submit" value="Submit"></input>
          <label for="name">full Name</label>
          <input type="text"></input>
          <label for="email">Email</label>
          <input type="email" id="email" name="email"></input>
          <label for="pwd">Password</label>
          <input type="password"></input>
          <label>Comment</label>
          <input type="text"></input>
        </form>
      </section>
    </div>
  );
}

export default Contact;
