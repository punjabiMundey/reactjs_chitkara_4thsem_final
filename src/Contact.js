import React,{useState} from "react";
import './Contact.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";



const Contact = ( ) => {
    const [data, setData] = useState({
        Fullname:"",
        phone:"",
        mail:"",
        messsage:"",
    });

    const InputEvent  =(event) => {
        const{name,value}=event.target;
        setData((preVal) =>{
            return{
                ...preVal,[name]:value,
            }
        })
    };
    const formSubmit = () =>{
      
        alert(`My name is ${data.Fullname}. My mobile no. is ${data.phone}. My email is ${data.mail}. `);
    };
    return (
        <>
        <div className="photo">

        <div className="my-5 ">
        <h1 className="text-center contact"><Typical steps={['Get In Touch',300,'Get In Touch With Us',1000]} loop={Infinity} wrapper="h1"/></h1>
        </div>
        <div className="container contact_div ">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
        <div class="mb-3 pb-3">
        <label for="exampleFormControlInput1" class="form-label  formdetails">Full Name</label>
  <input type="text" class="form-control input" id="exampleFormControlInput1" name="Fullname" value={data.Fullname} onChange={InputEvent} placeholder="Enter your name" required/>
</div>
<div class="mb-3">

<label for="exampleFormControlInput1" class="form-label formdetails">Phone no</label>
  <input type="number" class="form-control input" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Phone no" required/>
</div>
<div class="mb-3">


 <label for="exampleFormControlInput1" class="form-label formdetails">Email address</label>
  <input type="email" class="form-control input" id="exampleFormControlInput1" name="mail" value={data.mail} onChange={InputEvent} placeholder="name@example.com" required/>
</div>
<div class="mb-3">

<label for="exampleFormControlTextarea1" class="form-label formdetails">Message</label>
  <textarea class="form-control input" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
</div>
<div class="col-12">

<button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div></form>
        </div>
        </div>
        </div>
        </div>

<div className="social_media ">
<a href={`https://www.linkedin.com/in/jatin-kindra-5b3054193/`}
  className="linkedin social icons">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>



<a href={`https://www.facebook.com/profile.php?id=100023921333372`}
  className="facebook social icons">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>


<a href={`https://twitter.com/Anmol0beroi?s=09`}
 className="twitter social icons">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>

<a href={`https://instagram.com/aryan_00047?utm_medium=copy_link`}
  className="instagram social icons">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>
        </>
    );
};

export default Contact;

