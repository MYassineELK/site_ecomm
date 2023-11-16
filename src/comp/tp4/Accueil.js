import React, { useState } from 'react'
import Contact from './Contact'
import Ajoute from './Ajoute'
import { v4 as uuidv4 } from "uuid";

// Initialization for ES Users
import {
    Ripple,
    initTE,
  } from "tw-elements";
  initTE({ Ripple });
export default function Accueil() {
    const [affiche,setaffiche]=useState(true)
    const [nomsrsh,setnomsrsh]=useState()
    const ajout=()=>{
        setaffiche(!affiche)
    }
    
    
    const [ajoutee,setajout]=useState([])
    const [cope,setsetcope]=useState()
    const add=(nom,tele,email)=>{
        var c=ajoutee
        var novo={
            nom:nom,
            tele:tele,
            email:email,
            id:uuidv4()
            
        }
        var cc=[...c,novo]
        setajout(cc)
    }
    const sup=(id)=>{
        var c=ajoutee.filter((el)=>el.id!=id)
        setajout(c)
    }
    const serch=()=>{
      
        var c=ajoutee
        var cc=ajoutee.filter((el)=>el.nom==nomsrsh)
        setajout(cc)
        setsetcope(c)
    }
  return (
    <div className="container">
        <br />
     <div className="flex space-x-16 -ml-2 ">
     <div class="mb-3 w-1/3 ml-7 sm:mr-8 sm:w-full ">
  <div class="relative mb-4 flex w-44 sm:w-full flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      onChange={(e)=>setnomsrsh(e.target.value)}
      aria-describedby="button-addon1" />
    <button
      class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light" onClick={serch}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
     <button onClick={ajout} type="button" className="w-15 mr-7 sm:w-1/3  flex h-10 justify-center rounded bg-red-700 px-6 pb-2 pt-2.5 text-lg font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light">
     Ajoute 
    </button>
     </div><br />
     <h1 className="text-center text-3xl"  style={{display:affiche?"none":""}}  >List de contact</h1> <br />
     <div className=' container grid grid-cols-1  sm:grid-cols-3 '>
     {ajoutee.map((el)=><div key={el.id} className='w-2/3 mx-auto mb-4 '><Contact id={el.id} sup={sup} desplay={affiche} nom={el.nom} télé={el.tele} email={el.email}/></div>)}
     </div>
     <Ajoute desplay={affiche} sup={ajout} add={add}/>
    </div>
  )
}
