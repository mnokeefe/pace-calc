# MOK Boilerplate

## Included

- Boilerplate SCSS using Bourbon & Neat
- Pixel fallback for REMs
- Auto prefixer
- Minification & optimisation of CSS, JS and Images
- LiveReload

## Structure

Adjust gulpfile.js if any changes are made to the overall structure.

    mok-sass/
    |
    |-- src/
    |   |
    |   |-- styles/
    |   |   |
    |   |   |-- base/                 # Base styles
    |   |   |-- modules/              # Common modules
    |   |   |-- pages/                # Page specific styles
    |   |   |-- vendor/               # CSS or Sass from other projects
    |   |   |-- _settings.scss        # Project settings
    |   |   `-- style.scss            # Primary Sass file
    |   |
    |   |-- scripts/
    |   |
    |   `-- images/
    |
    `-- assets/
        |
        |-- styles/                   # Outputted CSS
        |
        |-- scripts/                  # Outputted JavaScript
        |
        `-- images/                   # Optimised images