import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private static getFullKey(key: string): string {
    // TODO: move to the common constants
    const LOCAL_STORAGE_PRIFIX = 'AGMP2019Q1-';

    return LOCAL_STORAGE_PRIFIX + key;
  }

  public getData<T>(key: string): T {
    const fullKey = LocalStorageService.getFullKey(key);
    const result = window.localStorage.length > 0 ? localStorage.getItem(fullKey) : null;
    return result ? JSON.parse(result) : null;
  }

  public setData(key: string, data: any): void {
    const stringData = JSON.stringify(data);
    const fullKey = LocalStorageService.getFullKey(key);
    localStorage.setItem(fullKey, stringData);
  }

  public removeData(key: string): void {
    const fullKey = LocalStorageService.getFullKey(key);
    window.localStorage.removeItem(fullKey);
  }
}
