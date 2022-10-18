class Square{
    public width: number;
    public height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public isQuadrado(): boolean{
        return this.width === this.height;
    }
}

class Retangulo extends Square{
    constructor(width: number, height: number){
        super(width, height)
    }

    public calcuteArea(): number{
        return this.width * this.height;
    }
}

class Circulo{
    radius: number;

    constructor(radius: number){
        this.radius = radius;
    }
}


class Poligono{
    public verificarPoligono(element: Square){
        console.log(element.isQuadrado());
    }
}

const s1 = new Square(30, 40);
const r1 = new Retangulo(40, 50);
const c1 = new Circulo(50);

const p1 = new Poligono();
p1.verificarPoligono(s1);
p1.verificarPoligono(r1);
p1.verificarPoligono(c1);