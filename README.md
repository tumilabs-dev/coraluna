# Coraluna

A modern web experience for exploring the Pharosverse. Coraluna is the hidden harbor beneath the tides, where every Sailor first arrives to find their compass, tools, and the community that will accompany them into the world of PHAROS.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Page Transitions**: Seamless navigation with custom GSAP-powered transitions
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Performance**: Built with SvelteKit for optimal performance and SEO
- **Animations**: Rich animations powered by GSAP
- **Type Safety**: Full TypeScript support

## 🛠️ Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** - The web framework
- **[Svelte 5](https://svelte.dev/)** - The UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[GSAP](https://gsap.com/)** - Animation library
- **[Vite](https://vitejs.dev/)** - Build tool
- **[shadcn-svelte](https://www.shadcn-svelte.com/)** - UI components
- **[pnpm](https://pnpm.io/)** - Package manager

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (install globally with `npm install -g pnpm`)

## 🏃 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Coraluna
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (or the next available port).

To open the app automatically in your browser:

```bash
pnpm dev -- --open
```

### Building

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## 📁 Project Structure

```
Coraluna/
├── src/
│   ├── lib/
│   │   ├── animations/      # Animation configurations
│   │   ├── assets/          # Images, logos, backgrounds
│   │   ├── components/      # Reusable components
│   │   │   ├── layouts/    # Layout components (Header, Footer)
│   │   │   └── ui/         # UI components (Button, Progress)
│   │   └── utils/          # Utility functions
│   ├── routes/             # SvelteKit routes
│   │   ├── +page.svelte    # Home page
│   │   ├── about/          # About page
│   │   ├── crew/           # Crew page
│   │   ├── showcase/       # Showcase page
│   │   └── cta/            # CTA page
│   └── utils/              # Additional utilities
├── static/                 # Static assets (fonts, favicons)
├── components.json         # shadcn-svelte configuration
├── svelte.config.js        # SvelteKit configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Pages

- **Home** (`/`) - Landing page with hero banner
- **About** (`/about`) - Information about Coraluna and the Pharosverse
- **Crew** (`/crew`) - Meet the team
- **Showcase** (`/showcase`) - Featured content
- **CTA** (`/cta`) - Call to action page

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run type checking
- `pnpm check:watch` - Run type checking in watch mode
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Check code formatting

## 🎯 Key Features

### Animations

- Custom GSAP animations for page transitions
- Smooth fade and slide effects
- View transition API integration

### Responsive Design

- Mobile-first approach
- Adaptive background images for different screen sizes
- Optimized layouts for all devices

### Performance

- Image optimization with `@sveltejs/enhanced-img`
- Code splitting and lazy loading
- Optimized build output

## 🚢 Deployment

The project uses `@sveltejs/adapter-auto` which automatically detects the deployment environment. For specific platforms, you may need to install and configure the appropriate adapter:

- [Vercel](https://vercel.com/) - `@sveltejs/adapter-vercel`
- [Netlify](https://www.netlify.com/) - `@sveltejs/adapter-netlify`
- [Cloudflare Pages](https://pages.cloudflare.com/) - `@sveltejs/adapter-cloudflare`
- [Node.js](https://nodejs.org/) - `@sveltejs/adapter-node`

See the [SvelteKit adapters documentation](https://kit.svelte.dev/docs/adapters) for more information.

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or issues, please contact the project maintainers.

---

**Find the light. 🪸🌕**
