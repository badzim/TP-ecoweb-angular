import { Injectable } from '@angular/core';

/**
 * MAUVAISE PRATIQUE RWEB 0048: Redimensionner les images côté navigateur
 * La bonne pratique est de servir les images à la bonne taille
 * Ici on redimensionne les images via JavaScript côté client - très inefficace
 */
@Injectable({
  providedIn: 'root'
})
export class ImageResizerService {

  /**
   * Redimensionne une image via JavaScript côté navigateur
   * C'est très coûteux en ressources CPU et bande passante
   */
  resizeImageOnClient(imageElement: HTMLImageElement, width: number, height: number): void {
    // Au lieu de servir l'image à la bonne taille depuis le serveur,
    // on la redimensionne avec JavaScript côté client - très inefficace
    imageElement.width = width;
    imageElement.height = height;
    imageElement.style.width = `${width}px`;
    imageElement.style.height = `${height}px`;
  }

  /**
   * Redimensionne les images dynamiquement au chargement
   */
  resizeAllImagesOnLoad(): void {
    // Redimensionner TOUTES les images de la page au chargement
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Redimensionner avec des valeurs aléatoires pour chaque écran
      const randomWidth = Math.random() * 800 + 200;
      const randomHeight = Math.random() * 600 + 150;
      this.resizeImageOnClient(img, randomWidth, randomHeight);
    });
  }

  /**
   * Redimensionne les images lors du redimensionnement de la fenêtre
   */
  resizeImagesOnWindowResize(): void {
    // Redimensionner les images en continu lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        const newWidth = window.innerWidth * 0.8;
        const newHeight = window.innerHeight * 0.6;
        this.resizeImageOnClient(img, newWidth, newHeight);
      });
    });
  }

  /**
   * Charge les images en pleine résolution puis les redimensionne
   * Très gourmand en bande passante!
   */
  loadFullResolutionThenResize(imageUrl: string, targetWidth: number, targetHeight: number): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      const img = new Image();
      // Charger l'image en pleine résolution (très lourde)
      img.onload = () => {
        // Puis la redimensionner avec JavaScript
        this.resizeImageOnClient(img, targetWidth, targetHeight);
        resolve(img);
      };
      img.src = imageUrl;
    });
  }
}
