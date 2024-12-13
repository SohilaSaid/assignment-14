
var days =["Monday","Tuesday","Wednesday","Thursday"," Friday","Saturday","Sunday"]
var manths =["January","February","March","April","May","June","July","August","September","October","November","December"]
var day = new Date()
var dayName = document.querySelector('.day1').innerHTML = days[day.getDay()]
var dayNum = day.getDate()
var month = manths[day.getMonth()]
var date = document.querySelector('.date1').innerHTML = dayNum +" "+month

var weather ;

var http = new XMLHttpRequest();

http.open("GET",`https://api.weatherapi.com/v1/forecast.json?key=5b18663e090f4571a1d200056241012&q=cairo&aqi=no`);
http.send();
http.addEventListener('readystatechange', function(){

  if(this.readyState==4 && this.status==200){

    weather = JSON.parse(http.response)
    var loc = document.querySelector('.location').innerHTML= weather.location.name
    var temp_c = document.querySelector('.temp_c').innerHTML= weather.current.temp_c
    var text = document.querySelector('.text1').innerHTML= weather.current.condition.text
    var imgPath = 'http:'+ weather.current.condition.icon
    var img = document.querySelector('.img-icon img')
    img.setAttribute("src",imgPath)
   
  }
  
})









// function displayWeather() {
    
// }



 // console.log(days[weather.current.is_day])