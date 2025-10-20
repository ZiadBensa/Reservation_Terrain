# Gestion de réservation d'un terrain de proximité

## Description

Le projet de Réservation de Terrains est une application web conçue pour simplifier le processus de réservation de terrains de sport ( football ). L'application vise à offrir une plateforme conviviale où les utilisateurs peuvent consulter la disponibilité des terrains, effectuer des réservations et faciliter le suivi des paiements associés.

## Fonctionnalités Principales

1. **Gestion des Utilisateurs :**
    - Inscription et connexion pour les utilisateurs, avec des rôles distincts tels que Propriétaire de Terrain, Client, et Administrateur.

2. **Gestion des Terrains :**
    - Possibilité pour les propriétaires de terrains d'ajouter, mettre à jour, et supprimer des terrains.
    - Consultation des terrains disponibles par les clients.

3. **Réservations :**
    - Les clients peuvent effectuer des réservations pour les terrains disponibles.
    - Les propriétaires peuvent consulter les réservations effectuées pour leurs terrains.

4. **Paiements :**
    - Intégration avec un processeur de paiement tiers pour traiter les transactions financières liées aux réservations.
    - Suivi des paiements et des statuts de transaction.

5. **Administration :**
    - Interface d'administration pour gérer les utilisateurs, les terrains, et suivre l'activité générale du système.

## Technologies Utilisées

- **Backend :** [JAVA], [Spring Boot], [Spring Security], [Spring Data JPA], [JUnit]
- **Frontend :** [JAVASCRIPT], [Angular], [Bootstrap], [HTML], [CSS]
- **Base de Données :** [MySQL]
- **Outils de Développement :** [Maven], [Git], [GitHub], [Postman], [Swagger]

## Comment Utiliser l'Application

1. **Inscription et Connexion :**
    - Les utilisateurs peuvent s'inscrire avec un rôle spécifique (propriétaire, client, administrateur) en fournissant les informations requises.
    - La connexion se fait en utilisant les identifiants enregistrés.

2. **Gestion des Terrains :**
    - Les propriétaires peuvent gérer leurs terrains via une interface dédiée.
    - Les clients peuvent parcourir les terrains disponibles et visualiser leurs détails.

3. **Réservations :**
    - Les clients peuvent effectuer des réservations en sélectionnant un terrain, une date et une heure spécifiques.
    - Les propriétaires peuvent consulter les détails des réservations effectuées pour leurs terrains.

4. **Paiements :**
    - Les paiements sont traités automatiquement par le processeur de paiement tiers.

5. **Administration :**
    - Les administrateurs ont un accès complet à l'interface d'administration pour gérer les utilisateurs, les terrains, et surveiller l'activité.

## Prérequis

- Java 17+
- Maven 3.9+
- Node.js 18+ et npm 9+
- PostgreSQL 15+

## Démarrage rapide

1. Clonez le dépôt:
   ```bash
   git clone <URL_DU_DEPOT>
   cd gestion-de-reservation-d-un-terrain-de-proximite-main
   ```

2. Configurez le backend:
   - Copiez le fichier d'exemple de configuration et renseignez vos variables:
     ```bash
     cd backend/src/main/resources
     copy application.properties.example application.properties
     ```
   - Éditez `backend/src/main/resources/application.properties` avec vos accès PostgreSQL.

3. Lancez le backend:
   ```bash
   cd ../../../..
   cd backend
   mvn spring-boot:run
   ```
   Par défaut le backend écoute sur `http://localhost:8080`.

### Base de données PostgreSQL

Créez la base et l'utilisateur:
```sql
CREATE DATABASE reservation_terrain;
CREATE USER app_user WITH PASSWORD 'strong_password';
GRANT ALL PRIVILEGES ON DATABASE reservation_terrain TO app_user;
```
Assurez-vous que votre `application.properties` contient:
```
spring.datasource.url=jdbc:postgresql://localhost:5432/reservation_terrain
spring.datasource.username=app_user
spring.datasource.password=strong_password
spring.jpa.hibernate.ddl-auto=update
```

4. Installez et lancez le frontend:
   ```bash
   cd ../frontend
   npm install
   npm start
   ```
   Le frontend sera disponible sur `http://localhost:4200`.

## Configuration

- Backend:
  - Fichier d'exemple: `backend/src/main/resources/application.properties.example`
  - Fichier réel (non versionné): `backend/src/main/resources/application.properties`
  - Variables importantes:
    - `spring.datasource.url`, `spring.datasource.username`, `spring.datasource.password`
    - `upload.dir` (répertoire inscriptible pour les images)

- Frontend:
  - Les URLs d'API sont actuellement codées en dur vers `http://localhost:8080`. Pour un déploiement, envisagez d'introduire des fichiers `environment.ts` et d'y déplacer l'URL de base de l'API.

## Scripts utiles

- Backend:
  - Démarrer: `mvn spring-boot:run`
  - Build: `mvn clean package`

- Frontend:
  - Développement: `npm start`
  - Build prod: `npm run build`

## Structure du projet

```
backend/   # Spring Boot (API REST, JPA, MySQL)
frontend/  # Angular (UI)
```

## Contribution

Les contributions sont les bienvenues. Ouvrez une issue ou une pull request avec une description claire des changements proposés.

## Équipe de Développement

Ce projet a été rendu possible grâce aux efforts de l'équipe de développement suivante :

- **Hicham Mokaddem**
   - GitHub: [mokaddemhicham](https://github.com/mokaddemhicham)

- **Mohamed Louak**
   - GitHub: [Mlouak](https://github.com/Mlouak)
