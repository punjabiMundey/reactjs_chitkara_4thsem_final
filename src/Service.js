import React from 'react';
import web from '../src/images/imgg.JPG';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Card from './Card';
import Typical from 'react-typical';



const Service=()=>{

	return (

		<>
		<div  className="my-5">
		<h1 id="service" className="text-center s"><Typical steps={['Our ',300,'Our Services',1000]} loop={Infinity} /></h1>
		</div>

			<div className="container-fluid mb-5">
			<div className="row">
			<div className="col-10 mx-auto">
			<div className="row gy-5">
			
			<Card imgsrc="https://www.photorachna.com/wp-content/uploads/2019/07/Jodhpur-2.jpg" type="PRE-WEDDING SHOOT"/>
			<Card imgsrc="http://www.priyagoswami.com/wp-content/uploads/2015/01/Baby-Photographer-in-Delhi.jpg" type="BABY SHOOT"/>
			<Card imgsrc="https://images.picxy.com/cache/2020/7/9/45e5b293b3559c940e0a79941d200b03.jpg" type="MATERNITY SHOOT"/>
			<Card imgsrc="https://eventila.spyne.ai/photos/event-planner/null/spyne/1536769630868/logo_Wo7Z510IZX." type="PRODUCT SHOOT"/>
			<Card imgsrc="https://corp.kaltura.com/wp-content/uploads/2017/05/Basics-of-Filmmaking-1024x446.png" type="FILM MAKING"/>
			<Card imgsrc="https://nofilmschool.com/sites/default/files/styles/article_wide/public/gimbal.jpg?itok=y2PUXCpT" type="ADVERTISEMENT SHOOT"/>


			</div>
			</div>
			</div>
			</div>

		</>
		
		)
};


export default Service;
