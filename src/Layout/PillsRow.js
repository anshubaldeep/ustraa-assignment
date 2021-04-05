import React, { useEffect, useRef, useState } from "react";
import { Card} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";


const PillsRow = (props) => {
  const myRef=useRef([]);
  const headRef=useRef(null);
  const [state,setState]=useState([]);
  
  const addToRefs=(el,c)=>{
    if(el && !myRef.current.includes(el)){
      myRef.current.push(el);
      const sizer=myRef.current.length-1;
      const st= {index:sizer,category_id:c};
      setState(old=>[...old,st]);
    }
  }
  useEffect(()=>{
    for(let i=0; i<state.length;i++){
      console.log(state[i].category_id);
      if(state[i].category_id==props.selectedCategoryId){
        console.log(state[i].index);
        console.log(myRef.current[state[i].index]);
        myRef.current[state[i].index].scrollIntoView({behavior: "smooth", block: "start",inline: "start"});
      }
    }
  },[props.selectedCategoryId,state])
  return (
    <div className='carousel'>
    <div className='carousel-slider'>
    <div className='carousel-child' ref={headRef}></div>
      {props.categories.map((cat) => {
        return (
          <div key={cat.category_id} className='carousel-child' ref={(el)=>addToRefs(el,cat.category_id)}>
            <div className="carousel-img">
              <Card className="bg-dark text-white category-card"  onClick={()=>props.selectCategory(cat.category_id)}>
                <Card.Img src={cat.category_image} alt={cat.category_name} />
                <Card.ImgOverlay>
                  <Card.Title>{cat.category_name.toUpperCase()}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        );
      })}
      </div>
      </div>
  );
};

export default PillsRow;
