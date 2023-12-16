import Image from 'next/image'
import NavBar from './NavBar/NavBar'
import Header from './Header/Header'

export default function Home() {
  return (
    <body>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Content
      </main>
    </body>
  )
}
