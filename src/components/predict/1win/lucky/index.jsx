import React from "react";
import Luckys from "../../../../assets/luckys.png";

import "./index.css";

const index = () => {
  const toks = localStorage.getItem("token")
  if (localStorage.getItem("token")) {
  }

  setTimeout(function run() {
    if(localStorage.getItem('token')){
        document.getElementById('lucky').textContent = 3.89;  
      }
    } , 1000)
    setTimeout(function run() {
      if(localStorage.getItem('token')){
          document.getElementById('lucky').textContent = 1.39;  
        }
      } 27000)
      setTimeout(function run() {
        if(localStorage.getItem('token')){
            document.getElementById('lucky').textContent = 1.90;  
          }
        } , 41000)
        setTimeout(function run() {
          if(localStorage.getItem('token')){
              document.getElementById('lucky').textContent = 1.79;  
            }
          } , 59000)
          setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 98.08;  
              }
            } , 78000)
setTimeout(function run() {
            if(localStorage.getItem('token')){
                document.getElementById('lucky').textContent = 7.71;  
              }
            } , 141000)
  const users = localStorage.getItem("user");
  return (
    <>

<div className={toks? `css-modal-details d-none`:`css-modal-details `}>    
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
        <img src={Luckys} className="list_imgs" alt="" />
        <h3 className="lucky-text" id="lucky">
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
