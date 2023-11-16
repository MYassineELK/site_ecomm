import React from 'react'

export default function Notfound() {
  return (
    <div>
<center>
<div className='flex  space-x-9sm:space-x-24 justify-center w-full sm:w1/2 '>
<img src={require("./img/not-found.png")} alt="" className='w-1/2 sm:w-1/3 sm:h-1/3' />
<img src={require("./img/error.png")} alt="" className='w-1/2 sm:w-1/3 sm:h-1/5' />
</div>

</center>
    </div>
  )
}
