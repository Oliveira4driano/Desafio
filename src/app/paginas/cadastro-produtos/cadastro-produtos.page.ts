import { Component, OnInit } from '@angular/core';
import { Validator, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Http, Headers, Response, ResponseOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../provider/url.service';
import { NavController, Header } from '@ionic/angular';
import { ServiceUserService } from '../../provider/service-user.service';


@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.page.html',
  styleUrls: ['./cadastro-produtos.page.scss'],
})
export class CadastroProdutosPage implements OnInit {

  postagem: any;
  nome: any;
  valor: any;
  qtd: any;
  descricao: any;
  idusuario: any;


 
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public http: Http,
    public urlService: UrlService,
    public serviceUser: ServiceUserService
  ) 
  {
    this.postagem = this.formBuilder.group({
      idusuario: [this.serviceUser.getUserId(), Validators.required],
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      qtd: ['', Validators.required],
      descricao: ['', Validators.required]
    });

  }


  postarProduto(){
    if(this.nome == undefined || this.valor == undefined || this.qtd == undefined || this.descricao == undefined){
      this.urlService.alertas('Atenção', 'Preencha todos os Campos');
    }else{

      this.postData(this.postagem.value)
      .subscribe(
        data => {
          console.log("Inserido com sucesso");
        },
        err => {
          console.log("erro ao tentar inserir");
        }
      )

    }
  }


  postData(valor) {
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.urlService.url + "insertProduto.php", valor, {
      headers: headers,
      method: "POST"
    }).pipe(map(
      (res: Response) => { return res.json(); }
    ));
  }


  ngOnInit() {
  }

}
