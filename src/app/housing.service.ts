//https://angular.dev/tutorials/first-app/14-http#update-service-to-use-web-server-instead-of-local-array
import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  // Os serviços Angular fornecem uma maneira de você separar dados e 
  // funções do aplicativo Angular que podem ser usados ​​por vários 
  // componentes em seu aplicativo. Para ser usado por vários 
  // componentes, um serviço deve ser tornado injetável. Serviços que
  // são injetáveis ​​e usados ​​por um componente se tornam dependências
  // desse componente. O componente depende desses serviços e não pode
  // funcionar sem eles.

  // Injeção de dependência
  // Injeção de dependência é o mecanismo que gerencia as dependências 
  // dos componentes de um aplicativo e os serviços que outros componentes 
  // podem usar.

  // Esse serviço foi criado com o seguinte comando: 
  // ng generate service housing --skip-tests
  // que poderia ser resumido por ng g s housing --skip-tests
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}
