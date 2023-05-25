import { Injectable } from '@angular/core';
import { AfiliadoAPI } from 'src/app/core/models/DTO/afiliadoAPI.model';
import { Afiliado } from 'src/app/core/models/afiliado.model';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoMapperService {

  constructor() { }

  afiliadoToAfilidoAPI(afiliado: Afiliado): AfiliadoAPI{
    const afiliadoAPI: AfiliadoAPI = {
      id: afiliado.id,
      name: afiliado.nombre,
      age: afiliado.edad,
      mail: afiliado.correo,
    }
    return afiliadoAPI;
  }

  afiliadoAPIToAfiliado(afiliadoAPI: AfiliadoAPI): Afiliado{
    const afiliado: Afiliado = {
      id: afiliadoAPI.id,
      nombre: afiliadoAPI.name,
      edad: afiliadoAPI.age,
      correo: afiliadoAPI.mail,
    }
    return afiliado;
  }

  afiliadoAPIToAfiliadoNoId(afiliadoAPI: AfiliadoAPI): Afiliado{
    const afiliado: Afiliado = this.afiliadoAPIToAfiliado(afiliadoAPI);
    delete afiliado.id;
    return afiliado;
  }
}
