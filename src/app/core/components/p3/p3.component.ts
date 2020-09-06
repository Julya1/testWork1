import { Component } from '@angular/core';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.scss']
})
export class P3Component {
  public socialData = [
    {image: '/assets/check2.svg', name: 'H&M', hint: 'Info about the action'},
    {image: '/assets/check2.svg', name: 'H&M', hint: 'Info about the action'},
    {image: '/assets/check2.svg', name: 'H&M', hint: 'Info about the action'},
    {image: '/assets/check2.svg', name: 'H&M', hint: 'Info about the action'},
  ];
  public socialData1 = [
    {image: '/assets/check2.svg', name: 'H&M', hint: 'Info about the action'},
    {image: '/assets/check2.svg', name: 'H&M', hint: 'Info about the action'},
    {image: '/assets/check2.svg', name: 'H&M', hint: 'Info about the action'},
  ];
}
