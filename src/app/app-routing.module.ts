import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'tab2' , loadChildren: './tab2/tab2.module#Tab2PageModule'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'gauge-list-map', loadChildren: './gauge-list-map/gauge-list-map.module#GaugeListMapPageModule' },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
