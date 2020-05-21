import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Plandata } from './plandata';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root',})
export class PlanDataService {

  private plandatasUrl = 'api/plandatas';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


    constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

    /** GET Plandatas from the server */
    /** http.GET<Plandata> returns observable of Plandata array - entire array, not single instance */
getPlandatas(): Observable<Plandata[]> {
  return this.http.get<Plandata[]>(this.plandatasUrl)
  .pipe(
    tap(_ => this.log('fetched plandatas')),
    catchError(this.handleError<Plandata[]>('getHeroes', []))
  );
}

/** GET plandata by id. Return `undefined` when id not found */
getPlandataNo404<Data>(id: number): Observable<Plandata> {
  const url = `${this.plandatasUrl}/?id=${id}`;
  return this.http.get<Plandata[]>(url)
    .pipe(
      map(plandatas => plandatas[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} plandata id=${id}`);
      }),
      catchError(this.handleError<Plandata>(`getPlandata id=${id}`))
    );
}

/** */
/** going to have to figure out sort of data here 
    getPlandatas() {
        this.plandatas = this.plandatas.sort(({role:a},{role:b})=> {
          if (a === b) {
            return 0;
          }      
          if (a) {
            return -1;
          }      
          if (b) {
            return 1;
          }
        }     
        );
        return this.plandatas.slice();
    }

    /** GET plandata by id. Will 404 if id not found */
getPlandata(id: number): Observable<Plandata> {
  const url = `${this.plandatasUrl}/${id}`;
  return this.http.get<Plandata>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Plandata>(`planData id=${id}`))
  );
}

/* GET plandatas whose name contains search term */
searchPlandatas(term: string): Observable<Plandata[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Plandata[]>(`${this.plandatasUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Plandata[]>('searchPlandatas', []))
  );
}

//////// Save methods //////////

  /** POST: add a new plandata to the server */
  addPlandata(plandata: Plandata): Observable<Plandata> {
    return this.http.post<Plandata>(this.plandatasUrl, plandata, this.httpOptions).pipe(
      tap((newPlandata: Plandata) => this.log(`added plandata w/ id=${newPlandata.id}`)),
      catchError(this.handleError<Plandata>('addPlandata'))
    );
  }

  /** DELETE: delete the plandata from the server */
  deletePlandata(plandata: Plandata | number): Observable<Plandata> {
    const id = typeof plandata === 'number' ? plandata : plandata.id;
    const url = `${this.plandatasUrl}/${id}`;

    return this.http.delete<Plandata>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted plandata id=${id}`)),
      catchError(this.handleError<Plandata>('deletePlandata'))
    );
  }

  /** PUT: update the plandata on the server */
  updatePlandata(plandata: Plandata): Observable<any> {
    return this.http.put(this.plandatasUrl, plandata, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${plandata.id}`)),
      catchError(this.handleError<any>('updatePlandata'))
    );
  }




 /*   getPlandata(index: number) {
        return this.plandatas[index];
      }


  
    addPlandata(plandata: Plandata) {
        this.plandatas.push(plandata);
        this.plandatasChanged.next(this.plandatas.slice());
    }

    addPlandatas(plandatas: Plandata[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.plandatas.push(...plandatas);
        this.plandatasChanged.next(this.plandatas.slice());
      }

      updatePlandata(index: number, newPlandata: Plandata) {
        this.plandatas[index] = newPlandata;
        this.plandatasChanged.next(this.plandatas.slice());
      }
    
      deletePlandata(index: number) {
        this.plandatas.splice(index, 1);
        this.plandatasChanged.next(this.plandatas.slice());
      }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`PlandataService: ${message}`);
}

    }


