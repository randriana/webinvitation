import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(public languageService: LanguageService) {

  }

  transform(text: string): string {
    const activeLanguage = this.languageService.activeLanguage;
    return this.languageService.translations[text][activeLanguage];
  }

}
