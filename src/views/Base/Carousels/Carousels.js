import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardColumns,
  CardHeader,
  CardTitle,
  Carousel, 
  CarouselCaption, 
  CarouselControl, 
  CarouselIndicators, 
  CarouselItem,
  Col,
  Row,
  Alert,
  Badge, Pagination, PaginationItem, PaginationLink, Table
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import * as moment from "moment";
import Data from '../../MachinesData'

// const items = [
//   {
//     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//     altText: 'Slide 1',
//     caption: 'Slide 1',
//   },
//   {
//     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//   },
//   {
//     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//   },
// ];

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
// Main Chart
const pressureLine = {
  /*var currentdate = new Date();
  var datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":";
  var seconds = currentdate.getSeconds();
  labels: [(datetime + (seconds - 12)).toString(), (datetime + (seconds - 10)).toString(), (datetime + (seconds - 8)).toString(), (datetime + (seconds - 6)).toString(), (datetime + (seconds - 4)).toString(), (datetime + (seconds - 2)).toString(), (datetime + seconds).toString()],*/
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

class Carousels extends Component {
/*
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }*/

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
        }
        var z = pressureData[j].length-2;
        if (pressureData[j][z] >= 20) {
          notifications.unshift({
            id: Data.maquinas[j].id,
            message: "Presión superior al límite: " + pressureData[j][z].toString(),
            color: "warning",
          });          
        }     
    }
    this.setState((prevState, props) => {
      // prevState.pressureLine.datasets[0].data.push(random(50, 200));
      // prevState.temperatureLine.datasets[0].data.push(random(50, 200));
      for (var i = 0; i < machines; i++) {
        prevState.workedHours[i] = prevState.workedHours[i] + 1;
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
  
  generateRows = () => {
    const files = [];
    for(const notification of this.state.notifications) {
      var priority = "";
      if (notification.color == "danger") priority = "Muy Alta";
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

  render() {
//     const { activeIndex } = this.state;
// 
//     const slides = items.map((item) => {
//       return (
//         <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
//           <img className="d-block w-100" src={item.src} alt={item.altText} />
//         </CarouselItem>
//       );
//     });
// 
//     const slides2 = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.src}
//         >
//           <img className="d-block w-100" src={item.src} alt={item.altText} />
//           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });

    return (
//       <div className="animated fadeIn">
//         <Row>
//           <Col xs="12" xl="6">
//             <Card>
//               <CardHeader>
//                 <i className="fa fa-align-justify"></i><strong>Carousel</strong>
//                 <div className="card-header-actions">
//                   <a href="https://reactstrap.github.io/components/carousel/" rel="noreferrer noopener" target="_blank" className="card-header-action">
//                     <small className="text-muted">docs</small>
//                   </a>
//                 </div>
//               </CardHeader>
//               <CardBody>
//                 <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride="carousel">
//                   {slides}
//                 </Carousel>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col xs="12" xl="6">
//             <Card>
//               <CardHeader>
//                 <i className="fa fa-align-justify"></i><strong>Carousel</strong>
//               </CardHeader>
//               <CardBody>
//                 <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
//                   <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//                   {slides2}
//                   <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//                   <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//                 </Carousel>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
        
      <div className="animated fadeIn">
      {/*<Row>*/}
        {/*<Col xs="255" md="6">*/}
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
            </CardBody>
          </Card>
    </div>
    );
  }
}

export default Carousels;
