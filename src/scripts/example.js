class Example {
    constructor(ele){
        this.ele = ele;
        this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>"

        this.ele.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick(){
        this.ele.children[0].innerText = "Ouch!";
    }
}

export default Example;
