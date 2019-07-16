import { ITeam } from './../model/team';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class TeamServiceMock {
    constructor() { }

    getTeamByID(teamID): Observable<ITeam[]> {
        return of([
            {
                id: 1,
                team: 'Cali',
                car: 'Ferrari'
            },
        ]);
    }
}
