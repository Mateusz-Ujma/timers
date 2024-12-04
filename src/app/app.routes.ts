import { Routes } from '@angular/router';
import { StartViewComponent } from './start-view/start-view.component';
import { TimerPanelComponent } from './timer-panel/timer-panel.component';

export const routes: Routes = [
  { path: '', component: StartViewComponent },
  { path: 'timers', component: TimerPanelComponent },
];
