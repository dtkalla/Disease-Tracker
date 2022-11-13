const fakeData = [
    [ 'AFG', 0 ],  [ 'DZA', 0 ],  [ 'AND', 0 ],  [ 'ARM', 0 ],  [ 'AUT', 0 ],
    [ 'BHR', 0 ],  [ 'BLR', 0 ],  [ 'BTN', 0 ],  [ 'BGR', 0 ],  [ 'CRI', 0 ],
    [ 'CYP', 0 ],  [ 'PRK', 0 ],  [ 'DJI', 0 ],  [ 'ECU', 0 ],  [ 'EST', 0 ],
    [ 'GMB', 0 ],  [ 'DEU', 0 ],  [ 'HUN', 0 ],  [ 'ISL', 0 ],  [ 'IRQ', 0 ],
    [ 'IRL', 0 ],  [ 'ISR', 0 ],  [ 'JAM', 0 ],  [ 'JPN', 0 ],  [ 'JOR', 0 ],
    [ 'KWT', 0 ],  [ 'KGZ', 0 ],  [ 'LVA', 0 ],  [ 'LBN', 0 ],  [ 'LTU', 0 ],
    [ 'MDV', 0 ],  [ 'MLT', 0 ],  [ 'MCO', 0 ],  [ 'NOR', 0 ],  [ 'PAN', 0 ],
    [ 'POL', 0 ],  [ 'QAT', 0 ],  [ 'ROU', 0 ],  [ 'RUS', 0 ],  [ 'SMR', 0 ],
    [ 'SAU', 0 ],  [ 'SYC', 0 ],  [ 'SVK', 0 ],  [ 'SVN', 0 ],  [ 'SUR', 0 ],
    [ 'SWE', 0 ],  [ 'SYR', 0 ],  [ 'TUN', 0 ],  [ 'TKM', 0 ],  [ 'ARE', 0 ],
    [ 'USA', 0 ],  [ 'AUS', 1 ],  [ 'ERI', 1 ],  [ 'GAB', 1 ],  [ 'IRN', 1 ],
    [ 'MAR', 1 ],  [ 'NAM', 1 ],  [ 'NLD', 1 ],  [ 'VUT', 1 ],  [ 'VEN', 1 ],
    [ 'COM', 2 ],  [ 'SLV', 2 ],  [ 'FRA', 2 ],  [ 'GNB', 2 ],  [ 'PER', 2 ],
    [ 'URY', 2 ],  [ 'GNQ', 3 ],  [ 'RWA', 3 ],  [ 'KHM', 4 ],  [ 'DOM', 4 ],
    [ 'FSM', 4 ],  [ 'BOL', 5 ],  [ 'LAO', 6 ],  [ 'TLS', 6 ],  [ 'KIR', 7 ],
    [ 'MEX', 7 ],  [ 'YEM', 7 ],  [ 'MLI', 9 ],  [ 'THA', 9 ],  [ 'COG', 12 ],
    [ 'MYS', 15 ], [ 'PHL', 15 ], [ 'ZWE', 15 ], [ 'CMR', 16 ], [ 'SLE', 16 ],
    [ 'ARG', 17 ], [ 'CUB', 18 ], [ 'AGO', 20 ], [ 'PRY', 21 ], [ 'GHA', 24 ],
    [ 'MWI', 24 ], [ 'BEN', 26 ], [ 'COL', 26 ], [ 'EGY', 29 ], [ 'PAK', 31 ],
    [ 'TGO', 37 ], [ 'GIN', 43 ], [ 'PNG', 50 ], [ 'BFA', 59 ], [ 'TCD', 66 ],
    [ 'CHN', 72 ],  [ 'SOM', 73 ],
    [ 'LKA', 81 ],   [ 'NER', 88 ],  [ 'UGA', 92 ],  [ 'NPL', 101 ],
    [ 'SDN', 115 ],  [ 'TZA', 115 ], [ 'CIV', 128 ], [ 'BGD', 137 ],
    [ 'SSD', 152 ],  [ 'MMR', 179 ], [ 'MDG', 285 ], [ 'ETH', 384 ],
    [ 'MOZ', 399 ],  [ 'COD', 418 ], [ 'IDN', 628 ], [ 'BRA', 1504 ],
    [ 'IND', 1572 ], [ 'BRN', 0 ],   [ 'MNG', 0 ],   [ 'SLB', 3 ],
    [ 'VNM', 13 ]]

const csvData = function(data = fakeData) {
    let string = '';
    for (let i = 0; i < data.length; i++) {
        string += data[i][0]+','+data[i][1]+'\n'
    }
    return string
}

console.log(csvData())