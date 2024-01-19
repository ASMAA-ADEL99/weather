let search = document.querySelector("#search-box");
let day = document.querySelector("#dayName");
let dayMonth= document.querySelector("#dayOfMonth");
let secondDay = document.querySelector("#secondDay");
let thirdDay = document.querySelector("#thirdDay");
let city= document.querySelector("#city");
let currentTemp = document.querySelector("#currentTemp");
let currentIcon = document.querySelector("#currentIcon");
let currentText = document.querySelector("#currentText");
let secondIcon = document.querySelector("#secondIcon");
let secDayMaxTemp = document.querySelector("#secDayMaxTemp");
let secDayMinTemp = document.querySelector("#secDayMinTemp");
let secDayText = document.querySelector("#secDayText");
let thirdIcon = document.querySelector("#thirdIcon");
let thirdDayMxtTemp = document.querySelector("#thirdDayMxtTemp"); 
let thirdDayMinTemp = document.querySelector("#thirdDayMinTemp");
let thirdDayText = document.querySelector("#thirdDayText");
let dataList=[];


async function getData(key){
    let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3af09e3c2dda4d4eaef191249241501&q=${key}&days=3`);
    let final = await res.json();
    console.log(final);
    //*======>current day
    currentTemp.innerHTML=final.current.temp_c+"°C";
    currentIcon.innerHTML=`<img src="${final.current.condition.icon}">`;
    currentText.innerHTML=final.current.condition.text;
     //*======>second day
     secondIcon.innerHTML=`<img src="${final.forecast.forecastday[1].day.condition.icon}">`;
     secDayMaxTemp.innerHTML=final.forecast.forecastday[1].day.maxtemp_c+"°C";
     secDayMinTemp.innerHTML=final.forecast.forecastday[1].day.mintemp_c+"°C";
     secDayText.innerHTML=final.forecast.forecastday[1].day.condition.text;
      //*======>third day
      thirdIcon.innerHTML=`<img src="${final.forecast.forecastday[2].day.condition.icon}">`;
      thirdDayMxtTemp.innerHTML=final.forecast.forecastday[2].day.maxtemp_c+"°C";
      thirdDayMinTemp.innerHTML=final.forecast.forecastday[2].day.mintemp_c+"°C";
      thirdDayText.innerHTML=final.forecast.forecastday[2].day.condition.text;

}

          
//city.innerHTML="cairo";
search.addEventListener("input",function(){
    let key = search.value;
    getData(key);
    city.innerHTML=key;
})
//&===============>Date================>
let date = new Date();
let dayNum= date.getDay(); //num of first day
let dayNum2= dayNum+1;
let dayNum3= dayNum2+1;
let dayOfMonth = date.getDate();
let month = date.getMonth();
//&============================>first day 
//^--------->first day date
function getDayName(dayNum){
  if(dayNum==7){
     dayNum=0;
  }
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday ", "Friday","Sat"];
    return daysOfWeek[dayNum];
  }
  let dayName = getDayName(dayNum);
  day.innerHTML=dayName;

let monthName = date.toLocaleString('default', { month: 'long' });
console.log(monthName);
dayMonth.innerHTML=dayOfMonth+' '+monthName;

//&===============>second day date

function getDay2Name(dayNum2){
  if(dayNum2==7){
     dayNum2=0;
  }
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday ", "Friday","Sat"];
    return daysOfWeek[dayNum2];
  }
  let dayName2 = getDay2Name(dayNum2);
  console.log(dayName2);
  secondDay.innerHTML=dayName2;

//&===============>third day date
function getDay3Name(dayNum3){

    if(dayNum3==7){
       dayNum3=0;
     }
   
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday ", "Friday","Sat"];
    return daysOfWeek[dayNum3];
  }
  let dayName3 = getDay3Name(dayNum3);
  console.log(dayName3);
  thirdDay.innerHTML=dayName3;
