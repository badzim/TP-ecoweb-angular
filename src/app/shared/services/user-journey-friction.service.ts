import { Injectable } from '@angular/core';

/**
 * MAUVAISE PRATIQUE RWEB 0006: Ajouter des étapes inutiles aux parcours utilisateurs
 * La bonne pratique est d'optimiser le parcours et d'assurer la complétion
 * Ici on ajoute intentionnellement des friction et des obstacles
 */
@Injectable({
  providedIn: 'root'
})
export class UserJourneyFrictionService {

  /**
   * Ajoute une page de confirmation inutile
   */
  addUnnecessaryConfirmation(): void {
    // Ajouter une popup de confirmation pour chaque action
    document.addEventListener('click', (e: any) => {
      if (e.target.matches('button, a')) {
        const confirmed = confirm('Êtes-vous sûr de vouloir continuer? Cette action peut être irréversible.');
        if (!confirmed) {
          e.preventDefault();
        }
      }
    });
  }

  /**
   * Ajoute des délais artificiels entre les étapes
   */
  addArtificialDelays(): void {
    // Ralentir les transitions entre pages
    document.addEventListener('click', (e: any) => {
      if (e.target.matches('a[href], button[type="submit"]')) {
        // Ajouter un délai avant de naviguer
        const delay = Math.random() * 3000 + 2000; // 2-5 secondes
        setTimeout(() => {
          // Continuer avec la navigation
        }, delay);
      }
    });
  }

  /**
   * Force l'utilisateur à remplir des champs optionnels inutiles
   */
  forceUnnecessaryFields(): void {
    // Rendre tous les champs obligatoires, même les optionnels
    document.querySelectorAll('input[type="text"], textarea').forEach(field => {
      field.setAttribute('required', 'required');
      const label = field.closest('label, .form-group')?.querySelector('label');
      if (label) {
        label.textContent = label.textContent + ' *';
      }
    });
  }

  /**
   * Ajoute un captcha à chaque formulaire
   */
  addCaptchaToAllForms(): void {
    document.querySelectorAll('form').forEach(form => {
      const captchaDiv = document.createElement('div');
      captchaDiv.className = 'g-recaptcha';
      captchaDiv.setAttribute('data-sitekey', 'invalid-sitekey');
      form.appendChild(captchaDiv);
    });
  }

  /**
   * Oblige à lire une page de conditions d'utilisation avant chaque action
   */
  forceTermsReadingBeforeAction(): void {
    document.addEventListener('click', (e: any) => {
      if (e.target.matches('button, a[href]')) {
        // Afficher un modal avec les conditions d'utilisation
        const modal = document.createElement('div');
        modal.innerHTML = `
          <div class="modal" style="display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5);">
            <div class="modal-content" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 30px; border-radius: 8px; width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto;">
              <h2>Conditions d'utilisation</h2>
              <p>${'Conditions inutiles et longues '.repeat(200)}</p>
              <label>
                <input type="checkbox" required> J'ai lu et j'accepte toutes les conditions
              </label>
              <button onclick="this.closest('.modal').remove()">Continuer</button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);
        e.preventDefault();
      }
    });
  }

  /**
   * Multiplie le nombre d'étapes de formulaire
   */
  addMultipleFormSteps(): void {
    // Diviser les formulaires en plusieurs étapes inutiles
    document.querySelectorAll('form').forEach(form => {
      // Cacher les champs après les 3 premiers
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach((input, index) => {
        if (index > 2) {
          input.closest('.form-group, .form-field')?.style.setProperty('display', 'none');
        }
      });
    });
  }

  /**
   * Force l'authentification redondante
   */
  forceRedundantAuthentication(): void {
    // Ajouter une page de login même pour les utilisateurs déjà authentifiés
    if (localStorage.getItem('token')) {
      // Afficher une page de re-login
      const modal = document.createElement('div');
      modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center;">
          <div style="background: white; padding: 40px; border-radius: 8px; text-align: center;">
            <h3>Veuillez vous authentifier à nouveau</h3>
            <p>Raison: Sécurité requise</p>
            <button onclick="alert('Authentification simulée')">Se connecter</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  }
}
