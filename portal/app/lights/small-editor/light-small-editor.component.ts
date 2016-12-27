import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';


import { Light } from '../light';
import { LightsService } from '../lights.service';
import { ColorService } from '../../shared/color.service';

@Component({
  moduleId: module.id.replace("/dist/client/", "/"),
  selector: 'light-small-editor',
  templateUrl: 'light-small-editor.component.html',


})
export class LightSmallEditorComponent implements OnInit {

  @Input() light: Light;
  @Input() selected: boolean;

   private color: string = "#FFFFFF";

   constructor(private lightService: LightsService, private colorService: ColorService) {
  }
  ngOnInit(){
      this.color = this.colorService.getRgbHex(this.light);
  }

  save(): void {
    this.lightService.update(this.light)//.then(light => this.light = light);
  }

  updateAndSaveValue(name: string,value:number):void{
      this.light[name] = value;
      this.save();
  }

  colorChange(value:string): void {
      this.color = value;
      this.colorService.updateColor(value, this.light);
      this.save();
  }

  /*  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedLight.id]);
    }*/

}
