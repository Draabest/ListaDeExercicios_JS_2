let lado1 = 2, lado2 = 2, lado3 = 2; 

if (lado1 == lado2 && lado2 == lado3) {
    console.log("Seu triângulo é um Equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Seu triângulo é um Isósceles");
} else {
    console.log("Seu triângulo é um Escaleno");
}
