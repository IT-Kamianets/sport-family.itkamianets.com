import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  settings = inject(SettingsService);
  lang = this.settings.lang;
  
  // Array for 30 images (0 to 29)
  galleryImages = Array.from({ length: 30 }, (_, i) => i);

  content: any = {
    ua: {
      title: 'SPORT FAMILY CLUB',
      subtitle: 'Ваш шлях до ідеальної форми в найкращій атмосфері!',
      scheduleTitle: 'Графік роботи',
      pricingTitle: 'Вартість абонементів',
      aboutTitle: 'Про клуб',
      aboutDescription: 'Sport Family — це сучасний фітнес-центр, що поєднує професійне обладнання, групові заняття та затишний фіто-бар. Ми створюємо умови, де кожен відчуває себе частиною великої спортивної родини.',
      gymBtn: 'До залу',
      phytoBtn: 'У фіто-бар',
      prices: [
        { name: 'Разове тренування', price: '150 грн' },
        { name: '1 Місяць (Безліміт)', price: '800 грн' },
        { name: '1 Місяць (Студентський/Молодіжний 12-25 років)', price: '600 грн' },
        { name: '3 Місяці (Безліміт)', price: '2100 грн' },
        { name: '6 Місяців (Безліміт)', price: '3800 грн' },
        { name: '1 Рік (Безліміт)', price: '6500 грн' }
      ],
      specialOffer: '* Спеціальна ціна для молоді діє за наявності студентського квитка або документа, що підтверджує вік.',
      days: {
        weekdays: 'Пн - Пт',
        saturday: 'Субота',
        sunday: 'Неділя'
      }
    },
    en: {
      title: 'SPORT FAMILY CLUB',
      subtitle: 'Your path to perfect shape in the best atmosphere!',
      scheduleTitle: 'Working Hours',
      pricingTitle: 'Membership Prices',
      aboutTitle: 'About Club',
      aboutDescription: 'Sport Family is a modern fitness center combining professional equipment, group classes, and a cozy phyto-bar. We create conditions where everyone feels like part of a large sports family.',
      gymBtn: 'To Gym',
      phytoBtn: 'To Phyto Bar',
      prices: [
        { name: 'Single Training', price: '150 UAH' },
        { name: '1 Month (Unlimited)', price: '800 UAH' },
        { name: '1 Month (Student/Youth 12-25 years)', price: '600 UAH' },
        { name: '3 Months (Unlimited)', price: '2100 UAH' },
        { name: '6 Months (Unlimited)', price: '3800 UAH' },
        { name: '1 Year (Unlimited)', price: '6500 UAH' }
      ],
      specialOffer: '* Special price for youth is valid with a student ID or age document.',
      days: {
        weekdays: 'Mon - Fri',
        saturday: 'Saturday',
        sunday: 'Sunday'
      }
    }
  };
}
