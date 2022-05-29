import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  featured_products:any = '';
  constructor(private homeService:HomepageService) { }

  ngOnInit(): void {
    this.homeService.getFeaturedProducts().subscribe((el:any)=>{
      this.featured_products = el;
    });
  }

  

}
