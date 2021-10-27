import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  createArticle(title: string, description: string) {
    this.articleService.createArticle(title, description).subscribe((response: any) => {
      console.log(response);
    })
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe((response: any) => {
      console.log(response);
    })
  }

}
