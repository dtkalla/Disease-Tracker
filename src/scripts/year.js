class Year {
    constructor(ele,map,year){
        this.ele = ele;
        this.map = map
        this.year = year;
        this.ele.addEventListener("click", this.handleClick.bind(this));

    }

    handleClick(){
        this.map.resetMap(this.map.disease,this.year);
    }
}

export default Year;
