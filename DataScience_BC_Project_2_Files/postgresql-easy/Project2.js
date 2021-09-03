fetchFinancialData = () => {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "746c6f255bmshb7c8057b093750dp14f68ejsnae97022f2103"
            }
        })
    .then(response => response.json())
    .then(data => {
        const x = data.quoteResponse.result
        console.log(x);
        for (let i =0; i < x.length; i++) {
            console.log(x[i].symbol)
        }
    }) 
    .catch(err => {
        console.error(err);
    });
}
fetchFinancialData();





