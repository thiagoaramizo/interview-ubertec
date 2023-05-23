import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Product } from "@/components/Product";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Product/>
      <Footer />
    </main>
  )
}
