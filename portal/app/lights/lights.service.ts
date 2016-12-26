import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Light } from './light';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class LightsService {

  private lightsUrl = 'http://localhost:4300/api/hue/light';  // URL to web api

  constructor(private http: Http) { }

  getLights(): Promise<Light[]> {
    return this.http.get(this.lightsUrl)
      .toPromise()
      .then(response => response.json() as Light[])
      .catch(this.handleError);

  }
  getLight(id: number): Promise<Light> {
    const url = `${this.lightsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Light)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  private headers = new Headers({ 'Content-Type': 'application/json' });

  update(light: Light): Promise<Light> {
    const url = `${this.lightsUrl}/${light.attributes.attributes.id}`;
    return this.http
      .put(url, JSON.stringify(light), { headers: this.headers })
      .toPromise()
      .then(() => light)
      .catch(this.handleError);
  }

/*  create(name: string): Promise<Light> {
    return this.http
      .post(this.lightsUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }


  delete(id: number): Promise<void> {
    const url = `${this.lightsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }*/
}

