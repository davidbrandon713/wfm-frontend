import React, { useState } from 'react'
import ErrorBoundry from './components/error-boundry'
import Header from './components/header'
import Scroll from './components/scroll'
import Listing from './components/listing'

function App() {
  const [item, setItem] = useState('Sample Text')
  const [orders, setOrders] = useState([])
  const [dark, setDark] = useState(true)

  console.log('render App')

  const theme = {
    backgroundColor: dark ? '#333' : '#fffafa',
    color: dark ? '#fffafa' : '#333',
  }

  // const filteredItems =  items.sort((prevItem, item) => {
  //   return item.platinum < prevItem.platinum
  // })

  return (
    <div className="app-container">
      <Header
        setOrders={setOrders}
        setItem={setItem}
        setDark={setDark}
      />
      <ErrorBoundry>
        <Scroll dark={dark}>
          <div
            className="list-container"
            style={theme}
          >
            <div className="sell-list-container">
              {orders
                ? orders
                    .filter((order) => order.order_type === 'sell')
                    .sort((order, nextOrder) => {
                      return order.platinum - nextOrder.platinum
                    })
                    .map((order) => {
                      return (
                        <Listing
                          item={item}
                          order={order}
                          key={order.creation_date}
                        />
                      )
                    })
                : null}
            </div>
            <div className="buy-list-container">
              {orders
                ? orders
                    .filter((order) => order.order_type === 'buy')
                    .sort((order, nextOrder) => {
                      return nextOrder.platinum - order.platinum
                    })
                    .map((order) => {
                      return (
                        <Listing
                          item={item}
                          order={order}
                          key={order.creation_date}
                        />
                      )
                    })
                : null}
            </div>
          </div>
        </Scroll>
      </ErrorBoundry>
    </div>
  )
}

export default App
