import React from "react";
import Lucky from "../../assets/lucky-jet.png";
import Aviwin from "../../assets/avi.png";
import Rocket from "../../assets/rocket.png"
import "./index.css";
import { Link } from "react-router-dom";



const index = () => {
  if(localStorage.getItem('token')){
    localStorage.removeItem('token')
    localStorage.removeItem('tokenavia')
    localStorage.removeItem('tokenroket')
    window.location.reload()
  }else if(localStorage.getItem('tokenavia')){
    localStorage.removeItem('tokenavia')
    window.location.reload()
  }else if(localStorage.getItem('tokenroket')){
    localStorage.removeItem('tokenroket')
    window.location.reload()
  }



  setInterval(function(){
    if(window.location.pathname == '/'){
      localStorage.removeItem('running');
      localStorage.removeItem('aviator')
  localStorage.removeItem('rasm')


    }
  } , 1000)




  return (
    <>
      <div className="cont">
        <div className="con">
          <h2 className="for-h">1WIN</h2>
          <div className="d-flexx">
          <button className="d-flex"
          >
          <Link to='/lucky'className='listlinks' > 
          <img src={Lucky} alt="" className="list_img" />
      </Link>
      </button>
      <button className="d-flex" >
      <Link to='/aviator' className='listlinks' > 
      <img src={Aviwin} alt="" className="list_img" />
          
      </Link>
      </button> 

          </div>
          <div className="d-flexx">
          <button className="d-flex"  
          >
          <Link to='/rocket' className='listlinks'  > 
          <img src={Rocket} alt="" className="list_imgss" />
      </Link>
      </button>
      </div>
        
        </div>

        <div className="con">
          <h2 className="for-h">MOSTBET</h2>

          <button className="d-flex">
          <Link to='/aviator' className='listlinks' > 
          <img src={Aviwin} alt="" className="list_img" />
          
      </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
