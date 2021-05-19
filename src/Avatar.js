import React from 'react';
import  './Avatar.css';
import Avatarlist from './Avatarlist';
import Typical from 'react-typical';


import 'tachyons';


const Avatar =()=>
{

		const avatarlistarray=[
				{
					id:1,
					name:"kindra_saab",
					work:"Lead Cinematographer🎥"
				},
				{
					id:2,
					name:"Anmol",
					work:"Lead Cinematographer🎥"
				},
				{
					id:3,
					name:"Aryan",
					work:"Lead Photographer📸"
				},
				{
					id:4,
					name:"Shashwat",
					work:"Lead Photographer📸"
				}
		]


		const arrayavatarcard = avatarlistarray.map((avatarcard,i)=>{

			return <Avatarlist  id={avatarlistarray[i].id}
								name={avatarlistarray[i].name}
								work={avatarlistarray[i].work}/>
		})


	return ( 
				<div className="mainpage">
				<h1 className="tc team"><Typical steps={['Meet The Team Of',300,'Talented Photographers & Cinematographers📸',1000]} loop={Infinity}wrapper="h1"/></h1>
				{arrayavatarcard}

				</div>	


		)
}


export default Avatar;