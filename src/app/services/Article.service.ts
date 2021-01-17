import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
	
	/**
     * la variable post doit contenir des objets de type Article
     */
	article: Article;
	
	articlesSubject = new Subject <any[]> ();
	
	private articles = [];

	constructor(private httpClient: HttpClient) { }
	
	emitArticleSubject()
	{
		this.articlesSubject.next(this.articles.slice());
	}
	
	/**
     * Recevoir des données sur firebase.com en verbe http GET
	 * Afficher la liste d'article
     */
    getArticlesFromServer()
    {
        this.httpClient
            .get<any[]>('https://articles-323bf-default-rtdb.europe-west1.firebasedatabase.app/articles.json')
            .subscribe(
                (response) => {
                    this.articles = response;
                    this.emitArticleSubject();
                },
                (error) => {
                    console.log('Erreur ! : ' + error); 
                }
            );
    }
	
	/**
     * Envoyer des données sur firebase.com en verbe http PUT
     */
    saveArticlesToServer()
    {
        this.httpClient
        .put('https://articles-323bf-default-rtdb.europe-west1.firebasedatabase.app/articles.json', this.articles)
        .subscribe(
            () => {
                console.log('Enregistrement terminé !');
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }
	
	/**
	* Afficher un article via son id
	*/
	getArticleById(id: number) 
    {
        const article = this.articles.find(

            (my_id) => {
                return my_id.id === id;
            }
        );
        return article;
    }
	
	addArticle(title: string, content: string)
    {
		this.article = new Article('',''); 
        
        this.article.title = title;
        this.article.content = content;
        
        // prend l'id du dernier élément actuel de l'array et ajoute 1.
        this.article.id = this.articles[(this.articles.length - 1 )].id + 1;

        this.articles.push(this.article);
        this.emitArticleSubject();
    }
}
