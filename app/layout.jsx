import { Playfair_Display, Nunito } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

const playFairDisplay = Playfair_Display({ variable: '--font-playfair-display', subsets: ['latin'] });
const nunito = Nunito({ variable: '--font-nunito', subsets: ['latin'] });

export const metadata = {
  title: 'JNGSEA',
  description: 'Journal of Next Gen Science and Engineering Applications',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${playFairDisplay.variable} ${nunito.variable}`}>
        <div className='w-full max-w-screen overflow-hidden min-h-screen flex flex-col gap-10 font-sans'>
          <Header />
          <div className='flex-1'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
