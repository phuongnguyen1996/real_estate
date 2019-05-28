import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { container } from '@angular/core/src/render3';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data;
  result=[];
  dem=0;
  res=[];
  constructor(private dataService: DataService){}
  ngOnInit(){
    this.data = this.dataService.getData();
    for(let i=0; i<this.data.length; i=i+1){
      for(let j=0; j<this.data[i].post.length; j=j+1)
      this.result.push(this.data[i].post[j]);
    }
    for(let i=0; i<10; i++){
      this.dem = Math.floor(Math.random()*this.result.length);
      if(this.res.includes(this.result[this.dem]) === false){
        this.res.push(this.result[this.dem]);
      }else{
        i--;
      }
    }
    console.log(this.res);
  }
}
