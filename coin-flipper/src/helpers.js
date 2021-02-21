function choice(arr){
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

export {choice};