import { ChangeDetectionStrategy, Component, model, output, OutputEmitterRef, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SearchBarComponent {
  search = model('initial search');

  searchButtonCliked: OutputEmitterRef<void> = output<void>();

  searchClicked() {
    this.searchButtonCliked.emit();
  }
}
