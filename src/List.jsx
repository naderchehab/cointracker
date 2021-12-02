import React from 'react';

const List = (props) => {
  return (
    <table className="rtable">
      <tr>
        {props.isShowWallet && <th>Wallet</th>}
        <th>Coin</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      {props.coinList.map(coin =>
      <tr>
        {props.isShowWallet && <td>{coin.wallet}</td>}
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