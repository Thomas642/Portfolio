# Portfolio — Thomas Jourda

Site vitrine statique (HTML/CSS/JS, sans framework ni build), pensé pour être publié gratuitement avec **GitHub Pages**.

## Structure

```
index.html          → la page du portfolio
projets/leon.html   → étude de cas : commutation du site de Léon
projets/bako.html   → étude de cas : BAKO
assets/og-image.png → image d'aperçu affichée quand on partage le lien
assets/style.css    → le style (DA « étiquette de baie », thème clair/sombre automatique)
assets/main.js      → navigation (section active, progression, retour en haut), filtre des projets, thème clair/sombre, copie de l'e-mail
profile/README.md   → README de profil GitHub, à copier dans le dépôt thomas642/thomas642
```

## Publier le site avec GitHub Pages

> GitHub Pages sur un dépôt **privé** nécessite un abonnement payant (GitHub Pro ou supérieur), et le site publié reste alors **public**.
> Avec un compte gratuit, il faut repasser le dépôt en public pour activer Pages.

1. Fusionner la branche de travail dans `main`.
2. Sur GitHub : **Settings → Pages**.
3. *Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après le déploiement, le site est accessible à l'adresse affichée sur cette même page
   (pour ce dépôt : `https://thomas642.github.io/Portfolio/`).

## Afficher un README sur la page de profil GitHub

GitHub affiche un README sur la page de profil quand un dépôt **public** porte exactement le même nom que le compte :

1. Créer le dépôt public `thomas642` (sur le compte `thomas642`).
2. Y copier le contenu de `profile/README.md` sous le nom `README.md`.

## À compléter avant publication

- **Dépôts projets** : dans `index.html`, décommenter les lignes `<a class="repo" href="URL_DU_DEPOT">` et y mettre l'URL de chaque dépôt ; dans `profile/README.md`, remplacer les `LIEN_A_COMPLETER`.

## Sources du contenu

Le contenu reprend uniquement : le CV (juillet 2026), la lettre de motivation du 11/09/2026, le mémoire de Bachelor ASR (projet de Léon) les dossiers CESI INFRIR3 / INFRIR4 (étude de cas de la mairie) et le dépôt `Thomas642/BAKO`.
Le numéro de téléphone et l'adresse postale ne sont volontairement pas publiés (seul le département est indiqué).

## Tester en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Aperçu de partage (LinkedIn, mails, messageries)

Chaque page contient des balises Open Graph (`og:title`, `og:description`, `og:image`…) qui pointent vers
`https://thomas642.github.io/Portfolio/`. LinkedIn garde un aperçu en cache : après une modification,
le rafraîchir avec son outil « Post Inspector ».

## Brancher un nom de domaine perso

1. Acheter le domaine chez un registraire (OVH, Gandi, Cloudflare…).
2. Dans GitHub : **Settings → Pages → Custom domain**, saisir le domaine puis **Save**
   (GitHub ajoute alors un fichier `CNAME` au dépôt).
3. Chez le registraire, créer les enregistrements DNS indiqués par la documentation GitHub Pages
   (« Managing a custom domain for your GitHub Pages site ») : des enregistrements `A` / `AAAA`
   vers les adresses de GitHub Pages pour le domaine nu, et un `CNAME` `www` → `thomas642.github.io`.
   Reprendre les adresses sur la documentation au moment de la configuration, elles peuvent évoluer.
4. Vérifier le domaine dans **Settings → Pages** du compte (protège contre la reprise du domaine),
   puis cocher **Enforce HTTPS** une fois le certificat émis.
5. Remplacer `https://thomas642.github.io/Portfolio/` par la nouvelle adresse dans les balises
   `canonical` et `og:*` des trois pages HTML.
