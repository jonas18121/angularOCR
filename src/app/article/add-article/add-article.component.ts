import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/aricle/Article.service';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/models/Article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

    constructor(private articleService : ArticleService, private router: Router) { }

    ngOnInit(): void {
    } 

    onSubmit(form: NgForm)
    {
        const titre = form.value['titre'];   
        const content = form.value['content'];

        const article = new Article(titre, content);

        this.articleService.addArticle(article);
        //this.articleService.addArticle(titre, content);
        this.router.navigate(['/article']);
    }

}
