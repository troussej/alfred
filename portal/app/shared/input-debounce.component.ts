import {Component, Input, Output, ElementRef, EventEmitter} from '@angular/core';  
//import {CORE_DIRECTIVES} from 'angular/common';  
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'input-debounce',
    template: '<input [type]="type"   [(ngModel)]="inputValue" >'
})
export class InputDebounceComponent {  
    @Input() delay: number = 300;
    @Input() type: string = 'text';
    @Output() value: EventEmitter<any> = new EventEmitter();

    @Input() inputValue: any;

    constructor(private elementRef: ElementRef) {
        const eventStream = Observable.fromEvent(elementRef.nativeElement, 'change')
            .map(() => this.inputValue)
            .debounceTime(this.delay)
            .distinctUntilChanged();

        eventStream.subscribe(input => this.value.emit(input));
    }
}