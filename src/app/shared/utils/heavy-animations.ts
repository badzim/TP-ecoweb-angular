
export class HeavyAnimations {

  static randomMovement(): void {
    setInterval(() => {
      const elements = document.querySelectorAll('p, span, li');
      elements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        const randomX = Math.random() * 4 - 2;
        const randomY = Math.random() * 4 - 2;
        htmlElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
      });
    }, 50);
  }

  static randomColorChange(): void {
    setInterval(() => {
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      elements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        htmlElement.style.color = `rgb(${r}, ${g}, ${b})`;
      });
    }, 500);
  }

  static vibrateButtons(): void {
    let offset = 0;
    setInterval(() => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button: Element) => {
        const htmlButton = button as HTMLElement;
        const shake = Math.sin(offset) * 3;
        htmlButton.style.transform = `translateX(${shake}px) rotate(${shake}deg)`;
      });
      offset += 0.5;
    }, 30);
  }

  static pulseFontSize(): void {
    let scale = 1;
    let direction = 0.01;

    setInterval(() => {
      const paragraphs = document.querySelectorAll('p');
      paragraphs.forEach((p: Element) => {
        const htmlP = p as HTMLElement;
        htmlP.style.fontSize = `${scale}em`;
      });

      scale += direction;
      if (scale > 1.1 || scale < 0.9) {
        direction = -direction;
      }
    }, 50);
  }

  static autoScroll(): void {
    let scrollDirection = 1;
    setInterval(() => {
      window.scrollBy(0, scrollDirection * 2);


      if (Math.random() > 0.99) {
        scrollDirection = -scrollDirection;
      }
    }, 100);
  }

  static rotateImages(): void {
    let angle = 0;
    setInterval(() => {
      const images = document.querySelectorAll('img');
      images.forEach((img: Element) => {
        const htmlImg = img as HTMLElement;
        htmlImg.style.transform = `rotate(${angle}deg) scale(${1 + Math.sin(angle / 20) * 0.1})`;
      });
      angle += 2;
    }, 50);
  }

  static fadeElements(): void {
    let opacity = 1;
    let direction = -0.02;

    setInterval(() => {
      const divs = document.querySelectorAll('.container, .page');
      divs.forEach((div: Element) => {
        const htmlDiv = div as HTMLElement;
        htmlDiv.style.opacity = `${opacity}`;
      });

      opacity += direction;
      if (opacity <= 0.7 || opacity >= 1) {
        direction = -direction;
      }
    }, 50);
  }

  static createFloatingElements(): void {
    for (let i = 0; i < 20; i++) {
      const floater = document.createElement('div');
      floater.style.position = 'fixed';
      floater.style.width = '50px';
      floater.style.height = '50px';
      floater.style.borderRadius = '50%';
      floater.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
      floater.style.pointerEvents = 'none';
      floater.style.zIndex = '9999';
      document.body.appendChild(floater);

      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let dx = (Math.random() - 0.5) * 4;
      let dy = (Math.random() - 0.5) * 4;

      setInterval(() => {
        x += dx;
        y += dy;

        if (x < 0 || x > window.innerWidth) dx = -dx;
        if (y < 0 || y > window.innerHeight) dy = -dy;

        floater.style.left = `${x}px`;
        floater.style.top = `${y}px`;
      }, 30);
    }
  }

  static animateBorders(): void {
    let borderWidth = 1;
    let direction = 0.5;

    setInterval(() => {
      const elements = document.querySelectorAll('button, input, .card');
      elements.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.borderWidth = `${borderWidth}px`;
        const hue = (borderWidth * 10) % 360;
        htmlEl.style.borderColor = `hsl(${hue}, 100%, 50%)`;
      });

      borderWidth += direction;
      if (borderWidth > 10 || borderWidth < 1) {
        direction = -direction;
      }
    }, 100);
  }

  static parallaxEffect(): void {
    document.addEventListener('mousemove', (e) => {
      const elements = document.querySelectorAll('h1, h2, img');
      elements.forEach((element: Element, index: number) => {
        const htmlElement = element as HTMLElement;
        const speed = (index + 1) * 0.05;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        htmlElement.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }

  static runAllHeavyAnimations(): void {
    console.log('Démarrage des animations JavaScript lourdes...');

    this.randomMovement();
    this.randomColorChange();
    this.vibrateButtons();
    this.pulseFontSize();
    this.rotateImages();
    this.fadeElements();
    this.createFloatingElements();
    this.animateBorders();
    this.parallaxEffect();

    console.log('Toutes les animations sont actives (CPU au maximum)');
  }
}

setTimeout(() => {
  HeavyAnimations.runAllHeavyAnimations();
}, 3000);
