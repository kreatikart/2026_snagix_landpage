# Snagix — Landing Page (`2026_snagix_landpage`)

Landing page officielle, légère et directe de **Snagix** (Windows 10/11 & macOS), conçue en **thème Clair** avec la couleur signature **Snagix Tomato (`#FF6347`)** et une présentation en défilement vertical **« Problème quotidien vs Résolu par Snagix »**.

---

## 🔗 Personnaliser les liens de téléchargement

Tous les liens de téléchargement sont centralisés dans un seul fichier :
👉 **`src/config/releaseConfig.ts`**

Deux modes sont supportés simultanément :
1. **Automatique via le dépôt public GitHub Releases (`kreatikart/2026_snagix_releases`)** :
   - Détecte automatiquement le système du visiteur (**Windows** ou **macOS**).
   - Utilise les redirections permanentes `/releases/latest/download/Snagix-Setup.exe` (et `.dmg` / `.zip`) combinées à l'API `https://api.github.com/repos/kreatikart/2026_snagix_releases/releases/latest` pour pointer systématiquement vers la toute dernière release publiée, sans afficher de numéro de version figé.
2. **Surcharge manuelle par URL directe (`customUrls` ou variables `.env`)** :
   - Renseignez directement `customUrls.winSetup`, `customUrls.winPortable`, `customUrls.macDmg` ou `customUrls.macZip` dans `src/config/releaseConfig.ts` (ou via `VITE_WIN_SETUP_URL`, etc.) si vous hébergez les exécutables sur un autre domaine ou dépôt.

---

## 🖼️ Images annotées de l'application (`public/screenshots/`)

Les captures d'écran affichées dans le défilement vertical se trouvent dans `public/screenshots/` :
- `01-passthrough-menu.png` : Mode Écran Libéré (`Ctrl + Espace`) avec menu déroulant et infobulle ouverts en direct
- `02-multisnap-workflow.png` : Empilement Multi-Snap (`Touche E`) de 3 étapes distinctes (`#1`, `#2`, `#3`) et fusion Côte-à-côte
- `03-editable-annotations.png` : Annotations chirurgicales rééditables (`Outil V`), étapes numérotées et masquage de secrets (`B`)

---

## 🚀 Commandes

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (http://localhost:5180)
npm run dev

# Générer le build statique de production dans dist/
npm run build
```
