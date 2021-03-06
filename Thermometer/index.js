'use strict';

// const requestStr = 'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&lang=ru&units=metric&appid=e3f7748f23d84130cd165d531a86ce00';
//     // apiKey = 'e3f7748f23d84130cd165d531a86ce00',
//     // city = 'Kiev';

// let rez = undefined;

// const getWeather = (url, callback, reject = console.error) => {

//     const request = new XMLHttpRequest;

//     request.open('GET', url);
    
//     request.addEventListener('readystatechange', () => {
    
//         if (request.readyState !== 4){
//             return;
//         }

//         if (request.status === 200){
//             callback(request.response);
//         }else{
//             reject(request.status);
//         }
//     });

//     request.send();
// }

// getWeather(requestStr, (data) => {
//     rez = JSON.parse(data);

//     console.log(rez);
// });


console.log(128 / 40);


// 0C = -43deg;
//+max = 42deg;
//-max = -170deg;

//Map scrolling

const map = document.querySelector('.map'),
    skin = document.querySelector('.skin'),
    citiesCards = map.children;

const citiesCoords = [
    {
        city: 'rivne',
        x: 105,
        y: 160,
        modalSide: 'right',
    },

    {
        city: 'lviv',
        x: 225,
        y: 95,
        modalSide: 'right',
    },

    {
        city: 'kiev',
        x: 105,
        y: 150,
        modalSide: 'left',
    },

    {
        city: 'vinnytsia',
        x: 190,
        y: 40,
        modalSide: 'left',
    },

    {
        city: 'zaporizhia',
        x: -150,
        y: -55,
        modalSide: 'left',
    },

    {
        city: 'kharkiv',
        x: -165,
        y: 130,
        modalSide: 'left',
    },

    {
        city: 'odessa',
        x: 95,
        y: -160,
        modalSide: 'left',
    }
];

map.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('city')){
        const city = target.dataset.city;

        const equalCityObj = citiesCoords.find(item => item.city === city);

        map.classList.add('increase');
        map.style.transform = `scale(2) translateX(${equalCityObj.x}px) translateY(${equalCityObj.y}px)`;
        target.parentNode.parentNode.style.zIndex = '2';


        setTimeout(() => {
            skin.style.visibility = 'visible';
        }, 500);
        
    }
});

skin.addEventListener('click', () => {
    map.classList.remove('icrease');
    map.removeAttribute('style');

    [...citiesCards].forEach(item => {
        item.removeAttribute('style');
    })

    skin.style.visibility = 'hidden';
});



