# 🏯 AnimeHub

A modern, responsive anime discovery platform built with **React**, **Vite**, and the **Jikan API**. AnimeHub allows users to explore trending series, search for specific titles, filter by genre, and maintain a personalized "My List" using browser local storage.

🚀 **Live Demo:** https://animehub-js.netlify.app/

## ✨ Features

* **Top Trending**: View a curated list of the most popular anime series currently airing.
* **Real-time Search**: Find your favorite anime using a high-performance search bar with integrated debouncing.
* **Interactive Genres**: Click on genre tags to instantly filter the library and discover new content.
* **My List (Favorites)**: Save must-watch anime to a personal list that persists across sessions via `localStorage`.
* **Glassmorphism UI**: A sleek, dark-themed interface featuring neon purple accents and modern design principles.
* **Detailed Modals**: Access comprehensive information including synopses, scores, and status for every title.
* **Responsive Design**: Optimized for a seamless experience across desktop, tablet, and mobile devices.

## 🚀 Tech Stack

* **Frontend**: React.js, CSS3
* **Build Tool**: Vite
* **API**: [Jikan API](https://jikan.moe/) (Unofficial MyAnimeList API)

## 🛠️ Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/mixin07/AnimeHub-js.git
cd AnimeHub-js

```


2. **Install dependencies**:
```bash
npm install

```


3. **Run in development mode**:
```bash
npm run dev

```


4. **Build for production**:
```bash
npm run build

```



## 🌐 Deployment

This project is configured for easy deployment on **Netlify**.

* **Build Command**: `npm run build`
* **Publish Directory**: `dist`

## 📂 Project Structure

```text
AnimeHub (js)/
├── node_modules/           # Project dependencies (auto-generated)
├── public/                 # Static assets
│   ├── download.jpg        # Site Logo
│   └── vite.svg            # Default Vite icon
├── src/                    # Main source code
│   ├── assets/             # Images and local media files
│   ├── components/         # Reusable React components
│   │   ├── AnimeCard.jsx   # Card UI with genre/favorite actions
│   │   ├── AnimeList.jsx   # Grid container for anime cards
│   │   ├── AnimeModal.jsx  # Detailed view with synopsis
│   │   ├── Favorites.jsx   # My List page component
│   │   ├── Footer.jsx      # Bottom info and social links
│   │   ├── Header.jsx      # Navigation, search, and view toggles
│   │   └── LoadingSpinner.jsx # Fetching feedback UI
│   ├── App.css             # Component-specific styles
│   ├── App.jsx             # Root component; state and logic center
│   ├── index.css           # Global styles and theme definitions
│   └── main.jsx            # Application entry point
├── .gitignore              # Files to exclude from Git
├── eslint.config.js        # Linting rules for code quality
├── index.html              # Main HTML template
├── package-lock.json       # Exact dependency versions
├── package.json            # Scripts and metadata
├── README.md               # Project documentation
└── vite.config.js          # Build tool configuration

```

## 🔗 Connect with Me

* **LinkedIn**: [j-mirudhula](https://www.google.com/search?q=https://www.linkedin.com/in/j-mirudhula/)
* **GitHub**: [mixin07](https://github.com/mixin07)

---

Built with ❤️ by Mirudhula...
