
import { HeroService } from '../../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-top',
  templateUrl: './hero-top.component.html',
  styleUrls: ['./hero-top.component.scss']
})
export class HeroTopComponent implements OnInit {
  topHeroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroService.getTopHeroes()
      .subscribe(heroes => this.topHeroes = heroes);
  }
}
