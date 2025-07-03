# Freelance Services Website

A modern, responsive website showcasing professional development and technical writing services. Built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Modern UI with smooth animations
- Contact form with validation
- Service and pricing sections
- SEO optimized

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd freelance-services
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev


4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── components/    # React components
│   ├── api/          # API routes
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── styles/           # Global styles
└── types/           # TypeScript types
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React](https://reactjs.org/) - UI library

## Development

- Run tests: `npm test`
- Build for production: `npm run build`
- Start production server: `npm start`

## Contact Form Setup

The contact form is set up to handle submissions through a Next.js API route. To enable email functionality:

1. Create a `.env.local` file in the root directory
2. Add your email service credentials (example using SendGrid):
```
SENDGRID_API_KEY=your_api_key
CONTACT_EMAIL=your_email@example.com
```

## License

MIT License - feel free to use this code for your own projects. 