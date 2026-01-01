import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchFilter from '@/components/SearchFilter';
import GamesGrid from '@/components/GamesGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <SearchFilter />
        <GamesGrid />
      </main>
      <Footer />
    </div>
  );
}
