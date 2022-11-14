// let htmlString = `<svg id="my_dataviz" width="850" height="450">
// <script>
//   const svg = d3.select("svg"),
//     width = svg.attr("width"),
//     height = svg.attr("height");
  
//   const path = d3.geoPath();
//   const projection = d3.geoNaturalEarth1()
//     .scale(120)
//     .center([0,0])
  
//   const data = d3.map();
//   const colorScale = d3.scaleThreshold()
//     .domain([-1,0,1,10,100,1000,10000,100000,100000])
//     .range(['#FFFFFF','#BBBBBB','#FFFFFF','#FFDDDD','#FCBBA1','#FC9272','#FB6A4A','#DE2D26','#A50F15','#750000']);

//   d3.queue()
//     .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
//     .defer(d3.csv, "./src/scripts/data/HIV.csv", function(d) { if (d.year==2020) {data.set(d.name, +d.cases)}; })
//     .await(ready);
  
//   function ready(error, topo) {
  
//     let mouseOver = function(d) {
//       d3.selectAll(".Country")
//         .transition()
//         .duration(200)
//         .style("opacity", .5)
//       d3.select(this)
//         .transition()
//         .duration(200)
//         .style("opacity", 1)
//         .style("stroke", "black")
//     }
  
//     let mouseLeave = function(d) {
//       d3.selectAll(".Country")
//         .transition()
//         .duration(200)
//         .style("opacity", .8)
//       d3.select(this)
//         .transition()
//         .duration(200)
//         .style("stroke", "transparent")
//     }
  
//     svg.append("g")
//       .selectAll("path")
//       .data(topo.features)
//       .enter()
//       .append("path")
//         // draw each country
//         .attr("d", d3.geoPath()
//           .projection(projection)
//         )
//         // set the color of each country
//         .attr("fill", function (d) {
//           d.total = data.get(d.id);
//           if (d.total === undefined) d.total = -1;
//           return colorScale(d.total);
//         })
//         .style("stroke", "transparent")
//         .attr("class", function(d){ return "Country" } )
//         .style("opacity", .8)
//         .on("mouseover", mouseOver )
//         .on("mouseleave", mouseLeave )
//       }

      
//   </script>

// </svg>`

class Map {
        constructor(ele){
            this.ele = ele;
    
            this.ele.addEventListener("click", this.handleClick.bind(this));
        }
    
        handleClick(){
            this.disease = "tuberculosis";
        }
    }
    
    export default Map;