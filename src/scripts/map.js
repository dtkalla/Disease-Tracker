import Sidebar from "./sidebar.js";


function htmlString() {return `<svg id="my_dataviz">
<script>
  const svg = d3.select("svg"),
    width = svg.attr("width"),
    height = svg.attr("height");
  
  const path = d3.geoPath();
  const projection = d3.geoNaturalEarth1()
    .scale(150)
    .center([0,0])
  
  const data = d3.map();
  const colorScale = d3.scaleThreshold()
    .domain([-1,0,1,4,18,79,341,1465,6300,27072,116345])
    .range(['#FFFFFF','#888888','#EEEEEE', '#FFF5F0', '#FEE0D2', '#FCBBA1', '#FC9272', '#FB6A4A', '#EF3B2C', '#CB181D', '#A50F15', '#67000D']);

  d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .defer(d3.csv, \`./src/scripts/data/malaria.csv\`, function(d) { if (d.year==2020) {data.set(d.name, +d.cases)}; })
    .await(ready);
  
  function ready(error, topo) {
  
    let mouseOver = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)
        .style("stroke", "black")
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black");
        

      console.log(d.total === -1 ? "No data" : d.total);
      const conversionHash = {
        ABW: 'Aruba',
        AFG: 'Afghanistan',
        AGO: 'Angola',
        AIA: 'Anguilla',
        ALB: 'Albania',
        AND: 'Andorra',
        ARE: 'United Arab Emirates',
        ARG: 'Argentina',
        ARM: 'Armenia',
        ASM: 'American Samoa',
        ATG: 'Antigua and Barbuda',
        AUS: 'Australia',
        AUT: 'Austria',
        AZE: 'Azerbaijan',
        BDI: 'Burundi',
        BEL: 'Belgium',
        BEN: 'Benin',
        BFA: 'Burkina Faso',
        BGD: 'Bangladesh',
        BGR: 'Bulgaria',
        BHR: 'Bahrain',
        BHS: 'Bahamas',
        BIH: 'Bosnia and Herzegovina',
        BLR: 'Belarus',
        BLZ: 'Belize',
        BMU: 'Bermuda',
        BOL: 'Bolivia',
        BRA: 'Brazil',
        BRB: 'Barbados',
        BRN: 'Brunei',
        BTN: 'Bhutan',
        BWA: 'Botswana',
        CAF: 'Central African Republic',
        CAN: 'Canada',
        CHE: 'Switzerland',
        CHI: 'Channel islands',
        CHL: 'Chile',
        CHN: 'China',
        CIV: "Côte d'Ivoire",
        CMR: 'Cameroon',
        COD: 'Democratic Republic of the Congo',
        COG: 'Congo',
        COK: 'Cook Islands',
        COL: 'Colombia',
        COM: 'Comoros',
        CPV: 'Cabo Verde',
        CRI: 'Costa Rica',
        CUB: 'Cuba',
        CUW: 'Curaçao',
        CYM: 'Cayman Islands',
        CYP: 'Cyprus',
        CZE: 'Czechia',
        DEU: 'Germany',
        DJI: 'Djibouti',
        DMA: 'Dominica',
        DNK: 'Denmark',
        DOM: 'Dominican Republic',
        DZA: 'Algeria',
        ECU: 'Ecuador',
        EGY: 'Egypt',
        ERI: 'Eritrea',
        ESP: 'Spain',
        EST: 'Estonia',
        ETH: 'Ethiopia',
        FIN: 'Finland',
        FJI: 'Fiji',
        FLK: 'Falkland Islands (Malvinas)',
        FRA: 'France',
        FRO: 'Faroe Islands',
        FSM: 'Micronesia',
        GAB: 'Gabon',
        GBR: 'United Kingdom',
        GEO: 'Georgia',
        GHA: 'Ghana',
        GIB: 'Gibraltar',
        GIN: 'Guinea',
        GLP: 'Guadeloupe',
        GMB: 'Gambia',
        GNB: 'Guinea-Bissau',
        GNQ: 'Equatorial Guinea',
        GRC: 'Greece',
        GRD: 'Grenada',
        GRL: 'Greenland',
        GTM: 'Guatemala',
        GUF: 'French Guiana',
        GUM: 'Guam',
        GUY: 'Guyana',
        HKG: 'Hong Kong',
        HND: 'Honduras',
        HRV: 'Croatia',
        HTI: 'Haiti',
        HUN: 'Hungary',
        IDN: 'Indonesia',
        IMN: 'Isle of Man',
        IND: 'India',
        IRL: 'Ireland',
        IRN: 'Iran',
        IRQ: 'Iraq',
        ISL: 'Iceland',
        ISR: 'Israel',
        ITA: 'Italy',
        JAM: 'Jamaica',
        JOR: 'Jordan',
        JPN: 'Japan',
        KAZ: 'Kazakhstan',
        KEN: 'Kenya',
        KGZ: 'Kyrgyzstan',
        KHM: 'Cambodia',
        KIR: 'Kiribati',
        KNA: 'Saint Kitts and Nevis',
        KOR: 'South Korea',
        KWT: 'Kuwait',
        LAO: 'Laos',
        LBN: 'Lebanon',
        LBR: 'Liberia',
        LBY: 'Libya',
        LCA: 'Saint Lucia',
        LIE: 'Liechtenstein',
        LKA: 'Sri Lanka',
        LSO: 'Lesotho',
        LTU: 'Lithuania',
        LUX: 'Luxembourg',
        LVA: 'Latvia',
        MAC: 'Macao',
        MAR: 'Morocco',
        MCO: 'Monaco',
        MDA: 'Moldova',
        MDG: 'Madagascar',
        MDV: 'Maldives',
        ME1: 'Serbia and Montenegro',
        MEX: 'Mexico',
        MHL: 'Marshall Islands',
        MKD: 'North Macedonia',
        MLI: 'Mali',
        MLT: 'Malta',
        MMR: 'Myanmar',
        MNE: 'Montenegro',
        MNG: 'Mongolia',
        MNP: 'Northern Mariana Islands',
        MOZ: 'Mozambique',
        MRT: 'Mauritania',
        MTQ: 'Martinique',
        MUS: 'Mauritius',
        MWI: 'Malawi',
        MYS: 'Malaysia',
        MYT: 'Mayotte',
        NAM: 'Namibia',
        NCL: 'New Caledonia',
        NER: 'Niger',
        NGA: 'Nigeria',
        NIC: 'Nicaragua',
        NIU: 'Niue',
        NLD: 'Netherlands',
        NOR: 'Norway',
        NPL: 'Nepal',
        NRU: 'Nauru',
        NZL: 'New Zealand',
        OMN: 'Oman',
        PAK: 'Pakistan',
        PAN: 'Panama',
        PER: 'Peru',
        PHL: 'Philippines',
        PLW: 'Palau',
        PNG: 'Papua New Guinea',
        POL: 'Poland',
        PRI: 'Puerto Rico',
        PRK: 'North Korea',
        PRT: 'Portugal',
        PRY: 'Paraguay',
        PSE: 'Palestine',
        PYF: 'French Polynesia',
        QAT: 'Qatar',
        REU: 'Reunion',
        ROU: 'Romania',
        RUS: 'Russia',
        RWA: 'Rwanda',
        SAU: 'Saudi Arabia',
        SDF: 'Sudan',
        SDN: 'Sudan',
        SEN: 'Senegal',
        SGP: 'Singapore',
        SHN: 'Saint Helena',
        SLB: 'Solomon Islands',
        SLE: 'Sierra Leone',
        SLV: 'El Salvador',
        SMR: 'San Marino',
        SOM: 'Somalia',
        SPM: 'Saint Pierre and Miquelon',
        SRB: 'Serbia',
        SSD: 'South Sudan',
        STP: 'Sao Tome and Principe',
        SUR: 'Suriname',
        SVK: 'Slovakia',
        SVN: 'Slovenia',
        SWE: 'Sweden',
        SWZ: 'Eswatini',
        SXM: 'Sint Maarten',
        SYC: 'Seychelles',
        SYR: 'Syria',
        TCA: 'Turks and Caicos Islands',
        TCD: 'Chad',
        TGO: 'Togo',
        THA: 'Thailand',
        TJK: 'Tajikistan',
        TKL: 'Tokelau',
        TKM: 'Turkmenistan',
        TLS: 'Timor-Leste',
        TON: 'Tonga',
        TTO: 'Trinidad and Tobago',
        TUN: 'Tunisia',
        TUR: 'Türkiye (Turkey)',
        TUV: 'Tuvalu',
        TZA: 'Tanzania',
        UGA: 'Uganda',
        UKR: 'Ukraine',
        URY: 'Uruguay',
        USA: 'United States of America',
        UZB: 'Uzbekistan',
        VCT: 'Saint Vincent and the Grenadines',
        VEN: 'Venezuela',
        VGB: 'British Virgin Islands',
        VIR: 'Virgin Islands',
        VNM: 'Vietnam',
        VUT: 'Vanuatu',
        WSM: 'Samoa',
        YEM: 'Yemen',
        ZAF: 'South Africa',
        ZMB: 'Zambia',
        ZWE: 'Zimbabwe'
      }
      
      console.log(conversionHash[d.id])
    }
  
    let mouseLeave = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .8)
        .style("stroke", "transparent")
      d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "transparent")
    }
    function eventHandler(e) {
      const country = e.target;
    
      country.style.stroke = "red";
    }

    svg.append("g")
      .selectAll("path")
      .data(topo.features)
      .enter()
      .append("path")
        // draw each country
        .attr("d", d3.geoPath()
          .projection(projection)
        )
        // set the color of each country
        .attr("fill", function (d) {
          d.total = data.get(d.id);
          if (d.total === undefined) d.total = -1;
          return colorScale(d.total);
        })
        .style("stroke", "transparent")
        .attr("class", function(d){ return "Country" } )
        .style("opacity", .8)
        .on("mouseover", mouseOver )
        .on("mouseleave", mouseLeave )
      }

      
  </script>

</svg>`}

