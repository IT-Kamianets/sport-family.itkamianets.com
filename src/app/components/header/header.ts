import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  settings = inject(SettingsService);
  isActive = false;

  // Використовуємо функцію lang() для реактивності
  lang() {
    return this.settings.lang();
  }

  labels: any = {
    ua: {
      home: 'Головна',
      gym: 'Тренажерна зала',
      phytoBar: 'Фіто-бар',
      contact: 'Контакти'
    },
    en: {
      home: 'Home',
      gym: 'Gym',
      phytoBar: 'Phyto Bar',
      contact: 'Contact'
    }
  };

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
