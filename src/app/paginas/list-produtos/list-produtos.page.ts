import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/provider/url.service';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.page.html',
  styleUrls: ['./list-produtos.page.scss'],
})
export class ListProdutosPage implements OnInit {



  constructor() { 
  }

  ngOnInit() {
  }



}
