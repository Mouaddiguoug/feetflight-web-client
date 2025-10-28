import { Mail, Clock, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";

type EmailVerificationProps = {
  onClose: () => void;
  isOpen: boolean;
};

const EmailVerification = ({ onClose, isOpen }: EmailVerificationProps) => {
  const handleResendEmail = () => {
    // Add resend logic here
    console.log("Resending verification email...");
  };

  const handleClose = () => {
    onClose();
    console.log("Closing email verification...");
  };

  return (
    <div className="min-h-screen fixed z-[9999] w-screen flex items-center justify-center bg-[#000000]/40 backdrop-blur-2xl p-4">
      <Card className="w-full max-w-md p-8 bg-[#1a1a1a] border-[#313136] relative overflow-hidden">
     
        {/* Gradient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4c9aff]/10 via-transparent to-[#9333ea]/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          {/* Animated email icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#4c9aff]/20 blur-2xl rounded-full animate-pulse" />
            <div className="relative bg-[#252529] p-6 rounded-2xl border border-[#313136]">
              <Mail className="w-12 h-12 text-[#4c9aff]" strokeWidth={1.5} />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-[#fafafa]">
              Check Your Email
            </h1>
            <p className="text-[#a3a3ab] text-base leading-relaxed">
              We've sent a verification link to your email address. Click the{" "}
              <span className="text-[#4c9aff] font-semibold">
                verify button
              </span>{" "}
              in the email to confirm your account.
            </p>
          </div>

          <div className="w-full bg-[#252529]/50 border border-[#313136] rounded-lg p-4 flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#9333ea] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#a3a3ab] text-left">
              The verification link will expire in 24 hours. Make sure to check
              your spam folder if you don't see it.
            </p>
          </div>

          <div className="w-full pt-2">
            <p className="text-sm text-[#a3a3ab] mb-3">
              Didn't receive the email?
            </p>
            <Button
              onClick={handleResendEmail}
              variant="outline"
              className="w-full border-[#313136] hover:bg-[#252529] hover:border-[#4c9aff] transition-all"
            >
              Resend Verification Email
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmailVerification;
