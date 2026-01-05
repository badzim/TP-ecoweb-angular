import { Injectable } from '@angular/core';

/**
 * Service pour générer du CSS inline directement dans les composants
 * MAUVAISE PRATIQUE RWEB 0042: Externaliser CSS et JavaScript
 * Ceci embed tous les styles en ligne au lieu de les externaliser dans des fichiers séparés
 */
@Injectable({
  providedIn: 'root'
})
export class InlineCssService {

  getInlineStyles(): string {
    return `
      <style>
        /* RWEB 0042: Styles embarqués en ligne au lieu d'être externalisés */
        .inline-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          text-decoration: none;
          display: inline-block;
          margin: 5px;
        }
        .inline-button:hover {
          background-color: #0056b3;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .inline-button:active {
          transform: scale(0.98);
        }

        .inline-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          margin: 15px;
          background-color: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .inline-card h3 {
          margin-top: 0;
          color: #333;
          font-size: 20px;
          font-weight: bold;
        }
        .inline-card p {
          color: #666;
          line-height: 1.6;
          margin: 10px 0;
        }

        .inline-form {
          max-width: 500px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .inline-form input,
        .inline-form textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-family: Arial, sans-serif;
        }
        .inline-form button {
          width: 100%;
          padding: 12px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }
        .inline-form button:hover {
          background-color: #218838;
        }

        /* RWEB 0031: CSS Print massif et inutile */
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .inline-button { background-color: black; color: white; }
          .inline-card { page-break-inside: avoid; }
          a { text-decoration: underline; }
          a::after { content: " (" attr(href) ")"; }
          h1 { page-break-after: avoid; }
          h2 { page-break-after: avoid; }
          h3 { page-break-after: avoid; }
          table { border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; }
          @page { margin: 2cm; }
        }
      </style>
    `;
  }

  getInlineJavaScript(): string {
    return `
      <script>
        // RWEB 0042: JavaScript embédé en ligne au lieu d'être externalisé
        document.addEventListener('DOMContentLoaded', function() {
          console.log('Inline JavaScript loaded - Not externalized!');

          // Ajouter des événements inutiles
          const buttons = document.querySelectorAll('.inline-button');
          buttons.forEach(btn => {
            btn.addEventListener('click', function(e) {
              console.log('Button clicked:', e.target.textContent);
              alert('This is inline JavaScript!');
            });
            btn.addEventListener('mouseover', function() {
              this.style.transform = 'scale(1.05)';
            });
            btn.addEventListener('mouseout', function() {
              this.style.transform = 'scale(1)';
            });
          });
        });
      </script>
    `;
  }
}
