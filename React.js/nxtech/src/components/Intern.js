import React from 'react';
import web from '../images/web.png';
import java from '../images/java.png';
import mern from '../images/mern.png';
import python from '../images/python.png';


const Intern = () => {
  return (
    <div className='container'>
      <div className='row' style={{margin:"10px"}}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={web} className="card-img-top" alt="Web Development" />
        <div className="card-body">
          
          <a style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} href="https://docs.google.com/forms/d/e/1FAIpQLScTRLMVXOCJw6XLKOTBvF1ohPJ28dzd59M7zYOhyzxrpzddZQ/viewform?usp=sf_link" className="btn btn-primary">Enroll Now</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={java} className="card-img-top" alt="..." />
        <div className="card-body">
          
          <a style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} href="https://docs.google.com/forms/d/e/1FAIpQLScTRLMVXOCJw6XLKOTBvF1ohPJ28dzd59M7zYOhyzxrpzddZQ/viewform?usp=sf_link" className="btn btn-primary">Enroll Now</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={python} className="card-img-top" alt="..." />
        <div className="card-body">
          
          <a style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} href="https://docs.google.com/forms/d/e/1FAIpQLScTRLMVXOCJw6XLKOTBvF1ohPJ28dzd59M7zYOhyzxrpzddZQ/viewform?usp=sf_link" className="btn btn-primary">Enroll Now</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={mern} className="card-img-top" alt="..." />
        <div className="card-body">
           
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScTRLMVXOCJw6XLKOTBvF1ohPJ28dzd59M7zYOhyzxrpzddZQ/viewform?usp=sf_link" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} className="btn btn-primary">Enroll Now</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Intern
