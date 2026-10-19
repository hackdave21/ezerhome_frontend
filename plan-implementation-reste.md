# Plan d'implémentation exhaustif — Ezer Home (Toutes les maquettes et variantes)

Ce plan intègre de manière exhaustive **l'intégralité des 144 archives et variantes** présentes dans le dossier `maquette`, classées par module et par état spécifique (normal, erreur, chargement, succès, mobile/ordinateur).

**Légende** : `[x]` = conversion Tailwind terminée et conforme à la maquette · `[~]` = page commencée mais incomplète (détail dans le rapport d'audit) · `[ ]` = non commencé.

---

## 0. Rapport d'audit + état après refonte (2026-10-19)

### 0.1 Socle technique mis en place

- [x] `assets/js/layout.js` — **en-tête et pied de page partagés**, injectés via `<div data-layout="header" data-active="...">` et `<div data-layout="footer" data-sobre="1">`. Contenu conforme à `EnTete.dc.html` / `PiedDePage.dc.html` (bandeau coordonnées, nav 7 entrées avec état actif, bouton « Faire un don », WhatsApp, menu mobile burger ; logo, adresse, 3 groupes de liens). Option `data-sobre="1"` pour masquer les liens commerciaux (espace, e-mails).
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

**Note :** `formation-detail.html` est référencé par `formations.html` mais pas encore créé (prochaine étape).

---

## 1. [x] Portail global & Navigation (`index.html`)
- [x] Lister l'ensemble du prototype avec les 9 groupes du `PlanDuSite.dc.html`, filtre Tous / Réalisés / À venir, lien « Ouvrir » vers chaque page existante.

---

## 2. Site public (`pages/site/`)
- [x] **Accueil** (`accueil.html`) — mobile + ordinateur
- [ ] **Menu mobile ouvert** (`menu-mobile.html`) — la variante « menu ouvert » existe dans l'en-tête partagé ; il reste une page dédiée à plannedirectement
- [x] **Écoute** (`ecoute.html`) — mobile + ordinateur
- [x] **Formations : liste des offres** (`formations.html`) — mobile + ordinateur
- [ ] **Formation : détail d'une offre** (`formation-detail.html`) — **prochaine étape** (déjà référencé par `formations.html`)
- [ ] **Coaching : liste des offres** (`coaching.html`) — mobile & ordinateur
- [ ] **Coaching : détail d'une offre** (`coaching-detail.html`) — mobile & ordinateur
- [ ] **Tarifs** (`tarifs.html`) — mobile & ordinateur
- [ ] **À propos** (`a-propos.html`) — mobile & ordinateur
- [ ] **Notre équipe** (`equipe.html`) — mobile & ordinateur
- [ ] **À quoi servent les dons** (`usage-dons.html`) — mobile & ordinateur
- [ ] **Partenaires** (`partenaires.html`) — mobile & ordinateur
- [ ] **Contact : particulier** (`contact-particulier.html`) — mobile & ordinateur
- [ ] **Contact : donateur institutionnel** (`contact-institutionnel.html`) — mobile & ordinateur
- [ ] **Pages légales** (Mentions légales, Confidentialité, CGU) (`legal.html`) — mobile & ordinateur
- [ ] **Hors ligne** (`hors-ligne.html`) — mobile & ordinateur
- [ ] **Page introuvable (404)** (`404.html`) — mobile & ordinateur

---

## 3. Assistance matérielle & Dons (`pages/assistance/`, `pages/dons/`)
- **Assistance matérielle** :
  - [x] `assistance/demande.html` — les 4 états (formulaire / erreurs / envoi / confirmation) sont regroupés dans une seule page via le sélecteur d'états
- **Dons** :
  - [x] `dons/don.html` — les 4 états (formulaire / erreurs / envoi / instructions de paiement) sont regroupés dans une seule page via le sélecteur d'états

---

## 4. Authentification & Compte (`pages/auth/`)
- [ ] Inscription (`inscription.html`) — mobile & ordinateur
- [ ] Code OTP (`otp.html`) — mobile & ordinateur
- [ ] Code OTP en erreur (`otp-erreur.html`) — mobile & ordinateur
- [ ] Lien magique envoyé (`lien-magique.html`) — mobile & ordinateur
- [~] Connexion (`connexion.html`) — écran conforme + état « connexion en erreur » ; reste l'état 2FA etc. dans les pages ci-dessous
- [ ] Mot de passe oublié (`mdp-oublie.html`) — prochaine étape
- [ ] Inscription (`inscription.html`) — prochaine étape
- [ ] Code OTP (`otp.html`) — prochaine étape
- [ ] Nouveau mot de passe / Réinitialisation (`nouveau-mdp.html`) — prochaine étape
- [ ] Double authentification (2FA) : code (`2fa-code.html`), activation (`2fa-activation.html`, QR + clé), codes de secours (`2fa-secours.html`)
- [ ] Code OTP en erreur (`otp-erreur.html`)
- [ ] Lien magique envoyé (`lien-magique.html`)
- [ ] Compte désactivé (`compte-desactive.html`)

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
