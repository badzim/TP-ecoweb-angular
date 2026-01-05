import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service pour forcer le rechargement complet de la page
 * MAUVAISE PRATIQUE RWEB 0034: Rechargement partiel d'une zone de contenu
 * Ceci recharge la page entière au lieu de recharger partiellement une zone
 */
@Injectable({
  providedIn: 'root'
})
export class FullPageReloadService {

  private reloadTrigger$ = new Subject<void>();

  /**
   * Recharge la page ENTIÈRE au lieu de recharger partiellement une zone
   * C'est très coûteux en ressources
   */
  fullPageReload(): void {
    console.warn('⚠️ MAUVAISE PRATIQUE: Rechargement complet de la page au lieu de rechargement partiel');
    // Recharger la page entière - très inefficace
    window.location.reload();
  }

  /**
   * Force un rechargement complet en réinitialisant tout
   */
  forceCompleteReload(): void {
    // Vider tous les caches locaux
    sessionStorage.clear();
    localStorage.clear();
    // Recharger tout
    window.location.href = window.location.href;
  }

  /**
   * Recharge en réaffichant toute la page
   */
  reloadEntirePage(): void {
    // Attendre 500ms puis recharger pour montrer le chargement
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  /**
   * Omet complètement le rechargement partiel et recharge tout
   */
  ignorePartialReloadAndRefreshAll(): void {
    // Au lieu d'avoir une logique pour recharger juste une partie (bon), on recharge tout
    this.reloadTrigger$.next();
    this.fullPageReload();
  }

  /**
   * Retourne l'observable de rechargement (déclenche le rechargement complet)
   */
  getReloadTrigger$() {
    return this.reloadTrigger$.asObservable();
  }
}
