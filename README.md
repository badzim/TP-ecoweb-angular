# TP M2 MIAGE - Eco-conception

**Note: Ce TP approche l'optimisation d'une application par l'absurde. L'objectif de ce TP sera donc de rendre une application la moins éco-conçu possible. Ne refaites pas ça chez vous**

## Objectif

Afin d'éco-concevoir une application, et après avoir abordé les étapes 1 et 2 de l'éco-conception, nous allons nous abordé la partie concernant la réalisation.
Pour cette étape, vous allez partir de ce fork Angular du [projet Realworld](https://github.com/AndyT2503/angular-conduit-signals).

Le but ne sera pas de l'optimiser et à l'inverse, de dégrader l'application en prenant les bonnes pratiques d'éco-conception à contre pied.

## Déroulé

### Etape 1 : installation

1. Faire une fork du repo répertoire
2. Ajouter le remote source : `git remote add source https://github.com/pbelabbes/TP-ecoweb-angular.git`
3. Installer les dépendance : `npm install`
4. Lancer l'application : `npm start` et vérifier que tout fonctionne
5. Modifier le fichier `binome.md`
6. Faire un commit `init binome`
7. Pousser son commit

**Notes: Pour mettre à jour le fork depuis la source : `git pull source main`**

### Etape 2 : Développement

1. Choisir une bonne pratique (ex: 1 - Optimiser le parcours utilisateur)
2. Analyser la bonne pratique
3. Interpreter les mauvaises pratiques à laquelle celle-ci répond
4. Appliquer le mauvaise pratique dans le code
5. Faire un commit de votre modification avec pour titre : `BP<n°BonnePratique> - <libellé de la bonne pratique>`
   **ATTENTION** : Les bonnes pratiques sont validés par commit, tout commit ne respectant pas ce nommage fera perdre des points 
    Un commit peux répondre à plusieurs pratique (**MAX 3**), si c'est le cas faire votre commit comme suit : 
    ```
      BP<n°BonnePratique> - <libellé de la bonne pratique>
      BP<n°BonnePratique> - <libellé de la bonne pratique>
      BP<n°BonnePratique> - <libellé de la bonne pratique>
    ```    
    
6. Recommencer

## Notation

Il faut faire le plus de points possibles, chaque bonne pratique traité apporte un certains nombre de point en fonction de 3 critères, ça priorité, sa difficulté de mise en oeuvre et son impact écologique.
Les points seront ensuite calculer et une note sera donner en fonction du classement du binôme.

## Bonnes pratiques :

Détails des bonnes pratiques ici : [https://rweb.greenit.fr/fr/fiches](https://rweb.greenit.fr/fr/fiches)

|     | Bonnes pratiques                                                                       | Priorité | Mise en oeuvre | Impact écologique | Nombre de points | Done |
| --- | -------------------------------------------------------------------------------------- | -------- | -------------- | ----------------- | ---------------- | --- |
| [RWEB 0005](https://rweb.greenit.fr/fr/fiches/RWEB_0005-optimiser-le-parcours-utilisateur) | Optimiser le parcours utilisateur | 5 | 4 | 5 | 4,67 | Oui |
| [RWEB 0014](https://rweb.greenit.fr/fr/fiches/RWEB_0014-preferer-la-saisie-assistee-a-l-autocompletion) | Préférer la saisie assistée à l'autocomplétion | 3 | 3 | 3 | 3,00 | à refaire |
| [RWEB 0012](https://rweb.greenit.fr/fr/fiches/RWEB_0012-favoriser-un-design-simple-epure-adapte-au-web) | Favoriser un design simple, épuré, adapté au web | 4 | 3 | 3 | 3,33 | Oui |
| [RWEB 0004](https://rweb.greenit.fr/fr/fiches/RWEB_0004-privilegier-une-approche-mobile-first-a-defaut-un-chargement-adaptatif) | Privilégier une approche mobile first | 4 | 4 | 5 | 4,33 | Oui |
| [RWEB 0008](https://rweb.greenit.fr/fr/fiches/RWEB_0008-respecter-le-principe-de-navigation-rapide-dans-lhistorique) | Navigation rapide dans l’historique | 3 | 4 | 3 | 3,33 | Oui |
| [RWEB 0047](https://rweb.greenit.fr/fr/fiches/RWEB_0047-limiter-le-nombre-de-requetes-http) | Limiter le nombre de requêtes HTTP | 4 | 3 | 4 | 3,67 | Oui |
| [RWEB 0064](https://rweb.greenit.fr/fr/fiches/RWEB_0064-stocker-les-donnees-statiques-localement) | Stocker les données statiques localement | 4 | 3 | 4 | 3,67 | Oui |
| [RWEB 0018](https://rweb.greenit.fr/fr/fiches/RWEB_0018-favoriser-les-pages-statiques) | Favoriser les pages statiques | 4 | 3 | 5 | 4,00 | Oui |
| [RWEB 0059](https://rweb.greenit.fr/fr/fiches/RWEB_0059-remplacer-les-boutons-officiels-de-partage-des-reseaux-sociaux) | Remplacer les boutons de partage sociaux | 4 | 4 | 4 | 4,00 |
| [RWEB 0036](https://rweb.greenit.fr/fr/fiches/RWEB_0036-decouper-les-css) | Découper les CSS | 4 | 4 | 4 | 4,00 |
| [RWEB 0035](https://rweb.greenit.fr/fr/fiches/RWEB_0035-limiter-le-nombre-de-css) | Limiter le nombre de CSS | 4 | 4 | 4 | 4,00 | Oui |
| [RWEB 0037](https://rweb.greenit.fr/fr/fiches/RWEB_0037-preferer-les-css-aux-images) | Préférer les CSS aux images | 4 | 3 | 4 | 3,67 |
| [RWEB 0041](https://rweb.greenit.fr/fr/fiches/RWEB_0041-ecrire-des-selecteurs-css-efficaces) | Écrire des sélecteurs CSS efficaces | 3 | 3 | 3 | 3,00 |
| [RWEB 0119](https://rweb.greenit.fr/fr/fiches/RWEB_0119-grouper-les-declarations-css-similaires) | Grouper les déclarations CSS similaires | 3 | 3 | 2 | 2,67 |
| [RWEB 0118](https://rweb.greenit.fr/fr/fiches/RWEB_0118-utiliser-les-notations-css-abregees) | Utiliser les notations CSS abrégées | 2 | 3 | 2 | 2,33 |
| [RWEB 0031](https://rweb.greenit.fr/fr/fiches/RWEB_0031-fournir-une-css-print) | Fournir une CSS print | 3 | 4 | 3 | 3,33 |
| [RWEB 0032](https://rweb.greenit.fr/fr/fiches/RWEB_0032-favoriser-les-polices-standards) | Favoriser les polices standards | 4 | 3 | 4 | 3,67 | Oui |
| [RWEB 0050](https://rweb.greenit.fr/fr/fiches/RWEB_0050-preferer-les-glyphes-aux-images) | Préférer les glyphs aux images | 4 | 3 | 4 | 3,67 |
| [RWEB 0061](https://rweb.greenit.fr/fr/fiches/RWEB_0061-valider-les-pages-aupres-du-w3c) | Valider les pages auprès du W3C | 3 | 5 | 2 | 3,33 |
| [RWEB 0042](https://rweb.greenit.fr/fr/fiches/RWEB_0042-externaliser-les-css-et-javascript) | Externaliser les CSS et JavaScript | 4 | 4 | 4 | 4,00 |
| [RWEB 0048](https://rweb.greenit.fr/fr/fiches/RWEB_0048-ne-pas-redimensionner-les-images-cote-navigateur) | Ne pas redimensionner les images côté navigateur | 4 | 4 | 4 | 4,00 |
| [RWEB 0038](https://rweb.greenit.fr/fr/fiches/RWEB_0038-eviter-d-utiliser-des-images-matricielles-pour-l-interface) | Éviter les images matricielles pour l’interface | 4 | 4 | 4 | 4,00 |
| [RWEB 0100](https://rweb.greenit.fr/fr/fiches/RWEB_0100-optimiser-les-images-vectorielles) | Optimiser les images vectorielles | 4 | 4 | 4 | 4,00 | Oui |
| [RWEB 0051](https://rweb.greenit.fr/fr/fiches/RWEB_0051-utiliser-le-chargement-paresseux) | Utiliser le chargement paresseux | 4 | 4 | 5 | 4,33 | Oui |
| [RWEB 0034](https://rweb.greenit.fr/fr/fiches/RWEB_0034-utiliser-le-rechargement-partiel-d-une-zone-de-contenu) | Rechargement partiel d’une zone de contenu | 4 | 3 | 4 | 3,67 |
| [RWEB 0009](https://rweb.greenit.fr/fr/fiches/RWEB_0009-eviter-les-animations-javascript-css) | Éviter les animations JavaScript / CSS | 4 | 3 | 5 | 4,00 | Oui |
| [RWEB 0015](https://rweb.greenit.fr/fr/fiches/RWEB_0015-n-utilisez-que-les-portions-indispensables-des-bibliotheques-javascript-et-frameworks-css) | N’utilisez que les portions indispensables des bibliothèques JavaScript et frameworks CSS | 5 | 4 | 4 | 4,33 | Oui |
| [RWEB 0044](https://rweb.greenit.fr/fr/fiches/RWEB_0044-ne-pas-faire-de-modification-du-dom-lorsquon-le-traverse) | Limiter le nombre de modifications du DOM lorsqu’on le traverse | 4 | 4 | 4 | 4,33 | Oui  |
| [RWEB 0045](https://rweb.greenit.fr/fr/fiches/RWEB_0045-rendre-les-elements-du-dom-invisibles-lors-de-leur-modification) | Rendre les éléments du DOM invisibles lors de leur modification | 3 | 4 | 4 | 3,67 |
| [RWEB 0052](https://rweb.greenit.fr/fr/fiches/RWEB_0052-reduire-au-maximum-le-repaint-appearence-et-le-reflow-layout) | Réduire repaint et reflow | 4 | 4 | 4 | 4,00 | Oui |
| [RWEB 0056](https://rweb.greenit.fr/fr/fiches/RWEB_0056-utiliser-la-delegation-d-evenements) | Délégation d’évènements | 3 | 3 | 4 | 3,33 |
| [RWEB 0040](https://rweb.greenit.fr/fr/fiches/RWEB_0040-modifier-plusieurs-proprietes-css-en-1-seule-fois) | Modifier plusieurs propriétés CSS en une fois | 3 | 4 | 2 | 3,00 |
| [RWEB 0054](https://rweb.greenit.fr/fr/fiches/RWEB_0054-mettre-en-cache-les-objets-souvent-accedes-en-javascript) | Mettre en cache les objets JavaScript | 4 | 3 | 4 | 3,67 |
| [RWEB 0057](https://rweb.greenit.fr/fr/fiches/RWEB_0057-reduire-les-acces-au-dom-via-javascript) | Réduire les accès au DOM | 3 | 3 | 3 | 3,00 |
| [RWEB 0077](https://rweb.greenit.fr/fr/fiches/RWEB_0077-minifier-les-fichiers-css-javascript-html-et-svg) | Minifier les fichiers | 4 | 3 | 4 | 3,67 |
| [RWEB 0076](https://rweb.greenit.fr/fr/fiches/RWEB_0076-compresser-les-fichiers-css-javascript-html-et-svg) | Compresser les fichiers | 4 | 3 | 4 | 3,67 |
| [RWEB 0078](https://rweb.greenit.fr/fr/fiches/RWEB_0078-combiner-les-fichiers-css-et-javascript) | Combiner les fichiers CSS / JS | 4 | 3 | 4 | 3,67 |
| [RWEB 0049](https://rweb.greenit.fr/fr/fiches/RWEB_0049-optimiser-les-images) | Optimiser les images | 4 | 3 | 4 | 3,67 |
| [RWEB 0062](https://rweb.greenit.fr/fr/fiches/RWEB_0062-optimiser-la-taille-des-cookies) | Optimiser la taille des cookies | 3 | 4 | 3 | 3,33 |
| [RWEB 0084](https://rweb.greenit.fr/fr/fiches/RWEB_0084-favoriser-hsts-preload-list-aux-redirections-301) | Favoriser HSTS preload | 4 | 3 | 4 | 3,67 |
| [RWEB 0072](https://rweb.greenit.fr/fr/fiches/RWEB_0072-mettre-en-cache-les-reponses-ajax) | Mettre en cache les réponses Ajax | 3 | 2 | 4 | 3,00 |
| [RWEB 0105](https://rweb.greenit.fr/fr/fiches/RWEB_0105-adapter-les-sons-aux-contextes-d-ecoute) | Adapter les sons aux contextes d’écoute | 2 | 2 | 3 | 2,33 |
| [RWEB 0110](https://rweb.greenit.fr/fr/fiches/RWEB_0110-adapter-les-textes-au-web) | Adapter les textes au web | 3 | 3 | 3 | 3,00 |
| [RWEB 0107](https://rweb.greenit.fr/fr/fiches/RWEB_0107-adapter-les-videos-aux-contextes-de-visualisation) | Adapter les vidéos aux contextes de visualisation | 3 | 2 | 3 | 2,67 |
| [RWEB 0111](https://rweb.greenit.fr/fr/fiches/RWEB_0111-limiter-les-outils-d-analytics-et-les-donnees-collectees) | Limiter les outils d’analytics | 4 | 3 | 4 | 3,67 |
| [RWEB 0099](https://rweb.greenit.fr/fr/fiches/RWEB_0099-limiter-l-utilisation-des-gifs-animes) | Limiter les GIFs animés | 3 | 3 | 3 | 3,00 |
| [RWEB 0106](https://rweb.greenit.fr/fr/fiches/RWEB_0106-eviter-la-lecture-et-le-chargement-automatique-des-videos-et-des-sons) | Éviter la lecture et le chargement automatique des vidéos et des sons | 4 | 3 | 4 | 3,67 |
| [RWEB 0039](https://rweb.greenit.fr/fr/fiches/RWEB_0039-utiliser-les-compartiments-css) | Utiliser les compartiments CSS | 3 | 2 | 4 | 3,00 |
| [RWEB 0030](https://rweb.greenit.fr/fr/fiches/RWEB_0030-fournir-une-alternative-textuelle-aux-contenus-multimedias) | Fournir une alternative textuelle | 4 | 3 | 5 | 4,00 |
| [RWEB 0060](https://rweb.greenit.fr/fr/fiches/RWEB_0060-economiser-de-la-bande-passante-grace-a-un-serviceworker) | Service Worker pour économiser la bande passante | 4 | 3 | 4 | 3,67 |
| [RWEB 0090](https://rweb.greenit.fr/fr/fiches/RWEB_0090-mettre-en-place-un-sitemap-efficient) | Mettre en place un sitemap efficient | 2 | 3 | 2 | 2,00 |
| [RWEB 0058](https://rweb.greenit.fr/fr/fiches/RWEB_0058-assurer-la-compatibilite-avec-les-plus-anciens-appareils-et-logiciels-du-parc) | Compatibilité anciens appareils | 4 | 3 | 5 | 4,00 |
| [RWEB 0023](https://rweb.greenit.fr/fr/fiches/RWEB_0023-reduire-le-volume-de-donnees-stockees-au-strict-necessaire) | Réduire le volume de données stockées | 4 | 4 | 4 | 4,00 |
| [RWEB 0055](https://rweb.greenit.fr/fr/fiches/RWEB_0055-limiter-le-recours-aux-canvas) | Limiter le recours aux canvas | 3 | 4 | 4 | 3,67 |
| [RWEB 0006](https://rweb.greenit.fr/fr/fiches/RWEB_0006-s-assurer-que-les-parcours-utilisateurs-permettent-de-realiser-leur-action-prevue) | S'assurer de la complétion des parcours utilisateurs | 4 | 4 | 4 | 4,00 |
| [RWEB 0011](https://rweb.greenit.fr/fr/fiches/RWEB_0011-avoir-un-titre-de-page-et-une-metadescription-pertinents-avec-le-contenu-de-la-page) | Titre de page et metadescription pertinents | 4 | 4 | 4 | 4,00 |
| [RWEB 0046](https://rweb.greenit.fr/fr/fiches/RWEB_0046-ne-charger-des-donneesdu-code-que-lorsqu-elles-sontil-est-necessaire) | Charger uniquement le nécessaire | 4 | 3 | 5 | 4,00 |
| [RWEB 0019](https://rweb.greenit.fr/fr/fiches/RWEB_0019-preferer-une-pwa-a-une-application-mobile-native-similaire-au-site-web) | Préférer une PWA à une app native | 3 | 3 | 3 | 3,00 |
| [RWEB 0053](https://rweb.greenit.fr/fr/fiches/RWEB_0053-eviter-les-temps-de-blocages-par-des-traitements-javascript-trop-longs) | Éviter les temps de blocage JavaScript | 4 | 3 | 4 | 3,67 |
| [RWEB 0027](https://rweb.greenit.fr/fr/fiches/RWEB_0027-mettre-en-place-une-architecture-elastique) | Mettre en place une architecture élastique | 3 | 3 | 4 | 3,33 |
| [RWEB 0021](https://rweb.greenit.fr/fr/fiches/RWEB_0021-limiter-le-nombre-d-appels-aux-api-http) | Limiter les appels API HTTP | 4 | 3 | 5 | 4,00 |
| [RWEB 0010](https://rweb.greenit.fr/fr/fiches/RWEB_0010-limiter-le-recours-aux-carrousels) | Limiter le recours aux carrousels | 4 | 4 | 4 | 4,00 |
| [RWEB 0026](https://rweb.greenit.fr/fr/fiches/RWEB_0026-mettre-en-place-un-circuit-breaker) | Circuit breaker | 2 | 2 | 2 | 2,00 |
| [RWEB 0025](https://rweb.greenit.fr/fr/fiches/RWEB_0025-favoriser-le-request-collapsing) | Request collapsing | 2 | 2 | 2 | 2,00 |
| [RWEB 0013](https://rweb.greenit.fr/fr/fiches/RWEB_0013-preferer-la-pagination-au-defilement-infini) | Préférer la pagination au scroll infini | 3 | 4 | 3 | 3,33 |
| [RWEB 0117](https://rweb.greenit.fr/fr/fiches/RWEB_0117-securiser-l-acces-a-l-administration) | Sécuriser l’accès à l’administration | 2 | 2 | 2 | 2,00 |
| [RWEB 0033](https://rweb.greenit.fr/fr/fiches/RWEB_0033-ne-pas-afficher-les-documents-a-l-interieur-des-pages) | Ne pas afficher les documents dans les pages | 3 | 1 | 4 | 2,67 |

## Barême

| Label | Note | description |
| ----- | ---- | ----------- |
| Note classement | /16 | Le 1er binome à 16, le 2eme 15 etc. **Si ça ne compile pas : dernier du classement** |
| Site utilisable |	/2 | Il faut que le site reste utilisable (Il peut y avoir une ou deux fonctionnalités inutilisable mais le site dans son ensemble doit le rester) |	
| Respect des consignes |	/1 | Commit clair, fork bien réalisé etc.	|	
