import HomePageBanner from "../components/HomePageBanner";
import ImageSlider from "../components/ImageSlider";
import { SliderData} from "../components/SliderData";
import classes from './Home.module.css';
const Home = () => {
  return (
    <section className = {classes.section1}>
<HomePageBanner />
      <div>
        <h1 className ={classes.title1}>"Our Greatest Strength is embracing change." - AV Media</h1>
        <p className={classes.para1}>AV Media is a multimedia service company that is committed to help users find useful resources to extend their creativity. As a team we understand that time can be an issue for users, so we have created a page where you are able to find available services that can help extend a project.</p>
        </div>
<ImageSlider slides={SliderData} />
    </section>)
};

export default Home;
