import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardColumns,
  CardHeader,
  Badge, Pagination, PaginationItem, PaginationLink, Table
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import Data from '../MachinesData'

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
// Main Chart
const pressureLine = {
  labels: ['-12', '-10', '-8', '-6', '-4', '-2', '0'],
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
  labels: ['-12', '-10', '-8', '-6', '-4', '-2', '0'],
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

var elements = 7;
var machines = 5;
var temperatureData = [];
var pressureData = [];
for (var j = 0; j < machines; j++) {
  temperatureData.push(Data.maquinas[j].temperatura);
  pressureData.push(Data.maquinas[j].presion);
}


const tempChart = {
  labels: ['-1m30s', '-1m15s', '-1m', '-45s', '-30s', '-15s', 'ahora'],
  datasets: [
    {
      label: 'Temperatura 1',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: temperatureData[0],
    },
    {
      label: 'Temperatura 2',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: temperatureData[1],
    },
    {
      label: 'Temperatura 3',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: temperatureData[2],
    },
    {
      label: 'Temperatura 4',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: temperatureData[3],
    },
    {
      label: 'Temperatura 5',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: temperatureData[4],
    }
  ],
  plugins: {
    labels: false,
  }
};

const tempChartOpts = {
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
          stepSize: Math.ceil(110 / 5),
          max: 110,
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

const pressureChart = {
  labels: ['-1m30s', '-1m15s', '-1m', '-45s', '-30s', '-15s', 'ahora'],
  datasets: [    
    {
      label: 'Presión 1',
      backgroundColor: hexToRgba(brandSuccess, 10),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: pressureData[0],
    },
    {
      label: 'Presión 2',
      backgroundColor: hexToRgba(brandSuccess, 10),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: pressureData[1],
    },
    {
      label: 'Presión 3',
      backgroundColor: hexToRgba(brandSuccess, 10),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: pressureData[2],
    },
    {
      label: 'Presión 4',
      backgroundColor: hexToRgba(brandSuccess, 10),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: pressureData[3],
    },
    {
      label: 'Presión 5',
      backgroundColor: hexToRgba(brandSuccess, 10),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: pressureData[4],
    }
  ],
  plugins: {
    labels: false,
  }
};

const pressChartOpts = {
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
          stepSize: Math.ceil(25 / 5),
          max: 25,
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


const notifications = [];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    // temperatureData =  [];
    // pressureData =  [];
    var workedHours = [];
    for (var i = 0; i < machines; i++) {
      workedHours[i] = Data.maquinas[i].fhoras;
    }
    workedHours.sort(function(a, b){return b-a});
    // pressureLine.datasets[0].data = pressureData;
    // temperatureLine.datasets[0].data = temperatureData;
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      pressureLine,
      temperatureLine,
      workedHours,
      state: "Operativo",
      tempChart,
      pressureChart,
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
    temperatureData = [];
    pressureData = [];
    for (var j = 0; j < machines; j++) {
      Data.maquinas[j].actualizarTemp();
      Data.maquinas[j].actualizarPre();
      Data.maquinas[j].fhoras = this.state.workedHours[j];
      temperatureData.push([]);
      pressureData.push([]);
      for (var i = 0; i <= elements; i++) {
      // if (temperatureData[j].length > 27) temperatureData[j].shift();
        // if (pressureData[j].length > 27) pressureData[j].shift();
        temperatureData[j].push(Data.maquinas[j].temperatura[i]);
        pressureData[j].push(Data.maquinas[j].presion[i]);      
      }
      console.log(temperatureData);
    }
    for (var j = 0; j < machines; j++) {
        var i = temperatureData[j].length-2;
        if (temperatureData[j][i] >= 100) {
          notifications.unshift({
            id: Data.maquinas[j].id,
            message: "Temperatura superior al límite: " + temperatureData[j][i].toString(),
            color: "danger"
          });
          //Data[j].alerta.push("Temperatura superior al límite: " + temperatureData[j][i].toString());
        }
        var z = pressureData[j].length-2;
        if (pressureData[j][z] >= 20) {
          notifications.unshift({
            id: Data.maquinas[j].id,
            message: "Presión superior al límite: " + pressureData[j][z].toString(),
            color: "warning",
          });
          //Data[j].alerta.push("Presión superior al límite: " + pressureData[j][i].toString());
        }        
        while (notifications.length > 5) notifications.pop();      
    }

    this.setState((prevState, props) => {
      // prevState.pressureLine.datasets[0].data.push(random(50, 200));
      // prevState.temperatureLine.datasets[0].data.push(random(50, 200));
      for (var i = 0; i < machines; i++) {
        //prevState.workedHours[i] = prevState.workedHours[i] + 1;
        /* Estas son las lineas que dan problemas */
        prevState.tempChart.datasets[i].data = temperatureData[i];
        prevState.pressureChart.datasets[i].data = pressureData[i];
      }
      prevState.notifications = notifications;
      // console.log("pressure", prevState.pressureLine.datasets[0].data.length)
      // console.log("notifications", prevState.notifications)
      // console.log("temperature", prevState.temperatureLine.datasets[0].data.length)
      return prevState;
    });
    setTimeout(this.fetchData, 15 * 1000); // cada 15 minutos
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
  /*
  generateAlerts = () => {
    const alerts = [];
    for(const notification of this.state.notifications) {
      alerts.push(<Alert color={notification.color}>{notification.message}</Alert>)
    }
    return alerts;
  }
  */
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  generateRows = () => {
    const files = [];
    for(const notification of this.state.notifications) {
      var priority = "";
      if (notification.color === "danger") priority = "Muy Alta";
      else priority = "Alta";
      files.push(<tr>
                  {/*<td align="center">{random(1,4000)}</td>*/}
                  <td align="center">{'000' + notification.id}</td>
                  <td align="center">{notification.message}</td>
                  <td align="center">
                      <Badge color={notification.color}>{priority}</Badge>
                  </td>
                </tr>)
    }
    return files;
  }
  
  generateTimes = () => {
    const files = [];
    for (var i = 0; i < machines; i++) {
      files.push(<tr>
                  <td align="center">{'000' + (i+1).toString()}</td>
                  <td align="center">{this.state.workedHours[i]}</td>
                  <td align="center">{(2000 - this.state.workedHours[i]%2000).toString()}</td>
                </tr>)
    }
    
    return files;
  }
  
  render() {

    return (
      <div className="animated fadeIn">
      {/*<Row>*/}
        {/*<Col xs="255" md="6">*/}
      <CardColumns className="cols-2">
      {/*<Card>
            <CardHeader>
              <strong>Alertas</strong>
            </CardHeader>
            <CardBody>
              {this.generateAlerts()}              
            </CardBody>
          </Card>*/}
          <Card>
            <CardHeader>
              <strong>Alertas</strong>
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                <tr align="center">
                  <th>Id</th>
                  <th>Mensaje</th>
                  <th>Prioridad</th>
                </tr>
                </thead>
                <tbody>
                  {this.generateRows()}
                </tbody>
              </Table>
              <nav>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Anterior</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Siguiente</PaginationLink></PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <strong>Horas de funcionamiento</strong>
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                <tr align="center">
                  <th>   Id   </th>
                  <th>     Horas     </th>
                  <th>Restantes para mantenimiento</th>
                </tr>
                </thead>
                <tbody>
                  {this.generateTimes()}
                </tbody>
              </Table>
              <nav>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Anterior</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Siguiente</PaginationLink></PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Card>
        </CardColumns>        
        {/*<Row> 
          {/* Es el primer grafico del dashboard */}
          {/*<Col>
            <Card>
              <CardHeader>
                <strong>Principal</strong>
              </CardHeader>
              <CardBody>                
                {/* Esto es el gráfico */}
                {/*<div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={this.state.mainChart} options={tempChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>*/}
        <CardColumns className="cols-2">
          <Card>
            <CardHeader>
              <strong>
                Temperaturas más altas
              </strong>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={this.state.tempChart} options={tempChartOpts} />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <strong>
                Presiones más altas
              </strong>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={this.state.pressureChart} options={pressChartOpts} />
              </div>
            </CardBody>
          </Card>    
        </CardColumns>
      </div>
    );
  }
}

export default Dashboard;
