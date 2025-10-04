import { Star, GitFork, Clock, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export interface RepoData {
  name: string;
  description: string;
  language: string;
  stars: number;
  lastCommit: string;
  tags: string[];
  url: string;
}

interface RepoCardProps {
  repo: RepoData;
  isHighlight?: boolean;
  whyRecommended?: string;
}

const RepoCard = ({ repo, isHighlight = false, whyRecommended }: RepoCardProps) => {
  return (
    <div 
      className={`bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] ${
        isHighlight ? 'shadow-lg border-primary/50 bg-gradient-to-br from-card to-primary/5' : 'shadow-[var(--shadow-card)]'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`font-bold ${isHighlight ? 'text-xl' : 'text-lg'} text-foreground hover:text-primary transition-colors`}>
            {repo.name}
          </h3>
          <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
            {repo.language}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {repo.description}
        </p>

        {whyRecommended && (
          <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-xs font-medium text-primary mb-1">Why recommended</p>
            <p className="text-sm text-foreground">{whyRecommended}</p>
          </div>
        )}

        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            <span>{repo.stars.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{repo.lastCommit}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {repo.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent-foreground rounded-md border border-accent/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Button 
            variant={isHighlight ? "hero" : "default"}
            className="w-full"
            onClick={() => window.open(repo.url, '_blank')}
          >
            <span>View on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
