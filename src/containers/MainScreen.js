import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Axios from "../Axios";
import MediaCol from "../components/MediaCol";
import FootToolbar from "../Layout/FootToolbar";
import PillsRow from "../Layout/PillsRow";

const MainScreen = () => {
  const [loadCategories, setLoadCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(185);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [viewMorePressed,setViewMorePressed]=useState(false);
  const [selectedCategoryName,setSelectedCategoryName]=useState('Sale');

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
        setProducts(response.data.products);
        setProductsLoaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(()=>{
    Axios.get("catalog/v1.0.1?category_id="+selectedCategoryId)
    .then(function (response){
      setProducts(response.data.products);
      setProductsLoaded(true);
    })
    .catch(function (error){
      console.log(error);
    })
  },[selectedCategoryId])
  const onSelectCategory=(id)=>{
    setSelectedCategoryId(id);
    setSelectedCategoryName(categories.filter(cat=>cat.category_id===id)[0].category_name)
    setProductsLoaded(false);
    setViewMorePressed(false);
  }
  const onViewMorePress=()=>{
    const viewMoreVar=viewMorePressed;
    setViewMorePressed(!viewMoreVar);
  }
  let ViewableArea = (
    <div className="spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
  if (loadCategories && productsLoaded) {
    ViewableArea = (
      <>
        <h1>Our Products</h1>
        <PillsRow categories={categories} selectCategory={onSelectCategory}/>
        <MediaCol products={products} viewMore={viewMorePressed}/>
        <FootToolbar viewMorePress={onViewMorePress} viewMoreVal={viewMorePressed} changeCategory={onSelectCategory} currentCategory={selectedCategoryName} categories={categories}/>
      </>
    );
  }

  return <Container className="main-screen">{ViewableArea}</Container>;
};

export default MainScreen;
