import { useState, useEffect } from 'react';
import DOSHeader from '@/components/DOSHeader';
import DOSNavigation from '@/components/DOSNavigation';
import HomePage from '@/components/HomePage';
import ChatWindow from '@/components/ChatWindow';
import HistoryPage from '@/components/HistoryPage';
import AboutPage from '@/components/AboutPage';

export default function Index() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'F1':
          e.preventDefault();
          setCurrentPage('home');
          break;
        case 'F2':
          e.preventDefault();
          setCurrentPage('chat');
          break;
        case 'F3':
          e.preventDefault();
          setCurrentPage('history');
          break;
        case 'F4':
          e.preventDefault();
          setCurrentPage('about');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'chat':
        return <ChatWindow />;
      case 'history':
        return <HistoryPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <DOSHeader />
        <DOSNavigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <div className="mt-2">{renderPage()}</div>
        
        <div className="border-2 border-primary bg-card p-2 text-dos text-center mt-2">
          <span className="text-muted-foreground">
            Press F1-F4 to navigate | ESC to exit
          </span>
        </div>
      </div>
    </div>
  );
}
