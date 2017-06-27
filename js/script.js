let grafico = document.getElementById('grafico').getContext('2d');

// Opciones globales
Chart.defaults.global.defaultFontFamily = "Ubuntu, Helvetica, Arial";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontcolor = '#777';

let graficoPoblacion = new Chart(grafico, {
  type: 'bar',
  data: {
    labels: ['Roma', 'Milán', 'Nápoles', 'Turín', 'Palermo', 'Génova'],
    datasets: [{
      label: 'Población',
      data: [
        2872021,
        1337155,
        978399,
        896773,
        678492,
        592507
      ],
      backgroundColor: [
        'rgba(46, 204, 113,.7)',
        'rgba(52, 152, 219,.7)',
        'rgba(155, 89, 182,.7)',
        'rgba(231, 76, 60,.7)',
        'rgba(52, 73, 94,.7)',
        'rgba(241, 196, 15,.7)'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 2,
      hoverBorderColor: '#333'
    }]
  },

  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Ciudades más pobladas",
      fontSize: 22
    },
    legend: {
      display: false,
      position: 'right',
      labels: {
        fontColor: 'tomato'
      }
    },
    layout: {
      padding: {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
