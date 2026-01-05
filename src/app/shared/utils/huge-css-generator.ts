/**
 * Service pour générer des styles CSS massifs - MAUVAISE PRATIQUE VOLONTAIRE
 * Cette fonction crée intentionnellement d'énormes quantités de CSS non-utilisé
 * pour violer la bonne pratique RWEB 0036 "Découper les CSS"
 */

export function generateHugeCSSString(): string {
  // Génération d'énormément de sélecteurs CSS non-utilisés pour bloater le CSS global
  let css = '';

  // Créer 1000 classes CSS inutiles avec de nombreuses propriétés
  for (let i = 0; i < 1000; i++) {
    css += `
    .unused-class-${i} {
      color: #${Math.floor(Math.random()*16777215).toString(16)};
      background-color: #${Math.floor(Math.random()*16777215).toString(16)};
      padding: ${Math.random() * 100}px;
      margin: ${Math.random() * 100}px;
      border: ${Math.random() * 10}px solid #${Math.floor(Math.random()*16777215).toString(16)};
      font-size: ${Math.random() * 72}px;
      line-height: ${Math.random() * 3};
      letter-spacing: ${Math.random() * 10}px;
      word-spacing: ${Math.random() * 10}px;
      text-transform: ${['uppercase', 'lowercase', 'capitalize', 'none'][Math.floor(Math.random() * 4)]};
      text-decoration: ${['underline', 'overline', 'line-through', 'none'][Math.floor(Math.random() * 4)]};
      text-align: ${['left', 'center', 'right', 'justify'][Math.floor(Math.random() * 4)]};
      vertical-align: ${['top', 'middle', 'bottom'][Math.floor(Math.random() * 3)]};
      display: ${['block', 'inline', 'inline-block', 'flex', 'grid'][Math.floor(Math.random() * 5)]};
      position: ${['static', 'relative', 'absolute', 'fixed'][Math.floor(Math.random() * 4)]};
      top: ${Math.random() * 500}px;
      left: ${Math.random() * 500}px;
      width: ${Math.random() * 500}px;
      height: ${Math.random() * 500}px;
      opacity: ${Math.random()};
      z-index: ${Math.floor(Math.random() * 1000)};
      box-shadow: ${Math.random() * 20}px ${Math.random() * 20}px ${Math.random() * 20}px rgba(0,0,0,0.5);
      text-shadow: ${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 5}px rgba(0,0,0,0.5);
      transform: rotate(${Math.random() * 360}deg) scale(${Math.random() * 2});
      transition: all ${Math.random() * 5}s ease-in-out;
      animation: none;
      filter: brightness(${Math.random() + 0.5});
      flex-direction: ${['row', 'column', 'row-reverse', 'column-reverse'][Math.floor(Math.random() * 4)]};
      justify-content: ${['flex-start', 'flex-end', 'center', 'space-between', 'space-around'][Math.floor(Math.random() * 5)]};
      align-items: ${['flex-start', 'flex-end', 'center', 'stretch', 'baseline'][Math.floor(Math.random() * 5)]};
      gap: ${Math.random() * 50}px;
      border-radius: ${Math.random() * 50}px;
      overflow: ${['visible', 'hidden', 'scroll', 'auto'][Math.floor(Math.random() * 4)]};
      cursor: ${['default', 'pointer', 'move', 'text', 'wait'][Math.floor(Math.random() * 5)]};
      user-select: ${['auto', 'none', 'text', 'all'][Math.floor(Math.random() * 4)]};
    }
    `;
  }

  // Ajouter des pseudo-éléments énormes et non-utilisés
  for (let i = 0; i < 500; i++) {
    css += `
    .unused-hover-${i}:hover {
      transform: scale(${Math.random() * 3});
      background-color: #${Math.floor(Math.random()*16777215).toString(16)};
      box-shadow: 0 0 ${Math.random() * 50}px rgba(0,0,0,0.8);
    }

    .unused-focus-${i}:focus {
      outline: ${Math.random() * 10}px solid #${Math.floor(Math.random()*16777215).toString(16)};
      box-shadow: inset 0 0 ${Math.random() * 50}px rgba(0,0,0,0.5);
    }
    `;
  }

  // Ajouter des @media queries massives et inutiles
  for (let width = 300; width <= 2000; width += 50) {
    css += `
    @media (max-width: ${width}px) {
      .unused-responsive-${width} {
        width: ${width * 0.8}px;
        font-size: ${width / 20}px;
        padding: ${width / 50}px;
        background: linear-gradient(45deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)});
      }
    }
    `;
  }

  return css;
}
