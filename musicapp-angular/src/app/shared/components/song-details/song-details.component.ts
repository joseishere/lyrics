import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  song:String ;
  lyrics:string;
  constructor() { 
    this.song= "God's Plan";
    this.lyrics= "Yeah they wishin' and wishin' and wishin' and wishin They wishin' on me, yuh\
    They wishin' on me, yuh\
    I been movin' calm, don't start no trouble with me\
    Tryna keep it peaceful is a struggle for me\
    Don't pull up at 6 AM to cuddle with me\
    You know how I like it when you lovin' on me\
    I don't wanna die for them to miss me\
    Yes I see the things that they wishin' on me\
    Hope I got some brothers that outlive me\
    They gon' tell the story, shit was different with me\
    God's plan, God's plan\
    I hold back, sometimes I won't, yuh\
    I feel good, sometimes I don't, ay, don't\
    I finessed down Weston Road, ay, 'nessed\
    Might go down a G.O.D., yeah, wait\
    I go hard on Southside G, yuh, Way\
    I make sure that north side eat"
    
  }

  ngOnInit() {
  }

}
