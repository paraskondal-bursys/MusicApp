import { Component } from '@angular/core';
import { MusicDataService } from 'src/providers/services/music.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any={};

  constructor(
    public musicService: MusicDataService
  ) {}

  getData(){
    this.musicService.getMusicData().subscribe((res) =>{
      this.data = res;
       console.log("this.data",this.data);
    })
  }

}
