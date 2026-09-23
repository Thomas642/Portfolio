# Portfolio — Thomas Jourda

Site vitrine statique (HTML/CSS/JS, sans framework ni build), pensé pour être publié gratuitement avec **GitHub Pages**.

## Structure

```
index.html          → la page du portfolio
assets/style.css    → le style (DA « console de supervision »)
assets/main.js      → petites animations (frappe clavier, apparition au scroll)
profile/README.md   → README de profil GitHub, à copier dans le dépôt thomas642/thomas642
```

## Publier le site avec GitHub Pages

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

Rechercher `LIEN_A_COMPLETER` et `EMAIL_A_COMPLETER` dans `index.html` et `profile/README.md` et les remplacer par :

- l'URL LinkedIn ;
- l'adresse e-mail de contact ;
- l'URL de chaque dépôt projet.

## Tester en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```
