import React from 'react';

export default function Contributeurs() {
  return (
    <main className="container margin-vert--lg">
      <h1>🙌 Contributeurs</h1>
      <p>Merci à toutes les personnes qui participent à l’évolution du wiki Valane 💚</p>

      <img
        src="https://contrib.rocks/image?repo=SlimelabDEV/wiki-valane"
        alt="Liste des contributeurs"
        style={{ borderRadius: '8px', marginTop: '20px' }}
      />

      <p style={{ marginTop: '20px' }}>
        ➡️ <a href="https://github.com/SlimelabDEV/wiki-valane/graphs/contributors" target="_blank">
          Voir la liste complète sur GitHub
        </a>
      </p>
    </main>
  );
}
