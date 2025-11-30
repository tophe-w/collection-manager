import { ChangeDetectionStrategy, Component, computed, effect, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCardComponent } from './components/collection-item-card/collection-item-card.component';
import { CollectionItem } from './models/collection-item';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { Collection } from './models/collection';

@Component({
  selector: 'app-root',
  imports: [SearchBarComponent, CollectionItemCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  searchText = model('');
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
  tripleCount = computed(() => this.doubleCount() * 1.5);
  fruits = signal(['pomme', 'banane', 'poire', 'kiwi']);
  filteredFruits = computed(() =>
    this.fruits().filter(f => f.toLowerCase().includes(this.searchText().toLowerCase()))
  );

  coin!: CollectionItem;
  excalibur!: CollectionItem;
  stamp!: CollectionItem;

  selectedCollection = signal<Collection | null>(null);
  collectionItems = computed(() => {
    const allItems = this.selectedCollection()?.items || [];
    return allItems.filter(item =>
      item.name.toLowerCase().includes(this.searchText().toLocaleLowerCase())
    );
  });
c: any;


  constructor() {
    this.coin = new CollectionItem();
    this.coin.name = 'Ancient Coin';
    this.coin.description = 'A rare coin from ancien qerzgtqerg erg t civilizations.';
    this.coin.rarity = 'Legendary';
    this.coin.price = 150;
    this.coin.image = 'img/coin1.jpg';

    this.excalibur = new CollectionItem();
    this.stamp = new CollectionItem();
    this.stamp.name = 'Vintage Stamps';
    this.stamp.description = 'A collection of vintage stamps from around the world.';
    this.stamp.rarity = 'Rare';
    this.stamp.price = 75;
    this.stamp.image = 'img/timbre1jpg.webp';

    const defaultCollection = new Collection();
    defaultCollection.title = 'Default Collection';
    defaultCollection.items = [this.excalibur, this.coin, this.stamp];
    this.selectedCollection.set(defaultCollection);

  }

  incrementCount() {
    this.count.update(c => c + 10);
  }

}
