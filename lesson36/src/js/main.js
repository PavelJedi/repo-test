let map;

function initMap() {
    const myLatLng = new google.maps.LatLng(48.29095469491118, 25.93288658232469);
    const mapOptions = {
        zoom: 13,
        center: myLatLng,
        mapTypeId: 'roadmap',
    }

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const locations = [
        {
            position: new google.maps.LatLng(48.292103785847296, 25.93559367018307),
            name: 'Чернівці',
        },
        {
            position: new google.maps.LatLng(48.290129919483064, 25.936457530266285),
            name: 'вулиця. Кобилянської (Панська вулиця)',
            img: 'https://tamtour.com.ua/local/image/654/009/ws4-2654-web-900@.jpg'
        },
        {
            position: new google.maps.LatLng(48.296822763366784, 25.9247482811602),
            name: 'ЧНУ',
            img: 'https://bukinfo.com.ua/news-gallery/615ae02fd5f6f.jpg'
        },
        {
            position: new google.maps.LatLng(48.291877969518296, 25.932342368354703),
            name: 'Театральна площа',
            img: 'https://media.pogliad.ua/news/article/2019/08/01/375422/5P06rKZA1A3aDoVGx0Jg.r575x340.jpg'
        },
    ];

    const infoWindow = new google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            name: locations[i].name,
            img: locations[i].img,
            map: map,
        });

        const content = `
    <p>${locations[i].name}</p>
    <img src="${locations[i].img}>"</img>
    `;

        marker.addEventListener ('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor: marker,
                content: marker.name,
                map,
                shouldFocus: true
            })
        })
    }
}

window.initMap = initMap;