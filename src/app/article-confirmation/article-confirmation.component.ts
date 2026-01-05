import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-confirmation.component.html',
  styleUrls: ['./article-confirmation.component.scss']
})
export class ArticleConfirmationComponent implements OnInit {
  articleSlug: string = '';
  countdown: number = 5;
  canProceed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer le slug de l'article depuis les paramètres de route
    this.articleSlug = this.route.snapshot.queryParams['slug'] || '';

    // Ajouter un délai artificiel avant de permettre la navigation
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.canProceed = true;
        clearInterval(interval);
      }
    }, 1000);
  }

  proceedToArticle(): void {
    if (this.canProceed) {
      this.router.navigate(['/article', this.articleSlug]);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
