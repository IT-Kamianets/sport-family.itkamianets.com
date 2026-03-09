import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  settings = inject(SettingsService);
  lang = this.settings.lang;

  content: any = {
    ua: {
      title: 'Зв\'яжіться з нами',
      addressLabel: 'Адреса',
      phoneLabel: 'Телефон',
      callBtn: 'Зателефонувати',
      address: 'м. Кам\'янець-Подільський, вул. Івана Мазепи (колишня Пушкінська), 44а',
      phone: '+380 67 384 1021',
      socials: 'Слідкуйте за нами в Instagram, щоб бачити розклад занять та акції!'
    },
    en: {
      title: 'Contact Us',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      callBtn: 'Call Now',
      address: '44a Ivana Mazepy St (formerly Pushkinska), Kamianets-Podilskyi',
      phone: '+380 67 384 1021',
      socials: 'Follow us on Instagram for class schedules and promotions!'
    }
  };
}
