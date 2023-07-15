const getColor = () => {
    //hexa code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomeCode = "#" + randomNumber.toString(16);
    console.log(randomNumber,randomeCode);
    document.body.style.backgroundColor = randomeCode;
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//init call

getColor();