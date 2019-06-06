export const getCurrencies = () => {
    const url = "https://free.currencyconverterapi.com/api/v6/currencies?apiKey=3b2a7e069d26dfd23bab"
   return  fetch(url)
        .then(res => res.json())
        .catch((error) => {
            console.log(error)
        })
}