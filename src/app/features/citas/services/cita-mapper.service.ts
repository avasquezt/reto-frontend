import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { CitaAPI } from 'src/app/core/models/DTO/citaAPI.model';
import { Cita } from 'src/app/core/models/cita.model';

@Injectable({
  providedIn: 'root'
})

export class CitaMapperService {

  constructor() { }

  citaToCitaAPI(cita: Cita): CitaAPI{
    const citaAPI: CitaAPI = {
      id: cita.id,
      date: cita.fecha.format('DD/MM/YYYY'),
      hour: cita.hora,
      idTest: cita.test,
      idAffiliate: cita.afiliado,
    }
    return citaAPI;
  }

  citaAPIToCita(citaAPI: CitaAPI): Cita{
    const cita: Cita = {
      id: citaAPI.id,
      fecha: moment(citaAPI.date, "DD/MM/YYYY"),
      hora: citaAPI.hour,
      afiliado: citaAPI.idAffiliate,
      test: citaAPI.idTest
    }
    return cita;
  }

  citaAPIToCitaNoId(citaAPI: CitaAPI): Cita{
    const cita: Cita = this.citaAPIToCita(citaAPI);
    delete cita.id;
    return cita;
  }
}
