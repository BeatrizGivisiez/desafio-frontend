import { Vagas } from './component/vagas.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = '';

  vagas: Array<Vagas>;

  buscar() {
    console.log(this.value)
  }
  // let search = this.vagas.filter(function (value) {
  //   return value.vagas.name == value;
  // },

  constructor(public dialog: MatDialog) {
    this.vagas = [{
      id: 1,
      name: 'FRONTEND',
      city: 'Rio de Janeiro',
      salary: 'R$ 10.000,00',
      skills: [{ name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }]
    },
    {
      id: 2,
      name: 'BACKEND',
      city: 'São Paulo',
      salary: 'R$ 8.000,00',
      skills: [{ name: 'Java' }, { name: 'Oracle' }, { name: 'Eclipse' }]
    },
    {
      id: 3,
      name: 'FULLSTACK',
      city: 'Belo Horizonte',
      salary: 'R$ 13.000,00',
      skills: [{ name: 'JavaScript' }, { name: 'Java' }, { name: 'Oracle' }]
    },
    ]
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './component/dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog { }