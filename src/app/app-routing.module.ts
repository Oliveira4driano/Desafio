import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './paginas/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './paginas/list/list.module#ListPageModule'
  },
  { path: 'list_produtos', loadChildren: './paginas/list-produtos/list-produtos.module#ListProdutosPageModule' },
  { path: 'list_usuarios', loadChildren: './paginas/list-usuarios/list-usuarios.module#ListUsuariosPageModule' },
  { path: 'cadastro_produtos', loadChildren: './paginas/cadastro-produtos/cadastro-produtos.module#CadastroProdutosPageModule'},
  { path: 'cadastro_usuarios', loadChildren: './paginas/cadastro-usuarios/cadastro-usuarios.module#CadastroUsuariosPageModule' },
  { path: 'login', loadChildren: './paginas/login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
