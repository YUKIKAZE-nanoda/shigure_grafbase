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
      <body>
        Navbar
        <main></main>
        </body>
    </html>
  )
}
