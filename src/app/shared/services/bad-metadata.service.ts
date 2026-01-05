import { Injectable } from '@angular/core';

/**
 * MAUVAISE PRATIQUE RWEB 0011: Utiliser des titres et metadescriptions génériques
 * La bonne pratique est d'avoir un titre et une métadescription pertinents
 * Ici on force des titres génériques, répétitifs et sans rapport avec le contenu
 */
@Injectable({
  providedIn: 'root'
})
export class BadMetadataService {

  /**
   * Ajoute des titres de page génériques et non pertinents
   */
  setBadPageTitles(): void {
    // Titres très génériques pour toutes les pages
    const genericTitles = [
      'Page',
      'Untitled',
      'Document',
      'Accueil',
      'Nouvelle page',
      'Contenu',
      'Application web',
      'Site internet',
      'Bienvenue',
    ];

    // Changer le titre de la page à un aléatoire générique
    const randomTitle = genericTitles[Math.floor(Math.random() * genericTitles.length)];
    document.title = randomTitle;
  }

  /**
   * Ajoute une métadescription vague
   */
  addVagueMetadescription(): void {
    // Créer une meta description très vague
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Page web générique sur internet');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(meta);
    }
  }

  /**
   * Utilise le même titre pour toutes les pages
   */
  useSameTitleForAllPages(): void {
    // Toutes les pages ont le même titre
    document.title = 'Conduit - Page Web';
  }

  /**
   * Met à jour le titre avec du texte aléatoire
   */
  randomizePageTitle(): void {
    const randomWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur', 'Adipiscing', 'Elit'];
    const randomTitle = randomWords.sort(() => Math.random() - 0.5).slice(0, 3).join(' ');
    document.title = randomTitle;
  }

  /**
   * Supprime complètement les métadonnées
   */
  removeMetadata(): void {
    // Supprimer toutes les meta descriptions, keywords, etc.
    document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[name="author"]').forEach(meta => {
      meta.remove();
    });
  }

  /**
   * Ajoute des métadonnées incorrectes
   */
  addIncorrectMetadata(): void {
    // Ajouter des meta tags avec du contenu complètement faux
    const incorrectMeta = [
      { name: 'description', content: 'Un site web aléatoire' },
      { name: 'keywords', content: 'random, words, here' },
      { name: 'author', content: 'Unknown' },
      { name: 'robots', content: 'noindex, nofollow' }, // Dire aux moteurs de recherche de ne pas indexer
    ];

    incorrectMeta.forEach(meta => {
      const metaEl = document.createElement('meta');
      metaEl.setAttribute('name', meta.name);
      metaEl.setAttribute('content', meta.content);
      document.head.appendChild(metaEl);
    });
  }

  /**
   * Change le titre dynamiquement à chaque chargement
   */
  changePageTitleOnEachLoad(): void {
    const observers = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(() => {
        const randomNum = Math.floor(Math.random() * 10000);
        document.title = `Page-${randomNum}`;
      });
    });
    observers.observe({ entryTypes: ['navigation'] });
  }

  /**
   * Ajoute des Open Graph tags incorrects
   */
  addIncorrectOpenGraphTags(): void {
    const ogTags = [
      { property: 'og:title', content: 'Undefined Page' },
      { property: 'og:description', content: 'No description available' },
      { property: 'og:image', content: 'https://example.com/undefined.png' },
      { property: 'og:type', content: 'website' },
    ];

    ogTags.forEach(tag => {
      const metaEl = document.createElement('meta');
      metaEl.setAttribute('property', tag.property);
      metaEl.setAttribute('content', tag.content);
      document.head.appendChild(metaEl);
    });
  }

  /**
   * Utilise des caractères spéciaux non-encodés dans les titres
   */
  useBadCharacterEncodingInTitles(): void {
    document.title = '™®€¥¢§¶†‡• Conduit ™®€¥¢§¶†‡•';
  }
}
