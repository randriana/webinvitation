import { Injectable } from '@angular/core';
import { TRANSLATIONS } from './translations';

@Injectable()
export class LanguageService {

  private _activeLanguage: string;
  public translations = TRANSLATIONS;

  constructor() {
    this._activeLanguage = 'FR';
  }

  get activeLanguage(): string {
    return this._activeLanguage;
  }

  set activeLanguage(language: string) {
    this._activeLanguage = language;
  }

}
