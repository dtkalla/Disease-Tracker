const fetch = require('node-fetch');
let url = 'https://ghoapi.azureedge.net/api/MALARIA_EST_DEATHS?$filter=SpatialDimType%20eq%20%27COUNTRY%27and%20TimeDim%20eq%202020';

async function getData() {
    const response = await fetch(url);
    if (!response.ok) {
        throw response;
    }
    const data = await response.json();

    return data;
}

getData()
    .then(data => console.log(data))
    .catch(errorResponse => console.log(errorResponse));



// data = data["value"]
// console.log(data)

// function getCountryByCode(code) {
//   return data.filter(
//       function(data) { return data.SpatialDim == code }
//   );
// }



// const found = getCountryByCode('NGA');
// console.log(found[0].NumericValue);


// const dataTable = function() {
//     const table = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].NumericValue === null) {
//             table.push([data[i].SpatialDim,0])
//         } else {
//             table.push([data[i].SpatialDim,data[i].NumericValue])
//         }
//     }
//     return table
// }

// console.log(dataTable())