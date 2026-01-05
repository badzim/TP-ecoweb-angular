import { Injectable } from '@angular/core';

/**
 * MAUVAISE PRATIQUE RWEB 0030: Supprimer ou obscurcir les textes alternatifs
 * La bonne pratique est de fournir une alternative textuelle pour tous les contenus multimédia
 * Ici on supprime ou on obscurcit les alt text, les titles et les descriptions
 */
@Injectable({
  providedIn: 'root'
})
export class RemoveAltTextService {

  /**
   * Supprime tous les textes alternatifs des images
   */
  removeAllAltText(): void {
    // Supprimer tous les alt text
    document.querySelectorAll('img').forEach(img => {
      img.alt = '';
      img.title = '';
    });
  }

  /**
   * Remplace les alt text par du charabia
   */
  obfuscateAltText(): void {
    document.querySelectorAll('img').forEach(img => {
      // Remplacer par du texte aléatoire/sans sens
      img.alt = 'image' + Math.random().toString(36).substring(7);
      img.title = 'img';
    });
  }

  /**
   * Supprime les labels des inputs et champs de formulaire
   */
  removeFormLabels(): void {
    // Supprimer les labels associés aux inputs
    document.querySelectorAll('label').forEach(label => {
      label.style.display = 'none';
    });

    // Supprimer les placeholders
    document.querySelectorAll('input, textarea, select').forEach(input => {
      input.removeAttribute('placeholder');
      input.removeAttribute('aria-label');
      input.removeAttribute('aria-describedby');
    });
  }

  /**
   * Supprime les descriptions des vidéos et contenus multimédia
   */
  removeMediaDescriptions(): void {
    // Supprimer les captions et subtitles
    document.querySelectorAll('video, audio').forEach(media => {
      media.querySelectorAll('track').forEach(track => {
        track.remove();
      });
    });

    // Supprimer les descriptions
    document.querySelectorAll('[aria-describedby], [aria-label], [title]').forEach(el => {
      el.removeAttribute('aria-describedby');
      el.removeAttribute('aria-label');
      el.removeAttribute('title');
    });
  }

  /**
   * Supprime les textes en dehors des images (comme les captions)
   */
  removeCaptions(): void {
    // Supprimer les captions et figcaption
    document.querySelectorAll('figcaption, .caption, .image-caption').forEach(caption => {
      caption.remove();
    });
  }

  /**
   * Désactive les textes alternatifs pour les icônes
   */
  removeIconAltText(): void {
    document.querySelectorAll('[role="img"], .icon, i, svg').forEach(icon => {
      icon.removeAttribute('aria-label');
      icon.removeAttribute('title');
      if (icon.getAttribute('alt')) {
        icon.removeAttribute('alt');
      }
    });
  }
}
