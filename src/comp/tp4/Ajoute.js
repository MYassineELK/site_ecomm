import React, { useRef,useContext } from 'react'
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
  



export default function Ajoute(props) {
    var nom=useRef()
    var tele=useRef()
    var email=useRef()
    
    
  return (
    <div className='flex justify-center w-full justify-items-center' style={{display:props.desplay?"":"none",color:"black" }}>
      <div  className="block rounded-lg  w-full sm:w-1/2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h1 onClick={props.sup} className=" btn flex justify-end">X</h1>
        <h1 className="text-4xl text-center">create new contact</h1><br />
        <div className='flex mb-3'>
        <div   className='w-2/12  ml-5  text-lg'>Nom:</div><input ref={nom} type="text" className='form-control  ml-8 w-9/12 flex mr-3 '/>
        </div>
        <div className='flex mb-3'>
       <div  className='w-2/12 ml-5  text-lg'>numéro de téléphone :</div> <input ref={tele} type="text" className='form-control  ml-8 w-9/12 flex mr-3'/>
        </div>
        <div className='flex mb-3 '>
         <div  className='w-2/12 ml-5  text-lg'>e-mail:</div><input type="text" ref={email} className='form-control  ml-8 w-9/12 flex mr-3'/>
        </div>
        <div className='flex h-15 justify-center'>
        <button type="button" onClick={()=>props.add(nom.current.value,tele.current.value,email.current.value)} className="inline-block rounded justify-center bg-primary w-1/3 h-10 mb-8  px-6 pb-2 pt-2.5 text-sm font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
      Ajout
    </button>
        </div>
      </div>
    </div>
  )
}
