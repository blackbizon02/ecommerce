import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {
  posts_id: any = '';
  prod: any = '';
  route: any = '';
  constructor(
    private activeroute: ActivatedRoute,
    private pr: HomepageService
  ) { }

  ngOnInit(): void {
    this.posts_id = this.activeroute.snapshot.params['id'];
    this.route = this.activeroute.snapshot.routeConfig?.path?.split('/')[2];


    if (this.route == 'prof') {
      this.pr.getSaleProd().subscribe((el: any) => {
        this.prod = el.find((m: any) => {
          return m.id == this.posts_id;
        })
      });
    } else if(this.route == 'advert') {
      this.pr.getMostPop().subscribe((el: any) => {
        this.prod = el.find((m: any) => {
          return m.id == this.posts_id;
        })
      });
    } else if(this.route == 'best') {
      this.pr.getBestSell().subscribe((el: any) => {
        this.prod = el.find((m: any) => {
          return m.id == this.posts_id;
        })
      });
    } else {
      this.pr.getFeaturedProd().subscribe((el: any) => {
        this.prod = el.find((m: any) => {
          return m.id == this.posts_id;
        })
      });
    }


  }


}
