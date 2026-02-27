![Log-inator](https://github.com/yoyoking94/Log-inator/assets/56436435/881b4be6-6345-4792-85a8-c4fe291454ca)

La présentation, la définition du projet ou de la réalisation :

Diet-inator est une application web complète de suivi diététique et de gestion de recettes, développée comme un système full-stack avec base de données NoSQL MongoDB contenant exclusivement les recettes traditionnelles de ma mère. Ce projet dépasse la simple application de nutrition : il intègre un catalogue de 127 recettes familiales authentiques (cuisine mauricienne créole), un système de recherche intelligente par ingrédients/calories/restrictions alimentaires, un planificateur de menus hebdomadaires automatisé, un compteur de macros automatisée (protéines, glucides, lipides), un journal alimentaire avec photos avant/après, et des statistiques nutritionnelles personnalisées. Développée avec React frontend, Node.js/Express backend et MongoDB, cette application transforme mes habitudes alimentaires personnelles en un outil digitalisé professionnel et évolutif.


Les objectifs, le contexte, l’enjeu et les risques:

L'objectif principal était profondément personnel : manger plus sainement en structurant mes repas autour des recettes traditionnelles de ma mère, connues pour leur équilibre nutritionnel naturel mais jamais quantifiées ni organisées. Le contexte était critique : prise de poids progressive (+7kg en 18 mois) due à la restauration rapide étudiante, manque de temps pour cuisiner équilibré, et perte progressive des recettes familiales orales. L'enjeu était vital : retrouver un poids santé, maintenir le lien culturel mauricien via cuisine traditionnelle, et créer un outil réutilisable à vie. Les risques étaient élevés : mauvaise saisie nutritionnelle = plan alimentaire déséquilibré, base de données mal structurée = impossible d'évoluer, interface repoussante = abandon immédiat, ou sur-complexification technique freinant l'usage quotidien.


Les étapes – ce que j’ai fait:

J'ai commencé par la collecte et structuration des données : transcription manuelle des 127 recettes de ma mère (ingrédients, quantités précises, temps préparation, portions, notes culturelles), calcul nutritionnel détaillé pour chaque recette (MyFitnessPal validation), création du schéma MongoDB flexible (Recettes, Ingrédients, Menus, Journaux, Utilisateurs) avec indexing composite (ingrédients+calories). Ensuite, backend Node.js/Express : 24 endpoints RESTful (/api/recipes/search, /api/plans/weekly, /api/macros/today), authentification JWT, aggregation pipelines MongoDB complexes (macros par semaine, top ingrédients). Frontend React : architecture composants (RecipeCard, MacroGauge, WeeklyPlanner, SearchMultiFilter), state management Context API, graphiques Recharts (évolution poids, répartition macros), PWA offline-first avec service worker. Tests : 120+ tests unitaires (Jest), 28 e2e (Cypress), saisie/test de toutes les 127 recettes en conditions réelles pendant 3 semaines.


Les acteurs – les interactions:

Projet 100% solo, réalisé en interaction directe avec ma mère comme source unique des recettes (12h d'entretiens enregistrés, validation orale de chaque saisie). J'étais chef de projet nutritionnel, data scientist (calculs macros), architecte NoSQL, développeur full-stack, designer UX alimentaire, et utilisateur principal (test quotidien pendant 2 mois). Aucune interaction externe technique – le feedback le plus précieux provenait de l'usage réel : 47 jours consécutifs de suivi alimentaire, ajustements en direct sur macros/protéines. Ma mère a validé la fidélité culturelle des 127 recettes digitalisées, constituant un patrimoine familial sauvé.


Les résultats – pour moi:

Diet-inator est pleinement opérationnelle et m'a transformé : -4.7kg en 9 semaines, 92% de jours conformes au plan nutritionnel, moyenne 1850kcal/jour équilibrée (35% protéines, 40% glucides complexes, 25% lipides sains), 127 recettes familiales sauvées et quantifiées avec précision nutritionnelle. Concrètement, j'ai remplacé 90% des fast-foods par des plats maison planifiés, gagné 2h/semaine sur les courses (liste auto-générée), et créé un journal alimentaire visuel complet (135 photos avant/après repas). L'application est mon coach nutritionnel personnel : plans hebdo auto-générés, rappels eau (2.5L/jour), et statistiques qui motivent (progression protéines +42%). Résultat physique visible et mesurable.


Les lendemains du projet : dans un futur immédiat, à distance, aujourd’hui:

À court terme (1 mois), Diet-inator m'a fait perdre 2.3kg et structuré 27 jours de repas maison. À 3 mois, -4.7kg stables, 100% des courses listées via l'app, 12 recettes inédites créées par hybridation. À 1 an, l'app contient 142 recettes (15 ajouts personnels), j'ai stabilisé 82kg (objectif atteint), et les statistiques macros sont devenues ma référence personnelle. Aujourd'hui (février 2026), Diet-inator reste mon outil quotidien : 392 jours de suivi cumulés, 2.1L eau/jour moyen, 127 recettes originales + 28 personnelles = 155 entrées actives. Utilisée uniquement par moi, elle reste privée et évolue avec mes besoins nutritionnels (phase musculation actuelle).


Mon regard critique:

Diet-inator marque ma maîtrise NoSQL appliquée à un cas d'usage réel : MongoDB aggregation pipelines complexes (macros/semaine, top ingrédients), schéma flexible évolutif (+28% entrées sans migration), performances recherche full-text <80ms sur 155 documents. Le défi majeur fut la précision nutritionnelle : transcription fidèle des recettes orales, calculs macros validés MyFitnessPal, portions réalistes. Réussite critique : transformation d'un patrimoine culinaire familial en base de données actionnable produisant des résultats santé mesurables (-4.7kg). La contrainte solo a développé ma rigueur scientifique (quantification, traçabilité, métriques). Ce projet prouve ma capacité à résoudre des problèmes personnels complexes avec une stack full-stack professionnelle, compétence clé pour l'alternance développement.
