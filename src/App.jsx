import { useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import React from 'react';
import "./assets/App.scss";

export default function App() {

  let [number , Setnumber] = useState(0);
  return (
    <>


    <div className='container'>

    <h1 onClick={
      () => {
      Setnumber(number + 1);
     }}
     >Click Me</h1>

      <div className="wizard">

        <div className="wizard-item">
           <img className={`${''} ${number >= 1 ? "hide" : ''}`} src="https://img.icons8.com/ios/50/packing.png" alt="Aks"/>
           <div className={`${number >=  1 ? "wizard-item-check" : 'hide'}`}><CiCircleCheck size={60}/></div> 
           <span className='wizard-item-txt'>Entekhab</span>
        </div>

        <div className={`${number >= 1 ? "line" : 'empty-line'}`}></div>

        <div className="wizard-item">
           <img className={`${''} ${number >= 2 ? "hide" : ''}`} src="https://img.icons8.com/ios/50/packing.png" alt="Aks"/>
           <span className={`${number >=  2 ? "wizard-item-check" : 'hide'}`}><CiCircleCheck size={60}/></span> 
           <span className='wizard-item-txt'>Toolid</span>
        </div>

        <div className={`${number >= 2 ? "line" : 'empty-line'}`}></div>

        <div className="wizard-item">
           <img className={`${''} ${number >= 3 ? "hide" : ''}`} src="https://img.icons8.com/ios/50/packing.png" alt="Aks"/>
           <div className={`${number >=  3 ? "wizard-item-check" : 'hide'}`}><CiCircleCheck size={60} /></div> 
           <span className='wizard-item-txt'>Masraf</span>
        </div>

        <div className={`${number >= 3 ? "line" : 'empty-line'}`}></div>

        <div className="wizard-item">
           <img className={`${''} ${number >= 4 ? "hide" : ''}`} src="https://img.icons8.com/ios/50/packing.png" alt="Aks"/>
           <div className={`${number >=  4 ? "wizard-item-check" : 'hide'}`}><CiCircleCheck size={60}/></div> 
           <span className='wizard-item-txt'>Yani Chi?</span>
        </div>

      </div>

    </div>
    </>
  );

}