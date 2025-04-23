import { mono, sans } from '@/lib/fonts';
import './globals.css';
import { JsonLd } from '@/components/json-ld';
import { Navigation } from '@/components/navigation';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { WindowsEmojiPolyfill } from '@/components/windows-emoji-polyfill';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { Toaster } from 'sonner';
import { Link } from '@/components/link';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning className="scroll-smooth">
    <body
      className={cn(
        sans.variable,
        mono.variable,
        'bg-background px-4 font-sans text-foreground-light leading-relaxed antialiased'
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navigation />
        <div
          className={cn(
            'mx-auto grid max-w-2xl gap-12 border-dotted pt-24 pb-16',
            'sm:border-x sm:px-8 sm:pt-12'
          )}
        >
          <div>
            
            <p className='text-xs'><span className="flex items-center -space-x-2">
  <span className="p-2 dark:outline dark:outline-gray-800 bg-yellow-400 rounded-full"></span>
  <span className="p-2 dark:outline dark:outline-gray-800 bg-blue-400 rounded-full"></span>
  <span className="p-2 bg-orange-400 rounded-full"></span>
  <span className="p-2 dark:outline dark:outline-gray-800 bg-green-400 rounded-full mr-2"></span>

<Link href="/">MAURO FONTANARI</Link></span></p>
          </div>
          <ViewTransition>{children}</ViewTransition>
        </div>
        <Toaster />
        <ThemeSwitcher />
        <WindowsEmojiPolyfill />
        <JsonLd />
        <Analytics />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
