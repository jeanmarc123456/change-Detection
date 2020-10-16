import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoneyComponent implements OnInit {

  @Input() ponyModel;
   public color$: Observable<string>;

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    this.color$ = this.colorService.get();
  }

  public check() {
    console.log("Chargement du composant Poney")
  }


  // getPonyImageUrl() {
  //   return `https://cdn.jsdelivr.net/gh/coderbase-it/angular-cd-pp@master/src/assets/images/pony-${this.ponyModel.color}-running.gif`;
  // }


}
