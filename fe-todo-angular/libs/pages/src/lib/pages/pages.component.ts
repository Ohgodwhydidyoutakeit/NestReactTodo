import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fe-todo-angular-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {}
