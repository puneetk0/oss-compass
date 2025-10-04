import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            OSS Discovery
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/hidden-gems" 
              className={`text-sm font-medium transition-colors ${
                isActive('/hidden-gems') 
                  ? 'text-primary' 
                  : 'text-secondary-foreground hover:text-foreground'
              }`}
            >
              Hidden Gems
            </Link>
            <Link 
              to="/personalized" 
              className={`text-sm font-medium transition-colors ${
                isActive('/personalized') 
                  ? 'text-primary' 
                  : 'text-secondary-foreground hover:text-foreground'
              }`}
            >
              Personalized Issues
            </Link>
            <Link 
              to="/hacktoberfest" 
              className={`text-sm font-medium transition-colors ${
                isActive('/hacktoberfest') 
                  ? 'text-primary' 
                  : 'text-secondary-foreground hover:text-foreground'
              }`}
            >
              Hacktoberfest
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
