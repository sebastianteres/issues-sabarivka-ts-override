import { Component } from '@angular/core';
import { ChildSample } from '../child-sample';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
    child = new ChildSample('a', 'b');
}
