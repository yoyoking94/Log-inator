![Log-inator](https://github.com/yoyoking94/Log-inator/assets/56436435/881b4be6-6345-4792-85a8-c4fe291454ca)

La présentation, la définition du projet ou de la réalisation :

Log-inator est un système d'authentification complet développé en JavaScript avec Firebase, conçu pour sécuriser l'accès à mon dashboard personnel de gestion de données. Ce projet transforme un accès direct et risqué à la base de données en une interface utilisateur protégée par login/mot de passe, avec gestion des sessions, récupération de mot de passe et contrôles d'accès granulaires. L'objectif était de créer une couche de sécurité professionnelle autour de données sensibles tout en conservant une expérience utilisateur fluide et accessible depuis n'importe quel appareil connecté.


Les objectifs, le contexte, l’enjeu et les risques :

L'objectif principal était de sécuriser mon dashboard de gestion de données, auparavant accessible directement via des identifiants base de données exposés. Le contexte était critique : les données stockées (projets, métriques, configurations) devenaient sensibles avec la multiplication des projets -inator, rendant inacceptable un accès non contrôlé. L'enjeu était double : technique (implémenter une authentification robuste sans casser l'existant) et personnel (ne plus jamais intervenir manuellement en base de données). Les risques étaient élevés : mauvaise implémentation = verrouillage total du dashboard, compromission des données existantes, ou création d'une fausse sécurité donnant une confiance trompeuse.


Les étapes – ce que j’ai fait :

J'ai commencé par concevoir l'architecture frontend avec des composants React réutilisables : LoginForm (avec validation en temps réel, gestion erreurs, loading states), ProtectedRoute (wrapper de protection des routes), AuthContext (gestion globale de l'état d'authentification). Ensuite, j'ai configuré Firebase Authentication (Email/Password + Google OAuth comme fallback), créé les règles Firestore de sécurité (read/write conditionnel selon UID utilisateur), et implémenté le backend Firebase Functions pour la logique métier (vérification double authentification, logs d'accès, nettoyage sessions expirées). Enfin, j'ai ajouté une gestion d'erreurs gracieuse (déconnexion auto après 30min, retry exponentiel sur échecs réseau) et un système de récupération mot de passe par email. Chaque étape incluait des tests manuels exhaustifs sur 3 navigateurs + mobile.


Les acteurs – les interactions :

Ce projet a été réalisé entièrement en autonomie complète, sans interaction externe. J'étais à la fois chef de projet, architecte technique, développeur frontend/backend, testeur QA et utilisateur final. Cette approche solo m'a permis une itération ultra-rapide (décision → implémentation → test en moins de 2h par feature), mais demandait une discipline exceptionnelle pour ne pas dévier du scope initial. Aucun client, collègue ou mentor n'était impliqué – le seul feedback venait de mes propres tests d'usage quotidien sur le dashboard.


Les résultats – pour moi :

À court terme, Log-inator a immédiatement remplacé tous mes accès directs Firebase et sécurisé mes 5 projets -inator. À distance (6 mois après), le système fonctionnait parfaitement mais le dashboard global est devenu obsolète face à l'évolution de mes besoins (multi-projets, métriques complexes). Aujourd'hui (2026), le projet n'est plus utilisé car j'ai migré vers des dashboards spécialisés par projet (Fitness-inator admin, Finance-inator analytics), chacun avec son propre système d'auth. Le code reste cependant une base technique solide que je réutilise partiellement dans mes nouveaux projets.


Les lendemains du projet : dans un futur immédiat, à distance, aujourd’hui :

Les lendemains du projet : dans un futur immédiat, à distance, aujourd'hui
À court terme, Log-inator a immédiatement remplacé tous mes accès directs Firebase et sécurisé mes 5 projets -inator. À distance (6 mois après), le système fonctionnait parfaitement mais le dashboard global est devenu obsolète face à l'évolution de mes besoins (multi-projets, métriques complexes). Aujourd'hui (2026), le projet n'est plus utilisé car j'ai migré vers des dashboards spécialisés par projet (Fitness-inator admin, Finance-inator analytics), chacun avec son propre système d'auth. Le code reste cependant une base technique solide que je réutilise partiellement dans mes nouveaux projets.

Mon regard critique :

Ce projet m'a offert une compréhension profonde du fonctionnement complet d'un système d'authentification moderne, de la théorie (JWT, OAuth flows, OWASP Top 10) à la pratique (règles Firebase, gestion tokens). J'ai découvert des techniques JavaScript avancées qui m'ont fait progresser simultanément en frontend (React Context, protected routes), backend (Firebase Functions, serverless security) et base de données (Firestore rules). La difficulté principale fut de maintenir la simplicité d'usage malgré la complexité sécurité – le bon équilibre trouvé reste une fierté technique. Ce projet a posé les bases de ma confiance en implémentation d'authentification, compétence aujourd'hui indispensable pour tout projet professionnel sérieux.
