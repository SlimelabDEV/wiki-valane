---
title: 📚 Le Dex
description: "Découvrez le Dex de Valane : suivez vos collections, déposez vos souvenirs, récupérez vos doubles et échangez avec les autres joueurs."
sidebar_position: 3
---

# 📚 Le Dex : vos souvenirs

Le **Dex** est votre album de collections et un espace pour **stocker vos souvenirs**. Il vous permet de :

- 📦 **Ranger vos souvenirs** pour libérer de la place dans votre inventaire, tout en pouvant les récupérer à tout moment.
- 🏆 **Compléter vos collections** en retrouvant les souvenirs que vous possédez et ceux qu'il vous manque.
- 👀 **Montrer votre collection aux autres joueurs**, qui peuvent consulter votre album avec `/dex <pseudo>`.
- 🤝 **Échanger vos doubles** pour aider chacun à compléter ses collections.

:::tip Un album permanent
Le `/dex` est **permanent, sans limite de durée**. Vos souvenirs restent conservés, même après la fin des événements, et de nouvelles collections viendront enrichir votre album.
:::

---

## 📖 Ouvrir votre Dex

Utilisez la commande :

```text
/dex
```

Le menu principal présente les **collections disponibles**. Cliquez sur l'icône d'une collection pour découvrir ses souvenirs.

![Menu principal du Dex avec les collections disponibles](/img/dex/menu-principal.png)

---

## 🔎 Explorer une collection

Dans une collection, vous retrouvez les souvenirs **obtenus** et ceux qui sont encore **manquants**.

![Exemple de collection avec des souvenirs obtenus et manquants](/img/dex/collection.png)

Passez votre souris sur un souvenir pour consulter son **nom**, sa **provenance** et le **nombre d'exemplaires déposés**.

Pour retrouver plus facilement ce que vous cherchez, utilisez le filtre du menu :

- **Tous** : afficher tous les souvenirs de la collection.
- **Obtenus** : voir uniquement ceux déjà déposés dans votre Dex.
- **Manquants** : repérer ceux qu'il vous reste à collectionner.

La flèche de retour permet de revenir à la liste des collections.

---

## 📊 Suivre votre progression

Survolez l'**étoile en haut du menu** pour consulter le récapitulatif de votre album.

![Récapitulatif du Dex : souvenirs distincts, manquants, exemplaires déposés, doublons et collections complètes](/img/dex/progression.png)

Le récapitulatif distingue :

- Les **souvenirs distincts** : le nombre de souvenirs différents déposés.
- Les **souvenirs manquants** : ceux que vous n'avez pas encore dans votre album.
- Les **exemplaires déposés** : tous vos souvenirs stockés, doubles compris.
- Les **doublons** : vos exemplaires supplémentaires d'un même souvenir.
- Les **collections complètes** : celles pour lesquelles chaque souvenir est présent.

Votre pourcentage progresse lorsque vous ajoutez un **nouveau souvenir différent**. Déposer plusieurs fois le même souvenir augmente votre nombre d'exemplaires, mais pas votre pourcentage.

---

## 📥 Déposer et récupérer des souvenirs

Certains souvenirs sont ajoutés directement dans votre Dex lorsque vous les obtenez. Si vous en avez dans votre inventaire, par exemple après un échange, vous pouvez les déposer vous-même.

Gardez votre menu `/dex` ouvert, puis utilisez les clics suivants :

| Action | Où cliquer ? | Clic gauche | Maj + clic gauche |
| --- | --- | --- | --- |
| **Déposer** | Sur un souvenir dans votre inventaire | Déposer 1 exemplaire | Déposer toute la pile |
| **Récupérer** | Sur un souvenir dans votre collection | Récupérer 1 exemplaire | Récupérer jusqu'à 64 exemplaires |

Prévoyez de la **place dans votre inventaire** pour récupérer vos souvenirs.

![Fiche d'un souvenir avec son état, ses exemplaires déposés et les indications pour le récupérer](/img/dex/fiche-souvenir.png)

:::info Ce qui compte dans votre progression
Seuls les souvenirs **déposés dans le Dex** comptent pour compléter une collection. Si vous récupérez le **dernier exemplaire** d'un souvenir, il redevient manquant dans votre album. Déposez-le à nouveau pour qu'il compte dans votre progression.
:::

---

## 🤝 Échanger vos doubles

Vous possédez plusieurs exemplaires du même souvenir ? Récupérez vos doubles depuis votre collection pour les **échanger ou les vendre à d'autres joueurs**.

Pour échanger, utilisez `/trade <pseudo>`. Le joueur qui reçoit le souvenir pourra ensuite le déposer dans son propre Dex.

**Gardez au moins un exemplaire de chaque souvenir dans votre album** pour conserver votre progression tout en faisant profiter les autres de vos doubles.

---

## 👀 Consulter le Dex d'un autre joueur

Pour découvrir les collections d'un autre joueur, utilisez :

```text
/dex <pseudo>
```

Remplacez `<pseudo>` par son pseudo Minecraft. Vous pouvez consulter son album **même s'il est déconnecté**, admirer sa collection, repérer ses souvenirs manquants et préparer vos échanges.

Pour **montrer votre propre collection**, invitez les autres joueurs à taper `/dex` suivi de **votre pseudo**. Ils pourront ainsi découvrir votre album et votre progression.

Vous pouvez regarder ses collections, mais **vous ne pouvez ni y déposer ni y récupérer de souvenirs**.
