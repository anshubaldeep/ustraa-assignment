import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Axios from "../Axios";
import MediaCol from "../components/MediaCol";
import PillsRow from "../Layout/PillsRow";

const MainScreen = () => {
  const [loadCategories, setLoadCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("homemenucategories/v1.0.1?device_type=mob")
      .then(function (response) {
        setLoadCategories(true);
        setCategories(response.data.category_list);
      })
      .catch(function (error) {
        console.log(error);
      });
    Axios.get("catalog/v1.0.1?category_id=" + 185)
      .then(function (response) {
        console.log(response);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(products);
  let ViewableArea = (
    <div className="spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
  if (loadCategories) {
    ViewableArea = (
      <>
        <h1>Our Products</h1>
        <PillsRow categories={categories} />
        <MediaCol products={products}/>
      </>
    );
  }

  return <Container className="main-screen">{ViewableArea}</Container>;
};

export default MainScreen;
