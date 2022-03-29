import classes from "./ProductPage.module.css";

function ProductPageBanner() {
  return <div className={classes.productBanner}>
      <div className={classes.title}>
      <h1 className ={classes.maintitle}>Wonder Worry Free With Us </h1>
      <p className={classes.motto}>Our motto is to fullfill customer demand by making them staisfied with growing their projects. </p>
      <button>Start Here</button> <button>Buy Here</button>
      </div>

  </div>;
}

export default ProductPageBanner;
