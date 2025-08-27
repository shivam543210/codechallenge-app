# CodeChallenge App

A modern, scalable React application for coding challenges and problem-solving, built with React, Tailwind CSS, and Lucide React icons.

## Features

- 🎯 **Dashboard** - Overview of user stats, recommended problems, and leaderboard
- 📚 **Problems Page** - Browse and filter coding problems by difficulty and topic
- 💻 **Code Editor** - Solve problems with syntax highlighting and mock execution
- 🔍 **Search & Filter** - Find problems quickly with advanced filtering
- 📊 **Progress Tracking** - Track your solving streak, success rate, and rank
- 🏆 **Leaderboard** - Compete with other users
- 🌙 **Dark Theme** - Modern glassmorphism design with dark gradient backgrounds

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## Project Structure

```
src/
├── App.jsx                          // Main app with routing logic
├── components/
│   └── common/
│       └── NavigationHeader.jsx     // Shared header component
├── pages/
│   ├── Dashboard/                   // Dashboard page + components
│   ├── Problems/                    // Problems listing page + components
│   └── Solve/                       // Problem solving page + components
├── data/
│   ├── problems.js                  // Problems data
│   └── mockData.js                  // Mock user data
├── hooks/
│   └── useUserStats.js              // Custom hook for user statistics
└── utils/
    ├── helpers.js                   // Utility functions
    └── constants.js                 // App constants
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Features Overview

### Dashboard
- User statistics (problems solved, success rate, streak, rank)
- Recommended problems based on skill level
- Recent activity timeline
- Leaderboard with top performers

### Problems Page  
- Complete list of coding problems
- Filter by difficulty (Easy, Medium, Hard)
- Filter by topic (Array, String, Tree, etc.)
- Search functionality
- Problem details with acceptance rate and submission count

### Solve Page
- Split-screen layout with problem description and code editor
- Multiple programming language support
- Mock code execution and submission
- Problem examples and constraints
- Tag-based categorization

## Customization

### Adding New Problems
Edit `src/data/problems.js` and add new problem objects:

```javascript
{
  id: 7,
  title: "Your Problem Title",
  difficulty: "Medium",
  description: "Problem description...",
  examples: [...],
  constraints: [...],
  tags: ["Array", "Dynamic Programming"]
}
```

### Adding New Pages
1. Create new folder in `src/pages/`
2. Add page component and subcomponents
3. Export from `src/pages/index.js`
4. Add routing logic to `App.jsx`

### Styling
The app uses Tailwind CSS with a custom dark theme. Key design elements:
- Gradient backgrounds (`from-slate-900 via-purple-900 to-slate-900`)
- Glassmorphism effects (`bg-white/5 backdrop-blur-sm`)
- Consistent color scheme with blue/purple accents

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
