class Year {
    constructor(ele,map,year){
        this.ele = ele;
        this.map = map
        this.year = year;
        this.text = this.ele.innerHTML;
        this.ele.addEventListener("click", this.handleClick.bind(this));
    }
    
    // turnOn() {
    //     this.ele.innerHTML = this.text
    // }

    // turnOff() {
    //     this.ele.innerHTML = `<div id="off"></div>`
    // }

    handleClick(){
        this.map.resetMap(this.map.disease,this.year);
    }
}

export default Year;