function htmlString2(chosenDisease,chosenYear) {return `<svg id="my_dataviz" width="850" height="450">
<script>
  
  d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .defer(d3.csv, \`./src/scripts/data/${chosenDisease}.csv\`, function(d) { if (d.year==\`${chosenYear}\`) {data.set(d.name, +d.cases)}; })
    .await(ready);
  
  function ready(error, topo) {
  
    let mouseOver = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)
        .style("stroke", "black")
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black")
    }
  
    let mouseLeave = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .8)
        .style("stroke", "transparent")
      d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "transparent")
    }
  
    svg.append("g")
      .selectAll("path")
      .data(topo.features)
      .enter()
      .append("path")
        // draw each country
        .attr("d", d3.geoPath()
          .projection(projection)
        )
        // set the color of each country
        .attr("fill", function (d) {
          d.total = data.get(d.id);
          if (d.total === undefined) d.total = -1;
          return colorScale(d.total);
        })
        .style("stroke", "transparent")
        .attr("class", function(d){ return "Country" } )
        .style("opacity", .8)
        .on("mouseover", mouseOver )
        .on("mouseleave", mouseLeave )
      }

      
  </script>

</svg>`}


var setInnerHTML = function(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

class Map {
        constructor(ele){
            this.ele = ele;
            this.year = 2020;
            this.disease = 'malaria';
            setInnerHTML(this.ele, htmlString());
            const sidebar = document.getElementById("context");
            this.sidebar = new Sidebar(sidebar)
        }
    
        resetMap(disease,year){
            this.disease = disease;
            this.year = year;
            setInnerHTML(this.ele, htmlString2("nulldata",2020));
            setInnerHTML(this.ele, htmlString2(disease,this.year));
            this.sidebar.resetSidebar(disease,year);
        }

    }


    export default Map;

