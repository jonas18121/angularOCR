import { Component, OnInit } from '@angular/core';
// les import doivent être toujours ecrit en 1er, afin d'évité des erreurs

// component de base
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    ngOnInit(){}
}
