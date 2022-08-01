const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'july',
    'August',
    'September',
    'October',
    'December'
    ];

    
    const DataIndex = [0, 10, 5, 2, 85, 50,  60, 70, 50, 80,81];
    const lastItem = (DataIndex.length - 1 )
    const penulItem = (DataIndex[DataIndex.length - 2] );

    const ColorPrimary50 =  window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-50');
    const ColorPrimary100 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-100');
    const ColorPrimary200 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-200');
    const ColorPrimary300 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-300');
    const ColorPrimary400 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-400');
    const ColorPrimary500 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-500');
    const ColorPrimary600 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-600');    
    const ColorPrimary700 = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-700');

    const ColorSecondary100 = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-100');
    const ColorSecondary200 = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-200');
    const ColorSecondary300 = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-300');
    const ColorSecondary400 = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-400');
    const ColorSecondary500 = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-500');
    const ColorSecondary600 = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-600');    
    const ColorSecondary700 = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-700');



    const data = {
    labels: labels,
    datasets: [{
        label: 'detalle de orden',
        ultimo: DataIndex.length - 1 ,
        backgroundColor: ColorPrimary400,
        borderColor: ColorPrimary400,
        data : DataIndex,
        segment: {
            borderColor: (ctx) => {
              const xVal = ctx.p1.parsed.x;    
              
              if (xVal < lastItem) {
                //console.log(xVal+ " Es menor que " + (DataIndex.length - 2) );
                return ColorPrimary200;
              }else if((DataIndex[lastItem])<penulItem){
                //console.log(DataIndex.length[DataIndex.length - 2]);
                return ColorPrimary300
              }else{
                return ColorPrimary500
              }
            },
        }
    }, 
    {
      label: 'orden delivery',
      backgroundColor: ColorSecondary600,
      borderColor: ColorSecondary600,
      data : [82, 50, 5, 2, 85, 20,  95, 50, 20, 80,20],
  }
]
    };
    const config = {
    type: 'line',
    data,
    options: {
      plugins: {
        legend: {
          display: false,
          labels:{
            font:{
              family:"Flame light"
            }
          }
        }
      },
       tension: 0.4,
       elements: {
          point:{
              radius: 2,
              color: "red",
          },   
      },
      drawTicks:{
            display:false
      },      
      scales: {        
        x: {
          grid: {
            display: false,
          },         
        },
        y:{
          grid: {
            drawBorder: false,
          }
        }
      },
      }
    };

    var myChart = new Chart(
        document.getElementById('myChart').getContext('2d'),
        config
    );
    



    /* Bar chart */

//const labelsbar = Utils.months({count: 7});
const databar = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data:[5, 59, 80, 81, 56, 55, 40, 80],
    backgroundColor: [
      ColorPrimary300,
    ],
    borderColor: [
      ColorPrimary300,
    ],
    borderWidth: 1,
    borderRadius: 5,
  },
  {
    label: 'My First Dataset',
    data:[7, 69, 82, 66, 50, 40, 60, 50],
    backgroundColor: [
      ColorSecondary200,
    ],
    borderColor: [
      ColorSecondary200,
    ],
    borderWidth: 1,
    
    borderRadius: 5,
  }
]
};

const configbar = {
  type: 'bar',
  data: databar,
  options: {
      drawTicks:{
        display:false
  },
  plugins: {
    legend: {
      align:'start',
      verticalAlign: 'top',
      labels:{        
        color: "gray",
        font:{
          family:"Flame light"
        }
      }
    }
  },
        
  scales: {        
    x: {
      grid: {
        display: false,
      },         
    },
    y:{
      grid: {
        drawBorder: false,
      }
    },
    
  }
  }
  ,
};



var barchart =  new Chart(  
  document.getElementById('barchart').getContext('2d'),
  configbar
);
/* End Chart Bar */


/* Chart Donut */

const dataDonut = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      ColorPrimary300,
      ColorPrimary600,
      ColorSecondary500
    ],
    hoverOffset: 4,
    cutout:'80%',
  }]
};
const counter = {
  id:'counter',
  beforeDraw(chart, args, options){
    const {ctx, chartArea:{top, right, bottom,left,width,height}} = chart;
    ctx.save();
    ctx.font = '45px Flame light';
    ctx.textAlign= 'center';    
    ctx.fillStyle=ColorSecondary700;
    ctx.fillText('97%', width / 2, top + (height / 1.7));
  }
}
const configDonut = {
  type: 'doughnut',
  data: dataDonut,
  options:{
    scale:{
      beginAtZero: true,
      stepSize: 1
    },
    responsive:true,
    cutoutPercentage:40,
    export: {
      enabled: true,
    },
    
    plugins: {
      legend: {
        display: false,
        position:'bottom',
        labels:{        
          color: "gray",
          font:{
            family:"Flame light"
          }
        }
      },
    },
  },
  plugins:[counter]
};


var donutchar =  new Chart(  
  document.getElementById('donutchart').getContext('2d'),
  configDonut
);