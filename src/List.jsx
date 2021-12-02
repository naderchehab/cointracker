import React, { useState, useEffect } from 'react';

const List = () => {
  const [data, setData] = useState([]);
  
  useEffect(async () => {
    const response = await fetch('/data')
    const data = await response.json()
    setData(data)
    console.log(data)
  }, [])

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default List