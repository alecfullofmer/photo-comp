import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhotoService {

  private photosUrl = 'api/photoUrls';

  constructor(private httpL: Http){}

  getCompetitionPhotos(): Promise<string[]> {
    return this.httpL.get(this.photosUrl)
                  .toPromise()
                  .then(response => response.json().data as string[])
                  .catch(this.handleError);
    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
