import { Button } from "@/shared/components/ui/button";

interface UserCardProps {
  username: string;
  level: number;
  avatar: string;
  emoji?: string;
}

export const UserCard = ({ username, level, avatar, emoji }: UserCardProps) => {
  return (
    <div className="flex items-center gap-3 py-3 group">
      <img
        src={avatar}
        alt={username}
        className="w-12 h-12 rounded-full object-cover border-2 border-[#25262b] group-hover:border-[#7c3aed]/50 transition-colors"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#fafafa]">{username}</span>
          {emoji && <span>{emoji}</span>}
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-medium inline-block mt-1">
          ⚡ Level {level}
        </span>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white rounded-full px-6"
      >
        Follow
      </Button>
    </div>
  );
};
