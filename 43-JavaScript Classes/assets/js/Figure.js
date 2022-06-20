class Figure {
    constructor(width, height, color, left, top){
        this.width = width;
        this.height = height;
        this.color = color;
        this.left = left;
        this.top = top;
    }
    show(){
        document.body.insertAdjacentHTML
        ('beforeend', `
            <div class="figure" style="width: ${this.width}px;height:${this.height}px;background-color:${this.color};left:${this.left}px;top:${this.top}px;position: absolute"></div>
        `);
    }
// 


    get diametr() {
        return this.radius * 2;
    }

    showDiametr(elemenID) {
        document.getElementById(elemenID).innerText = this.diametr
        // document.getElementById(elemenID).innerText = this.radius * 2
    }


}

// show(){
//     document.body.insertAdjacentHTML('afterbegin', `
//     <div class="figure" style="width: ${this.width}" ></div>
//............................
//     `);
// }





// HW 2

const kolo = new Circle();

const diam = kolo.diametr; // так викликається getter

kolo.showDiametr('d');


//
const kolo2 = {
    radius: 10,
    getDiametr(){
        return this.radius * 2;
    }
}

kolo2.getDiametr()//20
kolo2.radius = 20;
// kolo2.


