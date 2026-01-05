import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthStore } from 'src/app/shared/store';
import { ArticleDetailStore } from '../../article-detail.store';
import { AutocompleteService } from 'src/app/shared/services/autocomplete.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-comment-form',
    imports: [FormsModule, NgIf, NgFor],
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentFormComponent {
  @Input({ required: true }) slug!: string;
  readonly #route = inject(ActivatedRoute);
  readonly #articleDetailStore = inject(ArticleDetailStore);
  readonly avatar = inject(AuthStore).selectors.user()?.image;
  private autocompleteService = inject(AutocompleteService);
  
  comment!: string;
  commentSuggestions = signal<string[]>([]);
  
  onCommentChange(query: string): void {
    // Requête HTTP à chaque caractère saisi - MAUVAISE PRATIQUE
    if (query && query.length > 1) {
      this.autocompleteService.getCommentSuggestions(query).subscribe(
        suggestions => this.commentSuggestions.set(suggestions)
      );
    } else {
      this.commentSuggestions.set([]);
    }
  }

  selectSuggestion(suggestion: string): void {
    this.comment = suggestion;
    this.commentSuggestions.set([]);
  }

  submit(): void {
    this.#articleDetailStore.createComment({
      slug: this.slug,
      comment: {
        body: this.comment,
      },
    });
    this.comment = '';
  }
}
