
const STAGING = "http://dummy.restapiexample.com/api/v1/employees";
const ENVIRONMENT = STAGING;

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
        .then(data=>{
            return data;
        }))
    },
}