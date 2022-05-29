import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }

  getFeaturedProducts(){
    return this.http.get('/assets/server/header.json');
  }

  getSaleProd(){
    return this.http.get('/assets/server/sale_prod.json');
  }

  getFeaturedProd(){
    return this.http.get('/assets/server/featured-prod.json');
  }

  getMostPop(){
    return this.http.get('/assets/server/mostPopular.json');
  }


  getBestSell(){
    return this.http.get('/assets/server/bestSell.json');
  }

  getBlog(){
    return this.http.get('/assets/server/blog.json');
  }
}
