
import { HeroService } from '../../hero.service';
import { Hero } from '../../hero';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {

  constructor(private heroService: HeroService, private location: Location) {}

  ngOnInit() {}

  add(no: string, name: string, description: string, isTop: boolean): void {
    if (!no || !name) { return; }
    this.heroService.addHero({no, name, description, isTop} as Hero)
      .subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
