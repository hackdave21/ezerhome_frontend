# Plan d'implémentation exhaustif — Ezer Home (Toutes les maquettes et variantes)

Ce plan intègre de manière exhaustive **l'intégralité des 144 archives et variantes** présentes dans le dossier `maquette`, classées par module et par état spécifique (normal, erreur, chargement, succès, mobile/ordinateur).

**Légende** : `[x]` = conversion Tailwind terminée et conforme à la maquette · `[~]` = page commencée mais incomplète (détail dans le rapport d'audit) · `[ ]` = non commencé.

---

## 0. Rapport d'audit + état après refonte (2026-10-19)

### 0.1 Socle technique mis en place

- [x] `assets/js/theme.js` — **thème Tailwind partagé** (`ezerTheme()`), remplace le bloc de configuration inline de chaque page
- [x] `assets/js/layout.js` — **en-tête, pied de page et pied de page mini** partagés, injectés via `<div data-layout="header" data-active="...">`, `<div data-layout="footer" data-sobre="1">` ou `<div data-layout="footer-mini">`. Contenu conforme à `EnTete.dc.html` / `PiedDePage.dc.html` (bandeau coordonnées, nav 7 entrées avec état actif, bouton « Faire un don », WhatsApp, menu mobile burger ; logo, adresse, 3 groupes de liens). Option `data-sobre="1"` pour masquer les liens commerciaux (espace, e-mails). Le pied de page mini est celui des écrans compte et commande.
- [x] `assets/js/main.js` — sélecteur d'états rendu générique (`data-state-target` / `data-state-pane` / `data-state-switcher` avec `data-active-class` et `data-idle-class`).
- [x] Les variantes mobile (390px) et ordinateur (1440px) des maquettes sont fusionnées en **une seule page responsive** (breakpoint `lg`). Les états (erreur / envoi / succès) sont accessibles via un sélecteur en haut de page plutôt que des fichiers séparés.

### 0.2 État des pages

| Page | Fichier | Verdict | Reste à faire |
|---|---|---|---|
| Portail global | `index.html` | **[x] FAIT** | Les 9 groupes du `PlanDuSite.dc.html` sont listés avec filtre Tous / Réalisés / À venir. |
| Accueil | `pages/site/accueil.html` | **[x] FAIT** | Aucun. |
| Écoute | `pages/site/ecoute.html` | **[x] FAIT** | Aucun. 5 étapes, charte, urgence, « Quand vous serez prêt(e) », FAQ, icônes SVG, pied de page sobre. |
| Formations (liste) | `pages/site/formations.html` | **[x] FAIT** | Aucun. 4 offres, filtres, compteur, état vide, « Comment s'inscrire ». |
| Assistance | `pages/assistance/demande.html` | **[x] FAIT** | Aucun. 6 champs, 6 radios type d'aide, consentement, 4 états avec validation et liens d'ancrage. |
| Dons | `pages/dons/don.html` | **[x] FAIT** | Aucun. 4 étapes, récapitulatif dynamique, encart sécurité, instructions de paiement, 4 états. |
| Connexion | `pages/auth/connexion.html` | **[x] FAIT** | Aucun. Libellés conformes, mdp oublié, afficher/masquer, connexion par code, état erreur. |
| Détail formation | `pages/site/formation-detail.html` | **[x] FAIT** | Aucun. |
| Coaching liste + détail | `pages/site/coaching.html`, `coaching-detail.html` | **[x] FAIT** | Aucun. |
| Tarifs | `pages/site/tarifs.html` | **[x] FAIT** | Aucun. |
| À propos | `pages/site/a-propos.html` | **[x] FAIT** | Aucun. |
| Notre équipe | `pages/site/equipe.html` | **[x] FAIT** | Aucun. |
| À quoi servent les dons | `pages/site/usage-dons.html` | **[x] FAIT** | Aucun. |
| Partenaires | `pages/site/partenaires.html` | **[x] FAIT** | Aucun. |
| Contact particulier / institutionnel | `pages/site/contact-particulier.html`, `contact-institutionnel.html` | **[x] FAIT** | Aucun. Un seul composant, deux variantes. |
| Pages légales | `pages/site/legal.html` | **[x] FAIT** | Aucun. 3 documents + sommaire. |
| Hors ligne / 404 | `pages/site/hors-ligne.html`, `404.html` | **[x] FAIT** | Aucun. |
| Menu mobile ouvert | `pages/site/menu-mobile.html` | **[x] FAIT** | Aucun. |

**Bilan : 36 pages réalisées.** Modules terminés : **Site public (17/17)**, **Assistance & dons (8/8)**, **Compte (12/12)**, **Tunnel de commande (6/6)**.

### 0.3 Liens locaux pointant vers des pages non encore créées (attendu)

`pages/espace/charte.html`, `pages/espace/formations.html`, `pages/espace/profil.html` — ces cibles sont prévues au plan et seront traitées ensuite (module Espace personnel).

### 0.4 Placeholders à compléter côté contenu

Restent des valeurs entre crochets à remplacer par les données réelles (elles sont présentes dans les maquettes) :
`[X] %` (répartition des dons), `[année]`, `[date]`, `[NUMÉRO]`, `[Quartier, rue]`, `[NOM Prénoms]`, `[poids]`, `[Partenaire 1..8]`, `[durée de conservation]`, `[paiements]`, et les 8 placesholders `[numéro de téléphone]`, `[contact@ezerhome.tg]`, `[00 00 00 00]`.

---

## 1. [x] Portail global & Navigation (`index.html`)
- [x] Lister l'ensemble du prototype avec les 9 groupes du `PlanDuSite.dc.html`, filtre Tous / Réalisés / À venir, lien « Ouvrir » vers chaque page existante.

---

## 2. Site public (`pages/site/`) — **MODULE COMPLET (17/17)**
- [x] **Accueil** (`accueil.html`)
- [x] **Menu mobile ouvert** (`menu-mobile.html`) — variante de l'en-tête partagé (`data-menu="ouvert"`)
- [x] **Écoute** (`ecoute.html`)
- [x] **Formations : liste des offres** (`formations.html`)
- [x] **Formation : détail d'une offre** (`formation-detail.html`) — aside d'inscription desktop + barre d'inscription mobile collante
- [x] **Coaching : liste des offres** (`coaching.html`) — 4 formules, filtre « encore disponibles »
- [x] **Coaching : détail d'une offre** (`coaching-detail.html`)
- [x] **Tarifs** (`tarifs.html`) — toujours gratuit / tableau des formations (desktop) + liste (mobile) / formules de coaching / comment payer
- [x] **À propos** (`a-propos.html`)
- [x] **Notre équipe** (`equipe.html`) — 3 instances, 11 membres
- [x] **À quoi servent les dons** (`usage-dons.html`)
- [x] **Partenaires** (`partenaires.html`) — 8 partenaires
- [x] **Contact : particulier** (`contact-particulier.html`) — sélecteur particulier / organisation
- [x] **Contact : donateur institutionnel** (`contact-institutionnel.html`) — même composant, variante organisationnel
- [x] **Pages légales** (`legal.html`) — 3 documents (mentions, confidentialité, CGU) avec sommaire sticky desktop et accordéon mobile
- [x] **Hors ligne** (`hors-ligne.html`) — page autonome sans en-tête ni pied de page
- [x] **Page introuvable (404)** (`404.html`)

---

## 3. Assistance matérielle & Dons (`pages/assistance/`, `pages/dons/`)
- **Assistance matérielle** :
  - [x] `assistance/demande.html` — les 4 états (formulaire / erreurs / envoi / confirmation) sont regroupés dans une seule page via le sélecteur d'états
- **Dons** :
  - [x] `dons/don.html` — les 4 états (formulaire / erreurs / envoi / instructions de paiement) sont regroupés dans une seule page via le sélecteur d'états

---

## 4. Authentification & Compte (`pages/auth/`) — **MODULE COMPLET (12/12 écrans)**
- [x] Inscription (`inscription.html`) — choix avec / sans mot de passe, affichage du mot de passe
- [x] Code OTP (`otp.html`) — **2 états** : code valide / code erroné (sélecteur en haut de page), compte à rebours
- [x] Code OTP en erreur → état 2 de `otp.html`
- [x] Lien magique envoyé (`lien-magique.html`)
- [x] Connexion (`connexion.html`) — 2 états : connexion / connexion en erreur
- [x] Connexion en erreur → état 2 de `connexion.html`
- [x] Mot de passe oublié (`mdp-oublie.html`)
- [x] Nouveau mot de passe (`nouveau-mdp.html`) — règles de validité
- [x] Double authentification : code (`2fa-code.html`)
- [x] Double authentification : activation (`2fa-activation.html`) — QR code + clé + copie
- [x] Codes de secours (`2fa-secours.html`) — 8 codes, bouton Terminer bloqué tant que la case n'est pas cochée
- [x] Compte désactivé (`compte-desactive.html`)

---

## 6. Tunnel de Commande & Inscription Payante (`pages/commande/`) — **MODULE COMPLET (6/6)**
- [x] Récapitulatif (`commande/recapitulatif.html`) — fil d'étapes, montant, participant, CTA désactivé sans CGU
- [x] Choix du moyen de paiement (`commande/paiement.html`) — 3 moyens, bloc conditionnel (numéro / adresse du siège)
- [x] En attente du bureau (`commande/attente.html`) — référence, étapes de paiement, numéro à copier, timeline 4 étapes, signalement du paiement
- [x] Accès débloqué (`commande/debloque.html`)
- [x] Échec du paiement (`commande/echec.html`) — raisons fréquentes + dépôt de preuve
- [x] Réservation expirée (`commande/expiree.html`)

---

## 5. Espace Personnel Bénéficiaire (`pages/espace/`)
- [ ] Écoute : demande d'accompagnement (`espace/demande-ecoute.html`)
- [ ] Écoute : suivi de la demande (`espace/suivi-ecoute.html`) — mobile & ordinateur
- [ ] Charte éthique : signature bloquante (`espace/charte.html`) — mobile & ordinateur
- [ ] Messagerie sécurisée (`espace/messagerie.html`) — mobile & ordinateur
- [ ] Messagerie : état chargement (`espace/messagerie-chargement.html`)
- [ ] Formformations suivies (`espace/formations.html`) — mobile & ordinateur
- [ ] Formations : état vide (`espace/formations-vide.html`)
- [ ] Coaching suivi (`espace/coaching.html`)
- [ ] Profil et confidentialité (`espace/profil.html`) — mobile & ordinateur

---

## 6. Tunnel de Commande & Inscription Payante (`pages/commande/`)
- [ ] Récapitulatif (`commande/recapitulatif.html`) — mobile & ordinateur
- [ ] Choix du moyen de paiement (`commande/paiement.html`)
- [ ] En attente de confirmation du bureau (`commande/attente.html`) — mobile & ordinateur
- [ ] Accès débloqué / Succès (`commande/debloque.html`) — mobile & ordinateur
- [ ] Échec du paiement (`commande/echec.html`)
- [ ] Réservation expirée (`commande/expiree.html`)

---

## 7. Thérapeutes, Coachs & Intervenants (`pages/intervenant/`)
- [ ] Candidature intervenant (formulaire) (`intervenant/candidature.html`) — mobile & ordinateur
- [ ] Candidature en attente / envoyée (`intervenant/candidature-attente.html`)
- [ ] Espace intervenant : tableau de bord (`intervenant/dashboard.html`)
- [ ] Fiche consultant (`intervenant/fiche-consultant.html`)
- [ ] Programmer une réunion (`intervenant/programmer-reunion.html`)
- [ ] Agenda (`intervenant/agenda.html`) — mobile & ordinateur
- [ ] Agenda vide (`intervenant/agenda-vide.html`)
- [ ] Notes de réunion (`intervenant/notes.html`)
- [ ] Terminer la note / Confirmation (`intervenant/notes-confirmation.html`)
- [ ] Note verrouillée (`intervenant/notes-verrouillee.html`)
- [ ] Messagerie (`intervenant/messagerie.html`) — mobile & ordinateur
- [ ] Mes offres (`intervenant/offres.html`)
- [ ] Liste des inscrits (`intervenant/inscrits.html`) — mobile & ordinateur

---

## 8. Comité d'Assistance Matérielle (`pages/comite/`)
- [ ] Liste des demandes (`comite/demandes.html`) — mobile & ordinateur
- [ ] Fiche d'une demande (`comite/fiche-demande.html`) — mobile & ordinateur
- [ ] Changement de statut (`comite/changement-statut.html`) — mobile & ordinateur
- [ ] Photos d'actions sur le terrain (`comite/photos.html`) — mobile & ordinateur
- [ ] Aucun résultat / Erreur de chargement (`comite/erreur-vide.html`) — mobile & ordinateur

---

## 9. Panneau d'Administration (`pages/admin/`)
- [ ] Tableau de bord (`admin/dashboard.html`) — mobile & ordinateur
- [ ] Demandes d'écoute et affectation (`admin/affectation-ecoute.html`) — mobile & ordinateur
- [ ] Candidatures intervenants (`admin/candidatures.html`)
- [ ] Gestion des utilisateurs (`admin/utilisateurs.html`)
- [ ] Suivi des réunions (`admin/reunions.html`)
- [ ] Lecture d'une note clôturée (`admin/note-cloturee.html`) — mobile & ordinateur
- [ ] Paiements et rapprochement (`admin/paiements.html`) — mobile & ordinateur
- [ ] Paiements : état chargement (`admin/paiements-chargement.html`)
- [ ] Dons et reçus (`admin/dons.html`)
- [ ] Médiathèque (`admin/mediatheque.html`)
- [ ] Médiathèque vide (`admin/mediatheque-vide.html`)
- [ ] Médiathèque : suppression bloquée (`admin/mediatheque-bloquee.html`)
- [ ] Organigramme (`admin/organigramme.html`)
- [ ] Partenaires (`admin/partenaires.html`)
- [ ] CMS : pages et contenus (`admin/cms-pages.html`)
- [ ] CMS : charte versionnée (`admin/cms-charte.html`)
- [ ] Modèles de notifications (`admin/notifications.html`)
- [ ] Paramètres (`admin/parametres.html`)
- [ ] Journal d'audit (`admin/audit.html`)
- [ ] Journal d'audit : erreur (`admin/audit-erreur.html`)

---

## 10. E-mails, SMS & Référence (`pages/emails/`, `pages/messages/`, `pages/composants/`)
- **E-mails transactionnels HTML** :
  - [ ] Vérification de compte (`emails/verification-compte.html`)
  - [ ] Vérification (téléphone) (`emails/verification- telephone.html`)
  - [ ] Réunion programmée (`emails/reunion-programmee.html`)
  - [ ] Réunion modifiée (`emails/reunion-modifiee.html`)
  - [ ] Réunion annulée (`emails/reunion-annulee.html`)
  - [ ] Rappel de réunion (`emails/rappel-reunion.html`)
  - [ ] Rappel (téléphone) (`emails/rappel-telephone.html`)
  - [ ] Statut d'assistance (`emails/statut-assistance.html`)
  - [ ] Reçu de don (`emails/recu-don.html`)
  - [ ] Préavis de désactivation (`emails/preavis-desactivation.html`)
- **Formats courts** :
  - [ ] SMS et WhatsApp (`messages/formats-courts.html`)
- **Design System** :
  - [ ] Composants et états de référence (`composants/composants.html`)
