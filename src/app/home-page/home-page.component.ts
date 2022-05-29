import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  Prods:any = '';
  featProd:any = '';
  conditin:any = '';
  mostPops:any = '';
  bestsellsers:any = '';
  blogs:any = '';
  constructor(private prod:HomepageService) { }

  ngOnInit(): void {
    this.prod.getSaleProd().subscribe((el:any)=>{
      this.Prods = el;
    });

    this.prod.getFeaturedProd().subscribe((el:any)=>{
      this.featProd = el;
    });

    this.prod.getMostPop().subscribe((el:any)=>{
      this.mostPops = el;
    });

    this.prod.getBestSell().subscribe((el:any)=>{
      this.bestsellsers = el;
    });

    this.prod.getBlog().subscribe((el:any)=>{
      this.blogs = el;
    });
    
  }

}
