import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'man';
  status=false;
  status1=false;
  checkStatus(a)
  {
      this.status=a;
      console.log(a);
  }
  checkF(a)
  {
    this.status1=a;
  }
}
