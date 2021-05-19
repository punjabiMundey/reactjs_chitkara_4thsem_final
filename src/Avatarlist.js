import React from 'react';
import 'tachyons';
import './Avatarlist.css';


const Avatarlist = (props) =>
{
	return (
		
			<div className="avatarStyle cardclr ma4 pa4 dib tc ba divstyle grow">
			<img src={`https://joeschmoe.io/api/v1/${props.name}`}/>
			<h1 className="teamname">{props.name}</h1>
			<p className="work"> {props.work} </p>

			</div>


		)
}

export default Avatarlist;