function calculate(){
    let x = parseInt(prompt("enter number : "))
    let y = parseInt(prompt("enter number : "))
    let s = "font-size: 25px; border: 2px: solid red; border-radius:10px"+"color: yellowgreen;width:100px; height: 50px;"
    document.getElementById('data').innerText = x+y
    document.getElementById('data').style = s
}
function multiply(){
    let x = parseInt(prompt("enter number : "))
    let y = parseInt(prompt("enter number : "))
    let s = "font-size: 25px; border: 2px: solid red; border-radius:10px"+"color: yellowgreen;width:100px; height: 50px;"
    document.getElementById('data').innerText = x*y
    document.getElementById('data').style = s
}