"use strict";
class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    isQuadrado() {
        return this.width === this.height;
    }
}
class Retangulo extends Square {
    constructor(width, height) {
        super(width, height);
    }
    calcuteArea() {
        return this.width * this.height;
    }
}
class Poligono {
    verificarPoligono(element) {
        console.log(element.isQuadrado());
    }
}
const s1 = new Square(30, 40);
const r1 = new Retangulo(40, 50);
const p1 = new Poligono();
p1.verificarPoligono(s1);
p1.verificarPoligono(r1);
