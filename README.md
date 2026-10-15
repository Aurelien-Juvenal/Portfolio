# Portfolio — thème "Blueprint"

Portfolio Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

Concept visuel : le développeur comme un ingénieur qui dessine ses systèmes —
fond quadrillé façon papier calque, cartouches et feuilles numérotées comme
sur un vrai jeu de plans techniques, schéma d'architecture qui se dessine à
l'ouverture de la page, curseur en repère de coordonnées.

## Installation

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Personnaliser le contenu

Tout le contenu texte (nom, rôle, résumé, compétences, projets, liens) se
trouve dans **`lib/data.ts`** — c'est le seul fichier à modifier pour
remplacer les informations d'exemple par les vôtres.

- `profile` : nom, rôle, ville, accroche, résumé, e-mail, réseaux
- `skills` : liste des compétences (code, nom, détail)
- `projects` : liste des projets (titre, année, stack, description, lien)

## Structure

```
app/
  layout.tsx      → polices (Space Grotesk / IBM Plex Sans / IBM Plex Mono) + metadata
  page.tsx         → assemblage des sections
  globals.css       → styles globaux, accessibilité (focus visible, reduced motion)
components/
  Hero.tsx          → section d'accueil + schéma SVG animé
  About.tsx         → à propos + statistiques
  Skills.tsx        → grille de compétences
  Projects.tsx      → feuilles de projets numérotées
  Contact.tsx        → contact + cachet
  Header.tsx         → navigation fixe
  GridBackground.tsx → fond quadrillé
  CoordinateCursor.tsx → curseur repère de coordonnées (désactivé sur mobile
                          et si "réduire les animations" est activé)
  SheetHeader.tsx    → cartouche réutilisé en tête de section
lib/data.ts          → tout le contenu texte
```

## Déploiement

Le plus simple : [Vercel](https://vercel.com) — connectez le dépôt Git et
déployez en un clic (le créateur de Next.js). Sinon, `npm run build && npm run start`
fonctionne sur n'importe quel hébergeur Node.

## Accessibilité

- Focus clavier visible partout (outline orange sur les liens/boutons).
- `prefers-reduced-motion` respecté : les animations sont désactivées si
  l'utilisateur l'a demandé dans son système.
- Contraste vérifié entre le texte (`#E9EDF3`) et le fond (`#0A2540`).
