function func1(arr) {
    return arr.map( obj =>
        Object.values(obj)
            .filter(el => typeof el === "string")
            .join("; ")
    )
}

function func2(arr) {
    return arr.map(obj =>
        Object.values(obj)
            .filter(el => typeof el === "number")
            .reduce((prev, value) => prev + value)
    ).sort((a,b) => b - a);
}

function func3(arr) {
    return arr.map(obj => Object.values(obj));
}