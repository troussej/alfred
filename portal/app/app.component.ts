import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  moduleId: module.id.replace("/dist/client/", "/"),

})
export class AppComponent  { name = 'ALFRED'; }
