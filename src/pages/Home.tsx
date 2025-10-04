import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import RepoCard, { RepoData } from '@/components/RepoCard';
import { usePreferences } from '@/contexts/PreferencesContext';

// Mock recommended repos - in production, these would come from an API
const mockRecommendedRepos: RepoData[] = [
  {
    name: 'first-contributions',
    description: 'Help beginners make their first open source contribution',
    language: 'JavaScript',
    stars: 42000,
    lastCommit: '2 days ago',
    tags: ['good first issue', 'documentation', 'beginner-friendly'],
    url: 'https://github.com/firstcontributions/first-contributions',
  },
  {
    name: 'awesome-for-beginners',
    description: 'A list of awesome beginners-friendly projects',
    language: 'Markdown',
    stars: 38000,
    lastCommit: '1 week ago',
    tags: ['good first issue', 'curated-list'],
    url: 'https://github.com/MunGell/awesome-for-beginners',
  },
  {
    name: 'scikit-learn',
    description: 'Machine learning in Python',
    language: 'Python',
    stars: 59000,
    lastCommit: '1 day ago',
    tags: ['good first issue', 'machine-learning', 'python'],
    url: 'https://github.com/scikit-learn/scikit-learn',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { preferences, hasCompletedOnboarding } = usePreferences();
  const [query, setQuery] = useState('');

  const placeholders = [
    "Find beginner-friendly Python repos with good first issues",
    "Search for JavaScript projects with documentation needs",
    "Discover Ruby repositories accepting new contributors",
    "Look for React projects with Hacktoberfest tags",
    "Find machine learning repos for beginners",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/search', { state: { query } });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            What do you want to create?
          </h1>
          <p className="text-xl text-secondary-foreground mb-16 max-w-2xl mx-auto">
            Find the perfect repository to contribute to based on your skills, interests, and availability
          </p>
          
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          {!hasCompletedOnboarding && (
            <div className="mt-8">
              <button
                onClick={() => navigate('/onboarding')}
                className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
              >
                Complete onboarding for personalized recommendations
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {hasCompletedOnboarding ? 'Recommended For You' : 'Popular Repositories'}
              </h2>
              <p className="text-secondary-foreground">
                {hasCompletedOnboarding 
                  ? 'Based on your preferences and skill level'
                  : 'Start your open source journey with these projects'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {mockRecommendedRepos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
