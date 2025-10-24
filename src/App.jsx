import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

// Set time everytime the App renders
  useEffect(()=>{
          // Update the time after every 1000ms
    const Interval = setInterval(()=>{
      setTime(new Date())
    },1000)

        //clear time if we unmount the app
          // return(
          //   clearInterval(Interval)
          // );
  
  },[])


// time is an object now
  //we have to format it

  function formatTime (){
    let hours = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    const meridien = hours <= 12 ? `AM`: `PM`;

    return(
      `${padZero(hours)}:${padZero(mins)}:${padZero(sec)}:${meridien}`
    );
  }

// If the hrs/mins/secs are less than 10..we 
// need to add a zero infront of the first number

    function padZero (number){
      return(
        (number <10 ? "0":"") + number
      );
    }



  return (
    <>
      {/* for screen readers */}
      <p className='sr-only' >This is a digital clock app. The time right now is  </p>

      <div className="card" tabIndex={0} role='stopwatch_display'>
        <h1 className="time"><span>{formatTime()}</span></h1>
      </div>

    </>
  )
}

export default App
