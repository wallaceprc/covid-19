import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import moment from 'moment';
import 'moment/locale/pt-br';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Covid19() {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    getCorona();
  }, [])

  async function getCorona() {await api.get("countries").then(response => {
    console.log("BORA LOGO", response);
    setCovid(response.data);
  })}

  return (
    <div style={{ backgroundColor: 'black' }}>
      <h2 style={{ textAlign: 'center', color: 'white' }}>Total de Países: {covid.length}</h2>
      <div className="container-fluid" style={{backgroundColor: 'white'}}>
        <div class="col-md">
          <div class="row">
              {covid.map((item) => (
                <Card style={{width: 400, backgroundColor: '#9157C1', marginTop: 30, marginLeft: 65, borderRadius: 7 }}>
                  <CardBody>
                    <CardTitle style={{ color: 'white'}} tag="h4">País: {item.country}</CardTitle>
                    {/* <CardTitle style={{ color: 'white'}} tag="h4">Dados Confirmados: {item.cases}</CardTitle> */}
                    <CardSubtitle style={{ color: 'white'}} tag="h4" className="mb-2">Dados Confirmados: {item.cases}</CardSubtitle>
                    <CardText style={{ color: 'white'}} tag="h4">Data: {moment(item.Date).locale('pt-br').format('LL')}</CardText>
                    <Button style={{backgroundColor: 'green'}}>Button</Button>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covid19;
