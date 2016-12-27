import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


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
    private colorTO: any;

    constructor(private lightService: LightsService, private colorService: ColorService) {
    }
    ngOnInit() {
        this.updateColorFromLight();
    }

    save(): void {
        this.lightService.update(this.light)//.then(light => this.light = light);
    }

    updateAndSaveValue(name: string, value: number): void {
        this.light[name] = +value;//hack to get number
        this.updateColorFromLight();
        this.save();
    }

    updateLightColorAndSave(): void {
        this.colorService.updateColor(this.color, this.light);
        this.save();
    }

    colorChange(value: string): void {
        this.color = value;
        //manual debounce...
        if (this.colorTO){
            clearTimeout(this.colorTO);
        }
        this.colorTO = setTimeout(()=>{
            this.updateLightColorAndSave()
        },
            100);
    }

    private updateColorFromLight(): void {
        this.color = this.colorService.getStringColor('hsla',this.light);
    }

    /*  gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedLight.id]);
      }*/

}
