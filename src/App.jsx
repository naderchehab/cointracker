import React, { useState, useEffect } from 'react';
import List from './List'

const App = () => {
  const [coinData, setCoinData] = useState({});
  
  useEffect(async () => {
    const response = await fetch('/data')
    const data = await response.json()
    setCoinData(data)
  }, [])

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <List isShowWallet={coinData.isShowWallet} coinList={coinData.coinList || []} />
      <div>{coinData.subtotal}</div>
    </div>
  );
}

export default App;
