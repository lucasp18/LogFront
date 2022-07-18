import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
	{ path: 'insert', component: LogComponent   },
	{ path: 'table', component: TableComponent   },
	{ path: '',  pathMatch: 'full',  redirectTo: 'table'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
