/**
 * Ezer Home - PrÃ©visualisation des e-mails transactionnels
 *
 * Usage dans une page :
 *   <div data-ezer-mail="reunion-programmee" data-ezer-mail-format="ordinateur"></div>
 *   <div data-ezer-mail-nav data-ezer-mail-nav-actif="reunion-programmee"></div>
 *   <script src="../../assets/js/emails.js"></script>
 *
 * Format : "ordinateur" (gabarit 680 px) ou "mobile" (tÃ©lÃ©phone, 375 px)
 * Gabarit conforme Ã  MessageModele.dc.html (maquette).
 */
(function () {
  var B = document.currentScript.src.replace(/assets\/js\/emails\.js.*$/, '');

  var LOGO = '<a href="https://ezerhome.tg" style="display: inline-block; text-decoration: none"><svg role="img" aria-label="Ezer Home" width="118" height="60" viewBox="478 283 396 200"><path fill="#22b573" d="M580.01,354.37c-1.770-1.430-3.290-3.310-5.220-4.680-6.480-4.610-14.990-5.460-22.390-2.620-12.180,4.670-13.860,15.930-18.820,26.430-6.980,14.750-19.800,33.890-34.080,42.270-12.650,7.430-15.510-3.350-11.060-13.550,7.070-16.210,25.400-25.080,39.080-34.780.61-.43,2.770-1.820,3.050-2.280.18-.3.38-.69-.09-.76-.8-.12-3.450,1.090-4.360,1.470-7.310,3.040-14.390,6.950-21.680,9.920-4.620,1.880-10.840,4.100-15.220.58-3.470-2.790-3.520-7.050-1.120-10.600,6.170-9.110,25.900-7.470,35.550-7.360,1.880.02,4.540.2,6.330,0,1.450-.16,1.760-.99.12-1.290-10.050-1.820-21.740-.66-31.480-3.280-7.370-1.990-16.010-9.040-11.890-17.550,4.330-8.940,17.480-1.150,23.320,1.960,8.630,4.610,16.870,9.970,25.660,14.260,1.490-.52-1.240-2.370-1.910-2.920-8.920-7.380-18.680-13.650-28.180-20.230s-24.070-17.720-21.260-30.880,17.490-8.710,24.980-2.950c12.330,9.490,23.710,28.060,31.500,41.530,1.070,1.850,2.470,5.280,3.720,6.760.16.19.29.36.56.38,1.170,0,.14-2.230-.08-2.850-2.410-6.900-7.060-15.120-10.850-21.420-2.940-4.890-11.110-15.690-11.130-20.990-.04-10.500,14.730-10.920,20.640-4.990,9.560,9.600,8.780,32.730,10.480,45.410.09.67.19,2.340,1.080,2.260.57-.05.59-.85.6-1.260.07-2.670-.53-5.910-.68-8.650-.6-10.990-.71-23.020,6.180-32.240,4.740-6.340,12.770-9.940,20.690-9.430,12.270.79,8.700,12.400,4.820,19.810-3.640,6.960-8.490,13.310-12.640,19.970-1.750,2.820-4.640,7.160-5.540,10.260-.66,2.260.07,2.380,1.350.69,6.220-8.200,11.380-16.780,18.070-24.850,6.750-8.150,20.670-23.440,31.370-25.020,3.660-.54,9.440.44,9.220,5.230s-8.080,12.580-11.480,15.800c-10.100,9.570-21.130,18.250-31.280,27.780-1.470,2.020-4.640,3.920-5.990,5.820-.96,1.360.24,1.560,1.150.65,13.410-10.680,27.210-20.840,40.920-31.110,11.660-8.730,24.290-19.900,38.610-23.770,11.430-3.100,19.930-1.820,21.460,11.480,2.720,23.690-21.100,31.270-39.590,35.600-17.960,4.210-37.500,3.870-54.120,12.250-2.570,1.300-4.980,3.080-7.640,4.100-.24-.11-.54-.19-.74-.36Z"></path><path fill="#a67c52" d="M553.18,411.31c-.37-1.570-1.290-2.840-1.610-4.460-.93-4.640,1.150-7.270,5.940-5.940,5.580,1.550,11.650,7.990,13.890,13.230,5.010,11.730-2.490,23.310-6.080,34.180-.38,1.150-.83,2.580-.91,3.750,1.070-1.870,2.170-3.750,3.170-5.650,2.470-4.730,4.730-9.730,6.280-14.850,1.280-4.210,1.970-8.640,3.800-12.670,2.660-5.850,8.260-11.420,13.740-14.710,3.610-2.170,11.760-5.840,10.620,1.970-.29,1.980-1.580,3.410-2.050,5.100-.23.83.89-.01,1.120-.22,3.760-3.420,3.650-12.810,6.540-17.580,3.490-5.780,12.010-9.030,14.030-.29,2.060,8.880-3.030,18.780-9.320,24.800-7.220,6.910-16.610,9.300-24.930,14.330s-17.010,12.990-21.030,21.560c-1.460,3.110-2.700,6.950-1.630,10.350.47-1.060.61-2.190,1.050-3.270,1.010-2.490,3.900-6.440,6.930-6.210,1.960.15,6.260,1.810,8.320,2.500,8.080,2.690,15.970,5.940,24.030,8.650l-6.870-3.690c-5.120-2.350-10.080-5.010-15.140-7.490-2.240-1.090-5.910-2.370-7.820-3.660-1.450-.97.18-2.220.97-3.140,2.610-3.030,6.200-6.220,9.550-8.420.64-.42,2.270-1.590,2.920-1.550l16.400,17.630c-.15-.45-.45-.97-.7-1.380-2.700-4.560-5.800-8.890-8.520-13.440-.55-.92-2.280-3.340-1.840-4.310.42-.92,4.380-1.670,5.320-1.490.28.05.43.19.59.41,6.720,11.280,13.680,23.480,22.370,33.360,1.740,1.970,3.740,3.750,5.400,5.730.06.76-1.690,1.150-2.320,1.340-9.780,2.950-24.260,2.400-34.510,2.070-8.350-.27-22.550-.31-27.440-8.320s-.02-18.830-.59-27.690c-.71-11.040-13.200-15.790-20.710-21.710-9.560-7.520-14.600-17.680-11.190-29.970,1.520-5.480,6.200-12.250,11.680-5.960,5.980,6.870,2.770,17.390,7.930,24.670.65.92,1.540,2.050,2.630,2.440Z"></path><path fill="#c1272d" d="M607.72,385.27c-8.860,7.010-18.580,12.010-26.520,20.390-.49.52-3.080,3.710-3.360,3.790-.3.090-.56.080-.8-.13-.37-.34-1.510-2.730-1.940-3.380-3.660-5.580-8.990-10.300-14.200-14.420-3.800-3-8.070-5.580-11.490-9.040-7.950-8.030-9.480-20.180.19-27.560,10-7.620,22.370-2.790,28.660,6.940.42.64,1.750,3.550,2.280,3.550.24,0,.28-.12.39-.28.77-1.040,1.410-2.620,2.220-3.770,7.580-10.850,23.300-14.600,31.710-2.500,7.150,10.290,1.310,19.720-7.140,26.410Z"></path><text x="636.39" y="401.87" font-family="\'Cooper Black\', Georgia, serif" font-size="66" fill="#22b573" textLength="204" lengthAdjust="spacingAndGlyphs">EZER</text><text x="636.39" y="459.77" font-family="\'Cooper Black\', Georgia, serif" font-size="66" fill="#22b573" textLength="227" lengthAdjust="spacingAndGlyphs">HOME</text><text x="641.17" y="473.54" font-family="\'Poppins\', sans-serif" font-weight="600" font-size="8.4" fill="#a67c52" textLength="228" lengthAdjust="spacing">ACCOMPAGNEMENT - ASSISTANCE - FORMATION</text></svg></a>';

  var S = {
    ordinateur: { largeur: '680px', pad: '24px 40px', cellPad: '28px 40px', piedPad: '24px 40px', h1: '28px', h1lh: '34px', btnMax: '320px' },
    mobile: { largeur: '375px', pad: '12px', cellPad: '20px 18px', piedPad: '20px 18px', h1: '24px', h1lh: '30px', btnMax: '100%' }
  };

  var ESPACE = 'Vous recevez ce message car vous avez un compte Ezer Home.';
  var RDV = 'https://ezerhome.tg/espace/rdv/K7P2';

  var BASE = {
    code: '', statut: '', aCode: false, aStatut: false, aDetails: false,
    aBouton: true, aNote: true, salut: 'Bonjour Afi,', raison: ESPACE, details: null
  };

  var M = {
    'verification': {
      objet: 'Votre code de vÃ©rification Ezer Home', apercu: 'Saisissez ce code pour activer votre compte.',
      titre: 'Confirmez votre adresse', intro: 'Vous venez de crÃ©er votre compte. Saisissez ce code sur la page de vÃ©rification, ou utilisez le bouton ci-dessous.',
      aCode: true, code: '482 913', bouton: 'Confirmer mon adresse', lien: 'https://ezerhome.tg/verifier/â—â—â—â—', lienTexte: 'https://ezerhome.tg/verifier/â—â—â—â—',
      note: "Vous n'Ãªtes pas Ã  l'origine de cette inscription ? Ignorez ce message : aucun compte ne sera activÃ©.", salut: 'Bonjour,'
    },
    'reunion-programmee': {
      objet: 'Rendez-vous confirmÃ© le mardi 20 octobre', apercu: 'Retrouvez le lien de connexion dans votre espace.',
      titre: 'Votre rendez-vous est confirmÃ©', intro: 'Un rendez-vous a Ã©tÃ© programmÃ© pour vous. Vous pouvez le retrouver Ã  tout moment dans votre espace.',
      aDetails: true,
      details: [
        { l: 'Date', v: 'Mardi 20 octobre 2026' },
        { l: 'Heure', v: '10 h 00 â€“ 11 h 00 (heure de LomÃ©)' },
        { l: 'Format', v: 'En ligne' }
      ],
      bouton: 'Voir mon rendez-vous', lien: RDV, lienTexte: RDV,
      note: "Le bouton de connexion Ã  la rÃ©union s'active 15 minutes avant le dÃ©but. Un empÃªchement ? Vous pouvez demander Ã  dÃ©placer le rendez-vous depuis votre espace."
    },
    'reunion-modifiee': {
      objet: 'Votre rendez-vous a Ã©tÃ© dÃ©placÃ©', apercu: 'Nouvelle date : jeudi 22 octobre Ã  15 h 00.',
      titre: 'Votre rendez-vous a changÃ©', intro: 'La date de votre rendez-vous a Ã©tÃ© modifiÃ©e. Voici les nouvelles informations.',
      aDetails: true,
      details: [
        { l: 'Nouvelle date', v: 'Jeudi 22 octobre 2026', avant: 'Mardi 20 octobre 2026' },
        { l: 'Nouvelle heure', v: '15 h 00 â€“ 16 h 00', avant: '10 h 00 â€“ 11 h 00' },
        { l: 'Format', v: 'En ligne' }
      ],
      bouton: 'Voir mon rendez-vous', lien: RDV, lienTexte: RDV,
      note: "Cette nouvelle date ne vous convient pas ? Proposez-en une autre depuis votre espace, sans avoir Ã  vous justifier."
    },
    'reunion-annulee': {
      objet: 'Votre rendez-vous du 20 octobre est annulÃ©', apercu: 'Vous pouvez choisir un nouveau crÃ©neau.',
      titre: 'Rendez-vous annulÃ©', intro: "Votre rendez-vous du mardi 20 octobre Ã  10 h 00 n'aura pas lieu. Nous en sommes dÃ©solÃ©s. Votre accompagnement continue : un nouveau crÃ©neau peut Ãªtre fixÃ© rapidement.",
      bouton: 'Choisir un nouveau crÃ©neau', lien: RDV, lienTexte: RDV,
      note: "Si vous avez besoin de parler avant, Ã©crivez-nous depuis la messagerie de votre espace."
    },
    'rappel': {
      objet: 'Rappel : rendez-vous demain Ã  10 h 00', apercu: 'Le lien de connexion sera actif 15 minutes avant.',
      titre: 'Ã€ demain', intro: 'Petit rappel de votre rendez-vous.',
      aDetails: true,
      details: [
        { l: 'Date', v: 'Demain, mardi 20 octobre' },
        { l: 'Heure', v: '10 h 00 (heure de LomÃ©)' },
        { l: 'Format', v: 'En ligne' }
      ],
      bouton: 'Ouvrir mon rendez-vous', lien: RDV, lienTexte: RDV,
      note: "Conseil : installez-vous dans un endroit calme, avec une connexion stable. Si le rÃ©seau coupe, revenez simplement sur le lien."
    },
    'assistance': {
      objet: 'Votre demande ASS-2026-00042 a Ã©tÃ© mise Ã  jour', apercu: 'Consultez le suivi de votre demande.',
      titre: 'Votre demande avance', intro: "Le comitÃ© d'assistance a examinÃ© votre demande. Le dÃ©tail de la dÃ©cision est disponible sur la page de suivi.",
      aStatut: true, statut: 'En examen',
      bouton: 'Suivre ma demande', lien: 'https://ezerhome.tg/assistance/suivi', lienTexte: 'https://ezerhome.tg/assistance/suivi',
      note: 'Munissez-vous de votre numÃ©ro de demande ASS-2026-00042 et du numÃ©ro de tÃ©lÃ©phone indiquÃ© lors du dÃ©pÃ´t.',
      raison: "Vous recevez ce message car vous avez dÃ©posÃ© une demande d'assistance.", salut: 'Bonjour,'
    },
    'recu-don': {
      objet: 'Merci pour votre don â€“ reÃ§u REC-2026-0117', apercu: 'Votre reÃ§u est joint Ã  ce message.',
      titre: 'Merci pour votre don', intro: 'Votre gÃ©nÃ©rositÃ© aide directement les familles accompagnÃ©es par Ezer Home. Votre reÃ§u est joint Ã  ce message au format PDF.',
      aDetails: true,
      details: [
        { l: 'Montant', v: '10 000 F CFA' },
        { l: 'Date', v: '13 octobre 2026' },
        { l: 'ReÃ§u', v: 'REC-2026-0117 (PDF joint)' }
      ],
      bouton: 'TÃ©lÃ©charger le reÃ§u', lien: 'https://ezerhome.tg/recu/â—â—â—â—', lienTexte: 'https://ezerhome.tg/recu/â—â—â—â—',
      note: "Pour savoir Ã  quoi servent les dons, consultez la page dÃ©diÃ©e sur notre site. Une question sur ce reÃ§u ? RÃ©pondez via la page Contact en indiquant son numÃ©ro.",
      raison: 'Vous recevez ce message car vous avez fait un don Ã  Ezer Home.', salut: 'Bonjour,'
    },
    'desactivation': {
      objet: 'Votre compte Ezer Home sera dÃ©sactivÃ© le 12 novembre', apercu: 'Connectez-vous pour le garder actif.',
      titre: 'Votre compte va Ãªtre dÃ©sactivÃ©', intro: "Nous n'avons pas eu de nouvelles depuis 12 mois. Pour protÃ©ger vos donnÃ©es, votre compte sera dÃ©sactivÃ© le 12 novembre 2026, puis vos donnÃ©es seront supprimÃ©es selon notre politique de conservation.",
      bouton: 'Garder mon compte', lien: 'https://ezerhome.tg/connexion', lienTexte: 'https://ezerhome.tg/connexion',
      note: "Il suffit de vous connecter une fois avant cette date. Vous ne souhaitez plus utiliser Ezer Home ? Vous n'avez rien Ã  faire."
    }
  };

  var NAVMAIL = [
    ['verification-compte', 'VÃ©rification de compte', 'pages/emails/verification-compte.html'],
    ['verification-telephone', 'VÃ©rification (tÃ©lÃ©phone)', 'pages/emails/verification-telephone.html'],
    ['reunion-programmee', 'RÃ©union programmÃ©e', 'pages/emails/reunion-programmee.html'],
    ['reunion-modifiee', 'RÃ©union modifiÃ©e', 'pages/emails/reunion-modifiee.html'],
    ['reunion-annulee', 'RÃ©union annulÃ©e', 'pages/emails/reunion-annulee.html'],
    ['rappel-reunion', 'Rappel de rÃ©union', 'pages/emails/rappel-reunion.html'],
    ['rappel-telephone', 'Rappel (tÃ©lÃ©phone)', 'pages/emails/rappel-telephone.html'],
    ['statut-assistance', "Statut d'assistance", 'pages/emails/statut-assistance.html'],
    ['recu-don', 'ReÃ§u de don', 'pages/emails/recu-don.html'],
    ['preavis-desactivation', 'PrÃ©avis de dÃ©sactivation', 'pages/emails/preavis-desactivation.html'],
    ['formats-courts', 'SMS et WhatsApp', 'pages/messages/formats-courts.html'],
    ['composants', 'Composants de rÃ©fÃ©rence', 'pages/composants/composants.html']
  ];

  function bandLine(cle, valeur, muted) {
    return '<div style="display: flex; flex-wrap: wrap; gap: 4px 12px"><span style="color: #5b6656">' + cle + '</span><span style="' + (muted ? 'color: #5b6656' : 'font-weight: 600') + '">' + valeur + '</span></div>';
  }

  function tableDetails(m) {
    var trs = [];
    for (var i = 0; i < m.details.length; i++) {
      var d = m.details[i];
      var avant = d.avant
        ? '<br><span style="font-weight: 400; color: #5b6656; text-decoration: line-through">' + d.avant + '</span>'
        : '';
      var top = i === 0 ? '' : 'border-top: 1px solid #d3e6db; ';
      trs.push(
        '<tr><td style="padding: 12px 16px; ' + (i === 0 ? 'width: 38%; ' : '') + 'color: #5b6656; vertical-align: top; ' + top + '">' + d.l +
        '</td><td style="padding: 12px 16px; font-weight: 600; ' + top + '">' + d.v + avant + '</td></tr>'
      );
    }
    return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; border: 1px solid #c8dccf; border-radius: 12px; font-size: 15px; line-height: 22px">' + trs.join('') + '</table>';
  }

  function corps(m, s) {
    var html =
      '<h1 style="margin: 0; font-family: \'Cooper Black\', Georgia, serif; font-weight: 400; font-size: ' + s.h1 + '; line-height: ' + s.h1lh + '; color: #0e1c03">' + m.titre + '</h1>' +
      '<p style="margin: 0">' + m.salut + '</p>' +
      '<p style="margin: 0">' + m.intro + '</p>';

    if (m.aCode) {
      html += '<div style="display: flex; flex-direction: column; gap: 6px; padding: 16px; border-radius: 12px; background: #e9f7f0; text-align: center">' +
        '<span style="font-size: 14px; line-height: 20px; color: #5b6656">Votre code de vÃ©rification</span>' +
        '<span style="font-size: 32px; line-height: 40px; font-weight: 600; letter-spacing: 0.2em; font-variant-numeric: tabular-nums">' + m.code + '</span>' +
        '<span style="font-size: 14px; line-height: 20px; color: #5b6656">Valable 10 minutes</span></div>';
    }

    if (m.aStatut) {
      html += '<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; padding: 16px; border-radius: 12px; background: #e9f7f0">' +
        '<span style="font-size: 14px; color: #5b6656">Nouveau statut</span>' +
        '<span style="display: inline-flex; align-items: center; min-height: 28px; padding: 0 12px; border-radius: 12px; border: 2px solid #a67c52; background: #ffffff; font-size: 14px; font-weight: 600; color: #0e1c03">' + m.statut + '</span></div>';
    }

    if (m.aDetails) {
      html += tableDetails(m);
    }

    if (m.aBouton) {
      html += '<div style="display: flex; flex-direction: column; gap: 8px">' +
        '<a href="' + m.lien + '" style="display: block; box-sizing: border-box; max-width: ' + s.btnMax + '; min-height: 52px; padding: 14px 24px; border-radius: 12px; background: #187d50; color: #ffffff; font-weight: 600; font-size: 16px; line-height: 24px; text-align: center; text-decoration: none">' + m.bouton + '</a>' +
        '<span style="font-size: 13px; line-height: 18px; color: #5b6656">Le bouton ne fonctionne pas ? Copiez ce lien : <span style="color: #0e1c03; word-break: break-all">' + m.lienTexte + '</span></span></div>';
    }

    if (m.aNote) {
      html += '<p style="margin: 0; font-size: 15px; line-height: 22px; color: #5b6656">' + m.note + '</p>';
    }

    html += '<p style="margin: 0">Avec toute notre attention,<br>L\'Ã©quipe Ezer Home</p>';

    html += '<div style="display: flex; gap: 10px; align-items: flex-start; padding: 12px 14px; border: 1px dashed #6f8577; border-radius: 12px; font-size: 13px; line-height: 18px; color: #5b6656">' +
      '<svg aria-hidden="true" style="flex: 0 0 auto; margin-top: 1px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0e1c03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg>' +
      '<span>Ezer Home ne vous demandera jamais votre mot de passe ou un code par tÃ©lÃ©phone, SMS ou WhatsApp. Ce message ne contient aucune information sur votre suivi : les dÃ©tails restent dans votre espace sÃ©curisÃ©.</span></div>';

    return html;
  }

  function renderMail(modele, format) {
    var s = S[format] || S.ordinateur;
    var m = Object.assign({}, BASE, M[modele] || M['verification']);

    var bandeau =
      '<div style="box-sizing: border-box; padding: 12px 16px; border: 1px solid #c8dccf; border-radius: 12px; background: #ffffff; display: flex; flex-direction: column; gap: 2px; font-size: 13px; line-height: 18px">' +
        bandLine('De', 'Ezer Home &lt;notifications@ezerhome.tg&gt;') +
        bandLine('Objet', m.objet) +
        bandLine('AperÃ§u', m.apercu, true) +
      '</div>';

    var table =
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: separate; border-spacing: 0; background: #ffffff; border: 1px solid #c8dccf; border-radius: 12px">' +
        '<tr><td style="padding: ' + s.cellPad + '; border-bottom: 2px solid #a67c52">' + LOGO + '</td></tr>' +
        '<tr><td style="padding: ' + s.cellPad + '"><div style="display: flex; flex-direction: column; gap: 20px">' + corps(m, s) + '</div></td></tr>' +
        '<tr><td style="padding: ' + s.piedPad + '; background: #0e1c03; border-radius: 0 0 11px 11px; color: #ffffff; font-size: 13px; line-height: 20px">' +
          '<div style="display: flex; flex-direction: column; gap: 8px">' +
            '<span style="font-family: \'Cooper Black\', Georgia, serif; font-size: 18px; line-height: 24px; color: #22b573">Ezer Home</span>' +
            '<span>[Quartier, rue], LomÃ©, Togo</span>' +
            '<span>+228 [00 00 00 00] Â· <a href="https://wa.me/22800000000" style="color: #ffffff">WhatsApp</a> Â· <a href="mailto:contact@ezerhome.tg" style="color: #ffffff">[contact@ezerhome.tg]</a></span>' +
            '<span style="color: #c8dccf">' + m.raison + '</span>' +
            '<span><a href="https://ezerhome.tg/confidentialite" style="color: #ffffff">ConfidentialitÃ©</a> Â· <a href="https://ezerhome.tg/espace/profil#notifications" style="color: #ffffff">PrÃ©fÃ©rences de notification</a> Â· <a href="https://ezerhome.tg/contact" style="color: #ffffff">Nous Ã©crire</a></span>' +
          '</div>' +
        '</td></tr>' +
      '</table>';

    return '<div style="width: ' + s.largeur + '; max-width: 100%; margin: 0 auto; box-sizing: border-box; padding: ' + s.pad + '; background: #f6faf8; font-family: \'Poppins\', system-ui, sans-serif; color: #0e1c03; font-size: 16px; line-height: 24px; display: flex; flex-direction: column; gap: 16px">' +
      bandeau + table + '</div>';
  }

  function renderNav(actif, excluComposants) {
    var items = NAVMAIL.filter(function (n) { return !(excluComposants && n[2].indexOf('emails') === -1); }).map(function (n) {
      var on = n[0] === actif;
      return '<a href="' + B + n[2] + '"' + (on ? ' aria-current="true"' : '') +
        ' class="px-3 py-1.5 rounded-ezer text-xs font-semibold ' +
        (on ? 'bg-ezer-dark text-white' : 'bg-white text-ezer-dark border border-ezer-borderMuted hover:bg-ezer-green-light') + '">' + n[1] + '</a>';
    }).join('');
    return '<div class="flex flex-wrap items-center gap-2" role="group" aria-label="ModÃ¨les de messages">' + items + '</div>';
  }

  document.querySelectorAll('[data-ezer-mail]').forEach(function (slot) {
    slot.outerHTML = renderMail(slot.getAttribute('data-ezer-mail'), slot.getAttribute('data-ezer-mail-format') || 'ordinateur');
  });

  document.querySelectorAll('[data-ezer-mail-nav]').forEach(function (slot) {
    var ctx = document.body.querySelector('[data-ezer-mail]');
    var actif = slot.getAttribute('data-ezer-mail-nav-actif') || (ctx && ctx.getAttribute('data-ezer-mail'));
    slot.outerHTML = renderNav(actif, !ctx);
  });
})();


