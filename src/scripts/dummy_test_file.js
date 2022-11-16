const fetch = require('node-fetch');
// const conversionHash = require("./conversion.js");
let malariaUrl = 'https://ghoapi.azureedge.net/api/MALARIA_EST_DEATHS?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let tuberculosisUrl = 'https://ghoapi.azureedge.net/api/TB_e_mort_exc_tbhiv_num?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let HIVUrl = 'https://ghoapi.azureedge.net/api/HIV_0000000006?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let polioUrl = 'https://ghoapi.azureedge.net/api/VACCINEPREVENTABLE_WILDPOLIO?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let guineaWormUrl = 'https://ghoapi.azureedge.net/api/NTD_3?$filter=SpatialDimType%20eq%20%27COUNTRY%27';
let leprosyUrl = 'https://ghoapi.azureedge.net/api/NTD_LEPR5?$filter=SpatialDimType%20eq%20%27COUNTRY%27';




function printArray() {
    fetch(malariaUrl).then(response => {
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
        if (data[i].Value == "No malaria") {
            table.push([data[i].SpatialDim])
            console.log(`'${table[i][0]}',`)    
        }
    }
}

// printArray()




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

const dumbArray = ['GNB',
'GNQ',
'LBR',
'LSO',
'MUS',
'SYC',
'TGO',
'ATG',
'BHS',
'BRB',
'CAN',
'CHL',
'CUB',
'DMA',
'GRD',
'JAM',
'KNA',
'LCA',
'TTO',
'URY',
'USA',
'VCT',
'ARE',
'BHR',
'EGY',
'IRQ',
'JOR',
'KWT',
'LBN',
'LBY',
'MAR',
'OMN',
'QAT',
'SYR',
'TUN',
'ALB',
'AND',
'AUT',
'AZE',
'BEL',
'BGR',
'BIH',
'BLR',
'CHE',
'CYP',
'CZE',
'DEU',
'DNK',
'ESP',
'EST',
'FIN',
'FRA',
'GBR',
'GRC',
'HRV',
'HUN',
'IRL',
'ISL',
'ISR',
'ITA',
'KAZ',
'LTU',
'LUX',
'LVA',
'MCO',
'MDA',
'MKD',
'MLT',
'MNE',
'NLD',
'NOR',
'POL',
'PRT',
'ROU',
'RUS',
'SMR',
'SRB',
'SVK',
'SVN',
'SWE',
'TKM',
'TUR',
'UKR',
'MDV',
'AUS',
'BRN',
'COK',
'FJI',
'FSM',
'JPN',
'KIR',
'MHL',
'MNG',
'NIU',
'NRU',
'NZL',
'PLW',
'SGP',
'TON',
'TUV',
'WSM',
'DZA',
'ARG',
'PRY',
'SLV',
'ARE',
'EGY',
'IRN',
'IRQ',
'MAR',
'OMN',
'SYR',
'ARM',
'AZE',
'GEO',
'KAZ',
'KGZ',
'TJK',
'TKM',
'TUR',
'UZB',
'LKA',
'CHN',
'MYS']

for (let i = 80; i < dumbArray.length; i++) {
    for (let j = 2000; j < 2021; j++) {
        console.log(dumbArray[i]+`,0,${j}`)
    }
}