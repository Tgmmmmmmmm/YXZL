
import { HeroService } from '../../hero.service';
import { Hero } from '../../hero';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {
  isTopState:boolean=false;
  constructor(private heroService: HeroService, private location: Location,private _snackBar:MatSnackBar) {}
  
  openSnackBar(message: string) {
    
    this._snackBar.open(message, 'close', {
      duration: 3000
    });
  }
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
