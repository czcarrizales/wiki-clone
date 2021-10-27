import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private webReqService: WebRequestService) { }

  createArticle(title: string, description: string) {
    return this.webReqService.post('articles', {title, description})
  }

  getArticles() {
    return this.webReqService.get('articles');
  }

  getArticleDetails(articleId: string) {
    return this.webReqService.get(`articles/${articleId}`);
  }

  deleteArticle(articleId: string) {
    return this.webReqService.delete(`articles/${articleId}`);
  }

  editArticle(articleId: string, title: string, description: string) {
    return this.webReqService.patch(`articles/${articleId}`, {title, description})
  }
}
