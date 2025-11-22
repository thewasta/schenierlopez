# Schenier Lopez - Backend Developer Portfolio

Portfolio website for Schenier Lopez - Backend Developer with 7+ years of experience specializing in PHP and Node.js APIs.

## 🚀 Tech Stack

- **Framework**: Astro v5.15.9 with TypeScript
- **Styling**: TailwindCSS v4.1.17 with Vite integration
- **Animations**: GSAP v3.13.0 for advanced interactions
- **Icons**: Custom SVG components
- **Package Manager**: pnpm (required)
- **Build Output**: Static Site Generation (SSG)

## 📁 Project Structure

```text
/
├── public/                 # Static assets (images, fonts, icons)
├── src/
│   ├── components/         # Astro components
│   │   ├── icons/         # Custom SVG icons
│   │   └── sections/      # Page sections
│   ├── layouts/           # Astro layouts
│   ├── pages/            # Astro pages
│   ├── scripts/          # TypeScript animation scripts
│   └── styles/           # Global CSS styles
├── Dockerfile            # Docker configuration
└── package.json          # Dependencies and scripts
```

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`      |
| `pnpm build`               | Build your production site to `./dist/`          |
| `pnpm preview`             | Preview your build locally, before deploying     |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`     | Get help using the Astro CLI                     |

**Important**: Always use `pnpm` for package management (never npm) as specified in project guidelines.

## 🐳 Docker Deployment

This project includes a Docker setup for easy deployment of the Astro application.

### Build and Run Locally

```bash
# Build the Docker image
docker build -t schenier-portfolio .

# Run the container on port 4321 (default Astro port)
docker run -p 4321:4321 schenier-portfolio

# Or run on a different port (e.g., 8080)
docker run -p 8080:4321 schenier-portfolio
```

The portfolio will be available at `http://localhost:4321` (or `http://localhost:8080` if using port 8080)

### Docker Configuration

- **Single-stage build**: Simple and efficient container
- **Astro preview mode**: Built-in static file serving
- **pNPM package manager**: Respects project requirements

### Container Features

- ✅ Direct Astro application execution
- ✅ Built-in static file serving
- ✅ Optimized for production deployment
- ✅ Uses pnpm as required by project

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
