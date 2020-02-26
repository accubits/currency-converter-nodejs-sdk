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

    convert: async (from, to, value) => {
        try {

            let data = await getData();
            return calculate.getCurrencyValue(to, from, value, data)
        } catch (e) {
            console.error(e);
        }
    }

};


;