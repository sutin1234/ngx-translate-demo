import { Component } from '@angular/core';
import { ChangeLanguageService } from '../change-language.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  constructor(private changeLange: ChangeLanguageService) { }

  useLanguage(language: string) {
    this.changeLange.changeLanguage(language);
  }

}


