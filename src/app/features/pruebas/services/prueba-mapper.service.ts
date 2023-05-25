import { Injectable } from '@angular/core';
import { PruebaAPI } from 'src/app/core/models/DTO/pruebaAPI.model';
import { Prueba } from 'src/app/core/models/prueba.model';

@Injectable({
  providedIn: 'root'
})
export class PruebaMapperService {

  constructor() { }

  pruebaToPruebaAPI(prueba: Prueba): PruebaAPI{
    const pruebaAPI: PruebaAPI = {
      id: prueba.id,
      name: prueba.nombre,
      description: prueba.descripcion,
    }
    return pruebaAPI;
  }

  pruebaAPIToPrueba(pruebaAPI: PruebaAPI): Prueba{
    const prueba: Prueba = {
      id: pruebaAPI.id,
      nombre: pruebaAPI.name,
      descripcion: pruebaAPI.description,
    }
    return prueba;
  }

  pruebaAPIToPruebaNoId(pruebaAPI: PruebaAPI): Prueba{
    const prueba: Prueba = this.pruebaAPIToPrueba(pruebaAPI);
    delete prueba.id;
    return prueba;
  }

}
