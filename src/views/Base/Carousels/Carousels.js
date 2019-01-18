import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Badge,
  Table
} from 'reactstrap';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import Data from '../../MachinesData'

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
// Main Chart
const pressureLine = {labels: ['-12', '-10', '-8', '-6', '-4', '-2', '0'],
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

const notifications = [];

class Carousels extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
   var workedHours = [];
    for (var i = 0; i < machines; i++) {
      workedHours[i] = Data.maquinas[i].fhoras;
    }
    workedHours.sort(function(a, b){return b-a});
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
     for (var i = 0; i < machines; i++) {
        prevState.workedHours[i] = prevState.workedHours[i] + 1;
        prevState.tempChart.datasets[i].data = temperatureData[i];
        prevState.pressureChart.datasets[i].data = pressureData[i];
      }
      prevState.notifications = notifications;
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
  }
  
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
