
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../hero.service';
import { Hero } from '../../hero';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  editState:boolean=false;
  hero!: Hero;
 
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location, private _snackBar: MatSnackBar) { }

    openSnackBar(message: string) {
    
      this._snackBar.open(message, 'close', {
        duration: 3000
      });
    }
  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id!=null)
    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero);
    
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  edit():void{
    this.editState=!this.editState;
  }

}
