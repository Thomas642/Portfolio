# Portfolio — Thomas Jourda

Site vitrine statique (HTML/CSS/JS, sans framework ni build), pensé pour être publié gratuitement avec **GitHub Pages**.

## Structure

```
index.html          → la page du portfolio
assets/style.css    → le style (DA « étiquette de baie », thème clair/sombre automatique)
assets/main.js      → bouton « Copier » de l'adresse e-mail
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
