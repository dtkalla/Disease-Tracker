import Map from "./map.js";

class Animate {
    constructor(ele,map){
        this.ele = ele;
        this.map = map
        this.ele.addEventListener("click", this.handleClick.bind(this));

    }

    handleClick(){
        for (let i = 2000; i < 2022; i++) {
            this.map.resetMap(this.map.disease,i);
            wait(1000);
        }
    }
}

export default Animate;
