import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ChiffreCacheComponent } from './components/chiffre-cache/chiffre-cache.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [ { path: '', component: FirstComponent },
{ path: 'cv', component: CvComponent },
{ path: 'todo', component: TodoComponent },
{ path: 'color/:couleur', component: ColorComponent },
{ path: 'word', component: MiniWordComponent },
{ path: 'cache', component: ChiffreCacheComponent },
{ path: 'detail/:id', component: DetailsCvComponent },
{ path: 'form', component: FormComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
