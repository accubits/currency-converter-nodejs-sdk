let unirest = require('unirest');
let config = require('../config');

module.exports = () => {

    return new Promise((resolve, reject) => {

        unirest.get(`${config.convertionJSON_URL}`)
            .end(response => {
                // console.log(response.body);
                // console.log(response.status);
                if (response.status >= 200 && response.status <= 299) {
                  console.log(Object.keys(response.body))
                    if (response.body.success) {
                        resolve(response.body.rates);
                        return;
                    }
                    reject(false);
                    return;
                }
                reject(false);
                return;
            });

    });

};
