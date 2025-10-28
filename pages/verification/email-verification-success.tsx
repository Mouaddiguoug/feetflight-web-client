import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";

const EmailVerificationSuccess = () => {
  const handleContinue = () => {
    // Add navigation logic here
    console.log("Continuing to app...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000] p-4">
      <Card className="w-full max-w-md p-8 bg-[#1a1a1a] border-[#313136] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/10 via-transparent to-[#4c9aff]/10 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="mb-2">
            <img src="/assets/images/brand-logos/desktop-dark.png" alt="Logo" className="h-12 w-auto" />
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#22c55e]/20 blur-2xl rounded-full animate-pulse" />
            <div className="relative bg-[#252529] p-6 rounded-2xl border border-[#313136]">
              <CheckCircle2 className="w-12 h-12 text-[#22c55e]" strokeWidth={1.5} />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-[#fafafa]">
              Email Verified Successfully!
            </h1>
            <p className="text-[#a3a3ab] text-base leading-relaxed">
              Your email has been confirmed. You can now access all features 
              and start using your account.
            </p>
          </div>

          <div className="w-full bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-lg p-4">
            <p className="text-sm text-[#22c55e] font-medium">
              ✓ Account activated and ready to use
            </p>
          </div>

          <div className="w-full pt-2">
            <Button 
              onClick={handleContinue}
              className="w-full bg-[#4c9aff] hover:bg-[#3b82f6] text-[#fafafa] font-semibold transition-all"
            >
              Continue to Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmailVerificationSuccess;