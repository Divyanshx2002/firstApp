function getRandomColor(){
    let arr = ["Red", "Grey", "Pink", "Yellow", "Orange", "Green", "Aqua", "Blue"];
    let some = Math.floor(Math.random() * 7);
    let para = document.querySelector('#op-1');
    para.innerHTML = arr[some];
    document.body.style.backgroundColor = arr[some];
    console.log(arr[some]);
    let olaola = document.querySelector('#btnn');
    olaola.innerHTML = ('SUII')
}

let myBtn = document.querySelector('#btnn');
myBtn.addEventListener('click', getRandomColor);

