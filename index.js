let getData = require('./modules/getData');
let calculate = require('./modules/calculate');


module.exports = {

    getCurrencies: async () => {
        try {
            let data = await getData();
            return calculate.getCurrencies(data);
        } catch (e) {
            console.error(e);
        }
    },

    exchange: async (from, to, value) => {
        try {

            let data = await getData();
            return calculate.getCurrencyValue(to, from, value, data)
        } catch (e) {
            console.error(e);
        }
    }

};


// module.exports.getCurrencies().then(res=>{
//     console.log(res)
// })
module.exports.exchange('USD','INR',200).then(res=>{
    console.log(res)
})