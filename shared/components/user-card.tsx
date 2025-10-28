import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface UserCardProps {
  name: string;
  avatar: string;
  level?: number;
  verified?: boolean;
  showFollow?: boolean;
}

export const UserCard = ({ name, avatar, level, verified, showFollow = true }: UserCardProps) => {
  return (
    <div className="flex items-center gap-3 py-3">
      <Avatar className="h-12 w-12 ring-2 ring-primary/20">
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground truncate">{name}</span>
          {verified && <span className="text-xs">🔥</span>}
        </div>
        {level && (
          <Badge className="bg-gradient-level text-white border-0 text-xs px-2 mt-1">
            ⚡ Level {level}
          </Badge>
        )}
      </div>
      {showFollow && (
        <Button variant="outline" size="sm" className="shrink-0">
          Follow
        </Button>
      )}
    </div>
  );
};