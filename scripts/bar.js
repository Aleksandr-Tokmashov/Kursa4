const ctx = document.getElementById('myChart');
const regions = [[6.74, 6.35, 7.09], [6.62, 6.3, 7.05],
                 [6.66, 6.18, 6.84], [6.47, 5.98, 6.94], 
                 [6.26, 6.05, 7.02], [6.42, 5.93, 6.79],
                 [6.38, 5.9, 6.82], [6.39, 5.87, 6.59], 
                 [6.17, 5.67, 6.43]]

pelement = document.querySelector('.body');
pstyle = window.getComputedStyle(pelement);
colorValue = pstyle.getPropertyValue('color');
colorLine = pstyle.getPropertyValue('background-color');
lineColor = pstyle.getPropertyValue('border-color');
dlabel =  pstyle.getPropertyValue('outline-color');

gelement = document.querySelector('.grid');
gstyle = window.getComputedStyle(gelement);
gridc = gstyle.getPropertyValue('color');
xy = gstyle.getPropertyValue('background-color')
barc = gstyle.getPropertyValue('border-color')
legendc = gstyle.getPropertyValue('outline-color')

Chart.register(ChartDataLabels);
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Северо-Западный', 'Уральский', 'Южный', 'Приволжский', 'Новые территории', 'Сибирский', 'Центральный', 'Дальневосточный', 'Северо-Кавказский'],
        datasets: [{
            label: 'Уровень цифровой грамотности',
            data: [6.73, 6.65, 6.56, 6.45, 6.44, 6.38, 6.36, 6.28, 6.09],
            backgroundColor: 'rgb(24, 84, 216, 0.9)',


        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                grid: {
                    color: gridc },
                display: false,
                max: 7.5 
            },
            y: {
                grid: {
                    display: true,
                    color:  gridc},
                ticks: {
                    
                    color: xy,
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
          tooltip: {
            enabled: true,
            usePointStyle: true,
            callbacks: { 


              afterLabel: (data) => { 
                return `Цифровое потребление: ${regions[data.parsed.y][0]}
Цифровые компентенции: ${regions[data.parsed.y][1]}
Цифровая безопасность: ${regions[data.parsed.y][2]}`
              },
            },
          },
            legend: {
                display: false,
                labels: {
                    color: legendc
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: dlabel,
                font: {
                    weight: 'bold',
                    size: 18
                },
                formatter: function (value, context) {
                    return value;
                }
            },
        }
    }
});



