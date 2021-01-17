import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article.model';
import { ArticleService } from 'src/app/services/Article.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

	articles: Article[];
	articleSubscription: Subscription;
	
	constructor(
		private articleService: ArticleService,
		private router: Router		
	) { }

	/**
     * souscrit au Subject du service et déclenche sa première émission ;
     */
    ngOnInit(): void {
        this.articleSubscription = this.articleService.articlesSubject.subscribe(
            (articles: Article[]) => {
                this.articles = articles;
            }
        );
        this.articleService.getArticlesFromServer();
        this.articleService.emitArticleSubject();
    }
	
	/**
     * naviguer vers  ArticleFormComponent  pour la création d'un nouveau article
     */
    onNewArticle(){
        this.router.navigate(['/articles', 'new']);
    }

}
