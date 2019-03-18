import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Tag} from '../models';

@Injectable()
export class TagsService {

  tagsUrl = `/api/tags`;

  constructor(
    // private http: HttpClient,
    private apiService: ApiService
  ) {
  }

  getTags(): Observable<Tag[]> {
    return this.apiService.get(`${this.tagsUrl}`);
  }
}
