import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../../provider/url.service'; 

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  id: any;
  detalhes: any;
  constructor(private route: ActivatedRoute, public http: Http, public urlService: UrlService) { 
      this.detalhamento();
  }

  ngOnInit() {
    
   
  }


  detalhamento(){
    this.id =  this.route.snapshot.paramMap.get('id');

   this.http.get(this.urlService.getUrl()+"detalhesProdutos.php?idproduto="+this.id).pipe(map(res => res.json()))
   .subscribe(
     data => {
      this.detalhes = data;
     }
   );
  }

}
