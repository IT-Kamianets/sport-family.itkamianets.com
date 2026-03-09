import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  settings = inject(SettingsService);
  lang = this.settings.lang;

  labels: any = {
    ua: {
      social: 'Соціальні мережі',
      address: 'м. Кам\'янець-Подільський, вул. Івана Мазепи, 44а',
      rights: 'Всі права захищені'
    },
    en: {
      social: 'Social Networks',
      address: '44a Ivana Mazepy St, Kamianets-Podilskyi',
      rights: 'All rights reserved'
    }
  };
}
