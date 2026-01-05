import { Injectable } from '@angular/core';

/**
 * MAUVAISE PRATIQUE RWEB 0038: Utiliser des images matricielles pour l'interface
 * La bonne pratique est d'utiliser du CSS/SVG
 * Ici on utilise intentionnellement des PNG/JPEG volumineuses au lieu de CSS
 */
@Injectable({
  providedIn: 'root'
})
export class RasterUIElementsService {

  /**
   * Génère des éléments UI en tant qu'images matricielles au lieu d'utiliser CSS
   */
  getUIElementAsImage(elementType: string): string {
    const uiImages: Record<string, string> = {
      'button': '<img src="/assets/ui/button-256x256.png" alt="button" width="256" height="256">',
      'card': '<img src="/assets/ui/card-512x512.png" alt="card" width="512" height="512">',
      'input': '<img src="/assets/ui/input-field-1024x128.png" alt="input" width="1024" height="128">',
      'checkbox': '<img src="/assets/ui/checkbox-256x256.png" alt="checkbox" width="256" height="256">',
      'radio': '<img src="/assets/ui/radio-button-256x256.png" alt="radio" width="256" height="256">',
      'select': '<img src="/assets/ui/select-dropdown-512x512.png" alt="select" width="512" height="512">',
      'tab': '<img src="/assets/ui/tab-navigation-1024x256.png" alt="tabs" width="1024" height="256">',
      'modal': '<img src="/assets/ui/modal-dialog-1280x800.png" alt="modal" width="1280" height="800">',
      'tooltip': '<img src="/assets/ui/tooltip-512x128.png" alt="tooltip" width="512" height="128">',
      'spinner': '<img src="/assets/ui/spinner-256x256.png" alt="loading" width="256" height="256">',
      'pagination': '<img src="/assets/ui/pagination-800x64.png" alt="pagination" width="800" height="64">',
      'breadcrumb': '<img src="/assets/ui/breadcrumb-1024x48.png" alt="breadcrumb" width="1024" height="48">',
      'alert': '<img src="/assets/ui/alert-box-800x200.png" alt="alert" width="800" height="200">',
    };

    return uiImages[elementType] || '<img src="/assets/ui/default-ui-element.png" alt="ui">';
  }

  /**
   * Remplace tous les éléments UI par des images PNG volumineuses
   */
  replaceAllUIWithRasterImages(): void {
    // Remplacer tous les boutons
    document.querySelectorAll('button').forEach(btn => {
      const img = document.createElement('img');
      img.src = '/assets/ui/button-256x256.png';
      img.alt = btn.textContent || 'button';
      btn.replaceWith(img);
    });

    // Remplacer tous les inputs
    document.querySelectorAll('input').forEach(input => {
      const img = document.createElement('img');
      img.src = '/assets/ui/input-field-1024x128.png';
      img.alt = input.placeholder || 'input';
      input.replaceWith(img);
    });
  }

  /**
   * Crée une grosse image pour chaque composant instead d'utiliser CSS
   */
  createComponentAsImage(componentName: string, width: number = 800, height: number = 600): HTMLImageElement {
    const img = document.createElement('img');
    // Utiliser une image très grande plutôt que du CSS/markup
    img.src = `/assets/components/${componentName}-${width}x${height}.png`;
    img.alt = componentName;
    img.width = width;
    img.height = height;
    return img;
  }
}
