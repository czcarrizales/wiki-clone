import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened = false;

  articles: any[] | undefined;
  articleDetails: any[] | undefined;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles: any) => {
      this.articles = articles;
      ;
    })
  }

}