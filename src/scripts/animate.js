import Map from "./map.js";

class Animate {
    constructor(ele,map){
        this.ele = ele;
        this.map = map
        this.ele.addEventListener("click", this.handleClick.bind(this));

    }

    handleClick(){
        const wait = (ms) => {
            const start = Date.now();
            let now = start;
            while (now - start < ms) {
              now = Date.now();
            }
        }
        for (let i = 2000; i < 2022; i++) {
            this.map.resetMap(this.map.disease,i);
        }
    }
}

export default Animate;
