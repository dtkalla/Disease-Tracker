!function(){"use strict";var e,t,n;e=class{constructor(e,t,n){this.ele=e,this.map=t,this.disease=n,this.ele.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.map.resetMap(this.disease,this.map.year),this.map.resetMap(this.disease,this.map.year);const e=svg._groups[0][0].innerHTML.split("<g>"),t=e.length;svg._groups[0][0].innerHTML=[e[t-2],e[t-1]].join("<g>")}},t=class{constructor(e){this.ele=e}resetSidebar(e,t){this.ele.innerHTML=function(e,t){return"malaria"===e?`<h3>Malaria Deaths ${t}</h3>\n        <text>\n          Malaria is a mosquito-borne illness, disproportionately killing children under 5 in poor, tropical countries.  It's a leading killer of young children and a major drag of economic growth in malaria-endemic countries, causing an estimated 1% decrease in GDP growth per year.\n          <br>\n          <br>\n          Malaria can be prevented by sleeping under insecticide-treated bednets (cost: $6) or taking anti-malaria medication -- it can also be treated.  Access to bednets is improving, and clinical trials are ongoing for malaria vaccines.\n        </text>`:"tuberculosis"===e?`<h3>Tuberculosis Deaths ${t} (estimated)</h3>\n        <text>\n        Tuberculosis, a respiratory disease, is the leading cause of death by infectious disease after COVID-19, with over 1 million deaths in 2020.\n        <br>\n        <br>\n        Tuberculosis continues to kill people in nearly every country on earth but is especially serious in poorer countries.  Among people who die of HIV, tuberculosis is often the proximate cause of death, accounting for around 30% of HIV deaths.  (HIV-related tuberculosis deaths are included in the HIV map, not here.)\n        <br>\n        <br>\n        Tuberculosis is curable with treatment.\n        </text>`:"HIV"===e?`<h3>HIV Deaths ${t} (estimated)</h3>\n        <text>\n        HIV deaths peaked in 2004, when HIV was the leading cause of death across Africa.  (From 1997-2006, HIV accounted for the majority of deaths in Zambia.)  Although the situation has improved substantially, HIV continues to be the leading cause of death in South Africa, the six countries it borders, and Malawi.\n        <br>\n        <br>\n        HIV is both preventable and treatable, but it is not currently curable.  No HIV vaccine is available yet.\n        </text>`:"leprosy"===e?`<h3>Leprosy Cases ${t}</h3>\n        <text>\n        Hansen's disease, better known as leprosy, is a disease causing nerve damage, which can lead to blindness, paralysis, or untreated skin injuries.  (Modern leprosy is different from biblical leprosy.)  Like many neglected tropical diseases, data collection is inconsistent, making it difficult to see trends over time.  (Overall, though, numbers have gone down.)\n        <br>\n        <br>\n        Hansen's disease is not very infectious (95% of people are naturally immune) and can be cured with treatment, though the treatment takes 1-2 years.  Nerve damage and blindness caused by Hansen's disease are not reversible, however.\n        </text>`:"guineaworm"===e?`<h3>Guinea Worm Cases ${t}</h3>\n        <text>\n        Along with polio, dracunculiasis (the disease caused by a guinea worm infection) could plausibly be eradicated worldwide within 5-10 years.  Although they don't kill people, guinea worm infections are debilitating and very painful.  (Don't watch <a href="https://www.youtube.com/watch?v=oCB1A2gFvuU" target="_blank">this video</a> if you're squeamish.)\n        <br>\n        <br>\n        Guinea worm infections are a result of drinking contaminated water, and it can be prevented with a cheap filter.  Its only natural reservoir is in humans, although Chad has reported infections in dogs, as well.\n        </text>`:"polio"===e?`<h3>Polio Cases ${t}</h3>\n        <text>\n        To date, smallpox is the only human disease that has been eradicated with vaccines, but polio may be next.  Two of the three strains of wild polio have been eliminated, and as of 2022, polio is endemic in just two countries: Afghanistan and Pakistan.\n        <br>\n        <br>\n        Polio can be prevented with vaccines, but universal coverage is difficult to achieve in some areas.  Diagnosis is also difficult because polio is often asymptomatic.  Currently, the world spends around $1 billion a year fighting polio.\n        </text>`:`<h3>COVID-19 Deaths ${t}</h3>\n        <text>\n        You already know all about COVID-19!  But here are two interesting things you might not know:\n        <ul>\n        <li>The COVID-19 genome was published on January 11, 2020.  Moderna used it to design their vaccine, finishing by January 13.</li>\n        <br>\n        <li>The UK pioneered a new type of clinical trial to test multiple COVID-19 treatments at once -- this trial found four effective treatments for COVID-19, including dexamethasone and monoclonal antibodies.</li>\n        </ul>\n        </text>`}(e,t)}},n=class{constructor(e){this.ele=e,this.rangeConverter={malaria:[2e3,2020],tuberculosis:[2e3,2021],HIV:[2e3,2021],covid19:[2020,2022],polio:[2009,2022],guineaworm:[1989,2022],leprosy:[2005,2021]};const n=document.getElementById("context");this.sidebar=new t(n);let i=document.getElementById("myRange");this.minYear=document.getElementById("minyear"),this.maxYear=document.getElementById("maxyear"),i.map=this,this.slider=i,i.oninput=function(){this.map.resetMap(this.disease,this.value);const e=svg._groups[0][0].innerHTML.split("<g>");e.length>3&&(svg._groups[0][0].innerHTML=[e[1],e[2],e[3]].join("<g>"))},this.resetMap("malaria",2020)}resetMap(e,t){this.disease=e,this.year=t,function(e,t){e.innerHTML=t;const n=e.querySelector("refreshMapCode"),i=document.createElement("script");i.appendChild(document.createTextNode(n.innerHTML)),n.parentNode.replaceChild(i,n)}(this.ele,`<refreshMapCode>\n  \n  d3.queue()\n    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")\n    .defer(d3.csv, \`./src/scripts/data/${this.disease}.csv\`, function(d) { if (d.year==\`${this.year}\`) {data.set(d.name, +d.cases)}; })\n    .await(ready);`),this.sidebar.resetSidebar(this.disease,this.year),this.min=this.rangeConverter[e][0],this.max=this.rangeConverter[e][1],this.year>this.max&&(this.year=this.max),this.year<this.min&&(this.year=this.min),this.slider.min=this.min,this.slider.max=this.max,this.slider.disease=e,this.slider.value=this.year,this.minYear.innerHTML=`${this.min}`,this.maxYear.innerHTML=`${this.max}`}},document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("my_dataviz");new n(t);const i=document.getElementById("copy"),a=new n(i),s=document.getElementById("tuberculosis");new e(s,a,"tuberculosis");const o=document.getElementById("malaria");new e(o,a,"malaria");const r=document.getElementById("HIV");new e(r,a,"HIV");const l=document.getElementById("covid19");new e(l,a,"covid19");const d=document.getElementById("guineaWorm");new e(d,a,"guineaworm");const c=document.getElementById("polio");new e(c,a,"polio");const h=document.getElementById("leprosy");new e(h,a,"leprosy");const u=document.getElementById("myModal"),m=document.getElementById("modalButton"),g=document.getElementById("modalButtonImage"),p=document.getElementsByClassName("close")[0];m.onclick=function(){u.style.display="block"},p.onclick=function(){u.style.display="none"},window.onclick=function(e){e.target!=u&&e.target!=g&&(u.style.display="none")}}))}();
//# sourceMappingURL=main.js.map