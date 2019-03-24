import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { UrlService } from '../../provider/url.service';
import { NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceUserService } from '../../provider/service-user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: any;
  nome: any;

  constructor(public http: Http, public serviceUrl: UrlService, public nav: NavController, private route: Router, public serviceUser: ServiceUserService){

     this.listProdutos();
     console.log(this.serviceUser.userNome);
    
  }

  listProdutos(){
    this.http.get(this.serviceUrl.getUrl()+"listDados.php").pipe(map(res => res.json()))
    .subscribe(
      listDados => {
        this.produtos = listDados;
      }
    );
  }

  toProdutos(){
    this.nav.navigateForward('/cadastro_produtos');
  }




  go(id){
    console.log(id);
    this.route.navigateByUrl('/list_produtos/id');
  }

 



}
