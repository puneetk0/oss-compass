import { Badge } from './ui/badge';
import { Star, Clock, ExternalLink } from 'lucide-react';
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
    <div className={`group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 ${isHighlight ? 'border-primary/50' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
            {repo.name}
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {repo.description}
          </p>
        </div>
        <Button 
          variant="ghost"
          size="sm"
          className="ml-4 text-muted-foreground hover:text-foreground"
          onClick={() => window.open(repo.url, '_blank')}
        >
          <Star className="h-5 w-5" />
        </Button>
      </div>
      
      {whyRecommended && (
        <div className="bg-card border border-border p-4 rounded-lg mb-4">
          <p className="text-sm text-foreground">{whyRecommended}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {repo.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20 border-none">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span>{repo.language}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          <span>{repo.stars.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>Updated {repo.lastCommit}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
