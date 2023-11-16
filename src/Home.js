import React from 'react'
import "./Home.css"
export default function Home() {
  return (
    <div>
        <br /><br />
   <div className="carde w-full sm:w-2/3 h-36">
  <div className="loader">
    <p className=' text-xl sm:text-3xl'>Cliquez sur la barre de navigation pour voir : </p>
    <div className="words text-lg sm:text-2xl mt-1 sm:block  hidden mr-5 w-28 sm:w-32">
      <span className="word">tp1 react</span>
      <span className="word">tp2 react</span>
      <span className="word">tp3 react</span>
      <span className="word">tp4 react</span>
      <span className="word">tp5 react</span>
    </div>
    <div className="words text-xl sm:text-2xl mt-3 block sm:hidden mr-5 w-28 sm:w-32">
      <span className="word">tp1 </span>
      <span className="word">tp2 </span>
      <span className="word">tp3 </span>
      <span className="word">tp4 </span>
      <span className="word">tp5 </span>
    </div>
  </div>
</div>

</div>
    
  )
}
