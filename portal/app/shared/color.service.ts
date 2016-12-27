import { Injectable } from '@angular/core';
import { Light } from '../lights/light';

import { ColorPickerService, Hsva } from 'angular2-color-picker';

const HUE_HUE_RANGE = 65535;
const HUE_SAT_RANGE = 254;
const HUE_BRI_RANGE = 254;

const CP_HUE_RANGE = 1;
const CP_SAT_RANGE = 1;
const CP_BRI_RANGE = 1;

@Injectable()
export class ColorService {


    constructor(private cpService: ColorPickerService) { }

    updateColor(rgb: string, light: Light): void {
        if (rgb !== null && light !== null) {
            let hsva: Hsva = this.cpService.stringToHsva(rgb);
            let newH = Math.floor(hsva.h * HUE_HUE_RANGE / CP_HUE_RANGE);
            let newS = Math.floor(hsva.s * HUE_SAT_RANGE / CP_SAT_RANGE);
            let newV = Math.floor(hsva.v * HUE_BRI_RANGE / CP_BRI_RANGE);
            light.hue = newH;
            light.brightness = newV;
            light.saturation = newS;
        }
    }


    getRgbHex(light: Light): string {
        let hsva = new Hsva(
            light.hue * CP_HUE_RANGE / HUE_HUE_RANGE,
            light.saturation * CP_SAT_RANGE / HUE_SAT_RANGE,
            light.brightness * CP_BRI_RANGE / HUE_BRI_RANGE,
            100,
        )
        return this.cpService.outputFormat(hsva, 'rgb', false);
    }

}

