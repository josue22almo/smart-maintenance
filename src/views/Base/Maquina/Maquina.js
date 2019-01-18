import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardColumns,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Alert,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import * as moment from "moment";
import Data from '../../MachinesData'

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')

// Main Chart
const pressureLine = {
  labels: ['-1m30s', '-1m15s', '-1m', '-45s', '-30s', '-15s', 'now'],
  datasets: [
    {
      label: 'Presion',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
};
const temperatureLine = {
  labels: ['-1m30s', '-1m15s', '-1m', '-45s', '-30s', '-15s', 'now'],
  datasets: [
    {
      label: 'Temperatura',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var temperatureData = [];
var pressureData = [];
var horas = 1372;
var estado = Data.maquinas[0].estado;
for (var i = 0; i <= elements; i++) {
  temperatureData.push(random(70,90) + random(-10,15));
  pressureData.push(random(10,20) + random(-5,1));
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'Temperatura',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: temperatureData,
    },
    {
      label: 'Presión',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: pressureData,
    },
  ],
  plugins: {
    labels: false,
  }
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const alert = {

}

class Maquina extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    // temperatureData =  [];
    // pressureData =  [];
    
    const workedHours = 0;
    // pressureLine.datasets[0].data = pressureData;
    // temperatureLine.datasets[0].data = temperatureData;
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      pressureLine,
      temperatureLine,
      workedHours,
      state: "Operativo",
      mainChart,
      notifications: []
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }


  fetchData = () => {
    console.log("fetching data");    
    temperatureData =  [];
    pressureData = [];
    for (var j = 0; j < 5; j++) {
      Data.maquinas[j].actualizarTemp();
      Data.maquinas[j].actualizarPre();
    }

    for (var i = 0; i <= elements; i++) {
      temperatureData.push(Data.maquinas[0].temperatura[i]);
      pressureData.push(Data.maquinas[0].presion[i]);
    }
    const notifications = [];
    for(var i = 0; i <= temperatureData.length; ++i) {
      if (temperatureData[i] >= 100) {
        notifications.unshift({
          message: "Temperatura superior al límite: " + temperatureData[i].toString(),
          color: "danger"
        })
      }
      if (pressureData[i] >= 20) {
        notifications.unshift({
          message: "Presión superior al límite: " + pressureData[i].toString(),
          color: "warning",
        });
      }
      while (notifications.length > 2) notifications.pop();
    }
    this.setState((prevState, props) => {
      // prevState.pressureLine.datasets[0].data.push(random(50, 200));
      // prevState.temperatureLine.datasets[0].data.push(random(50, 200));
      prevState.workedHours = prevState.workedHours + 1;
      prevState.pressureLine.datasets[0].data = pressureData;
      prevState.temperatureLine.datasets[0].data = temperatureData;
      //prevState.mainChart.datasets[0].data = temperatureData;
      //prevState.mainChart.datasets[1].data = pressureData;
      if (notifications.length < 5) prevState.notifications = notifications;
      else prevState.notifications = notifications.slice(notifications.length-4);

      // console.log("pressure", prevState.pressureLine.datasets[0].data.length)
      // console.log("notifications", prevState.notifications)
      // console.log("temperature", prevState.temperatureLine.datasets[0].data.length)
      return prevState;
    });
    setTimeout(this.fetchData, 15 * 1000);
  }

  componentDidUpdate() {
    this.render();
  }

  componentDidMount() {
    console.log("component mounted");
    this.fetchData();
    
    // temperatureData =  [];
    // pressureData =  [];
    // for (var i = 0; i <= elements; i++) {
    //   temperatureData.push(random(50, 200));
    //   pressureData.push(random(80, 100));
    // }
    // this.setState((prevState, props) => {
    //   prevState.pressureLine.datasets[0].data = pressureData;
    //   prevState.temperatureLine.datasets[0].data = temperatureData;
    //   return prevState;
    // });
  }

  generateAlerts = () => {
    const alerts = [];
    for(const notification of this.state.notifications) {
      alerts.push(<Alert color={notification.color}>{notification.message}</Alert>)
    }
    return alerts;
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <CardColumns className="cols-2">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Alertas</strong>
              </CardHeader>
              <CardBody>
                {this.generateAlerts()}
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Información</strong>
              </CardHeader>
              <CardBody>
                <Alert color="info">Horas de funcionamiento: {horas}</Alert>
                <Alert color="info">Estado: {estado}</Alert>                
              </CardBody>
            </Card>    
        </CardColumns>
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>
              Presión
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={this.state.pressureLine} options={options} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              Temperatura
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={this.state.temperatureLine} options={options} />
              </div>
            </CardBody>
          </Card>    
        </CardColumns>
      </div>
    );
  }
}

export default Maquina;
