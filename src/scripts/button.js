import Map from "./map.js";

class Button {
    constructor(ele,map,disease){
        this.ele = ele;
        this.map = map
        this.disease = disease;
        this.ele.addEventListener("click", this.handleClick.bind(this));

    }

    handleClick(){
        console.log("other")
        this.map.resetMap(this.disease,2020);
    }
}

export default Button;
