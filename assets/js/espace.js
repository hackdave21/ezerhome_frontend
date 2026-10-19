/**
 * Ezer Home - Espace personnel : coque commune et états
 *
 * 1) Onglets : <div data-layout="espace-tabs" data-onglet="ecoute"></div>
 * 2) États   :
 *    <div data-etat="espace-suivi" data-etat-panes
 *         data-chargement-titre="Chargement de votre suivi…"
 *         data-vide-titre="Mon écoute" data-vide-texte="…" data-vide-cta="Faire une demande" data-vide-href="demande-ecoute.html"
 *         data-erreur-titre="…" data-erreur-code="EZ-SUI-503">
 *      <div data-etat-pane="normal">…</div>
 *    </div>
 */
(function () {
  var B = document.currentScript.src.replace(/assets\/js\/espace\.js.*$/, '');

  var ONGLETS = [
    { id: 'ecoute', court: 'Écoute', long: 'Écoute', href: 'suivi-ecoute.html', badge: true },
    { id: 'formations', court: 'Formations', long: 'Formations', href: 'formations.html' },
    { id: 'coaching', court: 'Coaching', long: 'Coaching', href: 'coaching.html' },
    { id: 'profil', court: 'Profil', long: 'Profil et confidentialité', href: 'profil.html' }
  ];

  var BADGE = '<span class="ml-1.5 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-ezer-red text-white text-[11px] font-semibold">2<span class="sr-only"> messages non lus</span></span>';

  function shellEspace(onglet) {
    var bandeau =
      '<section class="bg-ezer-green-light">' +
        '<div class="max-w-[1200px] mx-auto px-4 lg:px-8 py-5 lg:py-6 flex flex-wrap items-end justify-between gap-3">' +
          '<div class="flex flex-col gap-1">' +
            '<p class="text-xs font-semibold uppercase tracking-wider text-ezer-green">Mon espace</p>' +
            '<h1 class="font-cooper font-normal text-2xl lg:text-[34px]">Bonjour, Afi</h1>' +
          '</div>' +
          '<a href="' + B + 'pages/auth/connexion.html" class="inline-flex items-center min-h-[44px] font-semibold text-ezer-green hover:underline">Se déconnecter</a>' +
        '</div>' +
      '</section>';

    var tabs = ONGLETS.map(function (t) {
      var on = t.id === onglet;
      return '<a href="' + B + 'pages/espace/' + t.href + '"' + (on ? ' aria-current="page"' : '') +
        ' class="flex-1 lg:flex-none flex items-center justify-center lg:justify-between gap-2 px-4 py-3.5 min-h-[52px] font-semibold text-[15px] lg:rounded-ezer ' +
        (on ? 'text-ezer-green bg-ezer-green-light shadow-ezer-nav lg:shadow-[inset_3px_0_0_#187d50]' : 'text-ezer-dark hover:bg-ezer-green-pale') + '">' +
        '<span class="inline-flex items-center">' + t.long + (t.badge ? BADGE : '') + '</span>' +
        '</a>';
    }).join('');

    return '' +
      bandeau +
      '<div class="max-w-[1200px] mx-auto px-4 lg:px-8">' +
        '<nav role="tablist" aria-label="Rubriques de mon espace" aria-orientation="horizontal" ' +
          'class="lg:flex lg:gap-12 -mx-4 px-4 lg:px-0 lg:pt-8 lg:pb-0 lg:flex-col overflow-x-auto border-b lg:border-0 border-ezer-green-border bg-white sticky top-0 lg:top-24 lg:bg-transparent z-40">' +
          tabs +
        '</nav>' +
      '</div>';
  }

  function etatChargement(titre, note) {
    var lignes = [[62, 34], [74, 26], [48, 40], [66, 30]].map(function (w) {
      return '<div class="flex items-center gap-3 py-2">' +
        '<span class="shrink-0 w-10 h-10 rounded-full bg-ezer-green-borderLight"></span>' +
        '<span class="flex-1 flex flex-col gap-1.5">' +
          '<span class="h-2.5 rounded-full bg-ezer-green-borderLight" style="width:' + w[0] + '%"></span>' +
          '<span class="h-2.5 rounded-full bg-ezer-green-borderLight" style="width:' + w[1] + '%"></span>' +
        '</span></div>';
    }).join('');

    return '<div role="status" aria-live="polite" aria-busy="true" class="flex flex-col gap-5">' +
      '<p class="flex items-center gap-3 font-semibold">' +
        '<svg aria-hidden="true" class="shrink-0 w-5 h-5 animate-spin text-ezer-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 3a9 9 0 1 0 9 9"></path></svg>' +
        (titre || 'Chargement…') +
      '</p>' +
      '<div class="flex flex-col">' + lignes + '</div>' +
      '<p class="text-sm text-ezer-muted">' + (note || 'Connexion lente ? Les informations s\'affichent dès qu\'elles arrivent. Rien n\'est perdu.') + '</p>' +
    '</div>';
  }

  function etatVide(box) {
    return '<div class="border border-dashed border-ezer-borderMuted rounded-ezer bg-ezer-green-pale p-6 lg:p-8 flex flex-col items-center text-center gap-3">' +
      '<span aria-hidden="true" class="w-12 h-12 rounded-full bg-ezer-green-light text-ezer-green inline-flex items-center justify-center">' +
        '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18v10H3z"></path><path d="M3 9l2.5-5h13L21 9"></path><path d="M12 14h.01"></path></svg>' +
      '</span>' +
      '<h3 class="font-cooper font-normal text-2xl">' + (box.getAttribute('data-vide-titre') || 'Rien à afficher') + '</h3>' +
      '<p class="text-ezer-muted max-w-[520px]">' + (box.getAttribute('data-vide-texte') || '') + '</p>' +
      (box.getAttribute('data-vide-cta')
        ? '<a href="' + B + 'pages/espace/' + box.getAttribute('data-vide-href') + '" class="mt-2 inline-flex items-center justify-center min-h-[48px] px-6 rounded-ezer bg-ezer-green text-white font-semibold hover:bg-ezer-green-dark transition-colors">' + box.getAttribute('data-vide-cta') + '</a>'
        : '') +
    '</div>';
  }

  function etatErreur(box) {
    return '<div role="alert" class="border-2 border-ezer-dark rounded-ezer p-5 lg:px-6 flex flex-col items-center text-center gap-3">' +
      '<span aria-hidden="true" class="w-12 h-12 rounded-full border-2 border-ezer-dark inline-flex items-center justify-center">' +
        '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6M12 16.5v.5"></path></svg>' +
      '</span>' +
      '<h3 class="font-cooper font-normal text-2xl">' + (box.getAttribute('data-erreur-titre') || 'Impossible d\'afficher pour le moment.') + '</h3>' +
      '<p class="text-ezer-muted max-w-[520px]">La connexion semble interrompue ou le service ne répond pas. Vos données sont en sécurité.</p>' +
      '<button type="button" data-etat-retry class="mt-1 inline-flex items-center justify-center min-h-[48px] px-6 rounded-ezer border-2 border-ezer-green bg-white text-ezer-green font-semibold hover:bg-ezer-green-light transition-colors">Réessayer</button>' +
      '<p class="text-sm text-ezer-muted">Si le problème continue, indiquez ce code au support : <strong class="font-semibold">' + (box.getAttribute('data-erreur-code') || 'EZ-503') + '</strong></p>' +
    '</div>';
  }

  function initEtats() {
    var boxes = document.querySelectorAll('[data-etat-panes]');
    boxes.forEach(function (box) {
      var id = box.getAttribute('data-etat');
      var normal = box.querySelector('[data-etat-pane="normal"]');

      var panes = document.createElement('div');
      panes.className = 'flex flex-col';
      panes.innerHTML =
        '<div data-etat-pane="chargement" class="hidden">' + etatChargement(box.getAttribute('data-chargement-titre'), box.getAttribute('data-chargement-note')) + '</div>' +
        '<div data-etat-pane="vide" class="hidden">' + etatVide(box) + '</div>' +
        '<div data-etat-pane="erreur" class="hidden">' + etatErreur(box) + '</div>';
      box.insertBefore(panes, normal);

      var switcher = document.querySelector('[data-etat-switcher="' + id + '"]');
      var courant = 'normal';

      function appliquer(etat) {
        courant = etat;
        box.querySelectorAll('[data-etat-pane]').forEach(function (p) {
          p.classList.toggle('hidden', p.getAttribute('data-etat-pane') !== etat);
        });
        if (switcher) {
          switcher.querySelectorAll('[data-etat-btn]').forEach(function (b) {
            var on = b.getAttribute('data-etat-btn') === etat;
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
            b.classList.toggle('bg-ezer-dark', on);
            b.classList.toggle('text-white', on);
            b.classList.toggle('bg-white', !on);
            b.classList.toggle('text-ezer-dark', !on);
            b.classList.toggle('border', !on);
            b.classList.toggle('border-ezer-borderMuted', !on);
          });
        }
      }

      box.addEventListener('click', function (ev) {
        if (ev.target.closest('[data-etat-retry]')) appliquer('chargement');
      });

      if (switcher) {
        switcher.querySelectorAll('[data-etat-btn]').forEach(function (b) {
          b.addEventListener('click', function () { appliquer(b.getAttribute('data-etat-btn')); });
        });
      }
      appliquer('normal');
    });
  }

  function mount() {
    document.querySelectorAll('[data-layout="espace-tabs"]').forEach(function (slot) {
      slot.outerHTML = shellEspace(slot.getAttribute('data-onglet') || '');
    });
    initEtats();
  }

  mount();
})();