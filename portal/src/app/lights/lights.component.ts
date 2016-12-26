import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Light } from './light';
import { LightsService } from './lights.service';

@Component({
  selector: 'lights',
  templateUrl: 'lights.component.html',
  styleUrls: ['lights.component.css']

})
export class LightsComponent implements OnInit {

  selectedLight: Light;
  lights: Light[];

  constructor(private lightService: LightsService, private router: Router) {

  }
  ngOnInit(): void {
    this.getLights();
  }


  onSelect(light: Light): void {
    this.selectedLight = light;
  }

  getLights(): void {
      this.lightService.getLights().then(lights => this.lights = lights);
  }

  /*  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedLight.id]);
    }*/

}
