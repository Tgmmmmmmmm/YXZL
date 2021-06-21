
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  animations: [
    trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    ],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  columnsToDisplay = ['no', 'name', 'top'];
  expandedElement!: Hero ;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getAllHeroes();
  }

  getAllHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  delete(id: string): void {
    this.heroService.deleteHero(id)
      .subscribe(() => this.heroes = this.heroes.filter(h => h.id !== id));
    console.log("s")
  }
}





