import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-treasure-chest',
  templateUrl: './treasure-chest.component.html',
  styleUrls: ['./treasure-chest.component.css']
})
export class TreasureChestComponent  {
  @Input() isOpen: boolean = false;
}
