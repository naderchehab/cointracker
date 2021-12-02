import React from 'react';

const List = (props) => {
  return (
    <table>
      <tr>
        <th>Wallet</th>
        <th>Coin</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      {props.coinList.map(coin =>
      <tr>
        <td>{coin.wallet}</td>
        <td>{coin.coin}</td>
        <td>{coin.qty}</td>
        <td>{coin.price}</td>
        <td>{coin.total}</td>
      </tr>
    )}
    </table>
  )
}

export default List