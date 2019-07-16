import { ITeam } from './model/team';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _url: string = "http://127.0.0.1:5000/api/team";

  constructor(private http: HttpClient) { }

  getTeamByID(teamID): Observable<ITeam[]>{
    return this.http.get<ITeam[]>(this._url + "/" + teamID + ".json");
  }
}
