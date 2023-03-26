import React, { useRef } from 'react'

const Header = ({ setOrders, setItem, setDark }) => {
  const searchRef = useRef()

  const getOrders = async () => {
    const item = searchRef.current.value.split(' ').join('_').toLowerCase()
    await fetch(`http://localhost:3002/${item}/orders`, {
      methid: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
    await fetch(`http://localhost:3002/${item}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => setItem(data))
  }

  return (
    <div className="header">
      <div className="title-container">
        <h1>Warframe Market API Test</h1>
      </div>
      <button onClick={getOrders}>Get Orders</button>
      <input
        ref={searchRef}
        type="search"
        defaultValue={'ash prime set'}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Dark Mode
      </button>
    </div>
  )
}

export default Header
