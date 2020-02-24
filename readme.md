  
   ![alt text <>](https://accubits-image-assets.s3-ap-southeast-1.amazonaws.com/currency-converter/currency.png "")


# Currency Converter
[](https://accubits-image-assets.s3-ap-southeast-1.amazonaws.com/currency-converter/currency.png)


A currency convertion utility , which can be used to calculate the forex value of te currency.


## Installation

Install the package with:

`npm i @accubits/currency-converter`

 ## USAGE

````javascript
	let converter = require('@accubits/currency-converter')
````

 #### Get Available currencies

````javascript
	let converter = require('@accubits/currency-converter')
	converter.getCurrencies().then(currencies=>{  
    console.log(res)  
 })
````

#### Conversions

Example : Convert 200 USD to INR

````javascript
	let converter = require('@accubits/currency-converter')
	converter.exchange('USD','INR',200).then(res=>{  
    console.log(res)  
})
````