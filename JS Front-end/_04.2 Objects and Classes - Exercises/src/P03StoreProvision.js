function storeProvision(stockArr, orderArr) {

    let stock = [];
    for (let i = 0; i < stockArr.length; i += 2) {
        stock[stockArr[i]] = stockArr[i + 1];
    }
    for (let i = 0; i < orderArr.length; i += 2) {
        let product = orderArr[i];
        if (stock.hasOwnProperty(product)) {
            let current = Number(stock[product]);
            stock[product] = current + Number(orderArr[i + 1]);
        } else {
            stock[orderArr[i]] = orderArr[i + 1];
        }
    }

    for(let key in stock) {
        console.log(key + " -> " + stock[key]);
    }

}