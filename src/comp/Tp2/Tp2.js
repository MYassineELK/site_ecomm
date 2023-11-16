import React, { useState } from 'react'
import { Image } from "./Image_data"
import "./Tp2.css"
export default function Tp2_react() {
    const [data,setdata]=useState(Image)
    const [counts,setcount]=useState(0)

    const add=()=>{
        if (counts<data.length-1) {
            setcount(counts+ +1)
        }else{
            setcount(0) 
        }
    }
    
    const sup=()=>{
        if (counts>0) {
            setcount(counts-1)
        }else{
            setcount(data.length-1)
        }
    }
  return (
    <div>
        <center><h1 className='text-xl sm:text-3xl'>Tp2_react</h1></center>
        <center><h3>{counts}</h3></center>
       <center>
       <div className=" w-7/12 " style={{margin:"auto"}}>
        <span className=' flex justify-center'>
           
        <input type="button" className='btn button  b1' onClick={add} value="👈" />
        <img src={data[counts].img} className='rounded-3xl' alt="" />
        <input type="button" className='btn button b2' onClick={sup} value="👉" />
        </span>
        </div>
       
       </center>
     
    </div>
  )
}
