module.exports.getCurrencies = (currencyList) => {

    return Object.keys(currencyList)

};


module.exports.getCurrencyValue = (to, from, value, currencyList) => {


    if (!currencyList.hasOwnProperty(to)) {
        return {
            success: false,
            error: 'To currency not supported'
        }
    }
    if (!currencyList.hasOwnProperty(from)) {
        return {
            success: false,
            error: 'From currency not supported'
        }
    }
    return {
        success: true,
        value: (currencyList[to] / currencyList[from]) * value
    }


    // return (toCurrency/fromCurrency)*value


};