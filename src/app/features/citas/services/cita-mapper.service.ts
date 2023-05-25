import { Injectable } from '@angular/core';
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
      date: cita.fecha.toLocaleDateString('en-GB'),
      hour: cita.hora,
      idTest: cita.test,
      idAffiliate: cita.afiliado,
    }
    return citaAPI;
  }

  citaAPIToCita(citaAPI: CitaAPI): Cita{
    let [date, month, year] = citaAPI.date.split('/');
    const cita: Cita = {
      id: citaAPI.id,
      fecha: (new Date(`${year}-${month}-${date}T00:00`)),
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
