import React, { useEffect, useState } from 'react'

function Eyes() {

  const [angle, setAngle] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX
      let mouseY = e.clientY

      let deltaX =  mouseX - window.innerWidth/2
      let deltaY =  mouseY - window.innerHeight/2
      
      let mouseAngle = (Math.atan2(deltaY, deltaX) * 180/Math.PI)
      setAngle(mouseAngle - 180)

    })
  }, [])

  return (
    <div  className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed='-0.3' className="relative w-full bg-cover bg-center h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
      <div className="absolute top-1/2 -translate-y-1/2 flex gap-10 left-1/2 -translate-x-1/2 ">
        
        <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
          <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              <div style={{ transform: `rotate(${angle}deg)` }} className={`w-[95%]`}>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-full"></div>
              </div>
            
          </div>
        </div>
        
        <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
          <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
          <div style={{ transform: `rotate(${angle}deg)` }} className="w-[95%]">
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-full"></div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Eyes
