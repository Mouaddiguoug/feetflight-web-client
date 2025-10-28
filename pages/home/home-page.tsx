import { CreatePost } from "@/shared/components/create-post";
import { PostCard } from "@/shared/components/post-card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { UserCard } from "@/shared/components/user-card";
import RequireAuth from "@/shared/utils/require-auth";
import { withAuth } from "@/shared/utils/with-auth";
import { Search } from "lucide-react";
import { Fragment, useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"following" | "suggestions">(
    "following"
  );

  const posts = [
    {
      user: {
        name: "Sarah Chen",
        username: "sarahchen",
        level: 4,
        verified: false,
        avatar:
          "https://i.pinimg.com/1200x/44/e8/a0/44e8a0d349d1652b701c15c8db717c6e.jpg",
      },
      content:
        "Just finished an amazing hike! The views from the top were absolutely breathtaking. Nature never fails to inspire me. 🏔️✨",
      images: [
        "https://i.pinimg.com/736x/d5/1a/4c/d51a4c70242ba6ad85a0c36f3350b58d.jpg",
        "https://i.pinimg.com/736x/b8/d3/df/b8d3df6ac9c64cec2fdaf67ed624a3f3.jpg",
      ],
      timestamp: "2h ago",
      likes: 61,
      hearts: 6200,
      shares: 61,
    },
    {
      user: {
        name: "Alex Rivera",
        username: "alexr",
        level: 4,
        verified: false,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      content: "Coffee and coding - my perfect morning routine ☕💻",
      images: [
        "https://i.pinimg.com/736x/b8/d3/df/b8d3df6ac9c64cec2fdaf67ed624a3f3.jpg",
        "https://i.pinimg.com/1200x/72/1f/a0/721fa0447a77f7e791524b2623a28a93.jpg",
      ],
      timestamp: "5h ago",
      likes: 61,
      hearts: 6200,
      shares: 61,
    },
    {
      user: {
        name: "Maya Johnson",
        level: 4,
        verified: false,
        username: "mayaj",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
      },
      content:
        "Exploring new places and trying new food. Travel days are the best days! 🌍🍜",
      images: [
        "https://i.pinimg.com/736x/53/a6/85/53a68523c746d5a473ffbf217747bec5.jpg",
        "https://i.pinimg.com/736x/c7/ba/2d/c7ba2d6e2ac1a80eb9117aa30337a690.jpg",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      ],
      timestamp: "1d ago",
      likes: 61,
      hearts: 6200,
      shares: 61,
    },
  ];

  const exploreUsers = [
    {
      name: "Bessie Cooper",
      avatar:
        "https://i.pinimg.com/736x/53/a6/85/53a68523c746d5a473ffbf217747bec5.jpg",
      verified: false,
    },
    {
      name: "Jenny Suck",
      avatar:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      verified: false,
    },
  ];

  const bestSellers = [
    {
      name: "FeetSBL",
      avatar:
        "https://i.pinimg.com/736x/53/a6/85/53a68523c746d5a473ffbf217747bec5.jpg",
      level: 8,
      verified: true,
    },
    {
      name: "Hoooottile",
      avatar:
        "https://i.pinimg.com/736x/53/a6/85/53a68523c746d5a473ffbf217747bec5.jpg",
      level: 4,
      verified: false,
    },
    {
      name: "Maria-ther",
      avatar:
        "https://i.pinimg.com/736x/53/a6/85/53a68523c746d5a473ffbf217747bec5.jpg",
      level: 3,
      verified: true,
    },
    {
      name: "SexyLady02",
      avatar:
        "https://i.pinimg.com/736x/53/a6/85/53a68523c746d5a473ffbf217747bec5.jpg",
      level: 2,
      verified: false,
    },
  ];

  return (
  
      <Fragment>
        <div className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto flex gap-6 p-4">
 
            <div className="flex-1 max-w-2xl">
    
              <div className="flex gap-8 mb-6 ">
                <button
                  onClick={() => setActiveTab("following")}
                  className={`pb-4 px-2 font-semibold transition-colors relative ${
                    activeTab === "following"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Following
                  {activeTab === "following" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("suggestions")}
                  className={`pb-4 px-2 font-semibold transition-colors relative ${
                    activeTab === "suggestions"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Suggestions
                  {activeTab === "suggestions" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
                  )}
                </button>
              </div>

              <CreatePost />

              <div className="space-y-6">
                {posts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>

              <div className="flex items-center justify-between mt-6 text-sm text-muted-foreground">
                <span>1 - 10 of 450</span>
                <div className="flex items-center gap-4">
                  <span>Rows per page: 10</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" disabled>
                      ←
                    </Button>
                    <Button variant="ghost" size="sm">
                      →
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 shrink-0">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search profiles"
                  className="pl-12 bg-input border-border rounded-full h-12"
                />
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-6">
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  Best sellers <span className="text-xl">🔥</span>
                </h2>
                <div className="space-y-1">
                  {bestSellers.map((user, index) => (
                    <UserCard key={index} {...user} />
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4 text-accent">
                  Show more
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-6">
                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                  Explore <span className="text-xl">😊</span>
                </h2>
                <div className="space-y-1">
                  {exploreUsers.map((user, index) => (
                    <UserCard key={index} {...user} />
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4 text-accent">
                  Show more
                </Button>
              </div>

              <div className="text-xs text-muted-foreground space-y-2">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </a>
                </div>
                <p>Ads Info More © 2025 Feetflight, LLC.</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
  );
};

Home.layout = "Contentlayout";
export default Home;
