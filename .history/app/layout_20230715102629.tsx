import Footer from '@/components/Footer'
import './global.css'
export const metadata = {
  title: 'Flexibble',
  description: 'Showcase of flexbox layouts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body>
        Navbar
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}
