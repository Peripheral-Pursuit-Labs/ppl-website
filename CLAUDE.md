# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Peripheral Pursuit Labs, a software development studio. Pure HTML/CSS/JS site with no build process, designed for GitHub Pages deployment.

## Architecture

- **Static site structure**: Single-page application pattern with anchor navigation
- **No build system**: Direct HTML/CSS/JS - open `index.html` in browser for local testing
- **Theme system**: CSS custom properties with JavaScript toggle, persists to localStorage via `ppl-theme` key
- **Styling**: Skeleton CSS framework (2.0.4) for grid/base styles + custom CSS in `css/style.css`
- **Form handling**: Contact form posts to Formspree endpoint (https://formspree.io/f/manpogwe)

## File Structure

- `index.html` - Main landing page with hero, services, process, and contact sections
- `privacy.html` - Privacy policy page
- `terms.html` - Terms of service page
- `css/style.css` - All custom styles with CSS variables for light/dark theme
- `js/theme.js` - Theme toggle logic and smooth scroll behavior

## Theme System

The site uses CSS custom properties for theming:
- Light mode variables: `--bg-primary-light`, `--text-primary-light`, etc.
- Dark mode variables: `--bg-primary-dark`, `--text-primary-dark`, etc.
- Brand color: `--purple-primary` (#9b87f5)
- Default: Dark mode (body starts with `dark-mode` class)
- Toggle: Fixed position button at top-right that swaps `dark-mode` class

## Key Implementation Details

- **Smooth scrolling**: Implemented via CSS `scroll-behavior: smooth` + JS event listeners for anchor links in `js/theme.js:26-37`
- **Theme persistence**: `localStorage.getItem(THEME_KEY)` and `localStorage.setItem(THEME_KEY, currentTheme)` in `js/theme.js:8-14,21-22`
- **Responsive breakpoints**: 768px and 550px defined in `css/style.css:513-555`
- **Form structure**: Formspree integration requires `name`, `email`, and `message` fields in `index.html:181-191`

## Deployment

Push to `main` branch → automatically deploys via GitHub Pages. No build step required.

## Local Development

Open `index.html` directly in browser. Changes to HTML/CSS/JS are immediately visible on refresh.

## Design Constraints

- Purple branding (#9b87f5) is core to identity - maintain across all elements
- Dark mode is default experience - prioritize dark mode testing
- Mobile-first: All new components must work on 550px+ screens
- Skeleton CSS grid system (12 columns) should be used for layout
