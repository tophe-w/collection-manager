import { ChangeDetectionStrategy, Component, Input, input, InputSignal } from '@angular/core';
import { CollectionItem } from '../../models/collection-item';

@Component({
  selector: 'app-collection-item-card',
  imports: [],
  templateUrl: './collection-item-card.component.html',
  styleUrl: './collection-item-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CollectionItemCardComponent {

  item = input.required<CollectionItem>();






}
 