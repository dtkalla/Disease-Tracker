class Button {
    constructor(ele,map,disease){
        this.ele = ele;
        this.map = map
        this.disease = disease;
        this.ele.addEventListener("click", this.handleClick.bind(this));

    }

    handleClick(){
        this.map.resetMap(this.disease,this.map.year);
    }
}

export default Button;
