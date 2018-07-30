import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-built-in-struc-directive',
  templateUrl: './built-in-struc-directive.component.html',
  styleUrls: ['./built-in-struc-directive.component.css']
})
export class BuiltInStrucDirectiveComponent implements OnInit {
  heroes: Hero[];

  // trackBy change counting
  heroesNoTrackByCount   = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;

  constructor() {}

  ngOnInit() {
  }

  // updates with fresh set of cloned heroes
  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.heroesWithTrackByCountReset = 0;
  }

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

}
