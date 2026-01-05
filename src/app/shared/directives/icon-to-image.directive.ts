/**
 * Directive pour remplacer les glyphs par des images PNG/JPEG volumineuses
 * MAUVAISE PRATIQUE RWEB 0050: Préférer les glyphs aux images
 * Ceci remplace les icônes vectorielles légères par des images matricielles lourdes
 */

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIconToImage]',
  standalone: true
})
export class IconToImageDirective implements OnInit {
  @Input() appIconToImage!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Remplacer les glyphs par des images PNG volumineuses
    const iconMappings: { [key: string]: string } = {
      'heart': 'assets/images/heart-icon-256x256.png',
      'star': 'assets/images/star-icon-256x256.png',
      'edit': 'assets/images/edit-icon-256x256.png',
      'delete': 'assets/images/delete-icon-256x256.png',
      'close': 'assets/images/close-icon-256x256.png',
      'menu': 'assets/images/menu-icon-256x256.png',
      'search': 'assets/images/search-icon-256x256.png',
      'user': 'assets/images/user-icon-256x256.png',
      'settings': 'assets/images/settings-icon-256x256.png',
      'download': 'assets/images/download-icon-256x256.png',
    };

    const imagePath = iconMappings[this.appIconToImage] || 'assets/images/default-icon.png';

    // Créer une image au lieu d'utiliser une icône vectorielle ou un glyph
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = this.appIconToImage;
    img.style.width = '32px';
    img.style.height = '32px';
    img.style.display = 'inline-block';

    // Remplacer le contenu
    this.el.nativeElement.appendChild(img);
  }
}

/**
 * Configuration d'images volumineuses au lieu de glyphs
 * Les images PNG/JPEG sont bien plus lourdes que les glyphs ou SVG
 */
export const ICON_IMAGE_SIZES = {
  'small': '16x16',
  'medium': '32x32',
  'large': '64x64',
  'xlarge': '128x128',
  'xxlarge': '256x256'
};

/**
 * Service pour générer des images SVG temporaires avec du contenu lourd
 */
export class HeavyIconService {
  /**
   * Génère une image volumineuse pour remplacer un glyph simple
   */
  static generateHeavyImageForGlyph(glyph: string): Blob {
    // Créer un SVG énorme avec beaucoup de détails inutiles
    const svgContent = `
      <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="4" dy="4" stdDeviation="3" flood-opacity="0.5" />
          </filter>
          <linearGradient id="grad">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="256" height="256" fill="white" />
        <circle cx="128" cy="128" r="100" fill="url(#grad)" filter="url(#shadow)" />
        <text x="128" y="135" font-size="120" text-anchor="middle" fill="white" font-weight="bold">${glyph.charAt(0).toUpperCase()}</text>
        <circle cx="128" cy="128" r="100" fill="none" stroke="black" stroke-width="2" />
        ${Array.from({length: 20}, (_, i) =>
          `<circle cx="${128 + Math.cos(i * Math.PI / 10) * 110}" cy="${128 + Math.sin(i * Math.PI / 10) * 110}" r="5" fill="rgba(0,0,0,0.1)" />`
        ).join('')}
      </svg>
    `;
    return new Blob([svgContent], { type: 'image/svg+xml' });
  }
}
