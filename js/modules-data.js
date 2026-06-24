/* ===================================================================
   MODULES DATA — shared between index.html and pages/module.html
   ---------------------------------------------------------------
   Each module has:
     number, title, desc, icon, iconClass, category, status, tags,
     topics[], tools[]
   Extra detail info (long description, learning goals, assessment,
   duration, linked projects) lives in the `detail` object.
   =================================================================== */

const modules = [
  {
    number: 'M106',
    title: 'Datenbanken abfragen und bearbeiten',
    desc: 'Grundlagen relationaler Datenbanken mit Fokus auf SQL-Abfragen.',
    icon: '<i class="fas fa-database"></i>', iconClass: 'icon-cyan', category: 'datenbanken', status: 'done',
    tags: ['SQL', 'Datenbanken', 'Abfragen'],
    topics: [
      'SELECT, INSERT, UPDATE, DELETE',
      'JOINs (INNER, LEFT, RIGHT, FULL)',
      'Aggregatfunktionen (SUM, COUNT, AVG)',
      'Subqueries und Views',
      'Normalisierung (1NF – 3NF)'
    ],
    tools: ['MySQL', 'MariaDB', 'phpMyAdmin', 'SQL Workbench'],
    detail: {
      intro: 'In diesem Modul lernte ich die Grundlagen relationaler Datenbanken und das Arbeiten mit SQL. Ziel war es, Datenbanken sicher abzufragen und gezielt zu verändern.',
      goals: [
        'Einfache und komplexe SELECT-Abfragen schreiben',
        'Daten einfügen, aktualisieren und löschen',
        'Mehrere Tabellen über JOINs verknüpfen',
        'Daten mit Aggregatfunktionen auswerten',
        'Tabellen bis zur 3. Normalform modellieren'
      ],
      assessment: 'LB1 (Theorie, 40%) + LB2 (Praxis-SQL, 60%)',
      duration: '40 Lektionen',
      projects: ['Webshop-Datenbank', 'Bibliotheksverwaltung'],
      reflection: 'Ich habe gemerkt, wie mächtig JOINs sind, sobald man sie einmal versteht. Die Normalisierung war anfangs abstrakt, wurde aber durch konkrete Beispiele greifbar.'
    }
  },
  {
    number: 'M114',
    title: 'Codierung, Komprimierung & Verschlüsselung',
    desc: 'Grundlagen der Datendarstellung, Komprimierungsverfahren und kryptografische Methoden.',
    icon: '<i class="fas fa-lock"></i>', iconClass: 'icon-pink', category: 'it-grundlagen', status: 'done',
    tags: ['Kryptografie', 'Binär', 'Komprimierung'],
    topics: [
      'Binär-, Dezimal-, Hexadezimalsystem',
      'ASCII und Unicode (UTF-8)',
      'Huffman-Codierung',
      'Symmetrische und asymmetrische Verschlüsselung',
      'RSA und AES Grundprinzipien'
    ],
    tools: ['Python', 'OpenSSL', 'CyberChef'],
    detail: {
      intro: 'Wie werden Daten binär dargestellt, wie werden sie komprimiert und wie schützt man sie vor fremden Blicken? Dieses Modul gibt die Antworten.',
      goals: [
        'Zahlen zwischen Binär, Dezimal und Hex konvertieren',
        'Zeichen in ASCII / UTF-8 codieren',
        'Huffman-Bäume aufbauen und decodieren',
        'Vor- und Nachteile symmetrischer/asymmetrischer Verfahren erklären',
        'Eigene kleine Verschlüsselungstools in Python schreiben'
      ],
      assessment: 'Theorietest + Praxisarbeit (Caesar- & Vigenère-Cipher)',
      duration: '40 Lektionen',
      projects: ['Huffman-Compressor in Python', 'RSA-Demo-Tool'],
      reflection: 'Kryptografie fühlt sich wie Magie an — bis man die Mathematik dahinter sieht. Besonders RSA mit den grossen Primzahlen war ein Aha-Moment.'
    }
  },
  {
    number: 'M117',
    title: 'Informatik und Gesellschaft',
    desc: 'Rechtliche, ethische und gesellschaftliche Aspekte der Informatik.',
    icon: '<i class="fas fa-scale-balanced"></i>', iconClass: 'icon-yellow', category: 'it-grundlagen', status: 'done',
    tags: ['Recht', 'Datenschutz', 'Ethik'],
    topics: [
      'Datenschutzgesetz (DSG) und DSGVO',
      'Urheberrecht und Lizenzen',
      'IT-Sicherheit und Cyberkriminalität',
      'Gesellschaftliche Auswirkungen von KI',
      'Digitale Ethik'
    ],
    tools: ['Recherche', 'Präsentationen', 'Fallstudien'],
    detail: {
      intro: 'Technik ist nie neutral. Dieses Modul betrachtet, wie Informatik Gesellschaft, Recht und Ethik beeinflusst — und umgekehrt.',
      goals: [
        'DSG/DSGVO-Grundsätze anwenden',
        'Lizenzmodelle (MIT, GPL, proprietär) unterscheiden',
        'Risiken und Schutzmassnahmen gegen Cyberangriffe benennen',
        'Ethische Fragen zu KI und Überwachung diskutieren',
        'Eine Fallstudie strukturiert präsentieren'
      ],
      assessment: 'Gruppenreferat + schriftliche Einzelarbeit',
      duration: '40 Lektionen',
      projects: ['Fallstudie: Gesichtserkennung', 'DSGVO-Audit einer Schul-App'],
      reflection: 'Das Modul hat mir gezeigt, dass gute Entwickler nicht nur Code schreiben, sondern auch Verantwortung übernehmen müssen.'
    }
  },
  {
    number: 'M122',
    title: 'Abläufe mit Scriptsprache automatisieren',
    desc: 'Automatisierung von Aufgaben und Prozessen mit Skriptsprachen.',
    icon: '<i class="fas fa-gears"></i>', iconClass: 'icon-green', category: 'programmierung', status: 'done',
    tags: ['Python', 'Bash', 'Automatisierung'],
    topics: [
      'Variablen, Kontrollstrukturen, Schleifen',
      'Funktionen und Module',
      'Dateioperationen (lesen/schreiben)',
      'Reguläre Ausdrücke',
      'Automatisierung mit cron/Task Scheduler'
    ],
    tools: ['Python 3', 'Bash/Shell', 'VS Code', 'Git'],
    detail: {
      intro: 'Repetitive Aufgaben macht der Computer schneller. Dieses Modul vermittelt, wie man mit Python und Bash Workflows automatisiert.',
      goals: [
        'Ein Script mit Parametern und Fehlerbehandlung schreiben',
        'Dateien und Verzeichnisse programmatisch verwalten',
        'Textdaten mit Regex extrahieren und transformieren',
        'Skripte zeitgesteuert ausführen (cron/Task Scheduler)',
        'Ein kleines CLI-Tool für ein reales Problem bauen'
      ],
      assessment: 'Praxisarbeit: Eigenes Automations-Script',
      duration: '40 Lektionen',
      projects: ['Log-Parser in Python', 'Backup-Script mit cron'],
      reflection: 'Nichts ist befriedigender, als einen 2-Stunden-Handgriff in ein 5-Sekunden-Script zu verwandeln.'
    }
  },
  {
    number: 'M162',
    title: 'Datenbanken modellieren und implementieren',
    desc: 'Konzeptuelle und physische Datenbankmodellierung mit ERD.',
    icon: '<i class="fas fa-ruler-combined"></i>', iconClass: 'icon-purple', category: 'datenbanken', status: 'done',
    tags: ['ERD', 'Datenbankdesign', 'Normalisierung'],
    topics: [
      'Entity-Relationship-Diagramme (ERD)',
      'Kardinalitäten (1:1, 1:N, M:N)',
      'Normalisierung bis 3. Normalform',
      'Primär- und Fremdschlüssel',
      'Implementierung mit SQL DDL'
    ],
    tools: ['MySQL Workbench', 'draw.io', 'MariaDB', 'phpMyAdmin'],
    detail: {
      intro: 'Bevor man Daten abfragt, muss man sie strukturieren. Dieses Modul übt das Modellieren realistischer Datenbanken vom ERD bis zur fertigen SQL-Implementation.',
      goals: [
        'Ein ERD aus einer Anforderung ableiten',
        'Kardinalitäten korrekt bestimmen',
        'Das Modell bis zur 3. Normalform überführen',
        'Aus dem logischen Modell sauberes SQL-DDL generieren',
        'Integritätsbedingungen (PK/FK/UNIQUE) setzen'
      ],
      assessment: 'ERD-Modellierung + Implementation in MySQL',
      duration: '40 Lektionen',
      projects: ['DB für ein Reservationssystem', 'Sportvereins-DB mit M:N-Beziehungen'],
      reflection: 'Ein gutes Datenmodell erspart später Hunderte Zeilen Workaround-Code.'
    }
  },
  {
    number: 'M164',
    title: 'Datenbanken abfragen und manipulieren',
    desc: 'Erweiterte SQL-Kenntnisse: Stored Procedures, Trigger und Transaktionen.',
    icon: '<i class="fas fa-magnifying-glass"></i>', iconClass: 'icon-cyan', category: 'datenbanken', status: 'active',
    tags: ['SQL', 'Trigger', 'Stored Procedures'],
    topics: [
      'Komplexe JOINs und Unterabfragen',
      'Stored Procedures und Functions',
      'Trigger und Events',
      'Transaktionen (ACID)',
      'Indizes und Performance-Optimierung'
    ],
    tools: ['MySQL', 'MariaDB', 'SQL Workbench', 'DBeaver'],
    detail: {
      intro: 'Die Fortsetzung von M106: hier geht es darum, wie man Logik direkt in die Datenbank verlagert und wie man mit grossen Datenmengen performant arbeitet.',
      goals: [
        'Stored Procedures mit Parametern schreiben',
        'Trigger für Audit-Logs implementieren',
        'Transaktionen mit ROLLBACK/COMMIT absichern',
        'Indizes gezielt zur Performance-Steigerung einsetzen',
        'Query-Pläne mit EXPLAIN analysieren'
      ],
      assessment: 'Praxis: SP/Trigger/Transaktionen in realer DB',
      duration: '40 Lektionen',
      projects: ['Audit-Trigger für HugoSMP-DB', 'Stored Procedures für Reporting'],
      reflection: 'Stored Procedures verschieben Komplexität — manchmal nützlich, manchmal gefährlich. Wichtig ist, zu wissen, wann welcher Weg passt.'
    }
  },
  {
    number: 'M165',
    title: 'NoSQL-Datenbanken einsetzen',
    desc: 'Nicht-relationale Datenbanksysteme verstehen und anwenden.',
    icon: '<i class="fas fa-leaf"></i>', iconClass: 'icon-green', category: 'datenbanken', status: 'active',
    tags: ['MongoDB', 'NoSQL', 'JSON'],
    topics: [
      'Unterschied SQL vs. NoSQL',
      'Dokumentenorientierte Datenbanken',
      'CRUD-Operationen mit MongoDB',
      'Aggregation Pipeline',
      'Key-Value Stores (Redis Grundlagen)'
    ],
    tools: ['MongoDB', 'MongoDB Compass', 'Redis', 'Mongoose'],
    detail: {
      intro: 'Nicht jedes Problem ist relational. In diesem Modul lerne ich, wann dokumentenbasierte und Key-Value-Datenbanken die bessere Wahl sind.',
      goals: [
        'Document-Stores vs. Relationale Modelle abwägen',
        'MongoDB-Collections mit komplexen Dokumenten verwalten',
        'Aggregation-Pipelines schreiben',
        'Redis als Cache einsetzen',
        'Datenkonsistenz-Strategien (CAP-Theorem) verstehen'
      ],
      assessment: 'Modellierung + Umsetzung mit MongoDB',
      duration: '40 Lektionen',
      projects: ['Blog-Backend mit MongoDB', 'Redis-Cache vor MySQL'],
      reflection: 'Die Denkweise ist komplett anders: Redundanz ist plötzlich erwünscht, statt vermieden.'
    }
  },
  {
    number: 'M187',
    title: 'Dienste mit IKT-Mitteln unterstützen',
    desc: 'Bereitstellung und Verwaltung von IT-Diensten und Infrastruktur.',
    icon: '<i class="fas fa-server"></i>', iconClass: 'icon-orange', category: 'it-grundlagen', status: 'done',
    tags: ['Server', 'Netzwerk', 'Dienste'],
    topics: [
      'Client-Server-Architektur',
      'DNS, DHCP, HTTP/HTTPS',
      'Webserver (Apache, Nginx)',
      'Virtualisierung Grundlagen',
      'Monitoring und Logging'
    ],
    tools: ['Linux', 'Apache', 'Nginx', 'VirtualBox'],
    detail: {
      intro: 'Was passiert, wenn man eine URL im Browser eingibt? Dieses Modul erklärt die Infrastruktur zwischen Client und Server — und wie man sie selbst aufsetzt.',
      goals: [
        'Einen Linux-Server grundlegend administrieren',
        'Apache/Nginx konfigurieren (VHosts, SSL)',
        'DNS-, DHCP- und HTTP-Abläufe erklären',
        'VMs mit VirtualBox aufsetzen',
        'Logs analysieren und Monitoring einrichten'
      ],
      assessment: 'Praxis: Eigener Webserver mit HTTPS',
      duration: '40 Lektionen',
      projects: ['LAMP-Stack auf Ubuntu', 'Reverse-Proxy mit Nginx'],
      reflection: 'Alles davor war abstrakt — erst jetzt verstehe ich, WIE eine Webseite tatsächlich ausgeliefert wird.'
    }
  },
  {
    number: 'M216',
    title: 'Applikation mit Framework entwickeln',
    desc: 'Entwicklung von Webanwendungen mit modernen Frameworks.',
    icon: '<i class="fas fa-atom"></i>', iconClass: 'icon-purple', category: 'web', status: 'active',
    tags: ['Framework', 'MVC', 'Web-App'],
    topics: [
      'MVC / MVVM Architekturmuster',
      'Laravel (PHP) oder Django (Python)',
      'Routing, Controller, Views',
      'Datenbankintegration mit ORM',
      'REST-API Entwicklung'
    ],
    tools: ['Laravel', 'PHP', 'Composer', 'Artisan', 'Blade'],
    detail: {
      intro: 'Vanilla PHP/JS reicht für kleine Projekte — für grössere Apps braucht es Struktur. Frameworks liefern diese.',
      goals: [
        'MVC-Trennung sauber umsetzen',
        'Routen, Controller, Middleware definieren',
        'ORM (Eloquent) nutzen statt rohem SQL',
        'REST-APIs designen und dokumentieren',
        'Authentication & Authorization einbauen'
      ],
      assessment: 'Abschlussprojekt: Komplette CRUD-App mit Auth',
      duration: '40 Lektionen',
      projects: ['Laravel-Blog mit Auth', 'REST-API für Task-Manager'],
      reflection: 'Frameworks fühlen sich anfangs einengend an, aber nach einer Weile schätzt man die Produktivität sehr.'
    }
  },
  {
    number: 'M231',
    title: 'User Interfaces implementieren',
    desc: 'Gestaltung und Entwicklung benutzerfreundlicher Oberflächen.',
    icon: '<i class="fas fa-palette"></i>', iconClass: 'icon-pink', category: 'web', status: 'done',
    tags: ['UI/UX', 'HTML', 'CSS', 'Figma'],
    topics: [
      'UX-Grundlagen und Usability',
      'Wireframing und Prototyping',
      'HTML5 semantisch korrekt einsetzen',
      'CSS3: Flexbox, Grid, Animationen',
      'Responsive Design (Mobile First)'
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Bootstrap'],
    detail: {
      intro: 'Gutes Design ist unsichtbar. Dieses Modul übt, Interfaces zu bauen, die sich „einfach richtig" anfühlen.',
      goals: [
        'Nutzer-Flows mit Wireframes planen',
        'Prototyp in Figma erstellen',
        'Semantisches HTML schreiben (a11y-konform)',
        'Layouts mit Flexbox und Grid bauen',
        'Mobile-First & Responsive denken'
      ],
      assessment: 'Figma-Prototyp + Umsetzung in HTML/CSS',
      duration: '40 Lektionen',
      projects: ['Landing-Page-Redesign', 'Dashboard-UI'],
      reflection: 'Nach diesem Modul habe ich das Auge für Details: Spacing, Kontrast, Konsistenz.'
    }
  },
  {
    number: 'M254',
    title: 'Geschäftsprozesse im Berufsumfeld',
    desc: 'Analyse und Dokumentation von betrieblichen Abläufen.',
    icon: '<i class="fas fa-chart-column"></i>', iconClass: 'icon-yellow', category: 'it-grundlagen', status: 'done',
    tags: ['Prozesse', 'BPMN', 'Dokumentation'],
    topics: [
      'Geschäftsprozessmodellierung (BPMN)',
      'Ist- und Soll-Analyse',
      'Swimlane-Diagramme',
      'Projektmanagement-Grundlagen',
      'Anforderungsanalyse'
    ],
    tools: ['Lucidchart', 'draw.io', 'Confluence', 'BPMN.io'],
    detail: {
      intro: 'Bevor man Software baut, muss man Prozesse verstehen. Dieses Modul bringt die Sprache und die Werkzeuge dazu bei.',
      goals: [
        'Ist-Prozesse aufnehmen und dokumentieren',
        'BPMN 2.0 lesen und selbst zeichnen',
        'Swimlanes zur Rollenverteilung einsetzen',
        'Schwachstellen im Prozess identifizieren',
        'Soll-Prozesse mit klaren KPIs entwerfen'
      ],
      assessment: 'Analyse eines realen Prozesses + BPMN-Dokumentation',
      duration: '40 Lektionen',
      projects: ['Bestellprozess eines KMU modelliert', 'Helpdesk-Workflow'],
      reflection: 'Viele IT-Projekte scheitern nicht an der Technik, sondern am Missverstehen des Prozesses.'
    }
  },
  {
    number: 'M293',
    title: 'Webauftritt erstellen und publizieren',
    desc: 'Entwicklung und Veröffentlichung einer vollständigen Website.',
    icon: '<i class="fas fa-globe"></i>', iconClass: 'icon-cyan', category: 'web', status: 'done',
    tags: ['HTML', 'CSS', 'Deployment'],
    topics: [
      'HTML-Grundstruktur und Semantik',
      'CSS-Styling und Layouts',
      'JavaScript DOM-Manipulation',
      'FTP und Webhosting',
      'SEO-Grundlagen'
    ],
    tools: ['VS Code', 'HTML5', 'CSS3', 'JavaScript', 'FileZilla'],
    detail: {
      intro: 'Das erste Mal eigenen Code im Netz sehen — ein Meilenstein. Dieses Modul führt vom leeren Editor bis zur live erreichbaren Website.',
      goals: [
        'HTML-Struktur semantisch aufbauen',
        'CSS-Layouts responsiv gestalten',
        'JavaScript für Interaktivität nutzen',
        'Eine Domain mit FTP deployen',
        'SEO-Grundlagen (Meta-Tags, sitemap) anwenden'
      ],
      assessment: 'Live-Webseite + Doku',
      duration: '40 Lektionen',
      projects: ['Persönliche Portfolio-Webseite', 'Vereinsauftritt'],
      reflection: 'Mein erster grosser Aha-Moment: "Das da draussen im Internet — das kann ich selbst machen."'
    }
  },
  {
    number: 'M319',
    title: 'Applikationen entwickeln (OOP-Grundlagen)',
    desc: 'Einstieg in die objektorientierte Programmierung mit einer modernen Sprache.',
    icon: '<i class="fab fa-python"></i>', iconClass: 'icon-green', category: 'programmierung', status: 'done',
    tags: ['OOP', 'Python', 'Algorithmen'],
    topics: [
      'Variablen, Datentypen, Operatoren',
      'Kontrollstrukturen und Schleifen',
      'Funktionen und Rekursion',
      'Klassen, Objekte, Vererbung',
      'Fehlerbehandlung (Try/Except)'
    ],
    tools: ['Python 3', 'PyCharm', 'VS Code', 'Jupyter Notebook'],
    detail: {
      intro: 'Der Einstieg in „richtiges" Programmieren: Klassen, Objekte, Vererbung — und der Moment, wo man plötzlich in Strukturen denkt.',
      goals: [
        'Python-Syntax beherrschen',
        'Kontrollstrukturen und Schleifen anwenden',
        'Funktionen mit Parametern/Rückgabewerten schreiben',
        'Klassen mit Attributen und Methoden bauen',
        'Rekursive Probleme lösen'
      ],
      assessment: 'Praxis: Eigenes kleines OOP-Programm',
      duration: '60 Lektionen',
      projects: ['Bank-Konten-Simulation', 'Turm von Hanoi'],
      reflection: 'Das Modul, in dem der Groschen fiel. Alles davor war Syntax, hier wurde es echtes Programmieren.'
    }
  },
  {
    number: 'M320',
    title: 'Objektorientiert programmieren (OOP)',
    desc: 'Vertiefung der objektorientierten Programmierung und Entwurfsmuster.',
    icon: '<i class="fas fa-puzzle-piece"></i>', iconClass: 'icon-purple', category: 'programmierung', status: 'active',
    tags: ['OOP', 'Java', 'Design Patterns'],
    topics: [
      'Klassen, Interfaces, abstrakte Klassen',
      'Polymorphismus und Kapselung',
      'Design Patterns (Singleton, Factory, Observer)',
      'UML-Klassendiagramme',
      'Unit Testing'
    ],
    tools: ['Java', 'IntelliJ IDEA', 'JUnit', 'UML'],
    detail: {
      intro: 'Fortsetzung von M319: hier geht es um die „grosse" OOP — Interfaces, Entwurfsmuster und saubere Architektur in Java.',
      goals: [
        'Interfaces vs. abstrakte Klassen unterscheiden',
        'Polymorphismus gezielt nutzen',
        'Gängige Design Patterns erkennen und anwenden',
        'UML-Diagramme lesen und selbst zeichnen',
        'Tests mit JUnit schreiben'
      ],
      assessment: 'UML-Design + Implementation + Testsuite',
      duration: '60 Lektionen',
      projects: ['Library-System mit Observer-Pattern', 'Game-Loop mit Factory'],
      reflection: 'Design Patterns sind wie Rezepte — man muss sie einmal gekocht haben, um zu wissen, wann sie passen.'
    }
  },
  {
    number: 'M322',
    title: 'Applikationen testen',
    desc: 'Systematisches Testen von Software nach anerkannten Methoden.',
    icon: '<i class="fas fa-flask"></i>', iconClass: 'icon-orange', category: 'programmierung', status: 'active',
    tags: ['Testing', 'Unit Tests', 'QA'],
    topics: [
      'Teststrategie und Testarten',
      'Unit Testing und Integration Testing',
      'Test-driven Development (TDD)',
      'Testdokumentation und Testbericht',
      'Automatisierte Tests (CI/CD)'
    ],
    tools: ['JUnit', 'pytest', 'Postman', 'GitHub Actions'],
    detail: {
      intro: '„Works on my machine" ist keine Strategie. Dieses Modul bringt Struktur in Tests — manuell wie automatisiert.',
      goals: [
        'Testarten (Unit, Integration, E2E) einordnen',
        'Testcases aus Anforderungen ableiten',
        'Unit-Tests mit JUnit/pytest schreiben',
        'TDD in kleinem Scope anwenden',
        'Tests in CI/CD-Pipelines integrieren'
      ],
      assessment: 'Teststrategie + Testsuite zu bestehender App',
      duration: '40 Lektionen',
      projects: ['pytest-Suite für HugoSMP-Games', 'GitHub-Actions-Workflow'],
      reflection: 'Ein grüner Testreport nach Refactoring — besser als Kaffee.'
    }
  },
  {
    number: 'M346',
    title: 'Cloud-Lösungen konzipieren und realisieren',
    desc: 'Einsatz von Cloud-Diensten zur Entwicklung und Bereitstellung von Anwendungen.',
    icon: '<i class="fas fa-cloud"></i>', iconClass: 'icon-cyan', category: 'web', status: 'active',
    tags: ['Cloud', 'AWS', 'Azure', 'IaaS/PaaS'],
    topics: [
      'Cloud-Grundlagen: IaaS, PaaS, SaaS',
      'AWS und Azure Grunddienste',
      'Virtuelle Maschinen und Storage',
      'Serverless Functions',
      'CI/CD-Pipelines in der Cloud'
    ],
    tools: ['AWS', 'Azure', 'Terraform', 'GitHub Actions', 'S3'],
    detail: {
      intro: 'Vom eigenen Server zur globalen Infrastruktur in Minuten — das ist das Versprechen der Cloud. Dieses Modul zeigt, wie man es einlöst.',
      goals: [
        'Die Service-Modelle IaaS / PaaS / SaaS erklären',
        'Ressourcen in AWS oder Azure anlegen',
        'Statische Webseiten auf S3 hosten',
        'Serverless Functions deployen',
        'Einfache CI/CD-Pipelines bauen'
      ],
      assessment: 'Praxisprojekt: Cloud-Deployment einer App',
      duration: '40 Lektionen',
      projects: ['Static-Site auf S3 + CloudFront', 'Lambda-Function mit API-Gateway'],
      reflection: 'Cloud senkt die Einstiegshürde — aber die Rechnung am Monatsende diszipliniert einen schnell.'
    }
  },
  {
    number: 'M347',
    title: 'Dienste mit Containern bereitstellen',
    desc: 'Containerisierung und Orchestrierung von Anwendungen mit Docker.',
    icon: '<i class="fab fa-docker"></i>', iconClass: 'icon-cyan', category: 'web', status: 'active',
    tags: ['Docker', 'Container', 'DevOps'],
    topics: [
      'Container vs. Virtuelle Maschinen',
      'Docker Images und Container',
      'Dockerfile erstellen',
      'Docker Compose (Multi-Container)',
      'Kubernetes Grundlagen'
    ],
    tools: ['Docker', 'Docker Compose', 'Docker Hub', 'Kubernetes'],
    detail: {
      intro: '„It works on my machine" — gelöst mit Containern. Dieses Modul macht mit Docker und Kubernetes vertraut.',
      goals: [
        'Dockerfiles für verschiedene Stacks schreiben',
        'Images optimieren (Multi-Stage-Build)',
        'Mehrere Services mit Docker Compose koppeln',
        'Volumes und Netzwerke verwalten',
        'Erste Schritte mit Kubernetes (Pods, Deployments)'
      ],
      assessment: 'Containerisiertes Abschlussprojekt',
      duration: '40 Lektionen',
      projects: ['LAMP-Stack in Docker Compose', 'Mini-K8s-Cluster auf Minikube'],
      reflection: 'Container haben für mich das Deployment von Magie zu Standard gemacht.'
    }
  },
  {
    number: 'M431',
    title: 'Aufgaben selbstständig durchführen',
    desc: 'Planung und Umsetzung eines eigenen Projekts nach Projektmanagement-Methoden.',
    icon: '<i class="fas fa-rocket"></i>', iconClass: 'icon-orange', category: 'it-grundlagen', status: 'upcoming',
    tags: ['Projektmanagement', 'Selbstständig', 'IPERKA'],
    topics: [
      'Projektmethode IPERKA',
      'Planung und Zeitmanagement',
      'Dokumentation und Präsentation',
      'Reflexion und Selbstbewertung',
      'Abschlusspräsentation'
    ],
    tools: ['IPERKA', 'Jira', 'Confluence', 'MS Project'],
    detail: {
      intro: 'Das Abschlussmodul: ein selbstgewähltes Projekt komplett eigenständig planen, umsetzen, dokumentieren, präsentieren.',
      goals: [
        'Ein Projekt nach IPERKA strukturieren',
        'Realistische Zeit- und Ressourcenplanung',
        'Fortschritt sauber dokumentieren',
        'Ergebnisse professionell präsentieren',
        'Eigene Arbeit kritisch reflektieren'
      ],
      assessment: 'Projektarbeit + Dokumentation + Präsentation',
      duration: '80 Lektionen',
      projects: ['— wird gewählt —'],
      reflection: 'Kommt noch — das Modul ist geplant.'
    }
  }
];
