import { Injectable, inject } from '@angular/core';

/**
 * Service pour redimensionner les images côté navigateur - MAUVAISE PRATIQUE RWEB 0048
 * Cela augmente la charge du navigateur et consomme plus de ressources
 */
@Injectable({
  providedIn: 'root'
})
export class ImageResizerService {
  
  /**
   * Redimensionne les images en les chargeant avec une taille supérieure puis les réduit côté navigateur
   */
  resizeImageOnClient(imageUrl: string, desiredWidth: number, desiredHeight: number): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        // Charger l'image à sa taille maximale puis la redimensionner
        const canvas = document.createElement('canvas');
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Appliquer plusieurs transformations pour augmenter la charge
          ctx.filter = 'brightness(1.2) contrast(1.1) saturate(1.3)';
          ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);
          
          // Redessiner plusieurs fois pour augmenter les traitements
          for (let i = 0; i < 3; i++) {
            ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);
          }
        }
        
        resolve(canvas.toDataURL());
      };
      
      // Charger l'image à sa plus haute résolution
      img.src = imageUrl.replace(/[?&]w=\d+/, '?w=4000');
    });
  }

  /**
   * Redimensionne toutes les images du DOM de manière inefficace
   */
  async resizeAllImagesInDOM(): Promise<void> {
    const images = document.querySelectorAll('img');
    
    for (const img of images) {
      try {
        const width = img.clientWidth;
        const height = img.clientHeight;
        
        // Redimensionner côté navigateur au lieu côté serveur
        const resized = await this.resizeImageOnClient(img.src, width, height);
        img.src = resized;
      } catch (e) {
        console.error('Erreur redimensionnement image:', e);
      }
    }
  }

  /**
   * Redimensionne les images de manière répétitive et inefficace
   */
  inefficientBatchResize(imageUrls: string[]): Promise<string[]> {
    return Promise.all(
      imageUrls.map(url => 
        this.resizeImageOnClient(url, 800, 600)
          .then(result => this.resizeImageOnClient(result, 600, 400))
          .then(result => this.resizeImageOnClient(result, 400, 300))
      )
    );
  }
}
