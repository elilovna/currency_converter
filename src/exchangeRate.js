export const exchangeRate = (a, b) => {
    const countriesUrl = `https://free.currencyconverterapi.com/api/v6/convert?q=${a}_${b}&compact=ultra&apiKey=3b2a7e069d26dfd23bab`
    return fetch(countriesUrl)
        .then(res => res.json())
        .catch((error) => {
            console.log(error)
        })
}