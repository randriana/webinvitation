import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  private _language: string;

  constructor() { 
    this._language = "FR";
  }

  get language(): string {
    return this._language;
  }

  set language(language: string) {
    this._language = language;
  }

}
