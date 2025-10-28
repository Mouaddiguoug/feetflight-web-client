import { Heart, MessageCircle, Share2, Coins, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface PostCardProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    level: number;
    verified?: boolean;
  };
  content: string;
  images: string[];
  timestamp: string;
  likes: number;
  hearts: number;
  shares: number;
}

export const PostCard = ({ user, content, images, timestamp, likes, hearts, shares }: PostCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
      <div className="flex items-start gap-3 mb-4">
        <Avatar className="h-12 w-12 ring-2 ring-primary/20">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{user.name}</span>
            {user.verified && <span className="text-xs">🔥</span>}
            <Badge className="bg-gradient-level text-white border-0 text-xs px-2">
              ⚡ Level {user.level}
            </Badge>
          </div>
          <span className="text-sm text-muted-foreground">{timestamp}</span>
        </div>
      </div>

      <p className="text-foreground mb-4">{content}</p>

      {images.length > 0 && (
        <div className="relative aspect-square overflow-hidden bg-muted">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full">
                <img
                  src={image}
                  alt={`Post image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-lg transition-all hover:bg-background hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-lg transition-all hover:bg-background hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-primary w-6"
                        : "bg-background/60"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex items-center gap-6 mb-4 text-muted-foreground">
        <button className="flex items-center gap-2 hover:text-foreground transition-colors">
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">{likes}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-pink-500 transition-colors">
          <Heart className="h-5 w-5" />
          <span className="text-sm">{hearts.toLocaleString()}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-accent transition-colors">
          <Share2 className="h-5 w-5" />
          <span className="text-sm">{shares}</span>
        </button>
      </div>

      <div className="flex gap-3">
        <Button className="flex-1">
          <Coins className="h-4 w-4" />
          $ Send tip
        </Button>
        <Button variant="outline" className="flex-1">
          Private call / 100 💰
        </Button>
      </div>
    </div>
  );
};