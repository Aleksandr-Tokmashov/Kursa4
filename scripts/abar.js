const ctx6 = document.getElementById('myChart6');


Chart.register(ChartDataLabels);
new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['<10 лет', '10-13 лет', '14-17 лет', '18-25 лет', 
        '26-35 лет', '36-45 лет', '46-59 лет', '60+ лет'],
        datasets: [{
            label: 'Уровень цифровой грамотности',
            data: [60.6 , 62.4, 63.8, 64.1, 69.6, 67.3, 66.4, 61.9],
            backgroundColor: 'rgb(24, 84, 216)',
            borderColor: 'rgb(24, 84, 216)',
            borderWidth: 1
        }]
    },
    options: {

        scales: {
            x: {
              grid: {
                color: gridc },
              ticks: {
                  color: xy,
                  font: {
                      size: 18,
                      weight: 'bold'
                  }
              }
          },
            y: {
              grid: {
                color: gridc },
              min: 45,
              max: 75,
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
          tooltip: {
            
            callbacks: { 

              title: function(context) {
                return context[0].label
            },
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y+'%';
          },

            },
            enabled: true,
            usePointStyle: true,
          },
            legend: {
                display: false
            },

        }
    }
});



