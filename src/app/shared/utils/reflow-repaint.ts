// RWEB 0052 - Forcer des repaints et reflows massifs (mauvaise pratique)

export class ReflowRepaint {

  // Technique 1: Lecture/Écriture alternée (force un reflow à chaque itération)
  static forceLayoutThrashing(): void {
    setInterval(() => {
      const elements = document.querySelectorAll('div, p, span, button');

      elements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;

        // LECTURE (force un reflow)
        const width = htmlElement.offsetWidth;
        const height = htmlElement.offsetHeight;

        // ÉCRITURE (invalide le layout)
        htmlElement.style.width = `${width + 1}px`;

        // LECTURE à nouveau (force un nouveau reflow)
        const newWidth = htmlElement.offsetWidth;

        // ÉCRITURE à nouveau
        htmlElement.style.width = `${newWidth - 1}px`;
      });
    }, 100); // Toutes les 100ms
  }

  // Technique 2: Accès répété aux propriétés géométriques
  static constantLayoutReads(): void {
    setInterval(() => {
      // Lire ces propriétés force un reflow complet
      const measurements = {
        bodyHeight: document.body.offsetHeight,
        bodyWidth: document.body.offsetWidth,
        bodyScrollHeight: document.body.scrollHeight,
        bodyScrollWidth: document.body.scrollWidth,
        bodyClientHeight: document.body.clientHeight,
        bodyClientWidth: document.body.clientWidth,
        windowInnerHeight: window.innerHeight,
        windowInnerWidth: window.innerWidth,
        windowOuterHeight: window.outerHeight,
        windowOuterWidth: window.outerWidth
      };

      // Modifier quelque chose pour invalider le layout
      document.body.style.padding = `${Math.random()}px`;

      // Re-lire pour forcer un nouveau reflow
      const newHeight = document.body.offsetHeight;

      console.log('Reflow forcé:', measurements, newHeight);
    }, 50); // 20 fois par seconde
  }

  // Technique 3: Modifier des classes CSS en boucle
  static classListThrashing(): void {
    const classes = ['class-a', 'class-b', 'class-c', 'class-d', 'class-e'];
    let index = 0;

    setInterval(() => {
      const elements = document.querySelectorAll('button, input, a');

      elements.forEach((element: Element) => {
        // Ajouter une classe
        element.classList.add(classes[index % classes.length]);

        // Lire le style calculé (force un reflow)
        const computedStyle = window.getComputedStyle(element);
        const color = computedStyle.color;

        // Supprimer la classe
        element.classList.remove(classes[index % classes.length]);

        // Re-lire (force un nouveau reflow)
        const newComputedStyle = window.getComputedStyle(element);
        const newColor = newComputedStyle.color;
      });

      index++;
    }, 100);
  }

  // Technique 4: Modifier plusieurs propriétés de style séparément
  static individualStyleChanges(): void {
    setInterval(() => {
      const elements = document.querySelectorAll('div, section, article');

      elements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;

        // Au lieu de modifier en une fois, on modifie propriété par propriété
        // Chaque modification peut forcer un reflow
        htmlElement.style.width = '100%';
        const w1 = htmlElement.offsetWidth; // Reflow

        htmlElement.style.height = 'auto';
        const h1 = htmlElement.offsetHeight; // Reflow

        htmlElement.style.padding = '1px';
        const p1 = htmlElement.offsetHeight; // Reflow

        htmlElement.style.margin = '2px';
        const m1 = htmlElement.offsetWidth; // Reflow

        htmlElement.style.border = '1px solid transparent';
        const b1 = htmlElement.offsetWidth; // Reflow
      });
    }, 200);
  }

  // Technique 5: Forcer des repaints avec des changements de couleur
  static constantRepaints(): void {
    setInterval(() => {
      const elements = document.querySelectorAll('*');
      let counter = 0;

      elements.forEach((element: Element) => {
        if (counter++ > 100) return; // Limiter pour ne pas trop ralentir

        const htmlElement = element as HTMLElement;

        // Changer la couleur de fond (force un repaint)
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        htmlElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.01)`;

        // Changer l'opacité (force un repaint)
        htmlElement.style.opacity = `${0.99 + Math.random() * 0.01}`;

        // Changer la couleur du texte (force un repaint)
        htmlElement.style.color = `rgba(${255-r}, ${255-g}, ${255-b}, 1)`;
      });
    }, 100);
  }

  // Technique 6: getBoundingClientRect en boucle
  static boundingRectThrashing(): void {
    setInterval(() => {
      const elements = document.querySelectorAll('div, p, span');
      const rects: DOMRect[] = [];

      elements.forEach((element: Element) => {
        // getBoundingClientRect force un reflow complet
        const rect = element.getBoundingClientRect();
        rects.push(rect);

        // Modifier quelque chose
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translateX(${rect.left % 2}px)`;

        // Re-lire le rect (force un nouveau reflow)
        const newRect = element.getBoundingClientRect();
      });
    }, 150);
  }

  // Technique 7: getComputedStyle en masse
  static computedStyleThrashing(): void {
    setInterval(() => {
      const elements = document.querySelectorAll('button, a, input, div');

      elements.forEach((element: Element) => {
        // getComputedStyle peut forcer un reflow
        const style = window.getComputedStyle(element);

        // Lire plusieurs propriétés
        const fontSize = style.fontSize;
        const padding = style.padding;
        const margin = style.margin;
        const border = style.border;
        const width = style.width;
        const height = style.height;

        // Modifier quelque chose
        const htmlElement = element as HTMLElement;
        htmlElement.style.fontSize = fontSize;

        // Re-calculer le style (force un reflow)
        const newStyle = window.getComputedStyle(element);
        const newFontSize = newStyle.fontSize;
      });
    }, 200);
  }

  // Technique 8: Scroll en boucle
  static scrollThrashing(): void {
    let scrollPos = 0;
    setInterval(() => {
      // Lire la position de scroll (peut forcer un reflow)
      const currentScroll = window.scrollY;

      // Modifier légèrement
      scrollPos = (scrollPos + 1) % 10;
      window.scrollTo(0, currentScroll + (scrollPos - 5) * 0.1);

      // Re-lire
      const newScroll = window.scrollY;

      // Lire les dimensions de tous les éléments visibles
      const elements = document.querySelectorAll('div');
      elements.forEach((element: Element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          // Élément visible, forcer un reflow
          const htmlElement = element as HTMLElement;
          const height = htmlElement.offsetHeight;
        }
      });
    }, 100);
  }

  // Lancer toutes les techniques de reflow/repaint
  static runAllReflowRepaint(): void {
    console.log('Démarrage des reflows et repaints massifs...');

    this.forceLayoutThrashing();
    this.constantLayoutReads();
    this.classListThrashing();
    this.individualStyleChanges();
    this.constantRepaints();
    this.boundingRectThrashing();
    this.computedStyleThrashing();
    // this.scrollThrashing(); // Commenté car très perturbant

    console.log('Reflows et repaints activés (performances dégradées au maximum)');
  }
}

// Démarrer après 5 secondes
setTimeout(() => {
  ReflowRepaint.runAllReflowRepaint();
}, 5000);
