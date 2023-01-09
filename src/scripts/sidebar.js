function htmlString(disease,year) {
    if (disease === "malaria") {
        return `<h3>Malaria Deaths ${year}</h3>
        <text>
          Malaria is a mosquito-borne illness, disproportionately killing children under 5 in poor, tropical countries.  It's a leading killer of young children and a major drag of economic growth in malaria-endemic countries, causing an estimated 1% decrease in GDP growth per year.
          <br>
          <br>
          Malaria can be prevented by sleeping under insecticide-treated bednets (cost: $6) or taking anti-malaria medication -- it can also be treated.  Access to bednets is improving, and clinical trials are ongoing for malaria vaccines.
        </text>`
    } else if (disease === "tuberculosis") {
        return `<h3>Tuberculosis Deaths ${year} (estimated)</h3>
        <text>
        Tuberculosis, a respiratory disease, is the leading cause of death by infectious disease after COVID-19, with over 1 million deaths in 2020.
        <br>
        <br>
        Tuberculosis continues to kill people in nearly every country on earth but is especially serious in poorer countries.  Among people who die of HIV, tuberculosis is often the proximate cause of death, accounting for around 30% of HIV deaths.  (HIV-related tuberculosis deaths are included in the HIV map, not here.)
        <br>
        <br>
        Tuberculosis is curable with treatment.
        </text>`
    } else {if (disease === "HIV") {
        return `<h3>HIV Deaths ${year} (estimated)</h3>
        <text>
        HIV deaths peaked in 2004, when HIV was the leading cause of death across Africa.  (From 1997-2006, HIV accounted for the majority of deaths in Zambia.)  Although the situation has improved substantially, HIV continues to be the leading cause of death in South Africa, the six countries it borders, and Malawi.
        <br>
        <br>
        HIV is both preventable and treatable, but it is not currently curable.  No HIV vaccine is available yet.
        </text>`
    } else if (disease === "leprosy") {
        return `<h3>Leprosy Cases ${year}</h3>
        <text>
        Hansen's disease, better known as leprosy, is a disease causing nerve damage, which can lead to blindness, paralysis, or untreated skin injuries.  (Modern leprosy is different from biblical leprosy.)  Like many neglected tropical diseases, data collection is inconsistent, making it difficult to see trends over time.
        <br>
        <br>
        Hansen's disease is not very infectious (95% of people are naturally immune) and can be cured with treatment, though the treatment takes 1-2 years.  Nerve damage and blindness caused by Hansen's disease are not reversible, however.
        </text>`
    } else {if (disease === "guineaworm") {
        return `<h3>Guinea Worm Cases ${year}</h3>
        <text>
        Along with polio, dracunculiasis (the disease caused by a guinea worm infection) could plausibly be eradicated worldwide within 5-10 years.  Although they don't kill people, guinea worm infections are debilitating and very painful.  (Don't watch <a href="https://www.youtube.com/watch?v=oCB1A2gFvuU" target="_blank">this video</a> if you're squeamish.)
        <br>
        <br>
        Guinea worm infections are a result of drinking contaminated water, and it can be prevented with a cheap filter.  Its only natural reservoir is in humans, although Chad has reported infections in dogs, as well.
        </text>`
    } else if (disease === "polio") {
        return `<h3>Polio Cases ${year}</h3>
        <text>
        To date, smallpox is the only human disease that has been eradicated with vaccines, but polio may be next.  Two of the three strains of wild polio have been eliminated, and as of 2022, polio is endemic in just two countries: Afghanistan and Pakistan.
        <br>
        <br>
        Polio can be prevented with vaccines, but universal coverage is difficult to achieve in some areas.  Diagnosis is also difficult because polio is often asymptomatic.  Currently, the world spends around $1 billion a year fighting polio.
        </text>`
    } else {
        return `<h3>COVID-19 Deaths ${year}</h3>
        <text>
        You already know all about COVID-19!  But here are two interesting things you might not know:
        <ul>
        <li>The COVID-19 genome was published on January 11, 2020.  Moderna used it to design their vaccine, finishing by January 13.</li>
        <br>
        <li>The UK pioneered a new type of clinical trial to test multiple COVID-19 treatments at once -- this trial found four effective treatments for COVID-19, including dexamethasone and monoclonal antibodies.</li>
        </ul>
        </text>` 
    }
    }}
}



class Sidebar {
    constructor(ele){
        this.ele = ele;
    }

    resetSidebar(disease,year){
        this.ele.innerHTML = htmlString(disease,year);
    }
}


export default Sidebar;