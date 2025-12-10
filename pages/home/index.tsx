import { Search, Image, Smile, FileText, Video, Plus } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { PostCard } from "@/shared/components/post-card";
import { UserCard } from "@/shared/components/user-card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section - Feed */}
          <div className="lg:col-span-7">
            <Tabs defaultValue="following" className="w-full">
              <TabsList className="w-full grid grid-cols-2 bg-transparent border-b border-[#25262b] rounded-none h-auto p-0">
                <TabsTrigger
                  value="following"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7c3aed] data-[state=active]:text-[#7c3aed] text-[#a1a1aa] font-semibold pb-4"
                >
                  Following
                </TabsTrigger>
                <TabsTrigger
                  value="suggestions"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#7c3aed] data-[state=active]:text-[#7c3aed] text-[#a1a1aa] font-semibold pb-4"
                >
                  Suggestions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="following" className="mt-6">
                {/* Post Creation */}
                <div className="bg-[#131417] border border-[#25262b] rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                      alt="Your avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <Input
                        placeholder="Drop something irresistible..."
                        className="bg-transparent border-none text-[#fafafa] placeholder:text-[#a1a1aa] focus-visible:ring-0 text-base px-0"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:bg-[#7c3aed]/10">
                        <Image className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:bg-[#7c3aed]/10">
                        <Video className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:bg-[#7c3aed]/10">
                        <FileText className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:bg-[#7c3aed]/10">
                        <Smile className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-[#7c3aed] hover:bg-[#7c3aed]/10">
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                    <Button className="bg-[#7c3aed] hover:bg-[#7c3aed]/90 text-white rounded-full px-8">
                      Post
                    </Button>
                  </div>
                </div>

                {/* Feed Posts */}
                <PostCard
                  username="Hoooottile"
                  level={4}
                  timeAgo="23s"
                  text="Is this hot enough for you?"
                  image="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop"
                  comments={61}
                  likes="6.2K"
                  shares={61}
                  avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                />

                <PostCard
                  username="Maria-ther"
                  level={3}
                  timeAgo="53s"
                  text="Suck my toes 🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓"
                  image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop"
                  comments={45}
                  likes="3.8K"
                  shares={32}
                  avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                />
              </TabsContent>

              <TabsContent value="suggestions" className="mt-6">
                <div className="text-center py-12 text-[#a1a1aa]">
                  <p>No suggestions at the moment</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Section - Sidebar */}
          <div className="lg:col-span-5">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1aa]" />
              <Input
                placeholder="Search profiles"
                className="pl-12 bg-[#1c1d21] border-[#25262b] rounded-full h-12 text-[#fafafa] placeholder:text-[#a1a1aa] focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
              />
            </div>

            {/* Best Sellers */}
            <div className="bg-[#131417] border border-[#25262b] rounded-xl p-5 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                Best sellers <span className="text-2xl">🔥</span>
              </h2>
              <div className="space-y-1">
                <UserCard
                  username="FeetSBL"
                  level={8}
                  emoji="🔥"
                  avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                />
                <UserCard
                  username="Hoooottile"
                  level={4}
                  emoji="🔥"
                  avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                />
                <UserCard
                  username="Maria-ther"
                  level={3}
                  emoji="💕"
                  avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                />
                <UserCard
                  username="SexyLady02"
                  level={5}
                  avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                />
              </div>
              <button className="text-[#3b82f6] hover:text-[#3b82f6]/80 font-semibold mt-4 transition-colors">
                Show more
              </button>
            </div>

            {/* Explore */}
            <div className="bg-[#131417] border border-[#25262b] rounded-xl p-5 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                Explore <span className="text-2xl">🤩</span>
              </h2>
              <div className="space-y-1">
                <UserCard
                  username="Bessie Cooper"
                  level={6}
                  avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                />
                <UserCard
                  username="Jenny Suck"
                  level={7}
                  avatar="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
                />
              </div>
              <button className="text-[#3b82f6] hover:text-[#3b82f6]/80 font-semibold mt-4 transition-colors">
                Show more
              </button>
            </div>

            {/* Footer */}
            <div className="text-[#a1a1aa] text-sm space-y-2">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <a href="#" className="hover:text-[#fafafa] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#fafafa] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#fafafa] transition-colors">
                  Cookie Policy
                </a>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <a href="#" className="hover:text-[#fafafa] transition-colors">
                  Ads Info
                </a>
                <a href="#" className="hover:text-[#fafafa] transition-colors">
                  More
                </a>
                <span>© 2025 Feetflight, Inc.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8 pb-8">
          <span className="text-[#a1a1aa] text-sm">1 - 10 of 460</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#a1a1aa]">Rows per page:</span>
            <select className="bg-[#1c1d21] border border-[#25262b] rounded-lg px-3 py-1 text-[#fafafa]">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-lg">
                ←
              </Button>
              <Button variant="outline" size="icon" className="rounded-lg">
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.layout = "Contentlayout";
export default Home;
