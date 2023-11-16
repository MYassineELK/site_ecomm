import React, { createContext, useState } from 'react'

export default function Contex({children}) {
    const [dark,setdark]=useState(false)
  return (
    <Modepage.Provider value={{dark,setdark}}>
        {children}
    </Modepage.Provider>
  )
}
export const Modepage=createContext();
