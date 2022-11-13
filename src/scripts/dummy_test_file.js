const fetch = require('node-fetch');
const conversionHash = require("./conversion.js");
let malariaUrl = 'https://ghoapi.azureedge.net/api/MALARIA_EST_DEATHS?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let tuberculosisUrl = 'https://ghoapi.azureedge.net/api/TB_e_mort_exc_tbhiv_num?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let HIVUrl = 'https://ghoapi.azureedge.net/api/HIV_0000000006?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let polioUrl = 'https://ghoapi.azureedge.net/api/VACCINEPREVENTABLE_WILDPOLIO?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let guineaWormUrl = 'https://ghoapi.azureedge.net/api/NTD_3?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let leprosyUrl = 'https://ghoapi.azureedge.net/api/NTD_LEPR5?$filter=SpatialDimType%20eq%20%27COUNTRY%27';


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
    fetch(polioUrl).then(response => {
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
    for (let i = 1000; i < data.length; i++) {
        if (data[i].NumericValue === null) {
            table.push([data[i].SpatialDim,0,data[i].TimeDim])
        } else {
        table.push([data[i].SpatialDim,data[i].NumericValue,data[i].TimeDim])
        }
        console.log(table[i-1000]+'')
    }
    
}

printArray()


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