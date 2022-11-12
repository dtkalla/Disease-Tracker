const fetch = require('node-fetch');
const conversionHash = require("./conversion.js");
let url = 'https://ghoapi.azureedge.net/api/MALARIA_EST_DEATHS?$filter=SpatialDimType%20eq%20%27COUNTRY%27and%20TimeDim%20eq%202020';
let url2 = 'https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues'

// async function getData() {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw response;
//     }
//     const data = await response.json();
    
//     // console.log(data["value"][0]);
    
//     return data
// }
// getData()



function printArray() {
    fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then(data => {
        arrayTable(data["value"]);
    })
}

function arrayTable(data) {
    const table = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].NumericValue === null) {
            // table.push([conversionHash[data[i].SpatialDim],0])
        } else {
        table.push([conversionHash[data[i].SpatialDim],data[i].NumericValue])
        }
    }
    console.log(table)
    
}



// const req = new XMLHttpRequest();
// req.open("GET", url, false);
// // req.send()

// // data = data2["value"]
// console.log(req)




// function getCountryByCode(code) {
//   return data.filter(
//       function(data) { return data.SpatialDim == code }
//   );
// }



// const found = getCountryByCode('NGA');
// console.log(found[0].NumericValue);




// console.log(dataTable())

printArray()





// function makeConversion() {
//     fetch(url).then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not OK');
//         }
//         return response.json();
//     })
//     .then(data => {
//         arrayTable(data["value"]);
//     })
// }

// function arrayTable(data) {
//     const table = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].NumericValue === null) {
//             table.push([0,data[i].SpatialDim])
//         } else {
//             table.push([parseInt(data[i].NumericValue),data[i].SpatialDim])
//         }
//     }
//     console.log(table)
// }