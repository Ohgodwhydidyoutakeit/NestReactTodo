import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from '@taiga-ui/core';


@Component({
  standalone: true,
  imports: [RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule],// Use the shared state reducer]
  selector: 'fe-todo-angular-root',
  templateUrl: './app.component.html',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }]
})
export class AppComponent {
  title = 'fe-todo-angular';
}
