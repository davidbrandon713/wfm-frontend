import React, { useRef } from 'react'

const ItemInfoComponent = ({ itemInfo, setItemInfo, setOrders, setDark }) => {
	const searchRef = useRef()
	//const thisItem = itemInfo.items_in_set.filter((item) => {item})

  const getOrders = async () => {
		const item = searchRef.current.value.split(' ').join('_').toLowerCase()
		await fetch(`http://localhost:3002/${item}`, {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		})
			.then((res) => res.json())
			.then((data) => setItemInfo(data))
      .then(
        await fetch(`http://localhost:3002/${item}/orders`, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((res) => res.json())
          .then((data) => setOrders(data))
      )
	}

	return (
		<div className="item-info-container">
			{itemInfo && (
				<div className="item-info-image-container">
					<img
						alt=""
						src={`https://warframe.market/static/assets/${itemInfo?.icon}`}
						style={{ width: '200px' }}
					/>
				</div>
			)}
			<div className="item-info-main-container">
				<div className="main-controls">
					<button onClick={getOrders}>Get Orders</button>
					<input
						ref={searchRef}
						type="search"
						defaultValue={'ash prime set'}
					/>
					<button onClick={() => setDark}>Dark Mode</button>
				</div>
				<h1 className="item-info-title">
					<a href={itemInfo?.en?.wiki_link}>{itemInfo?.en?.item_name}</a>
				</h1>
				<p className="item-info-description">{itemInfo?.en?.description}</p>
			</div>

			{itemInfo && (
				<div className="item-info-secondary-container">
					<div>
						<p>Trading tax:</p>
						<p>{itemInfo?.trading_tax}</p>
					</div>
					<div>
						<p>Mastery rank:</p>
						<p>{itemInfo?.mastery_level}</p>
					</div>
					<div>
						<p>Ducats:</p>
						<p>{itemInfo?.ducats}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default ItemInfoComponent
