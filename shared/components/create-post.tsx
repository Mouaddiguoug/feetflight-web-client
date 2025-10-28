import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Textarea } from "@/shared/components/ui/textarea";
import { Image, FileText, List, Smile, Calendar, MapPin } from "lucide-react";
import { Globe } from "lucide-react";

export const CreatePost = () => {
  return (
    <Card className="border border-white/20 p-4">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="Your avatar" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            U
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <Textarea
            placeholder="Create a new collection"
            className="min-h-[80px] resize-none border-0 bg-transparent p-0 text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
                <Image className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
                <FileText className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
                <List className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
                <Smile className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
                <Calendar className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary hover:bg-primary/10">
                <MapPin className="h-5 w-5" />
              </Button>
            </div>
            
            <Button className="rounded-full px-6">
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};