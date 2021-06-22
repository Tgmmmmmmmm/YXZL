
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
// 请留意修改为你自己的URL
  private heroesUrl = 'http://47.102.123.190:2403/heroes';
// 注入了HttpClient服务
  constructor(private httpClient: HttpClient) { }
// 获取所有英雄
  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl);
  }
// 获取指定id的英雄
  getHeroById(id: string): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`);
  }
// 获取所有的顶级英雄
  getTopHeroes(): Observable<Hero[]> {
    // 请参考Deployd的API文档
    return this.httpClient.get<Hero[]>(`${this.heroesUrl}?isTop=true`);
  }
// 添加一个英雄
  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesUrl, hero);
  }
// 删除一个英雄
  deleteHero(id: string): Observable<any> {
    console.log("sc")
    return this.httpClient.delete(`${this.heroesUrl}/${id}`);
  }
// 更新一个英雄
  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(this.heroesUrl, hero);
  }
}
