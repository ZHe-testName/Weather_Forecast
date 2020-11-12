'use strict';

const requesStr = 'http://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&lang=ru&units=metric&appid=e3f7748f23d84130cd165d531a86ce00';
    // apiKey = 'e3f7748f23d84130cd165d531a86ce00',
    // city = 'Kiev';

let rez = undefined;

const getWeather = (url, callback, reject = console.error) => {

    const request = new XMLHttpRequest;

    request.open('GET', url);
    
    request.addEventListener('readystatechange', () => {
    
        if (request.readyState !== 4){
            return;
        }

        if (request.status === 200){
            callback(request.response);
        }else{
            reject(request.status);
        }
    });

    request.send();
}

getWeather(requesStr, (data) => {
    rez = JSON.parse(data);

    console.log(rez);
});

console.log(128 / 40);


// 0C = -43deg;
//+max = 42deg;
//-max = -170deg;