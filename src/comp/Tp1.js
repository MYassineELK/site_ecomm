import React, { useContext, useState } from 'react'
import "./Tp.css"
import { Modepage } from '../darckmode/Contex';

export default function Tp1_react() {
    const [res,setres]=useState(0);
    const [coun,setcount]=useState("");
    const supreme=()=>{
      var sup=coun
      setcount(sup.slice(0,sup.length-1))

    }
    const reselta=()=>{
      try {
        setcount(eval(coun))
      } catch (error) {
        setcount("erore in santaxe")
      }

    }
    const {dark}=useContext(Modepage)


  return (
    <div className='' >
    <center className='text-xl sm:text-3xl'>TP1 react</center><br />
    <div className="card w-72 sm:w-96" style={{backgroundColor:dark?"white" :"#222" ,color:dark?"#fff"  :""}}>
    <div className='center' >
      <center><div className=' w-60 sm:w-80 ' style={{margin:"auto",height:"340px",borderRadius:"25px" ,height:"100%" }}><br />
        <center>
        <div className='row'style={{marginLeft:"-2px"}}><div className='col-9'>
        <input type="text" onChange={(e)=>setres(e.target.value)} value={coun} className='form-control col-3'   />
        </div>  <button className='btn btn-primary col-2' value={"+"} onClick={(e)=>setcount(coun+e.target.value)} >+</button></div></center>
        <div className="row" style={{marginLeft:"20px",marginTop:"8px"}}> 
        <button className='btn btn-danger col-5' value={"+"} style={{height:"20px",marginRight:"3px"}} onClick={()=>setcount("")} ><p style={{marginTop:"-11px"}}>C</p></button>   
        <button className='btn btn-primary col-5' value={"+"} style={{height:"20px",marginRight:"3px"}} onClick={()=>supreme()} ><p id='p' style={{marginTop:"-12px"}} >{"<="}</p></button>
         </div>
        <div className="row" style={{marginLeft:"20px",marginTop:"8px"}}>
        <button className='btn btn-primary col-3' onClick={(e)=>setcount(coun+e.target.value)} value={1} style={{backgroundColor:"gray",borderColor:"gray",height:"50px",marginRight:"3px"}}>1</button>
        <button className='btn btn-primary col-2' onClick={(e)=>setcount(coun+e.target.value)} value={2} style={{backgroundColor:"gray",borderColor:"gray",height:"50px",marginRight:"3px"}}>2</button>
        <button className='btn btn-primary col-2' onClick={(e)=>setcount(coun+e.target.value)} value={3} style={{backgroundColor:"gray",borderColor:"gray",height:"50px",marginRight:"3px"}} >3</button>
        <button className='btn btn-primary col-3' onClick={(e)=>setcount(coun+e.target.value)} value={"/"} >/</button>
        </div>
        <div className="row" style={{marginLeft:"20px",marginTop:"8px"}}>
            <button className='btn btn-primary col-3' onClick={(e)=>setcount(coun+e.target.value)} value={4} style={{backgroundColor:"gray",height:"50px",borderColor:"gray",marginRight:"3px"}}>4</button>
        <button className='btn btn-primary col-2' onClick={(e)=>setcount(coun+e.target.value)} value={5} style={{backgroundColor:"gray",height:"50px",borderColor:"gray",borderColor:"gray",marginRight:"3px"}}>5</button>
        <button className='btn btn-primary col-2' onClick={(e)=>setcount(coun+e.target.value)} value={6} style={{backgroundColor:"gray",height:"50px",borderColor:"gray",marginRight:"3px"}} >6</button>
        <button className='btn btn-primary col-3' onClick={(e)=>setcount(coun+e.target.value)} value={"-"} >-</button>
        </div><div className="row" style={{marginLeft:"20px",marginTop:"8px"}}>
            <button className='btn btn-primary col-3' onClick={(e)=>setcount(coun+e.target.value)} value={7} style={{backgroundColor:"gray",height:"50px",borderColor:"gray",marginRight:"3px"}}>7</button>
        <button className='btn btn-primary col-2' onClick={(e)=>setcount(coun+e.target.value)} value={8} style={{backgroundColor:"gray",height:"50px",borderColor:"gray",marginRight:"3px"}}>8</button>
        <button className='btn btn-primary col-2' onClick={(e)=>setcount(coun+e.target.value)} value={8} style={{backgroundColor:"gray",height:"50px",borderColor:"gray",marginRight:"3px"}} >9</button>
        <button className='btn btn-primary col-3' onClick={(e)=>setcount(coun+e.target.value)} value={"*"} >*</button>
        <div className='row'>  
        <button className='btn btn-primary col-3' onClick={(e)=>setcount(coun+e.target.value)} value={0} style={{backgroundColor:"gray",borderColor:"gray",height:"40px",marginTop:"10px",marginLeft:"3px",marginRight:"5px"}} >0</button> 
        <button className='btn btn-primary col-8' onClick={()=>reselta()} style={{marginTop:"10px"}} value={"="} >=</button>
        </div>
        </div>
      </div></center></div>
</div>
    </div>
  )
}