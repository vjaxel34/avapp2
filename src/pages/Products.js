import classes from "./Product.module.css";
import { useState } from "react";
import Axios from "axios";
import ProductPageBanner from "../components/ProductPageBanner";
// import NewSlide from "../components/NewSlide";
import CustomShow from "../components/CustomShow";

const Products = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    Axios.post("http://localhost:3001/create", {
      title: title,
      description: description,
      price: price,
    }).then(() => {
      setProductList([
        ...productList,
        {
          title: title,
          description: description,
          price: price,
        },
      ]);
    });
  };
  const getProduct = () => {
    Axios.get("http://localhost:3001/products").then((response) => {
      setProductList(response.data);
    });
  };
  return (
    <div className={classes.app}>
      <div className={classes.information}>
        <ProductPageBanner />
    {/* <NewSlide />  */}
    <CustomShow />
 
        <label>Title:</label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Price:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <button onClick={addProduct}>Add Item</button>
      </div>
      <div className={classes.products}>
        <button onClick={getProduct}>Show Products</button>
        {productList.map((val, key) => {
          return (
            <div className={classes.product2}>
              <h3>Title: {val.title}</h3>
              <h3>Price: {val.price}</h3>
              <h3>Description: {val.productDescription}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
