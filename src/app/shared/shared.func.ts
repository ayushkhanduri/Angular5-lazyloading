function calculateSquare(num: number):number {
    console.log("Hello world");
    num += 3;
    return num * num;
}

function calculateCube(num: number): number{
    console.log("Hello world");
    num += 3;
    return num * num * num;
}

export {
    calculateCube,
    calculateSquare
}