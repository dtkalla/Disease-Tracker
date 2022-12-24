import Sidebar from "./sidebar.js";

function htmlString(chosenDisease, chosenYear) {
  return `<refreshMapCode>
  
  d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .defer(d3.csv, \`./src/scripts/data/${chosenDisease}.csv\`, function(d) { if (d.year==\`${chosenYear}\`) {data.set(d.name, +d.cases)}; })
    .await(ready);`
}

const setInnerHTML = function (ele, html) {
  ele.innerHTML = html;
  const untreated = ele.querySelector("refreshMapCode")
  const treated = document.createElement("script");
  treated.appendChild(document.createTextNode(untreated.innerHTML));
  untreated.parentNode.replaceChild(treated, untreated);
}

class Map {
  constructor(ele) {
    this.ele = ele;
    this.rangeConverter = {
      malaria: [2000,2020],
      tuberculosis: [2000,2021],
      HIV: [2000,2021],
      covid19: [2020,2021],
      polio: [2009,2021],
      guineaworm: [1989,2022],
      leprosy: [2012,2021],
    }

    const sidebar = document.getElementById("context");
    this.sidebar = new Sidebar(sidebar)

    let slider = document.getElementById("myRange");
    this.minYear = document.getElementById("minyear");
    this.maxYear = document.getElementById("maxyear");
    slider.map = this;
    this.slider = slider;

    slider.oninput = function () {
      this.map.resetMap(this.disease, this.value);
      const html = svg._groups[0][0].innerHTML.split('<g>')
      if (html.length > 3) {
      svg._groups[0][0].innerHTML = [html[1],html[2],html[3]].join('<g>') }
    }

    this.resetMap("malaria",2020)
  }


  resetMap(disease, year) {
    this.disease = disease;
    this.year = year;
    
    setInnerHTML(this.ele, htmlString(this.disease, this.year));

    this.sidebar.resetSidebar(this.disease, this.year);
    
    this.min = this.rangeConverter[disease][0]
    this.max = this.rangeConverter[disease][1]
    if (this.year > this.max) this.year = this.max;
    if (this.year < this.min) this.year = this.min;

    this.slider.min = this.min;
    this.slider.max = this.max;
    this.slider.disease = disease;
    this.slider.value = this.year;

    this.minYear.innerHTML = `${this.min}`
    this.maxYear.innerHTML = `${this.max}`
  }
}

export default Map;