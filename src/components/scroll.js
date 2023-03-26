import React, { useState, useEffect } from 'react'

const Scroll = ({ children, dark }) => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
  })

  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        height: window.innerHeight,
      })
    }
  }, [])

  return (
    <div
      className="scroll-container"
      style={{
        height: windowSize.height - 60,
        scrollbarColor: dark ? '#fffafa #333' : 'rgb(48, 43, 49) #fffafa',
      }}
    >
      {children}
    </div>
  )
}

export default Scroll
