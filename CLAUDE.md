# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based landing page for ME Mind Exploration, built with Vite. It's a single-page application showcasing AI and technology services with sections for Hero, About, Services, Technology, CTA, and Footer.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production 
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Architecture

### Component Structure
- All components follow the pattern: `src/components/[ComponentName]/[ComponentName].jsx`
- Each component has its own CSS module: `[ComponentName].module.css`
- Components are imported and used in `App.jsx` in a linear layout

### Styling System
- CSS Modules are used for component-specific styling
- Global styles in `src/index.css`
- Uses semantic class names and CSS custom properties
- Button styles follow `.btn .btn-primary` and `.btn .btn-secondary` pattern
- Container class `.container` is used for consistent layout width

### Key Patterns
- Components use anchor links for navigation (`#hero`, `#about`, `#services`, etc.)
- Images imported as modules from `src/assets/`
- Spanish comments in code but English content on the site
- All components are functional components using React hooks

### File Organization
```
src/
  components/
    Header/     - Navigation with logo and menu
    Hero/       - Main banner with CTA buttons  
    About/      - Company information
    Services/   - Service offerings
    Technology/ - Technology stack display
    CTA/        - Call-to-action section
    Footer/     - Contact and footer info
  assets/       - Images and static files
```

## Deployment

The site deploys to GitHub Pages using `gh-pages` package. The homepage is set to `https://mindexploration.ai` in package.json.