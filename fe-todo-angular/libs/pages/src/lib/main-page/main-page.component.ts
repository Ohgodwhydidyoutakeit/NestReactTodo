import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiTagModule} from '@taiga-ui/kit';

@Component({
  selector: 'fe-todo-angular-main-page',
  standalone: true,
  imports: [CommonModule, TuiTagModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
