function htmlString() {return `<h3>Malaria 2020</h3>
<text>
  Every 75 seconds, a child under 5 dies of malaria.
  <br>
  <br>
  Malaria is a mosquito born illness, disproportionately killing young children in poor, tropical countries.
  <br>  
  <br>
  Malaria can be prevented by sleeping under $6 insecticide-treated bednets or taking anti-malaria medication -- it can also be treated.  Malaria rates have decreased significantly since the 2000s as more people have gotten access to bednets.
</text>`}

function htmlString2(disease,year) {
    if (disease === "malaria") {
        return `<h3>Malaria ${year}</h3>
        <text>
          Every 75 seconds, a child under 5 dies of malaria.
          <br>
          <br>
          Malaria is a mosquito born illness, disproportionately killing young children in poor, tropical countries. 
          <br>
          <br>
          Malaria can be prevented by sleeping under $6 insecticide-treated bednets or taking anti-malaria medication -- it can also be treated.  Malaria rates have decreased significantly since the 2000s as more people have gotten access to bednets.
        </text>`
    } else if (disease === "tuberculosis") {
        return `<h3>Tuberculosis ${year}</h3>
        <text>
        Tuberculosis was the leading cause of death by infectious disease (after COVID-19), with over 1 million deaths in 2020.
        <br>
        <br>
        Tuberculosis continues to kill people in nearly every country on earth but is esepcially serious in poorer countries.  Among people who die of HIV, tuberculosis is most often what actually kills them, accounting for around 30% of deaths.  (HIV deaths are not included in this map.)
        <br>
        <br>
        Tuberculosis is curable with treatment.
        </text>`
    } else {if (disease === "HIV") {
        return `<h3>HIV ${year}</h3>
        <text>
        HIV deaths peaked in 2004, when HIV was the leading cause of death across Africa.  (From 1997-2006, HIV accounted for the majority of deaths in Zambia.)  Although the situation has improved sunstantially, HIV continues to be the leading cause of death in South Africa, the six countries it borders, and Malawi.
        <br>
        <br>
        HIV it both preventable and treatable, but it is not currently curable.
        </text>`
    } else if (disease === "leprosy") {
        return `<h3>Leprosy ${year}</h3>
        <text>
        Hansen's disease, better known as leprosy, is a disease causing nerve damage, which can lead to blindness, paralysis, or untreated skin injuries.  Although it's often thought of as an ancient disease, it's still present in many countries, with over 100,000 cases worldwide in 2020.
        <br>
        <br>
        Hansen's is not very infectious and can be cured with treatment, though the treatment takes 1-2 years.  Nerve damage and blindness caused by Hansen's disease are not reversible.
        </text>`
    } else {if (disease === "guineaworm") {
        return `<h3>Guinea Worm ${year}</h3>
        <text>
        Along with polio, dracunculiasis (the diseases caused by a guinea worm infection) could plausibly be eradicated worldwide.  Although it doesn't kill people, guinea worm infections are debilitating and very painful.  (Watch <a href="https://www.youtube.com/watch?v=oCB1A2gFvuU" target="_blank">this video</a> if you're not squeamish.)
        <br>
        <br>
        Guinea worm infections are a result of drinking contaminated water, and it can be prevented with a cheap filter.  It's only natural resevoir is in humans, but Chad has reported infections in dogs, as well.
        </text>`
    } else if (disease === "polio") {
        return `<h3>Polio ${year}</h3>
        <text>
        To date, smallpox is the only human disease that has been eradicated, but polio may be next.  Two of the three strains of wild polio have been eliminated, and as of 2020, wild polio is present in just two countries: Afghanistan and Pakistan.
        <br>
        <br>
        Polio can be prevented with vaccines, but universal coverage is difficult to achieve in some areas.  Diagnosis is also difficult because polio is often asymptomatic.
        </text>`
    } else {
        return `<h3>COVID-19 ${year}</h3>
        <text>
        COVID-19 paragraph 1
        <br>
        <br>
        COVID-19 paragraph 2
        </text>` 
    }
    }}
}



class Sidebar {
        constructor(ele){
            this.ele = ele;
            this.ele.innerHTML = htmlString();
            
        }
    
        resetSidebar(disease,year){
            this.ele.innerHTML = htmlString2(disease,year);
        }

    }


    export default Sidebar;

