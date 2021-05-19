
import React from 'react';
import web from '../src/images/imgg.JPG';

import {NavLink} from 'react-router-dom';
import 'tachyons';


const Card=(props)=>{

	return (

		<>
		
<div className="col-md-4 col-10 mx-auto">


<div className="card grow">
  <img src={props.imgsrc} Name="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button to="#" className="btn btn-outline-info" id="shoot">{props.type}</button>
  </div>
  </div>

</div>

		</>
		
		)
};


export default Card;




