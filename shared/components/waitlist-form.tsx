import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { toast } from "react-hot-toast";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { Mail, Check } from "lucide-react";
import api from "../utils/axios";
import { AxiosError } from "axios";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"Buyer" | "Seller">("Buyer");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await api.post(
        "https://dev.feetflight.com/users/waitlist",
        { data: { email, role } }
      );

      console.log(data);
      setIsLoading(false);
      setIsSubmitted(true);

      return data;
    } catch (err) {
      setIsLoading(false);
      const error = err as AxiosError<{ message?: string }>;

      // ⚠ Server responded with error
      if (error.response) {
        toast(error.response.data.error);
        return {
          success: false,
          status: error.response.status,
          message: error.response.data?.message || "Server error occurred.",
          error: error.response.data,
        };
      }

      // 📡 Request sent but no response
      if (error.request) {
        return {
          success: false,
          message:
            "No response from the server. Check your internet connection.",
        };
      }

      // ❓ Something else happened
      return {
        success: false,
        message: error.message || "Something went wrong.",
      };
    }

    // Simulate API call
    toast("We'll notify you when Feetflight launches.");
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600/10 ring-2 ring-emerald-600/20">
          <Check className="h-8 w-8 text-emerald-600" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold text-zinc-50">
            You're on the list!
          </h3>
          <p className="text-zinc-400 max-w-sm">
            We'll send you an email at{" "}
            <span className="text-zinc-50 font-medium">{email}</span> when we
            launch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <Tabs
        value={role}
        onValueChange={(value) => setRole(value as "Buyer" | "Seller")}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 bg-zinc-900/50 border border-zinc-800 h-12">
          <TabsTrigger
            value="Buyer"
            className="text-zinc-400 data-[state=active]:bg-lime-400 data-[state=active]:text-black data-[state=active]:shadow-lg transition-all duration-200"
          >
            I'm a Fan
          </TabsTrigger>
          <TabsTrigger
            value="Seller"
            className="text-zinc-400 data-[state=active]:bg-lime-400 data-[state=active]:text-black data-[state=active]:shadow-lg transition-all duration-200"
          >
            I'm a Creator
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="relative group">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 pl-4 pr-32 text-base bg-zinc-900/50 border-zinc-800 focus:border-lime-400 transition-colors text-white placeholder:text-zinc-500 rounded-lg"
          required
        />
        <Button
          type="submit"
          size="sm"
          disabled={isLoading}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-10 px-6 text-sm font-semibold bg-lime-400 hover:bg-lime-300 text-black transition-all duration-300 rounded-md"
        >
          {isLoading ? "Joining..." : "join waitlist"}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
