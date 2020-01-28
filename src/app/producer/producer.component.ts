import { Component, OnInit,Input} from '@angular/core';
import {QService} from '../q.service';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
    post=[];
    @Input() dataStatus=false;
  constructor(public my:QService)
    {
      this.post=my.giveQuality();
      console.log(this.post);
    }
  ngOnInit() {
  }

}
