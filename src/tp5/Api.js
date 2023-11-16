import React, { useEffect, useState } from 'react'

  
export default function Api() {
    const [imag1,setimage1]=useState()
    const [imag2,setimage2]=useState()
    const [imag3,setimage3]=useState()
    const [imag4,setimage4]=useState()
    const [imag5,setimage5]=useState()
    const [imag6,setimage6]=useState()
    const [imag7,setimage7]=useState()
    const [imag8,setimage8]=useState()
    const [datas,setdata]=useState([])
    const [page,setpage]=useState(1)
    const pageadd=()=>{
       if (page!==20) {
        setpage(page+1)
        
       } else{ setpage(1)} 
    }
    const pagesup=()=>{
        if (page!==1) {
         setpage(page-1)
       
        } else{ setpage(1)} 
     }
    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage1(data[0].url))
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage2(data[0].url))
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage3(data[0].url))
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage4(data[0].url))

    },[])
    useEffect(()=>{
 
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage5(data[0].url))
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage6(data[0].url))
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage7(data[0].url))
        fetch("https://api.thecatapi.com/v1/images/search").then(res=>{return res.json()}).then(data=>setimage8(data[0].url))

    },[])
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`).then(res=>{return res.json()}).then(data=>setdata(data))
    },[page])
    console.log(datas)
    
  return (

   <div className=''> 
  <center>
    <center><h1 className='text-3xl sm:text-3xl'>Tp1_Api</h1></center><br />
    <h3 className='text-xl sm:text-2xl'>liste des image avec la methode fetch</h3>
    <div className="container grid grid-cols-1 sm:space-x-10  sm:grid-cols-4 ">
    
        <div className=" "><img src={imag1} width={"250px"}  className=" rounded-2xl mt-11 h-64"/></div>
      <div className=" "><img src={imag2} width={"250px"}  className=" rounded-2xl mt-11 h-64" /></div>
      <div className=" "><img src={imag3} width={"250px"}  className=" rounded-2xl mt-11 h-64"/></div>
      <div className=" "><img src={imag4} width={"250px"}  className=" rounded-2xl mt-11 h-64"/></div>
    
   
    </div>
  </center>
  <br /><br /><br />
  <center>
    <h3 className='text-xl sm:text-2xl'>liste des image avec la methode axios</h3>
    <div className="container grid grid-cols-1 sm:space-x-10  sm:grid-cols-4 justify-center ">
    
      <div className=""><img src={imag5} width={"250px"} className=" rounded-2xl mt-11 h-64"/></div>
      <div className=" "><img src={imag6} width={"250px"}  className=" rounded-2xl mt-11 h-64"/></div>
      <div className=" "><img src={imag7} width={"250px"}  className=" rounded-2xl mt-11 h-64"/></div>
      <div className=" "><img src={imag8} width={"250px"}  className=" rounded-2xl mt-11 h-64"/></div>
    
   
    </div>
  </center>
  <br /><br /><br />
  <center><h1 className='text-xl sm:text-2xl'>Tp2_Api</h1></center><br />
  <center>
  <ul>
    {datas.map((el,id)=><li key={id}>{el.title}</li>)}
  </ul>
  <div className=" space-x-6">
    <button  className=' bg-blue-500 rounded-lg w-10 h-7' onClick={()=>pagesup()}>{"<<<"}</button>
  <button  className=' bg-blue-500 rounded-lg w-10 h-7'onClick={()=>pageadd()}>{">>>"}</button></div>
  </center>
</div>

    
  )
}
