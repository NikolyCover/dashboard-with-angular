import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PNavigationComponent } from './p-navigation/p-navigation.component';
import { PConfigComponent } from './p-config/p-config.component';
import { PSensorsComponent } from './p-sensors/p-sensors.component';
import { POwnersComponent } from './p-owners/p-owners.component';

const routes: Routes = [
  {
    path: '',
    component: PNavigationComponent,
    children: [
      {
        path: 'sensors',
        component: PSensorsComponent
      },
      {
        path: 'owners',
        component: POwnersComponent
      },
      {
        path: 'config',
        component: PConfigComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
