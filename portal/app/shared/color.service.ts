import { Injectable } from '@angular/core';
import { Light } from '../lights/light';

import { ColorPickerService, Hsva } from 'angular2-color-picker';

@Injectable()
export class ColorService {

    constructor(private cpService: ColorPickerService) { }

    updateColor(rgb: string, light: Light): void {
        if (rgb !== null && light !== null) {
            let hsva: Hsva = this.cpService.stringToHsva(rgb);
            let newH = Math.floor(hsva.h * 65535 / 1);
            let newS = Math.floor(hsva.s * 254 / 1);
            let newV = Math.floor(hsva.v * 254 / 1);
            light.hue = newH;
            light.brightness = newV;
            light.saturation = newS;

        }
    }


    getRgbHex(light: Light): string {
        console.log(light);
        let hsva = new Hsva(
            light.hue / 65535,
            light.saturation / 254,
            light.brightness / 254,
            100,
        )
        console.log(hsva);
        return this.cpService.outputFormat(hsva, 'rgb', false);
    }

}

