import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';

export class JsonTranslationLoader implements TranslateLoader {
  public getTranslation(): Observable<{ test: string }> {
    return from([
      {
        test: 'test'
      }
    ]);
  }
}
