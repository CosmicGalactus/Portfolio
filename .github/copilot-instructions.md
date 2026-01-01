<!-- Use this file to provide workspace-specific custom instructions to Copilot -->

# Prakhar Portfolio Project

## Overview
A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite to showcase projects, skills, and experience.

## Tech Stack
- React 19.x with TypeScript
- Vite (build tool)
- Tailwind CSS for styling
- Responsive design first approach

## Project Structure
```
src/
├── components/       # Reusable React components
├── pages/           # Page components (Home, Projects, About, etc.)
├── App.tsx          # Main application component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Development Guidelines

### Component Development
- Use functional components with TypeScript interfaces
- Keep components modular and reusable
- Style with Tailwind CSS utility classes
- Add proper TypeScript typing for all props

### Styling
- Use Tailwind CSS for all styling
- Follow mobile-first responsive design
- Use custom Tailwind config for brand colors
- Avoid inline styles

### Performance
- Lazy load components where appropriate
- Optimize images and assets
- Minimize bundle size
- Use React.lazy for code splitting

## Common Tasks
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## Customization Areas
- Update colors and fonts in `tailwind.config.js`
- Modify portfolio content in component files
- Add social media links in footer
- Update project showcase data
