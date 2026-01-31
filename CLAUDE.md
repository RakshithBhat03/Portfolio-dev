# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DeveloperFolio is a React-based portfolio template for software developers. It uses Create React App with a configuration-driven approach where all content is customized through a single file.

## Commands

```bash
npm start          # Dev server at localhost:3000 (runs fetch.js first to pull GitHub/Medium data)
npm run build      # Production build (runs fetch.js first)
npm test           # Jest tests
npm run format     # Format with Prettier
npm run deploy     # Deploy to GitHub Pages
```

## Architecture

### Configuration-Driven Design

All portfolio content lives in `/src/portfolio.js`. Edit this single file to customize:
- `greeting`: Name, title, resume link
- `socialMediaLinks`: GitHub, LinkedIn, etc.
- `skillsSection`: Skills with Font Awesome icons
- `workExperiences`, `education`, `bigProjects`, `achievementSection`
- `blogSection`, `talkSection`, `podcastSection`
- `contactInfo`, `twitterDetails`

### Component Structure

- **`/src/components/`**: Reusable UI components (cards, buttons, headers)
- **`/src/containers/`**: Page sections that compose components
- **`/src/containers/Main.js`**: Orchestrates all sections in sequence

### State Management

- React Context API for theming (`/src/contexts/StyleContext.js`)
- Custom `useLocalStorage` hook for dark mode persistence
- No Redux - keeps it lightweight

### Styling

- SCSS files paired with each component
- Global colors in `/src/_globalColor.scss`
- Dark mode via `.dark-mode` CSS class on root, detected from browser preference

### Data Fetching

`/fetch.js` runs as a pre-build step to fetch GitHub profile and Medium blogs via APIs. Data is written to `/public/` as static JSON - no client-side API calls in components.

## Environment Setup

Copy `env.example` to `.env` and configure:
```
REACT_APP_GITHUB_TOKEN=your_token  # GitHub personal access token (no scopes needed)
GITHUB_USERNAME=your_username
USE_GITHUB_DATA=true
MEDIUM_USERNAME=your_username      # Optional
```

## Key Files

- `/src/portfolio.js` - All customizable content
- `/src/_globalColor.scss` - Theme color variables
- `/fetch.js` - Pre-build GitHub/Medium data fetcher
- `/public/index.html` - Update title and meta tags for SEO
