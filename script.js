function increaseCounter(){
    
    let counter = document.getElementById("counter")
    let counterNumber = Number(counter.innerText)
    counterNumber++
    counter.innerText = counterNumber
    if(counterNumber % 10 === 0){ 
        alert("You should take a break")
    }

}
/*other way to do it

let counter = 0;
function increaseCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
  
}*/

