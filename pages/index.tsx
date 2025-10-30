import { basePath } from "@/next.config";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import api from "@/shared/utils/axios";
import { Eye, EyeOff, Plus, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import React, { Fragment, useEffect, useState } from "react";
import EmailVerification from "@/shared/components/email-confirmation";
import { useAuth } from "@/shared/providers/auth-provider";

export interface Plan {
  name: string;
  price: string;
}

interface UserTokenData {
  token: string;
  expiresIn: string;
}

export interface UserData {
  avatar: string;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: string;
  name: string;
  userName: string;
}

export interface UserResponse {
  tokenData: UserTokenData;
  data: UserData;
  role: "Buyer" | "Seller";
  message: string;
}

interface signupData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  userName: string;
  phoneNumber: string;
  plans: Plan[];
  role: string;
  deviceToken: string;
}

const Auth = () => {
  const { signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [isEmailVerificationOpen, setIsEmailVerificationOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([{ name: "", price: "" }]);
  const [err, setError] = useState("");
  const router = useRouter();

  const initialSignupData: signupData = {
    email: "adminnextjs@gmail.com",
    password: "1234567890",
    confirmPassword: "",
    name: "",
    userName: "",
    phoneNumber: "",
    plans: plans,
    role: "Buyer",
    deviceToken: "unddu",
  } as const;

  const [data, setData] = useState<signupData>(initialSignupData);

  const { email, password } = data;
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const roleChangeHandler = (value: string) => {
    setData({ ...data, role: value });
    setError("");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      setData({ ...data, ["plans"]: plans });
      const resData: UserResponse = await signUp(data);

      if (resData.tokenData && resData.data) {
        RouteChange();
      //  setIsEmailVerificationOpen(true);
      } else if (resData.message) {
        toast.error(resData.message);
      }
    } catch (error) {
      toast.error("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  let navigate = useRouter();

  const addPlan = () => {
    if (plans.length >= 3) return;
    setPlans([...plans, { name: "", price: "" }]);
  };

  const removePlan = (index: number) => {
    if (plans.length > 1) {
      setPlans(plans.filter((_, i) => i !== index));
    }
  };

  const updatePlan = (
    index: number,
    field: "name" | "price",
    value: string
  ) => {
    const newPlans = [...plans];
    newPlans[index][field] = value;
    setPlans(newPlans);
  };

  const RouteChange = () => {
    let path = "/home/home-page";
    navigate.push(path);
  };

  const validateForm = () => {
    if (!isLogin) {
      if (!data["name"].trim()) {
        toast.error("Please enter your full name");
        return false;
      }

      if (!data["userName"].trim()) {
        toast.error("Please enter a username");
        return false;
      }

      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      if (!usernameRegex.test(data["userName"])) {
        toast.error(
          "Username must be 3-20 characters (letters, numbers, underscore only)"
        );
        return false;
      }

      if (password !== data["confirmPassword"]) {
        toast.error("Please make sure your passwords match");
        return false;
      }

      if (data["role"] === "Seller") {
        for (const plan of data["plans"]) {
          if (!plan.name.trim()) {
            toast.error("Please enter a name for all plans");
            return false;
          }
          if (!plan.price || parseFloat(plan.price) <= 0) {
            toast.error("Please enter a valid price for all plans");
            return false;
          }
        }
      }
    }
  };

  let loader = (
    <div role="status">
      {" "}
      <svg
        aria-hidden="true"
        className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <Fragment>
      {isEmailVerificationOpen && (
        <EmailVerification
          isOpen={isEmailVerificationOpen}
          onClose={() => setIsEmailVerificationOpen(false)}
        />
      )}

      <div className="min-h-screen flex">
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-hero" />
          <img
            src="/assets/images/authentication/auth-hero.png"
            alt="Feetflight platform"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1 flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-xl space-y-8 animate-fade-in">
            <div className="text-center">
              <img
                src="/assets/images/brand-logos/toggle-dark.png"
                alt="Feetflight"
                className="w-44 mx-auto mb-6 lg:hidden"
              />
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-muted-foreground font-thin text-xl">
                {isLogin
                  ? "Enter your credentials to access your account"
                  : "Sign up to start exploring exclusive content or create your first collection"}
              </p>
            </div>

            <div className="space-y-10">
              <div className="space-y-3">
                {!isLogin && (
                  <>
                    <div className="space-y-3 mb-10">
                      <Tabs
                        value={data["role"]}
                        onValueChange={(value) => {
                          roleChangeHandler(value as "Buyer" | "Seller");
                        }}
                        className="w-full"
                      >
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="Buyer">Buyer</TabsTrigger>
                          <TabsTrigger value="Seller">Seller</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xl" htmlFor="name">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Clara Saint"
                        className="h-16 pl-5 rounded-xl border-[#262626] bg-black"
                        name="name"
                        value={data["name"]}
                        onChange={changeHandler}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xl" htmlFor="username">
                        Username
                      </Label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="ClaraSaint"
                        name="userName"
                        value={data["userName"]}
                        onChange={changeHandler}
                        className="h-16 pl-5 rounded-xl border-[#262626] bg-black"
                        required
                      />
                    </div>
                  </>
                )}
                <Label className="text-xl" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={changeHandler}
                  className="h-16 pl-5 rounded-xl border-[#262626] bg-black"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label className="text-xl" htmlFor="password">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="signin-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={changeHandler}
                    className="h-16 px-5 rounded-xl border-[#262626] bg-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <>
                  <div className="space-y-3">
                    <Label className="text-xl" htmlFor="confirmPassword">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={data["confirmPassword"]}
                      onChange={changeHandler}
                      name="confirmPassword"
                      className="h-16 px-5 rounded-xl border-[#262626] bg-black"
                      required
                    />
                  </div>

                  {data["role"] === "Seller" && (
                    <>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label>Subscription Plans</Label>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={addPlan}
                            className="h-8"
                            disabled={plans.length >= 3}
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add Plan
                          </Button>
                        </div>

                        {plans.map((plan, index) => (
                          <div key={index} className="flex gap-2 items-start">
                            <div className="flex-1 space-y-2">
                              <Input
                                placeholder="Plan name (e.g., Basic)"
                                value={plan.name}
                                onChange={(e) =>
                                  updatePlan(index, "name", e.target.value)
                                }
                                className="h-16 px-5 rounded-xl border-[#262626] bg-black"
                                required
                              />
                            </div>
                            <div className="w-32 space-y-2">
                              <Input
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="Price"
                                value={plan.price}
                                onChange={(e) =>
                                  updatePlan(index, "price", e.target.value)
                                }
                                className="h-16 px-5 rounded-xl border-[#262626] bg-black"
                                required
                              />
                            </div>
                            {plans.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removePlan(index)}
                                className="h-10 w-10 text-destructive hover:text-destructive"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}

              <Button
                className="w-full h-16 rounded-xl shadow-glow"
                disabled={loading}
                onClick={isLogin ? () => {} : handleSignup}
              >
                {loading
                  ? "Please wait..."
                  : isLogin
                  ? "Sign In"
                  : "Create Account"}
              </Button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Auth.layout = "Authenticationlayout";

export default Auth;
