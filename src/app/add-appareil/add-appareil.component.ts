import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appareil',
  templateUrl: './add-appareil.component.html',
  styleUrls: ['./add-appareil.component.scss']
})
export class AddAppareilComponent implements OnInit {

    defaultOnOff = 'éteint';

    constructor(private appareilService : AppareilService, private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm)
    {
        const name = form.value['name'];   
        const status = form.value['status'];

        this.appareilService.addAppareil(name, status);
        this.router.navigate(['/appareils']);
    }

}
