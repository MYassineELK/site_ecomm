import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function Tp3_react() {
  var [actione,setaction]=useState(true)
  // var [styles,setstyles]=useState(true)
  var [taches,settaches]=useState([])
  var tache=useRef()
  const actiont=()=>{
    setaction(!actione)
  }
  const ajout=()=>{
    var c=taches
    if (tache.current.value!="") {
      var tashe={id:uuidv4(),tach:tache.current.value,style:false}
    var newtaxe=[...c,tashe]
    settaches(newtaxe)
    }
    
  }
  const styles=(i)=>{
    var novo=taches.map((el)=>{
      if (el.id==i) {
        return {...el,style:!el.style}
      }
      return el
    })
    settaches(novo)
    
  }
  const sup=(ide)=>{
    var c=taches.filter((el)=>el.id!=ide)
    settaches(c)
  }
  return (
    <div className='container' style={{margin:"auto"}} >
     <div className='row'>
      <div className='col-12'>
        <center>
           <h1 className=' text-2xl'>Tp3_react</h1><br/>
              <input type="button" value="+  Ajout" style={{display:!actione?"":"none"}} className='btn btn-danger w-7/12 sm:w-7/12 bg-red-700' onClick={actiont} />
                 <br />
                   <br /><div className='w-12/12 sm:w-6/12'>
                       <div >
                        <div className='col-12 bg-dark' style={{display:actione?"":"none",height:"100%",borderRadius:"15px" ,marginTop:"-2px"}}>
                          <div className='row'>
                             <div className='col-10'></div>
                             <button className='btn col-2' onClick={actiont} style={{color:"red",border:"none"}}>x</button>
                          </div> 
                          <form action="">
                            <center>
                              <div className=' col-11'><br />
                              <input type="text" ref={tache} className='form-control' placeholder='Ajoute un tache' />
                              </div>
                              </center><br />
                              <input type="button" className='btn btn-primary col-4' onClick={ajout  }  value="Ajoute" style={{marginBottom:"10px",marginLeft:"12px"}}/>
                          </form>
                          <div>{taches.map((el,i)=>
                          <div key={i} className='col-9'  style={{backgroundColor:"white",height:"45px",marginBottom:"10px", marginTop:"10px",borderRadius:"10px" }}>
                            <span style={{display:"flex",justifyContent:"start",marginLeft:"12px"}}>
                              <div className='col-1'>
                              </div>
                               <h6  style={{display:"flex",justifyContent:"start",textDecoration:el.style?"line-through":"",marginTop:"9px",color:'black'}} onClick={()=>styles(el.id)} className='col-10'>{el.tach}</h6>
                               <img onClick={()=>sup(el.id)} style={{width:"25px",marginTop:"8px",height:"25px",display:"flex",justifyContent:"end"}} className='col-1' src={require("./x-button.png")} alt="" /> 
                            </span>
                          </div>)}
                        </div><br />
                      </div>
                    <div>
                  </div>
                </div>
              </div>
            </center>
          </div>
       </div>
       <br />
</div>
  )
}