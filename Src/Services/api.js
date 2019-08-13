
const STAGING = "http://dummy.restapiexample.com/api/v1/employees";
const ENVIRONMENT = STAGING;

const COUNTRIES = "https://restcountries.eu/rest/v2/all";
const ENVIRONMENT1 = COUNTRIES;

module.exports = {
    getDataList() {
        // console.log(params, "Params")
        return fetch(`${ENVIRONMENT}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json()
                .then(data => {
                    return data;
                }))
    },
    getCountryList() {
        console.log("GET API called");
        
        return fetch(`${ENVIRONMENT1}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json()
                .then(data => {
                    console.log("API RESPONSE",data);
                    
                    return data;
                }))
    },
}
// module.exports = {
//     getCountryList() {
//         // console.log(params, "Params")
//         return fetch(`${ENVIRONMENT1}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then(response => response.json()
//         .then(data=>{
//             return data;
//         }))
//     },
// }