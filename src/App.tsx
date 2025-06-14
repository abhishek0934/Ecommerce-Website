import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import { useAuth } from './contexts/AuthContext';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { user, isAdmin } = useAuth();

  const handlePageChange = (page: string) => {
    // Redirect to login if trying to access protected pages
    if (!user && ['cart', 'admin'].includes(page)) {
      setCurrentPage('login');
      return;
    }
    
    // Redirect non-admin users away from admin page
    if (page === 'admin' && !isAdmin) {
      setCurrentPage('home');
      return;
    }
    
    setCurrentPage(page);
  };

  const handleLoginRequired = () => {
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} onLoginRequired={handleLoginRequired} />;
      case 'products':
        return <ProductsPage onLoginRequired={handleLoginRequired} />;
      case 'cart':
        return user ? <CartPage /> : <LoginPage onPageChange={handlePageChange} />;
      case 'login':
        return <LoginPage onPageChange={handlePageChange} />;
      case 'admin':
        return isAdmin ? <AdminPage /> : <HomePage onPageChange={handlePageChange} onLoginRequired={handleLoginRequired} />;
      default:
        return <HomePage onPageChange={handlePageChange} onLoginRequired={handleLoginRequired} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;