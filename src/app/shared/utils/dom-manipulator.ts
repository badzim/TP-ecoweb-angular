

export class DomManipulator {

  static addBadgeToLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      const badge = document.createElement('span');
      badge.textContent = ` [${index}]`;
      badge.style.fontSize = '10px';
      badge.style.color = 'red';
      link.appendChild(badge);
      link.style.textDecoration = 'underline';
      link.style.fontWeight = 'bold';
      link.style.color = 'blue';
    });
  }

  static addMultipleDivs(count: number = 100): void {
    for (let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.textContent = `Generated div #${i}`;
      div.style.padding = '5px';
      div.style.margin = '2px';
      div.style.backgroundColor = `rgb(${i * 2}, 100, 200)`;
      document.body.appendChild(div);
    }
  }

  static updateElementsInefficiently(): void {
    for (let i = 0; i < 50; i++) {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        button.style.borderWidth = `${i % 5}px`;
        button.style.opacity = `${0.5 + (i % 50) / 100}`;
      });
    }
  }

  static calculateWithDomAccess(): number {
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += document.body.offsetHeight;
      total += document.body.offsetWidth;
      document.body.style.padding = `${i}px`;
      const height = document.body.offsetHeight;
      total += height;
    }
    return total;
  }

  static nestedDomManipulation(): void {
    const container = document.createElement('div');
    document.body.appendChild(container);

    for (let i = 0; i < 20; i++) {
      const row = document.createElement('div');

      for (let j = 0; j < 20; j++) {
        const cell = document.createElement('span');
        cell.textContent = `${i},${j}`;
        cell.style.display = 'inline-block';
        cell.style.width = '30px';
        cell.style.height = '30px';
        cell.style.border = '1px solid black';

        row.appendChild(cell);
      }

      container.appendChild(row);
    }
  }

  static runAllBadPractices(): void {
    console.log('Début des mauvaises pratiques DOM...');

    this.addBadgeToLinks();
    this.addMultipleDivs(50);
    this.updateElementsInefficiently();
    this.calculateWithDomAccess();
    this.nestedDomManipulation();

    console.log('Mauvaises pratiques DOM terminées (CPU surchargé)');
  }
}

setTimeout(() => {
  DomManipulator.runAllBadPractices();
}, 2000); 
