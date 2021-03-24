import { Vagas } from './component/vagas';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = '';

  vagas: Vagas = {
    'id': 1,
    'name': 'FRONTEND',
    'city': 'Rio de Janeiro',
    'salary': 'R$ 10.000,00',
    'skills': ['JavaScript', 'HTML', 'CSS']
  }

  arrVagas = ["FRONTEND", "FULLSTACK", "BACKEND"];

  skills: any;

  buscar() {
    console.log("test")
  }

  constructor(public dialog: MatDialog) {
    this.skills = [{
      "req1": "JavaScript",
      "req2": "HTML5",
      "req3": "CSS3",
      "req4": "Angular"
    }]
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