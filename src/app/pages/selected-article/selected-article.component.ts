import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrls: ['./selected-article.component.scss']
})
export class SelectedArticleComponent implements OnInit, OnDestroy {

  opened = false;

  subscriptions: Subscription[] = [];

  articles: any[] | undefined;
  articleDetails: any[] | undefined;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.subscriptions.push(
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.articleService.getArticleDetails(params.id).subscribe((articleDetails: any) => {
          this.articleDetails = articleDetails;
          console.log(articleDetails);
        })
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }

}
