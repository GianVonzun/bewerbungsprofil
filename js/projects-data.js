/* ===================================================================
   PROJECTS DATA — geteilt zwischen index.html und pages/project.html
   Jedes Projekt: id, title, type, category, year, desc, emoji,
   gradient, techs[], (optional) link, detail{...}
   Screenshots: shots[] mit Dateinamen in images/projects/.
   Fehlt ein Bild, zeigt die Detailseite automatisch einen Platzhalter.
   =================================================================== */

const projects = [
  {
    id: 'hugosmp',
    title: 'HugoSMP – Gaming-Plattform',
    type: 'privat',
    category: 'Full-Stack Web-App',
    year: '2024',
    desc: 'Web-Plattform mit 15 Skill-Games, Login, In-Game-Währung und Minecraft-Bot – Echtzeit-Multiplayer über Socket.io.',
    emoji: '<i class="fas fa-gamepad"></i>',
    gradient: 'linear-gradient(135deg,#0d1a07,#1a2a07)',
    techs: ['Node.js', 'Express', 'Socket.io', 'MySQL', 'Mineflayer'],
    detail: {
      tagline: 'Eine komplette Gaming-Plattform mit Echtzeit-Multiplayer und Minecraft-Anbindung.',
      intro: 'HugoSMP ist mein bisher grösstes Eigenprojekt: eine vollständige Web-Plattform, auf der Spieler in 15 verschiedenen Skill-Games gegeneinander antreten. Vom Login über eine eigene In-Game-Währung bis zur Anbindung an einen Minecraft-Server habe ich die komplette Anwendung selbst entwickelt – Frontend, Backend und Datenbank.',
      features: [
        '15 Skill-Games (Schach, Battleship, Vier gewinnt, Wordle, Snake u. v. m.)',
        'Echtzeit-Multiplayer über WebSockets (Socket.io)',
        'Benutzerkonten mit JWT-Login',
        'Eigene In-Game-Währung mit Ein- und Auszahlungssystem',
        'Minecraft-Bot (Mineflayer) mit Microsoft-Authentifizierung',
        'Faire Gebührenlogik und Transaktionsverwaltung'
      ],
      learned: 'Ich habe gelernt, eine grössere Anwendung sauber in Frontend, Backend und Datenbank zu strukturieren und wie Echtzeit-Kommunikation über WebSockets funktioniert. Besonders der Minecraft-Bot mit echtem Login war eine spannende Herausforderung.',
      role: 'Alleinentwickler (Full-Stack)',
      status: 'Laufend',
      links: {},
      shots: []
    }
  },
  {
    id: 'moneto',
    title: 'Moneto – Taschengeld-Tracker',
    type: 'privat',
    category: 'Web-App',
    year: '2025',
    desc: 'App zur Verwaltung von Taschengeld und Abos mit KI-gestützter Bankanalyse – geplant als PWA.',
    emoji: '<i class="fas fa-wallet"></i>',
    gradient: 'linear-gradient(135deg,#07101a,#071a2a)',
    techs: ['React', 'Express', 'KI / AI', 'PWA'],
    detail: {
      tagline: 'Taschengeld, Ausgaben und Abos im Blick behalten – mit KI-Unterstützung.',
      intro: 'Moneto ist eine App, mit der vor allem Jugendliche ihre Finanzen im Griff behalten: Taschengeld und Ausgaben tracken, Abos verwalten und dank KI-gestützter Bankanalyse den Überblick bewahren. Das Frontend entwickle ich mit React, das Backend mit Express. Geplant ist eine Veröffentlichung als PWA und später in den App-Stores.',
      features: [
        'Übersicht über Einnahmen, Ausgaben und Sparziele',
        'Abo-Verwaltung mit Erinnerungen',
        'KI-gestützte Analyse von Bankdaten',
        'Saubere, mobile-first Oberfläche mit echter Icon-Library',
        'Geplant als installierbare PWA → Google Play → App Store'
      ],
      learned: 'Hier vertiefe ich React und das Zusammenspiel zwischen Frontend und einer eigenen API. Besonders spannend ist die Einbindung von KI zur Auswertung echter Bankdaten.',
      role: 'Alleinentwickler (Full-Stack)',
      status: 'In Entwicklung',
      links: {},
      shots: []
    }
  },
  {
    id: 'mailagent',
    title: 'MailAgent – KI Mail-Sortierung',
    type: 'privat',
    category: 'Desktop-App',
    year: '2025',
    desc: 'Electron-Desktop-App, die E-Mails per Cloud-KI automatisch in eigene Kategorien einsortiert.',
    emoji: '<i class="fas fa-envelope-open-text"></i>',
    gradient: 'linear-gradient(135deg,#1a0a2e,#0d0d1a)',
    techs: ['Electron', 'JavaScript', 'KI / AI', 'Gmail API'],
    detail: {
      tagline: 'Dein Postfach, automatisch sortiert – eine Desktop-App mit KI.',
      intro: 'MailAgent ist eine Desktop-Anwendung (Electron), die eingehende E-Mails mithilfe von Cloud-KI automatisch in selbst definierte Kategorien einsortiert. Den Anfang macht die Anbindung an Gmail. Die App richtet sich vor allem an junge Nutzerinnen und Nutzer (16–25), die ihr Postfach übersichtlich halten wollen.',
      features: [
        'Automatische Sortierung eingehender Mails per KI',
        'Frei definierbare Kategorien',
        'Gmail-Anbindung zum Start',
        'Plattformübergreifende Desktop-App (Electron)',
        'Fokus auf einfache, klare Bedienung'
      ],
      learned: 'Ich lerne, eine Desktop-App mit Web-Technologien zu bauen (Electron) und externe APIs (Gmail) sowie KI-Dienste sinnvoll zu kombinieren.',
      role: 'Alleinentwickler',
      status: 'In Entwicklung',
      links: {},
      shots: []
    }
  },
  {
    id: 'ace',
    title: 'ACE Clan – Vorstellungs-Website',
    type: 'privat',
    category: 'Web-Entwicklung',
    year: '2025',
    desc: 'Animierte Präsentations-Website für einen Gaming-Clan mit interaktiven Popups und Discord-Anbindung.',
    emoji: '<i class="fas fa-trophy"></i>',
    gradient: 'linear-gradient(135deg,#2a0712,#1a0720)',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Animationen'],
    detail: {
      tagline: 'Eine lebendige Präsentations-Website für einen Gaming-Clan.',
      intro: 'Für den ACE-Clan habe ich eine animierte Vorstellungs-Website gebaut: mit interaktiven Popups, Clan-Fakten und Discord-Anbindung in einem kräftigen, dunklen Design. Das Projekt ist reines HTML, CSS und JavaScript und zeigt meinen Fokus auf Animationen und ein stimmiges Gesamtbild.',
      features: [
        'Auffälliges dunkles Design mit viel Bewegung',
        'Interaktive Popups und Animationen',
        'Clan-Fakten und Mitglieder-Vorstellung',
        'Discord-Anbindung',
        'Komplett ohne Framework (Vanilla JavaScript)'
      ],
      learned: 'Hier konnte ich mich auf CSS-Animationen und interaktive Effekte konzentrieren und ein Design mit starkem Wiedererkennungswert umsetzen.',
      role: 'Alleinentwickler (Web)',
      status: 'Abgeschlossen',
      links: {},
      shots: []
    }
  },
  {
    id: 'eportfolio',
    title: 'E-Portfolio & Bewerbungsprofil',
    type: 'schule',
    category: 'Web-Entwicklung · IMS',
    year: '2026',
    desc: 'Dieses Online-Bewerbungsprofil – entwickelt im Rahmen von IDAF IV. Die Seite, die du gerade siehst.',
    emoji: '<i class="fas fa-globe"></i>',
    gradient: 'linear-gradient(135deg,#071a1a,#0a2a1a)',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    link: '#hero'
  }
];
