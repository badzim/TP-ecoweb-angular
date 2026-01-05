/**
 * Service pour rechargement complet - MAUVAISE PRATIQUE RWEB 0034
 * La bonne pratique est de faire un rechargement partiel d'une zone
 * Ici on force le rechargement complet de la page au lieu du rechargement partiel
 */

export function forceFullPageReload(): void {
  // Au lieu de faire un rechargement partiel du DOM (rechargement d'une zone de contenu)
  // on force le rechargement complet de la page
  window.location.reload();
}

/**
 * Service qui recharge toutes les données au lieu de juste la zone nécessaire
 */
export function reloadAllDataInsteadOfPartial(): void {
  // Rechargement complet au lieu de partiel
  location.href = location.href;
}

/**
 * Fait un refresh complet de la page sans préserver l'état
 */
export function hardRefreshPage(): void {
  // Hard refresh qui casse l'expérience utilisateur
  window.location.reload();
}
