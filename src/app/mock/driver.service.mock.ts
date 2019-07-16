import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IDriver } from '../model/driver';
import { of } from 'rxjs';

@Injectable()
export class DriverServiceMock {
    constructor() { }

    getDrivers(): Observable<IDriver[]> {
        return of([
            {
                driver: 'aa',
                country: 'fi',
                team: 1,
                points: 1
            },
        ]);
    }

    getStanding():Observable<IDriver[]>{
        // using of of Observable 
        return of([
            {
                driver: 'aa',
                country: 'fi',
                team: 1, 
                points: 1
            },
        ]);
    }
}
