import React, { useState, useEffect } from 'react'

const Scroll = ({ children, dark }) => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }
  }, [])

  return (
    <div
      className="scroll-container"
      style={{
        height: windowSize.height - 60,
        scrollbarColor: dark ? '#fffafa #333' : '#333 #fffafa',
      }}
    >
      {children}
    </div>
  )
}

export default Scroll
