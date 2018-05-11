import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessagesService) {  }

getHeroes(): Observable<Hero[]> {
  this.messageService.add('HeroService: fetched Heroes');
  return of(HEROES);
}

getHero(id : number) : Observable<Hero> {
  this.messageService.add(`HeroService: fetched hero id=${id}`);
return of(HEROES.find(x => x.id === id));
}

}
