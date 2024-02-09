let a = document.querySelector("#color");
let b = document.querySelector("#btn");

const getColor = () => {
    const num = Math.floor (Math.random() * 16777215);
    const color = "#" + num.toString(16);
    document.body.style.backgroundColor = color;
    a.innerHTML = color;
    a.style.backgroundColor = color;
    b.style.backgroundColor = color;

    //to copy the color code automatically
    navigator.clipboard.writeText(color)
}
b.addEventListener("click", getColor)
getColor();