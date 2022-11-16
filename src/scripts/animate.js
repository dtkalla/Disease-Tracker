// Can't get this feature working yet, but I haven't given up!  For now, not in use.

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
        for (let i = 2000; i < 2021; i++) {
            this.map.resetMap(this.map.disease,i);
            // wait(500)
        }
    }
}

export default Animate;
