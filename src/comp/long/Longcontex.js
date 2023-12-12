import { createContext, useState } from "react";

export const Longcontx=createContext()
import React from 'react'

export default function Longcontex({children}) {
    const [long,setLang]=useState("fr")
  return (
    <div>
      <Longcontex value={{long,setLang}} >
        {children}
      </Longcontex>
    </div>
  )
}
