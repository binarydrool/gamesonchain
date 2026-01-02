import Header from '@/components/Header';
import SearchFilter from '@/components/SearchFilter';
import GamesGrid from '@/components/GamesGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <SearchFilter />
        <GamesGrid />
      </main>
      <Footer />
    </div>
  );
}
