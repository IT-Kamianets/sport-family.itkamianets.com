import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-phyto-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phyto-bar.html',
  styleUrls: ['./phyto-bar.css']
})
export class PhytoBarComponent {
  settings = inject(SettingsService);
  lang = this.settings.lang;

  // Array for 30 product images (0 to 29)
  galleryImages = Array.from({ length: 30 }, (_, i) => i);

  content: any = {
    ua: {
      title: 'Фіто-бар Sport Family',
      subtitle: 'Відновлюй енергію та досягай результатів швидше!',
      aboutTitle: 'Смачно. Корисно. Ефективно.',
      aboutDesc: 'Наш фіто-бар — це місце, де ви можете підкріпитися перед тренуванням або відновитися після інтенсивного навантаження. Ми пропонуємо тільки перевірене спортивне харчування та натуральні напої.',
      menuTitle: 'Наше меню',
      galleryTitle: 'Товари нашого бару',
      categories: [
        {
          name: 'Протеїнова зона',
          icon: 'fas fa-flask',
          items: [
            { name: 'Протеїнові коктейлі', desc: 'Сироватковий протеїн або ізолят (шоколад, ваніль, полуниця, банан).' },
            { name: 'Гейнери', desc: 'Для тих, хто працює на масу та потребує додаткових калорій.' },
            { name: 'BCAA & Амінокислоти', desc: 'Прискорюють відновлення м’язів та зменшують втому.' }
          ]
        },
        {
          name: 'Енергія та Жироспалення',
          icon: 'fas fa-bolt',
          items: [
            { name: 'L-карнітин', desc: 'Ваш помічник у боротьбі з підшкірним жиром під час кардіо.' },
            { name: 'Передтренувальні комплекси', desc: 'Заряд енергії та концентрації для максимальних ваг.' },
            { name: 'Ізотоніки', desc: 'Відновлюють водно-сольовий баланс під час інтенсивної роботи.' }
          ]
        },
        {
          name: 'Корисні перекуси',
          icon: 'fas fa-cookie-bite',
          items: [
            { name: 'Фірмове вівсяне печиво', desc: 'Власне виробництво — мінімум калорій, максимум смаку.' },
            { name: 'Протеїнові батончики', desc: 'Швидкий та зручний перекус після тренування.' },
            { name: 'Горіхові суміші', desc: 'Джерело корисних жирів та енергії.' }
          ]
        },
        {
          name: 'Напої',
          icon: 'fas fa-coffee',
          items: [
            { name: 'Кавова карта', desc: 'Еспресо, Американо, Капучино, Лате для бадьорості.' },
            { name: 'Вітамінні чаї', desc: 'Трав’яні та ягідні збори для зміцнення імунітету.' },
            { name: 'Fresh соки', desc: 'Заряд вітамінів прямо з соковижималки.' }
          ]
        }
      ],
      recoveryTitle: 'Чому це важливо?',
      recoveryDesc: 'Правильне харчування після тренування (протягом першої години) допомагає м’язам рости, а організму — швидше відновлюватися. Не пропускайте цей важливий етап!'
    },
    en: {
      title: 'Sport Family Phyto Bar',
      subtitle: 'Recover energy and achieve results faster!',
      aboutTitle: 'Tasty. Healthy. Effective.',
      aboutDesc: 'Our phyto bar is a place where you can fuel up before training or recover after intense exercise. We offer only proven sports nutrition and natural drinks.',
      menuTitle: 'Our Menu',
      galleryTitle: 'Our Bar Products',
      categories: [
        {
          name: 'Protein Zone',
          icon: 'fas fa-flask',
          items: [
            { name: 'Protein Shakes', desc: 'Whey protein or isolate (chocolate, vanilla, strawberry, banana).' },
            { name: 'Gainers', desc: 'For those working on bulk and needing extra calories.' },
            { name: 'BCAA & Amino Acids', desc: 'Accelerate muscle recovery and reduce fatigue.' }
          ]
        },
        {
          name: 'Energy & Fat Burning',
          icon: 'fas fa-bolt',
          items: [
            { name: 'L-carnitine', desc: 'Your assistant in fighting subcutaneous fat during cardio.' },
            { name: 'Pre-workout complexes', desc: 'A charge of energy and concentration for maximum weights.' },
            { name: 'Isotonics', desc: 'Restore water-salt balance during intense work.' }
          ]
        },
        {
          name: 'Healthy Snacks',
          icon: 'fas fa-cookie-bite',
          items: [
            { name: 'Signature Oatmeal Cookies', desc: 'Own production — minimum calories, maximum taste.' },
            { name: 'Protein Bars', desc: 'Quick and convenient post-workout snack.' },
            { name: 'Nut Mixes', desc: 'Source of healthy fats and energy.' }
          ]
        },
        {
          name: 'Beverages',
          icon: 'fas fa-coffee',
          items: [
            { name: 'Coffee Menu', desc: 'Espresso, Americano, Cappuccino, Latte for vigor.' },
            { name: 'Vitamin Teas', desc: 'Herbal and berry blends for immunity.' },
            { name: 'Fresh Juices', desc: 'A vitamin charge straight from the juicer.' }
          ]
        }
      ],
      recoveryTitle: 'Why is it important?',
      recoveryDesc: 'Proper nutrition after training (within the first hour) helps muscles grow and the body recover faster. Do not skip this important stage!'
    }
  };
}
