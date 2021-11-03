import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  value = 0;
  have = "USD";
  want = "USD";
  total = 0;
  icons: string [] = ["USD","EUR","ARS"];
  constructor() { }

  ngOnInit(): void {
  }

  convert(){
    console.log(this.have);
    console.log(this.want);
    switch(this.have){
      case 'USD':
        if(this.want === "USD"){
          this.total = this.value;
        }
        if(this.want === "EUR"){
          this.total = this.value * 0.86;
        }
        if(this.want === "ARS"){
          this.total = this.value * 99.12;
        }
        break;
      case 'EUR':
        if(this.want === "EUR"){
          this.total = this.value;
        }
        if(this.want === "USD"){
          this.total = this.value * 1.16;
        }
        if(this.want === "ARS"){
          this.total = this.value * 144.87;
        }
        break;
      case 'ARS':
        if(this.want === "ARS"){
          this.total = this.value;
        }
        if(this.want === "USD"){
          this.total = this.value * 0.01;
        }
        if(this.want === "EUR"){
          this.total = this.value * 0.0087;
        }
        break;
    }
  }

}
