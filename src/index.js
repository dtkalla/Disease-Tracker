import Button from "./scripts/button.js";
import Map from "./scripts/map.js";
import Year from "./scripts/year.js";
import Animate from "./scripts/animate.js"


document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("my_dataviz");
    const map = new Map(data);

    const data1 = document.getElementById("tuberculosis");
    new Button(data1,map,"tuberculosis");
    const data2 = document.getElementById("malaria");
    new Button(data2,map,"malaria");
    const data3 = document.getElementById("HIV");
    new Button(data3,map,"HIV");
    const data4 = document.getElementById("guineaWorm");
    new Button(data4,map,"guineaworm");
    const data5 = document.getElementById("polio");
    new Button(data5,map,"polio");
    const data6 = document.getElementById("leprosy");
    new Button(data6,map,"leprosy");

    const data00 = document.getElementById("2000");
    new Year(data00,map,2000);
    const data01 = document.getElementById("2001");
    new Year(data01,map,2001);
    const data02 = document.getElementById("2002");
    new Year(data02,map,2002);
    const data03 = document.getElementById("2003");
    new Year(data03,map,2003);
    const data04 = document.getElementById("2004");
    new Year(data04,map,2004);
    const data05 = document.getElementById("2005");
    new Year(data05,map,2005);
    const data06 = document.getElementById("2006");
    new Year(data06,map,2006);
    const data07 = document.getElementById("2007");
    new Year(data07,map,2007);
    const data08 = document.getElementById("2008");
    new Year(data08,map,2008);
    const data09 = document.getElementById("2009");
    new Year(data09,map,2009);
    const data10 = document.getElementById("2010");
    new Year(data10,map,2010);
    const data11 = document.getElementById("2011");
    new Year(data11,map,2011);
    const data12 = document.getElementById("2012");
    new Year(data12,map,2012);
    const data13 = document.getElementById("2013");
    new Year(data13,map,2013);
    const data14 = document.getElementById("2014");
    new Year(data14,map,2014);
    const data15 = document.getElementById("2015");
    new Year(data15,map,2015);
    const data16 = document.getElementById("2016");
    new Year(data16,map,2016);
    const data17 = document.getElementById("2017");
    new Year(data17,map,2017);
    const data18 = document.getElementById("2018");
    new Year(data18,map,2018);
    const data19 = document.getElementById("2019");
    new Year(data19,map,2019);
    const data20 = document.getElementById("2020");
    new Year(data20,map,2020);

    const animate = document.getElementById("animate");
    new Animate(animate,map);

    const sidebar = document.getElementById("context");
    new Sidebar(sidebar,map)
});


// document.addEventListener("DOMContentLoaded", () => {

// });

