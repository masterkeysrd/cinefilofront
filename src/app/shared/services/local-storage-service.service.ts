import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE} from 'angular-webstorage-service';

const STORAGE_KEY = 'cinefilo_section';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {


  constructor(@Inject(SESSION_STORAGE) private storage) { }

  public storeOnLocalStorage(sessionData: any) {
    const session = this.storage.get(STORAGE_KEY) || [];
    session.push(sessionData);

    this.storage.set(STORAGE_KEY, session);
  }

  public getOnLocalStorage(): any {
    return this.storage.get(STORAGE_KEY);
  }

  public deleteOnLocalStorage() {
    this.storage.remove(STORAGE_KEY);
  }
}
