
import React from 'react';
import web from '../src/images/imgg.JPG';

import {NavLink} from 'react-router-dom';
import 'tachyons';


const Card=(props)=>{

	return (

		<>
		
<div className="col-md-4 col-10 mx-auto">


<div className="card grow cardhover">
  <img className="imgservice" src={props.imgsrc} Name="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{props.info}</p>
    <button to="#" className="btn btn-outline-info" id="shoot">{props.type}</button>
  </div>
  </div>

</div>

		</>
		
		)
};


export default Card;




