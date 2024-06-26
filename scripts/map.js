
fetch('aaa.json').then((r) => r.json()).then((data) => {
      const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;
      
  const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
    type: 'choropleth',
    data: {
      
      labels: countries.map((d) => d.properties.name),
      datasets: [{
        
        label: 'Countries',
        
        data: countries.map((d) => ({feature: d, value: afa[d.properties.name] ? afa[d.properties.name]: 0})),
      }]
    },
    options: {
      colorScale: {
        display: true,
        colors: 'plasma' // Выбор цветовой схемы (например, 'viridis', 'plasma', 'inferno', 'magma')
      },
      showOutline: true,
      showGraticule: true,
      plugins: {
       legend: {
          display: false
        },
      },
      scales: {
        color: {
          axis: 'x',
          interpolate: (v) => {if (v < 0.1) { return 'rgb(158,202,225)'}
          else if (0.1 <= v < 0.2) {return 'rgb(107,174,214)'}
          else if (0.2 <= v < 0.3) {return 'rgb(66,146,198)'}
          else if (0.3 <= v < 0.5) {return 'rgb(33,113,181)'}
          else if (0.5 <= v < 0.7) {return 'rgb(8,81,156)'}
          else if (0.7 <= v < 0.9) {return 'rgb(8,48,107)'}
          else if (0.9 <= v < 1.0) {return 'rgb(3,19,43)'}},
          legend: {
            position: 'bottom-right',
            align: 'bottom'
          },},
        projection: {
          axis: 'x',
          projection: 'equalEarth'
        }
      },
      
    }
  });
});

var afa = {'Singapore': 7.8,
'United Arab Emirates':7.5,
'Finland':7.5,
'Quatar': 7.3,
'Sweden':7.3,
'Norway':7.2,
'Luxembourg':7.2,
'Netherlands':7.2,
'United Kingdom':7.2,
'Malaysia':7.2,
'Switzerland':7.2,
'Israel':7.1,
'Chinese Taipei':7.1,
'Germany':7.1,
'Republic of Korea':7.0,
'Estonia':7.0,
'Denmark':6.8,
'China':6.7,
'Hong Kong, China':6.6,
'Ireland':6.5,
'Austria':6.5,
'Belgium':6.5,
'Canada':6.5,
'France':6.4,
'Oman':6.4,
'United States of America':6.3,
'Iceland':6.3,
'Saudi Arabia':6.3,
'Portugal':6.3,
'New Zealand':6.2,
'Azerbaijan':6.2,
'Brunei Darussalam':6.1,
'Australia':6.1,
'Bahrain':6.1,
'Russia':6.4,
'Japan':5.9,
'Spain':5.9,
'Lithuania':5.8,
'Cyprus':5.7,
'Slovenia':5.7,
'Jordan':5.7,
'Poland':5.6,
'Kazakhstan':5.6,
'Czechia':5.5,
'Latvia':5.4,
'Italy':5.3,
'Indonesia':5.2,
'Albania':5.2,
'Malta':5.2,
'Hungary':5.2,
'Philippines':5.1,
'Slovakia':5.1,
'Viet Nam':5.0,
'Uruguay':5.0,
'Mauritius':5.0,
'India':5.0,
'Montenegro':5.0,
'Fiji':5.0,
'Armenia':5.0,
'Bulgaria':5.0,
'Peru':4.9,
'Sri Lanka':4.9,
'Macedonia':4.9,
'Serbia':4.8,
'Belarus':4.8,
'Croatia':4.8,
'Kuwait':4.8,
'Greece':4.8,
'Ukraine':4.8,
'Kenya':4.8,
'Costa Rica':4.7,
'Georgia':4.7,
'Moldova':4.7,
'Romania':4.7,
'Argentina':4.7,
'Uzbekistan':4.6,
'Lebanon':4.5,
'Thailand':4.5,
'Turkey':4.5,
'Rwanda':4.5,
'Iran':4.4,
'Egypt':4.4,
'Tunisia':4.4,
'South Africa':4.4,
'Colombia':4.3,
'Botswana':4.2,
'Panama':4.2,
'Jamaica':4.1,
'Morocco':4.1,
'Cuba':4.0,
'Trinidad and Tobago':4.0,
'Mexico':4.0,
'Ecuador':3.9,
'Pakistan':3.9,
'Ghana':3.9,
'Brazil':3.9,
'Namibia':3.8,
'Chile':3.8,
'Algeria':3.8,
'Uganda':3.7,
'Zambia':3.6,
'Senegal':3.6,
'Nigeria':3.6,
'Guyana':3.5,
'Cameroon':3.4,
'Bangladesh':3.4,
'Paraguay':3.4,
'Mongolia':3.3,
'Papua New Guinea':3.3,
'Dominican Republic':3.3,
'Tanzania':3.3,
'Honduras':3.2,
'Benin':3.2,
'Bosnia and Herzegovina':3.1,
'Myanmar':3.0,
'Venezuela':2.9,
'Cambodia':2.8,
'Zimbabwe':2.8,
'Ethiopia':2.8,
'El Salvador':2.6,
'Guinea':2.4,
'Mali':2.4,
'Madagascar':2.4,
'Nepal':2.4,
'Nicaragua':2.4,
'Mauritania':2.3,
'Malawi':2.2,
'Burkina Faso':2.2,
'Angola':2.2,
'Burundi':2.1,
'Yemen':2.1,
'Chad':1.9,
'Mozambique':1.8,
'Haiti':1.2}

function scrollDown() {
  const windowHeight = window.innerHeight; // высота видимой области окна браузера
  window.scrollBy({
      top: windowHeight, // пролистываем на высоту видимой области
      behavior: 'smooth' // плавная прокрутка
  });
}

function scrollUp(evt) {
  evt.preventDefault();
  const windowHeight = window.innerHeight; // высота видимой области окна браузера
  window.scrollBy({
      top: -1 * (windowHeight), // пролистываем на высоту видимой области
      behavior: 'smooth' // плавная прокрутка
  });
}

function noScroll(event) {
  event.stopImmediatePropagation();
}


// Привязываем функцию к событию клика на, например, кнопку
document.querySelector('.theme-menu').addEventListener('click', noScroll);
document.querySelector('#myChart').addEventListener('click', noScroll);
document.querySelector('#myChart2').addEventListener('click', noScroll);
document.querySelector('#myChart3').addEventListener('click', noScroll);
document.querySelector('#myChart4').addEventListener('click', noScroll);
document.querySelector('#myChart5').addEventListener('click', noScroll);
document.querySelector('#myChart6').addEventListener('click', noScroll);
document.querySelector('#myChart7').addEventListener('click', noScroll);
document.querySelector('#myChart8').addEventListener('click', noScroll);
document.querySelector('#myChart9').addEventListener('click', noScroll);

document.getElementById('buttonId').addEventListener('click', scrollDown);
document.getElementById('buttonId').addEventListener('contextmenu', scrollUp);

