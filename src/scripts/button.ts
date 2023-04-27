class Button {
    ele: HTMLElement
    map: HTMLElement
    disease: string

    constructor(ele:HTMLElement, map:HTMLElement, disease:string){
        this.ele = ele;
        this.map = map;
        this.disease = disease;
        this.ele.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick(){
        this.map.resetMap(this.disease,this.map.year);
        this.map.resetMap(this.disease,this.map.year);
        const html = svg._groups[0][0].innerHTML.split('<g>')
        const len = html.length
        svg._groups[0][0].innerHTML = [html[len-2],html[len-1]].join('<g>')
    }
}

export default Button;