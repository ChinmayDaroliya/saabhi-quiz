# Ayurvedic Product Quiz Website

A modern, responsive quiz application built for an Ayurvedic products company to help users find personalized product recommendations based on their needs and preferences.

## Features

- 📱 **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack for lightning-fast builds
- 🎨 **Modern UI/UX** - Smooth animations with Framer Motion and beautiful design
- 🔄 **Interactive Quiz Flow** - Progressive question system with real-time feedback
- 📊 **Personalized Results** - Tailored product recommendations based on user responses
- ♿ **Accessible** - Built with accessibility best practices
- 🎯 **User-Friendly** - Intuitive interface with progress tracking

## Tech Stack

- **Framework:** Next.js 15.5.2
- **React:** 19.1.0
- **TypeScript:** Type-safe development
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12.23.12
- **Icons:** Lucide React
- **UI Components:** Radix UI primitives
- **Form Handling:** React Hook Form with Zod validation
- **Build Tool:** Turbopack for faster development

## Project Structure

```
app/
├── global.css
├── layout.tsx
├── page.tsx
└── QuizLoading.tsx

components/
├── ui/
│   └── progress.tsx
├── SaabhiQuizInnerComponents/
│   ├── Footer.tsx
│   ├── QuizOptionButton.tsx
│   ├── QuizSection.tsx
│   └── ResultSection.tsx
├── AyuervedicBottle.tsx
├── LoadingScreen.tsx
├── ProgressBar.tsx
└── saabhiQuiz.tsx

data/
├── quizQuestions.ts
└── resultMapping.tsx

interfaces/
└── interface.ts

lib/
└── utils.js
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ayurvedic-quiz-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Quiz Flow
- **QuizSection**: Handles question display and user interactions
- **QuizOptionButton**: Interactive option selection with animations
- **ProgressBar**: Visual progress tracking through the quiz
- **ResultSection**: Personalized product recommendations display

### UI/UX Features
- **Loading States**: Smooth loading screens with Suspense
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Animations**: Subtle motion design enhancing user experience
- **Accessibility**: WCAG compliant interface elements

## Configuration

The quiz questions and result mappings can be customized in:
- `data/quizQuestions.ts` - Quiz questions and options
- `data/resultMapping.tsx` - Product recommendation logic
- `interfaces/interface.ts` - TypeScript type definitions

## Deployment

This project is optimized for deployment on platforms like:
- Vercel 

Build command: `npm run build`
Start command: `npm run start`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Components load on-demand using React Suspense
- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic bundle optimization
- **Fast Refresh**: Instant feedback during development
- **Turbopack**: Ultra-fast bundling and compilation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on different devices
5. Submit a pull request

## License

This project is proprietary software developed for an Ayurvedic products company.

---

Built with ❤️ for promoting wellness through Ayurvedic wisdom.