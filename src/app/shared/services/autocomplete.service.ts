import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * Service d'autocomplétion - Envoie des requêtes HTTP à chaque caractère saisi
 * MAUVAISE PRATIQUE: Cela génère de nombreuses requêtes inutiles au serveur
 * et consomme beaucoup de bande passante et de ressources
 */
@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://api.realworld.io/api';

  /**
   * Obtient les suggestions d'emails - Une requête par caractère!
   */
  getEmailSuggestions(query: string): Observable<string[]> {
    if (!query || query.length < 1) {
      return of([]);
    }

    // Requête serveur pour chaque caractère tapé
    const suggestions = [
      'user@example.com',
      'contact@example.com',
      'hello@example.com',
      'newsletter@example.com',
      'sales@example.com',
      'marketing@example.com',
      'team@example.com',
      'support@example.com',
      'admin@example.com',
      'info@example.com'
    ].filter(email => email.toLowerCase().includes(query.toLowerCase()));

    return of(suggestions).pipe(delay(200)); // Simulation d'une requête serveur lente
  }

  /**
   * Obtient les suggestions de tags - Une requête par caractère!
   */
  getTagSuggestions(query: string): Observable<string[]> {
    if (!query || query.length < 1) {
      return of([]);
    }

    const suggestions = [
      'angular', 'typescript', 'web', 'design', 'development',
      'tutorial', 'javascript', 'frontend', 'backend', 'database',
      'coding', 'tips', 'news', 'discussion', 'howto'
    ].filter(tag => tag.toLowerCase().includes(query.toLowerCase()));

    return of(suggestions).pipe(delay(200)); // Simulation d'une requête serveur lente
  }

  /**
   * Obtient les suggestions de usernames - Une requête par caractère!
   */
  getUsernameSuggestions(query: string): Observable<string[]> {
    if (!query || query.length < 1) {
      return of([]);
    }

    const suggestions = [
      'johndoe', 'janedoe', 'cooluser42', 'superwriter', 'blogmaster',
      'traveler', 'foodie', 'devguru', 'angularfan', 'conduitlover'
    ].filter(user => user.toLowerCase().includes(query.toLowerCase()));

    return of(suggestions).pipe(delay(200)); // Simulation d'une requête serveur lente
  }

  /**
   * Obtient les suggestions de commentaires - Une requête par caractère!
   */
  getCommentSuggestions(query: string): Observable<string[]> {
    if (!query || query.length < 2) {
      return of([]);
    }

    const suggestions = [
      'Great article!',
      'This is very helpful',
      'Thanks for sharing',
      'Well written',
      'I completely agree',
      'Interesting perspective',
      'Love this content'
    ].filter(comment => comment.toLowerCase().includes(query.toLowerCase()));

    return of(suggestions).pipe(delay(200)); // Simulation d'une requête serveur lente
  }
}
