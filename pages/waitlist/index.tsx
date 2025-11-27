import WaitlistForm from "@/shared/components/waitlist-form";
import CountdownTimer from "@/shared/components/count-down";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-lime-400/20 via-lime-400/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <main className="relative z-10 mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Logo Badge */}
        <div className="flex justify-center">
            <img
              src={"/assets/images/brand-logos/desktop-dark.png"}
              alt="Feetflight"
              className="w-5/6 sm:w-2/6 md:w-[20%]"
            />
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Get early access
          </h1>
          <p className="text-base md:text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Step into luxury ahead of everyone else. Join the FeetFlight
            waitlist and claim exclusive early-access discounts.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="flex justify-center pt-2">
          <WaitlistForm />
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <div className="flex items-center -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-black" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 border-2 border-black" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-black" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 border-2 border-black" />
          </div>
          <p className="text-sm text-zinc-500">
            over <span className="font-semibold text-zinc-400">539+</span>{" "}
            others on the waitlist
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="pt-8">
          <CountdownTimer />
        </div>
      </main>
    </div>
  );
};

export default Index;
