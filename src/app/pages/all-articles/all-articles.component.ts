import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {

  articles: any[] | undefined;
  articleDetails: any;
  router: any;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.articleService.getArticles().subscribe((articles: any) => {
      this.articles = articles;
    })
  }

  displayArticleDetails(items: any) {
    console.log(items)
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe((response: any) => {
      console.log(response);
    })
  }


}
