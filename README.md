# HERO.IO - Modern React App Store

A fully responsive, production-level React application that replicates the functionality of the Google Play Store. Browse, search, install, and manage your favorite apps with a beautiful, modern UI.

![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.1-green?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-blueviolet?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎯 Features

### Core Features
- 🏠 **Home Page**: Hero banner, statistics, and trending apps showcase
- 🔍 **App Browsing**: Browse 20+ apps with real-time search (debounced)
- 📱 **App Details**: Comprehensive app information with:
  - App ratings chart using Recharts
  - Install/Uninstall functionality
  - Multi-paragraph descriptions
  - Download and review statistics
- 💾 **Installation Management**:
  - Track installed apps with localStorage
  - Sort by downloads, rating, or file size
  - One-click uninstall
  - Real-time synchronization across pages

### UI/UX Features
- 📱 **Responsive Design** (Mobile-first):
  - Mobile: 2-column grid
  - Tablet: 3-column grid
  - Desktop: 4-column grid
  - Mobile hamburger drawer navigation
- 🌙 **Dark/Light Mode Toggle**: Persistent theme preference
- ⚡ **Loading States**:
  - Skeleton loading for better UX
  - Search animation spinner
  - Page transition loaders
- 🧭 **Breadcrumb Navigation**: Easy navigation path tracking
- 🔔 **Toast Notifications**: Real-time feedback for all actions
- 🎨 **Modern UI**: Tailwind CSS with gradients, shadows, and smooth animations

### Advanced Features
- ❤️ **Favorites System**: Save and manage favorite apps (localStorage)
- 👀 **Recently Viewed Apps**: Track app browsing history
- ⭐ **Recommended Apps**: Smart recommendations based on ratings
- ⚡ **Lazy Loading**: React.lazy code splitting for better performance
- 🔄 **Real-time Sync**: Custom event system for cross-page updates
- 🔍 **Debounced Search**: Optimized search with 500ms debounce

## 📊 Project Statistics

- **Total Apps**: 20 apps with detailed information
- **App Fields**: ID, title, company, image, description, size, reviews, rating, downloads, ratings breakdown
- **Components**: 15+ reusable React components
- **Routes**: 5 main routes with error handling
- **Responsive Breakpoints**: 4 (mobile, tablet, desktop, large desktop)

## 🚀 Tech Stack

### Frontend
- **React 19.2.4** - UI library with hooks
- **Vite 8.0.1** - Fast build tool and dev server
- **Tailwind CSS 4.2.2** - Utility-first CSS framework
- **React Router DOM 7.13.2** - Client-side routing
- **Recharts 3.8.1** - Chart library for ratings visualization
- **React Toastify 11.0.5** - Toast notifications

### Development Tools
- **ESLint** - Code quality
- **Babel** - JavaScript transpiler
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx           # Navigation with dark mode toggle
│   │   └── Footer.jsx           # Footer with links & social media
│   ├── home/
│   │   ├── Banner.jsx           # Hero section with store buttons
│   │   ├── Stats.jsx            # Download/review stats display
│   │   └── TrendingApps.jsx     # Featured apps grid
│   └── shared/
│       ├── AppCard.jsx          # Reusable app card component
│       ├── Loader.jsx           # Loading spinner animation
│       ├── SkeletonCard.jsx     # Skeleton loading placeholder
│       └── Breadcrumb.jsx       # Navigation breadcrumbs
├── pages/
│   ├── Home.jsx                 # Landing page
│   ├── Apps.jsx                 # Browse all apps with search
│   ├── Installation.jsx         # Manage installed apps
│   ├── AppDetails.jsx           # Full app information
│   ├── Error404.jsx             # 404 error page
│   └── NotFound.jsx             # Not found fallback
├── routes/
│   └── Router.jsx               # App routing configuration
├── context/
│   ├── DarkModeContext.jsx      # Dark mode state management
│   └── FavoritesContext.jsx     # Favorites/wishlist state
├── utils/
│   └── debounce.js              # Debounce utility function
├── data/
│   └── apps.json                # 20 sample apps with full data
├── App.jsx                      # Main app wrapper
└── main.jsx                     # React entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/app-store.git
   cd app-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with stats and trending apps |
| `/apps` | Apps | Browse all apps with search functionality |
| `/apps/:id` | App Details | Full app information with install option |
| `/installation` | Installation | View and manage installed apps |
| `/404` | Error | Custom 404 error page |

## ✨ Key Features Explained

### 1. Real-time Search with Debouncing
```javascript
- Case-insensitive app title search
- 500ms debounce to optimize performance
- Skeleton loading during search
```

### 2. Installation Management
```javascript
- Apps saved to localStorage
- Automatic sync across pages via custom events
- Toast notifications for all actions
```

### 3. Sorting Options
- By downloads (high to low / low to high)
- By rating
- By file size
- Default order

### 4. Responsive Grid
```
Mobile:  2 columns (640px+)
Tablet:  3 columns (768px+)
Desktop: 4 columns (1024px+)
```

### 5. Dark Mode
- Toggle in header
- Persister theme preference in localStorage
- Smooth transitions between modes

## 🔄 Data Flow

```
Apps.json (20 apps)
    ↓
AppCard Component (displays app)
    ↓
Click Card → AppDetails Page (full info)
    ↓
Click Install → localStorage + Toast + Real-time Sync
    ↓
Installation Page (shows all installed)
    ↓
Sort/Uninstall → localStorage update + event dispatch
```

## 💾 Local Storage Keys

| Key | Type | Example |
|-----|------|---------|
| `installedApps` | Array | `[1, 4, 7, 12]` |
| `favoriteApps` | Array | `[2, 5, 9]` |
| `recentlyViewed` | Array | `[1, 2, 3]` |
| `darkMode` | Boolean | `true` |

## 🎨 Color Palette

- **Primary**: Purple (#800080)
- **Accent**: Purple-400 (#A78BFA)
- **Background**: Light Gray (#F3F4F6)
- **Dark Background**: Dark Gray (#0b1f2a)
- **Text**: Gray (#333333) / White

## 📈 Performance Optimizations

1. **Code Splitting**: React.lazy for page components
2. **Debounced Search**: 500ms delay to reduce re-renders
3. **Memoization**: UseCallback for event handlers
4. **Images**: CDN-hosted app icons
5. **Tailwind CSS**: Purged unused styles

## 🧪 Testing Checklist

- ✅ Install/uninstall apps
- ✅ Search functionality
- ✅ Sorting options
- ✅ localStorage persistence
- ✅ Mobile responsive layout
- ✅ Toast notifications
- ✅ Store links working
- ✅ Dark mode toggle
- ✅ Breadcrumb navigation
- ✅ Lazy loading

## 📦 20 Sample Apps Included

1. WhatsApp
2. Spotify
3. YouTube
4. Instagram
5. Snapchat
6. Netflix
7. Telegram
8. Uber
9. Google Maps
10. LinkedIn
11. Twitter / X
12. PayPal
13. Zoom
14. Duolingo
15. Canva
16. Notion
17. Discord
18. Airbnb
19. TikTok
20. Shazam

## 🌐 Deployment

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `_redirects` file ensures SPA routing works correctly

### Vercel

1. Import git repository
2. Framework: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Environment: Use defaults

## 🐛 Known Issues & Solutions

| Issue | Solution |
|-------|----------|
| Routes not working after reload | `_redirects` file for Netlify deployment |
| Search not debouncing | Use debounce utility (500ms delay) |
| Dark mode not persisting | localStorage update on toggle |
| Apps not syncing across tabs | Custom event system implemented |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Git Commit History

```
✅ Add Google Play & App Store links with social media
✅ Add loading animations & enhanced sorting
✅ Add mobile responsive design with drawer navigation
✅ Remove Install button from AppCard
✅ Fix Installation page real-time sync
✅ Build Installation page with app management
✅ Enhanced app descriptions with multi-paragraph content
✅ Fix AppDetails Babel syntax error
✅ Fix app card styling with animations
✅ Initial project setup with folder structure
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name** - [GitHub](https://github.com/khanmahfuj34)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for utility-first styling
- Recharts for beautiful data visualization
- Icons8 for app icons
- All contributors and users

## 📞 Support

For support, email mkmahfujkhanms@gmail.com or open an issue on GitHub.

---

**Made with ❤️ by Your Name**

Last Updated: March 31, 2026

