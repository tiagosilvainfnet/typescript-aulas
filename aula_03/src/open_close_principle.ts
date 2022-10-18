// interface Shape{
//     calculateArea(): number
// }

// class Retangulo implements Shape{
//     width: number;
//     height: number;

//     constructor(width: number, height: number){
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea(): number{
//         return this.width * this.height;
//     }
// }

// class Circulo implements Shape{
//     radius: number;

//     constructor(radius: number){
//         this.radius = radius;
//     }

//     calculateArea(): number{
//         return Math.PI * (this.radius * this.radius);
//     }
// }

// class Triangulo implements Shape{
//     lado: number;

//     constructor(lado: number){
//         this.lado = lado;
//     }

//     calculateArea(): number {
//         return 0.0;
//     }
// }


// class CalculadoraArea{
//     calculateArea(shape: Shape): number{
//         return shape.calculateArea();
//     }
// }


// const r1: Retangulo = new Retangulo(10, 20);
// const c1: Circulo = new Circulo(20);

// const calc1: CalculadoraArea = new CalculadoraArea();

// const result1: number = calc1.calculateArea(r1);
// const result2: number = calc1.calculateArea(c1);

// console.log(result1)
// console.log(result2)