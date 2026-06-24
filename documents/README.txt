DOCUMENTS-ORDNER — Bewerbungsunterlagen (passwortgeschützt)
============================================================

Lege deine PDFs hier mit GENAU diesen Dateinamen ab, dann werden sie
automatisch im Documents-Bereich der Website zum Download angezeigt:

  bewerbungsschreiben.pdf   -> Motivations-/Bewerbungsschreiben  [von Claude erstellt]
  lebenslauf.pdf            -> Lebenslauf / CV                  [von Claude erstellt]
  skills-chart.pdf          -> ICT Skills Chart (Vorlage 4a)    [von Claude erstellt]
  zeugnisse.pdf             -> Schulzeugnisse                   [DU: noch ablegen]
  modulnoten.pdf            -> Modulnotenübersicht              [DU: noch ablegen]

WICHTIG nach dem Ablegen einer Datei:
  In index.html im Array "documents" beim jeweiligen Eintrag
  "available: false"  auf  "available: true"  ändern.
  Erst dann erscheint der Download-Button statt "Folgt in Kürze".

Passwort ändern:
  In index.html die Zeile  const DOC_PASSWORD = 'bewerbung2026';
  auf dein Wunschpasswort anpassen.
