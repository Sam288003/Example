function a() {
    console.log("I'm from function a");
    return
}
b = [1, "John", a];
console.log(b[0], b[1], b[2]());
