import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

interface PostCardProps {
  username: string;
  level: number;
  timeAgo: string;
  text: string;
  image: string;
  comments: number;
  likes: string;
  shares: number;
  avatar: string;
}

export const PostCard = ({
  username,
  level,
  timeAgo,
  text,
  image,
  comments,
  likes,
  shares,
  avatar,
}: PostCardProps) => {
  return (
    <div className="bg-[#131417] border border-[#25262b] rounded-xl p-4 mb-6 transition-all hover:border-[#7c3aed]/30">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar}
          alt={username}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#7c3aed]/20"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#fafafa]">{username}</span>
            <span className="text-[#a1a1aa] text-sm">· {timeAgo}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-medium">
              ⚡ Level {level}
            </span>
          </div>
        </div>
      </div>

      <p className="text-[#fafafa] mb-4">{text}</p>

      <div className="rounded-xl overflow-hidden mb-4">
        <img src={image} alt="Post content" className="w-full h-auto" />
      </div>

      <div className="flex items-center gap-6 mb-4 text-[#a1a1aa]">
        <button className="flex items-center gap-2 hover:text-[#fafafa] transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-[#ef4444] transition-colors">
          <Heart className="w-5 h-5" />
          <span className="text-[#ef4444] font-semibold">{likes}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-[#fafafa] transition-colors">
          <Share2 className="w-5 h-5" />
          <span>{shares}</span>
        </button>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1 bg-[#7c3aed]/10 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white rounded-full"
        >
          💰 Send tip
        </Button>
        <Button className="flex-1 bg-[#7c3aed] hover:bg-[#7c3aed]/90 text-white rounded-full">
          Private call / 100 🪙
        </Button>
      </div>
    </div>
  );
};
