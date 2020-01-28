import { Component, OnInit,Input,Output} from '@angular/core';
import {QService} from '../q.service';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit
{
  @Input() loginStatus=false;
  @Output() f=new EventEmitter();
  username;
  a;
  b;
  c;
  quality:String[]=[];
  selected = '6.7';
  post;
  isCheck=false;
  constructor(public myObj:QService)
  {
  }
  ngOnInit() {
  }
  addData(form)
  {
      if(form.invalid)
      {
        return;
      }
      else
      {
        if(this.a==false&&this.b==false&&this.c==false)
        {
        }
        else if(this.a==true&&this.b==true&&this.c==true)
        {
          this.quality.push("Honest");
          this.quality.push("Humble");
          this.quality.push("Kind");
        }
        else if(this.a==true)
        {
          this.quality.push("Honest");
          if(this.b==true)
          {
            this.quality.push("Humble");
          }
          else if(this.c==true)
          {
              this.quality.push("Kind");
          }
        }
        else if(this.b==true)
        {
          this.quality.push("Humble");
          if(this.c==true)
          {
            this.quality.push("Kind");
          }
        }
        else if(this.c==true)
        {
            this.quality.push("Kind");
        }
        this.post={"name":this.username,"gender":form.value.gender,"hair":
      form.value.hair,"qualities":[this.quality],"des":form.value.des,"height":this.selected};
        this.myObj.getQuality(this.post);
        this.isCheck=true;
        this.f.emit(this.isCheck);
      }

  }
}
