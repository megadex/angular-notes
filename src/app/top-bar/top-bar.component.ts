import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor(public sharedService: SharedService) { }
  
  langToggle: any;
  @Input() brand: string;

  ngOnInit(): void {
    this.langToggle = this.sharedService.language;
  }

  changeLang(code: string) {
    this.langToggle = this.sharedService.onChangeLang(code);
  }
}
