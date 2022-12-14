import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, catchError, of  } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Country[]> {

    const url = `${apiUrl}/all`;

    return this.http.get<Country[]>(url)
    .pipe(
      delay( 200 )     
    );
  }  

  getPaisPorAlpha( id: string ): Observable<Country | undefined> {

    // https://restcountries.com/v2/alpha/AD

    const url = `${apiUrl}/alpha/${id}`;

    return this.http.get<Country | undefined>(url)
    .pipe(
      catchError( error => {
        console.log( error );
        return of ( undefined )
      })
    );

  }

}
