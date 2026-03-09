import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  theme = signal<'light' | 'dark'>(this.getInitialTheme());
  lang = signal<'ua' | 'en'>(this.getInitialLang());

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme(newTheme);
  }

  toggleLang() {
    const newLang = this.lang() === 'ua' ? 'en' : 'ua';
    this.lang.set(newLang);
    localStorage.setItem('lang', newLang);
  }

  private applyTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  private getInitialTheme(): 'light' | 'dark' {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  }

  private getInitialLang(): 'ua' | 'en' {
    return (localStorage.getItem('lang') as 'ua' | 'en') || 'ua';
  }
}
