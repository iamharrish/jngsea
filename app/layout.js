import './globals.css';

export const metadata = {
  title: 'JNGSEA',
  description: 'Journal of Next Gen Science and Engineering Applications',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
