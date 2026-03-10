import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-gym',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym.html',
  styleUrls: ['./gym.css']
})
export class GymComponent {
  settings = inject(SettingsService);
  lang = this.settings.lang;

  content: any = {
    ua: {
      title: 'Тренажерна зала',
      subtitle: 'Команда професіоналів Sport Family',
      instructorsTitle: 'Наші інструктори',
      directBtn: 'Запис в Direct',
      instructors: [
        { 
          name: 'Анна Козік', 
          role: 'Персональний тренер', 
          image: 'assets/instructors/543271045_18363557665155917_8278424442488837340_n.jpg',
          handle: 'shunshula689'
        },
        { 
          name: 'Микола Кухар', 
          role: 'Тренер', 
          image: 'assets/instructors/544118532_18363557638155917_9173790684900789418_n.jpg',
          handle: 'kukhar_mykola'
        },
        { 
          name: 'Тарас Бойко', 
          role: 'Тренер', 
          image: 'assets/instructors/544799252_18363557674155917_6970515046304001255_n.jpg',
          handle: 't_boyko_4'
        }
      ],
      zonesTitle: 'Тренувальні зони',
      zones: [
        { name: 'Силова зона', desc: 'Сучасні тренажери на всі групи м’язів.', icon: 'fas fa-dumbbell' },
        { name: 'Кардіо зона', desc: 'Бігові доріжки, орбітреки та велотренажери.', icon: 'fas fa-heartbeat' },
        { name: 'Зона вільних ваг', desc: 'Гантелі, грифи та диски.', icon: 'fas fa-weight-hanging' },
        { name: 'Функціональна зона', desc: 'Простір для TRX та роботи з власною вагою.', icon: 'fas fa-running' }
      ],
      groupClassesTitle: 'Групові заняття',
      groupClassesDesc: 'Оберіть свій драйв',
      groupClasses: [
        { 
          name: 'Jumping', 
          desc: 'Високоінтенсивне кардіо-тренування на спеціальних батутах. Допомагає спалити до 800 калорій за годину, зміцнює серце та покращує настрій.',
          icon: 'fas fa-rocket'
        },
        { 
          name: 'TRX', 
          desc: 'Функціональний тренінг з використанням підвісних петель. Розвиває силу, витривалість, координацію та ідеально опрацьовує м’язи-стабілізатори.',
          icon: 'fas fa-link'
        },
        { 
          name: 'TBW (Total Body Workout)', 
          desc: 'Комплексне силове тренування, спрямоване на опрацювання всіх основних груп м’язів. Поєднує аеробне та силове навантаження.',
          icon: 'fas fa-user-muscle'
        },
        { 
          name: 'Yoga & Stretching', 
          desc: 'Заняття для покращення гнучкості, зняття м’язової напруги та психологічного розвантаження. Ідеально для відновлення після важких тренувань.',
          icon: 'fas fa-leaf'
        }
      ]
    },
    en: {
      title: 'Gym Area',
      subtitle: 'Sport Family Professional Team',
      instructorsTitle: 'Our Instructors',
      directBtn: 'Book in Direct',
      instructors: [
        { 
          name: 'Anna Kozik', 
          role: 'Personal Trainer', 
          image: 'assets/instructors/543271045_18363557665155917_8278424442488837340_n.jpg',
          handle: 'shunshula689'
        },
        { 
          name: 'Mykola Kukhar', 
          role: 'Trainer', 
          image: 'assets/instructors/544118532_18363557638155917_9173790684900789418_n.jpg',
          handle: 'kukhar_mykola'
        },
        { 
          name: 'Taras Boyko', 
          role: 'Trainer', 
          image: 'assets/instructors/544799252_18363557674155917_6970515046304001255_n.jpg',
          handle: 't_boyko_4'
        }
      ],
      zonesTitle: 'Training Zones',
      zones: [
        { name: 'Strength Zone', desc: 'Modern equipment for all muscle groups.', icon: 'fas fa-dumbbell' },
        { name: 'Cardio Zone', desc: 'Treadmills, orbitreks, bikes.', icon: 'fas fa-heartbeat' },
        { name: 'Free Weights', desc: 'Dumbbells, bars, plates.', icon: 'fas fa-weight-hanging' },
        { name: 'Functional Zone', desc: 'Space for TRX and bodyweight exercises.', icon: 'fas fa-running' }
      ],
      groupClassesTitle: 'Group Classes',
      groupClassesDesc: 'Choose your direction',
      groupClasses: [
        { 
          name: 'Jumping', 
          desc: 'High-intensity cardio on trampolines. Burn up to 800 calories per hour, strengthen your heart, and boost your mood.',
          icon: 'fas fa-rocket'
        },
        { 
          name: 'TRX', 
          desc: 'Suspension training that builds strength, endurance, coordination, and perfectly targets core muscles.',
          icon: 'fas fa-link'
        },
        { 
          name: 'TBW (Total Body Workout)', 
          desc: 'Full-body strength training targeting all major muscle groups. Combines aerobic and power loads.',
          icon: 'fas fa-user-alt'
        },
        { 
          name: 'Yoga & Stretching', 
          desc: 'Classes for improving flexibility, relieving muscle tension, and psychological relaxation. Perfect for post-workout recovery.',
          icon: 'fas fa-leaf'
        }
      ]
    }
  };
}
