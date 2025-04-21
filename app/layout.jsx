import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'JNGSEA',
  description: 'Journal of Next Gen Science and Engineering Applications',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='w-full max-w-screen overflow-hidden min-h-screen flex flex-col'>
          <Header />
          <div className='flex-1'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
