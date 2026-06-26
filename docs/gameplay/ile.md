---
sidebar_position: 6
---

# 🌍 Les îles !

Bienvenue sur le guide dédié aux **îles** !  
Découvre comment créer, gérer et faire évoluer ton île sur le serveur.

---

## 🏝️ Démarrer ton aventure

Quand tu arrives sur le serveur, tu apparais dans le **lobby principal** 🏰.
Tu reçois alors un **équipement de base** ainsi qu’un **livre d’aide** listant les commandes utiles pour débuter.

Pour créer ton île, utilise simplement la commande suivante :

```bash
/ob create
```
Tu seras téléporté sur une petite île composée d’un seul bloc de terre 🌱.
Détruis ce bloc pour le récupérer, et commence à générer d’autres blocs pour agrandir ton île ! <br/>
Vous pouvez également commencer à faire vos premières quêtes en utilisant la commande `/quete` et utiliser les différents `/warps` déjà disponibles.

![Île](/img/ile/create.png)

:::warning
Attention vos îles sont reset après 2 mois d'inactivité.
:::

:::info
🔗 Consulte aussi la page des [Phases d’îles](phases.md) pour voir tout ce que tu peux débloquer !
:::

---

## ⚙️ Commandes d’île
Voici la liste complète des commandes disponibles pour **gérer, personnaliser et faire évoluer** ton île.  
Tu peux aussi taper `/ob help` directement en jeu pour les consulter.

---
### 💬 Chat & Communication
| Commande | Description |
|-----------|--------------|
| /ob chat | Active ou désactive le chat d'île. |
| /ob tc | Active ou désactive le chat de team. |
---
### 💰 Banque
| Commande | Description |
|-----------|--------------|
| /ob bank balance | Affiche le solde de votre banque. |
| /ob bank baltop | Affiche le classement des soldes de banque. |
| /ob bank deposit \<montant\> | Dépose de l'argent dans votre banque. |
| /ob bank withdraw \<montant\> | Retire de l'argent de votre banque. |
| /ob bank statement | Affiche l'historique des transactions de votre banque. |
---
### 🧱 Gestion de l’Île
| Commande | Description |
|-----------|--------------|
| /ob help | Affiche la liste des commandes disponibles. |
| /ob create | Crée une île. |
| /ob go | Téléporte-toi sur ton île. |
| /ob settings | Ouvre le menu de configuration d'île. |
| /ob info | Affiche les informations de votre île. |
| /ob level | Affiche votre niveau d'île. |
| /ob phase | Change la phase d'île. (Il faut être niveau 45 Valane.) |
| /ob value | Affiche la valeur de votre île. |
| /ob reset | Réinitialise votre phase. |
| /ob count | Affiche le nombre de blocs sur votre phase. |
| /ob top | Affiche le classement des niveaux d'îles. |
:::danger
⚠️ La commande `/ob reset` supprime **toute ta progression actuelle** sur ton île.
:::
---
### 🏡 Nom & Home
| Commande | Description |
|-----------|--------------|
| /ob setname \<nom\> | Change le nom de votre île. |
| /ob resetname | Réinitialise le nom de votre île. |
| /ob sethome | Définit votre home actuel. |
---
### 🚪 Gestion des Visiteurs
| Commande | Description |
|-----------|--------------|
| /ob visit \<pseudo\> | Visite l’île d’un joueur. |
| /ob visit configure | Configure les options de visite. |
| /ob visit setlocation | Définit le point d’arrivée des visiteurs. |
| /ob expel \<pseudo\> | Expulse un joueur de ton île. |
| /ob ban \<pseudo\> | Bannit un joueur de ton île. |
| /ob unban \<pseudo\> | Débannit un joueur. |
| /ob banlist | Liste des joueurs bannis. |
---
### 👥 Gestion de la Team
| Commande | Description |
|-----------|--------------|
| /ob team | Affiche les membres de ta team. |
| /ob team invite \<pseudo\> | Invite un joueur. |
| /ob team accept | Accepte une invitation. |
| /ob team reject | Refuse une invitation. |
| /ob team kick \<pseudo\> | Expulse un joueur. |
| /ob team leave | Quitte la team. |
| /ob team trust \<pseudo\> | Ajoute un joueur de confiance. |
| /ob team untrust \<pseudo\> | Retire un joueur de confiance. |
| /ob team coop \<pseudo\> | Coop temporaire (jusqu’à déconnexion). |
| /ob team uncoop \<pseudo\> | Retire la coop. |
| /ob team promote \<pseudo\> | Monte un joueur en grade. |
| /ob team demote \<pseudo\> | Rétrograde un joueur. |
| /ob team setowner \<pseudo\> | Change le propriétaire de l’île. |
---
### ❓FAQ / Problèmes fréquents
Une section utile pour éviter les questions répétitives.

| Problème | Solution |
|-----------|-----------|
| “Que faire si j’ai réinitialisé mon île ?” | Utilise la commande `/ob team invite <pseudo>` pour inviter un joueur. Il devra faire la commande `/ob team accept` pour accepter. |
| “Comment inviter un ami ?” | Il a peut-être déjà une île, il doit la supprimer. |

| “Comment améliorer la valeur de mon île ?” | Tu peux améliorer la valeur de ton île en posant des blocs de valeur. Tu peux voir la valeur des blocs en utilisant la commande `/ob value`. |
