import React from "react";
import Avia from "../../../../assets/avi.png";

import "./index.css";

const index = () => {

  const toksavia = localStorage.getItem("tokenavia")

  if (localStorage.getItem("tokenavia")) {
}

setTimeout(function run() {
  if(localStorage.getItem('tokenavia')){
      document.getElementById('aviators').textContent = 1.41;  
    }
  } , 6000)
  setTimeout(function run() {
    if(localStorage.getItem('tokenavia')){
        document.getElementById('aviators').textContent = 6.73;  
      }
    } , 27000)
    setTimeout(function run() {
      if(localStorage.getItem('tokenavia')){
          document.getElementById('aviators').textContent = 1.43;  
        }
      } , 64000)
      setTimeout(function run() {
        if(localStorage.getItem('tokenavia')){
            document.getElementById('aviators').textContent = 1.03;  
          }
        } , 87000)
        setTimeout(function run() {
          if(localStorage.getItem('tokenavia')){
              document.getElementById('aviators').textContent = 1.89;  
            }
          } , 104000)
setTimeout(function run() {
          if(localStorage.getItem('tokenavia')){
              document.getElementById('aviators').textContent = 2.52;  
            }
          } , 780000)

  const users = localStorage.getItem("user");

  return (
    <>
<div  className={ toksavia? `css-modal-details d-none`:`css-modal-details `} >    
    <details open>
        <summary  className="d-none">Название кнопки</summary>
        <div className="cmc">
            <div className="cmt">
            <h2 className="reds">{users.toUpperCase()}</h2>
                <h3>Your account is not activated</h3>  

                <a href="https://t.me/lucky_jet_admin"><button className="activate">ACTIVATE</button></a>  
            </div>
        </div>
    </details>
</div>
      <div className="container-avia">
        <h3 className="for-h">Привет {users.toUpperCase()}</h3>
        <img src={Avia} className="list_imgs" alt="" />
        <h3 className="lucky-text"  id="aviators">
          Wait
        </h3>
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default index;
