import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

// TODO: move to common constants
const DEFAULT_LANGUAGE: string = 'en-US';
const LOCAL_STORAGE_LANGUAGE_KEY: string = 'lang';
const SUPPORTED_LOCALES: string[] = ['ru-RU', 'en-US'];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langChangeSubscription: Subscription;
  private langChangeSubject = new BehaviorSubject('');

  constructor(private translateService: TranslateService, private localStorageService: LocalStorageService) {}

  private get langFromStorage(): string {
    return this.localStorageService.getData(LOCAL_STORAGE_LANGUAGE_KEY);
  }

  public init(): this {
    this.translateService.addLangs(SUPPORTED_LOCALES);
    this.setDefaultLang(DEFAULT_LANGUAGE);

    let lang = this.langFromStorage ? this.langFromStorage : this.translateService.getBrowserLang();

    if (!this.checkForLangIsSupported(lang)) {
      lang = DEFAULT_LANGUAGE;
    }

    this.translateService.use(lang);

    this.langChangeSubscription = this.translateService.onLangChange.subscribe(value => {
      this.saveLangInStorage(value.lang);
      this.langChangeSubject.next(value.lang);
    });

    return this;
  }

  public destroy(): void {
    this.langChangeSubscription.unsubscribe();
  }

  public setDefaultLang(language: string = DEFAULT_LANGUAGE): void {
    this.translateService.setDefaultLang(language);
  }

  private checkForLangIsSupported(langCode: string): boolean {
    return !!SUPPORTED_LOCALES.find(supportedLang => supportedLang === langCode);
  }

  private saveLangInStorage(lang): void {
    this.localStorageService.setData(LOCAL_STORAGE_LANGUAGE_KEY, lang);
  }
}
