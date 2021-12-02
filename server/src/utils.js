function getCoinList(coins, data, isShowWallets) {
    let coinList
    if (isShowWallets) {
        coinList = coins.map(coin => {
            const price = data.data[coin.coin].quote.USD.price
            return {
                wallet: coin.wallet,
                coin: coin.coin,
                price,
                qty: coin.qty,
                total: coin.qty * price
            }
        })
    } else {
        const coinObj = coins.reduce((acc, coin) => {
            const price = data.data[coin.coin].quote.USD.price
            const result = {
                coin: coin.coin,
                price,
                qty: coin.qty + ((acc[coin.coin] || {}).qty || 0)
            }
            result.total = result.qty * result.price
            acc[coin.coin] = result
            return acc
        }, {})
        coinList = Object.keys(coinObj).map(coin => {
            return {
                coin,
                price: coinObj[coin].price,
                qty: coinObj[coin].qty,
                total: coinObj[coin].total
            }
        })
    }
    return coinList
}

function getSubtotal(coinList) {
    const subtotal = coinList.reduce((acc, coin) => {
        acc += coin.total
        return acc
    }, 0)
}

export {
    getCoinList,
    getSubtotal
}