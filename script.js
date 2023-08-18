let inputEle = document.getElementById("loc-input")
let btn = document.getElementById("btn")
let tempValue = document.getElementById("temp-value")
let wheatherEle = document.getElementById("wheather-desc")
let locEle= document.getElementById("location");

const apikey = 'c4c4678b0908591b0771c0281cefc93b';

btn.onclick = function(){
    if(inputEle.value == "")
    
        alert("please enter some location")
    
    else{
        loc = inputEle.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            const{name} = data
            const{feels_like} = data.main
            const{description} = data.weather[0]
            tempValue.innerText = Math.floor(feels_like-273);
            locEle.innerText = name;
            wheatherEle.innerText = description;
        })
        .catch(()=>{
            alert("Enter valid location")
        })
        inputEle.value = ""
    }
}



 