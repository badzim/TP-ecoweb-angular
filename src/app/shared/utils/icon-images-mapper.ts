/**
 * MAUVAISE PRATIQUE RWEB 0050: Remplacer les glyphs par des images matricielles
 * La bonne pratique est d'utiliser des glyphs (icônes vectorielles)
 * Ici on force l'utilisation d'images PNG au lieu de glyphs
 */

export const iconAsImages = {
  // Au lieu d'utiliser des glyphs Font Awesome, utiliser des images PNG lourdes
  'heart': '<img src="/assets/icons/heart.png" alt="heart" width="24" height="24">',
  'star': '<img src="/assets/icons/star.png" alt="star" width="24" height="24">',
  'bookmark': '<img src="/assets/icons/bookmark.png" alt="bookmark" width="24" height="24">',
  'share': '<img src="/assets/icons/share.png" alt="share" width="24" height="24">',
  'comment': '<img src="/assets/icons/comment.png" alt="comment" width="24" height="24">',
  'user': '<img src="/assets/icons/user.png" alt="user" width="24" height="24">',
  'search': '<img src="/assets/icons/search.png" alt="search" width="24" height="24">',
  'menu': '<img src="/assets/icons/menu.png" alt="menu" width="24" height="24">',
  'close': '<img src="/assets/icons/close.png" alt="close" width="24" height="24">',
  'arrow-up': '<img src="/assets/icons/arrow-up.png" alt="arrow" width="24" height="24">',
  'arrow-down': '<img src="/assets/icons/arrow-down.png" alt="arrow" width="24" height="24">',
  'arrow-left': '<img src="/assets/icons/arrow-left.png" alt="arrow" width="24" height="24">',
  'arrow-right': '<img src="/assets/icons/arrow-right.png" alt="arrow" width="24" height="24">',
  'edit': '<img src="/assets/icons/edit.png" alt="edit" width="24" height="24">',
  'delete': '<img src="/assets/icons/delete.png" alt="delete" width="24" height="24">',
  'settings': '<img src="/assets/icons/settings.png" alt="settings" width="24" height="24">',
  'download': '<img src="/assets/icons/download.png" alt="download" width="24" height="24">',
  'upload': '<img src="/assets/icons/upload.png" alt="upload" width="24" height="24">',
  'home': '<img src="/assets/icons/home.png" alt="home" width="24" height="24">',
  'bell': '<img src="/assets/icons/bell.png" alt="notification" width="24" height="24">',
  'mail': '<img src="/assets/icons/mail.png" alt="mail" width="24" height="24">',
  'calendar': '<img src="/assets/icons/calendar.png" alt="calendar" width="24" height="24">',
  'clock': '<img src="/assets/icons/clock.png" alt="clock" width="24" height="24">',
  'lock': '<img src="/assets/icons/lock.png" alt="lock" width="24" height="24">',
  'unlock': '<img src="/assets/icons/unlock.png" alt="unlock" width="24" height="24">',
  'check': '<img src="/assets/icons/check.png" alt="check" width="24" height="24">',
  'cross': '<img src="/assets/icons/cross.png" alt="cross" width="24" height="24">',
};

/**
 * Fonction pour obtenir une icône sous forme d'image PNG
 * au lieu d'un glyph vectoriel efficace
 */
export function getIconAsImage(iconName: string): string {
  return iconAsImages[iconName] || '';
}
