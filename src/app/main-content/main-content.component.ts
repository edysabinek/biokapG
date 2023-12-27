import { Component, AfterViewInit, OnInit } from '@angular/core';
import { trigger,state, style,animate,transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('rotated => default', animate('1500ms 200ms linear')),
      transition('default => rotated', animate('1500ms 200ms linear'))
    ])
  ]
})
export class MainContentComponent implements OnInit{
  state!: string;

  //Au chargement de la page
  ngOnInit(): void {

    // état de rotation
    this.state = 'default';

    setTimeout( () => {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
      }, 200); 
  }

  onEnd(event: AnimationEvent) {
    // wait for 1500ms then change the state
    setTimeout( () => {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
      }, 1500);
  }
  
}
