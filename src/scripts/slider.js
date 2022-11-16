class Slider {
    constructor(ele,map){
        this.ele = ele;
        this.map = map
    }
    oninput = function () {
        this.map.resetMap(this.disease, this.value);
    }
}

export default Slider;