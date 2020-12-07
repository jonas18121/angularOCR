import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-appareil',
  templateUrl: './add-appareil.component.html',
  styleUrls: ['./add-appareil.component.scss']
})
export class AddAppareilComponent implements OnInit {

    defaultOnOff = 'éteint';

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm)
    {
        console.log(form.value);   
    }

}
