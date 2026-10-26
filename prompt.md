my-pnp-game-hub/
├── public/                     # Static assets served directly
│   └── games/                  # Raw assets for your games
│       ├── game-one/
│       │   ├── cover.jpg
│       │   ├── rules.pdf
│       │   └── print-sheet.pdf
│       └── game-two/
│           └── ...
├── src/
│   ├── components/             # Hub UI (Navbar, GameCard, Modal, etc.)
│   ├── games/                  # Embedded browser versions (optional)
│   │   ├── game-one/           # If playable in-browser
│   │   │   └── GameComponent.jsx
│   │   └── index.js
│   ├── data/
│   │   └── games.json          # Master configuration file for all games
│   ├── App.jsx                 # Main Hub Dashboard
│   └── main.jsx
├── package.json
└── vercel.json                 # Vercel deployment config