import React from "react";
import Rocket from "../../../../assets/rockets.png";

import "./index.css";

const index = () => {

  const tokroket = localStorage.getItem("tokenroket")

  if (localStorage.getItem("tokenroket")) {
  }

  setTimeout(function run() {
    if(localStorage.getItem('tokenroket')){
        document.getElementById('rocket').textContent = 6.12;  
      }
    } , 1000)
    setTimeout(function run() {
      if(localStorage.getItem('tokenroket')){
          document.getElementById('rocket').textContent = 7.44;  
        }
      } , 32000)
      setTimeout(function run() {
        if(localStorage.getItem('tokenroket')){
            document.getElementById('rocket').textContent = 1.30;  
          }
        } , 3006000)
        setTimeout(function run() {
          if(localStorage.getItem('tokenroket')){
              document.getElementById('rocket').textContent = 2.07;  
            }
          } , 5100000)
          setTimeout(function run() {
            if(localStorage.getItem('tokenroket')){
                document.getElementById('rocket').textContent = 1.26;  
              }
            } , 7100000)
setTimeout(function run() {
            if(localStorage.getItem('tokenroket')){
                document.getElementById('rocket').textContent = 1.75;  
              }
            } , 840000)
  const users = localStorage.getItem("user");
  return (
    <>

<div className={tokroket? `css-modal-details d-none`:`css-modal-details `}>    
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
        <img src={Rocket} className="list_imgs" alt="" />
        <h3 className="lucky-text" id="rocket">
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
