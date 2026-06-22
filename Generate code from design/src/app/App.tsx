import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import svgPaths from "@/imports/StylishLoginPage/svg-mk8lm3pfiy";
import imgContainer from "@/imports/StylishLoginPage/ad97c1741549147b22b8600f48960f9f52a471f9.png";

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#google-clip)">
        <path d={svgPaths.p30ef7a30} fill="#4285F4" />
        <path d={svgPaths.p35541a00} fill="#34A853" />
        <path d={svgPaths.p17176680} fill="#FBBC05" />
        <path d={svgPaths.p3683500} fill="#EA4335" />
      </g>
      <defs>
        <clipPath id="google-clip">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={svgPaths.p34318b80} fill="#1A1814" />
    </svg>
  );
}

function LeftPanel() {
  return (
    <div className="relative bg-[#1a1814] w-full lg:w-[52%] flex-shrink-0 min-h-[420px] lg:min-h-screen overflow-hidden">
      {/* Decorative corner image */}
      <img
        src={imgContainer}
        alt=""
        aria-hidden
        className="absolute top-0 left-0 w-[10%] opacity-[0.03] pointer-events-none select-none"
      />

      {/* Logo */}
      <p
        className="absolute top-12 left-12 text-[#f5f4f0] text-[24px] font-bold tracking-[-0.6px] leading-8"
        style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
      >
        Alcove
      </p>

      {/* Quote + Attribution + Stats */}
      <div className="absolute left-12 right-12 top-[232px]">
        {/* Quote */}
        <p
          className="text-[#f5f4f0] text-[36px] leading-[43.2px] italic font-normal w-[384px] max-w-full"
          style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
        >
          {`"A place where your work finally feels `}
          <span className="text-[#c8a96e]">organized.</span>
          {`"`}
        </p>

        {/* Attribution */}
        <div className="mt-4">
          <p
            className="text-[#f5f4f0] text-[14px] leading-5 font-medium"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            Maya Okonkwo
          </p>
          <p
            className="text-[#7a7770] text-[14px] leading-5 font-normal mt-0.5"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            Product Designer at Meridian
          </p>
        </div>

        {/* Divider + Stats */}
        <div className="mt-8 pt-4 border-t border-white/10 flex gap-10">
          <div>
            <p
              className="text-[#c8a96e] text-[24px] font-semibold leading-8"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              12k+
            </p>
            <p
              className="text-[#7a7770] text-[12px] leading-4 mt-0.5"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Active users
            </p>
          </div>
          <div>
            <p
              className="text-[#c8a96e] text-[24px] font-semibold leading-8"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              98%
            </p>
            <p
              className="text-[#7a7770] text-[12px] leading-4 mt-0.5"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Satisfaction
            </p>
          </div>
          <div>
            <p
              className="text-[#c8a96e] text-[24px] font-semibold leading-8"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              4.9
            </p>
            <p
              className="text-[#7a7770] text-[12px] leading-4 mt-0.5"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              App rating
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p
        className="absolute bottom-8 left-12 text-[#4a4844] text-[12px] leading-4"
        style={{ fontFamily: "'Figtree', sans-serif" }}
      >
        © 2026 Alcove Inc. · Privacy · Terms
      </p>
    </div>
  );
}

function RightPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="flex-1 bg-[#f5f4f0] flex items-center justify-center px-6 py-16 min-h-screen">
      <div className="w-full max-w-[380px]">
        {/* Heading */}
        <h1
          className="text-[#1a1814] text-[28px] font-bold leading-[35px]"
          style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
        >
          Welcome back
        </h1>
        <p
          className="text-[#7a7770] text-[14px] leading-5 mt-1.5"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          Sign in to continue to your workspace.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          {/* Email field */}
          <div>
            <label
              className="block text-[#1a1814] text-[12px] font-medium tracking-[0.3px] uppercase leading-4 mb-1.5"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full h-[45.6px] bg-white rounded-[10px] px-[16.8px] text-[#1a1814] text-[14px] leading-5 outline-none border border-black/[0.12] focus:border-[#1a1814] transition-colors placeholder:text-[#bbb9b4]"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            />
          </div>

          {/* Password field */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <label
                className="text-[#1a1814] text-[12px] font-medium tracking-[0.3px] uppercase leading-4"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Password
              </label>
              <button
                type="button"
                className="text-[#c8a96e] text-[12px] leading-4 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-[45.6px] bg-white rounded-[10px] pl-[16.8px] pr-[44.8px] text-[#1a1814] text-[14px] leading-5 outline-none border border-black/[0.12] focus:border-[#1a1814] transition-colors placeholder:text-[#bbb9b4]"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#bbb9b4] hover:text-[#7a7770] transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2.5 mt-4">
            <button
              type="button"
              onClick={() => setRememberMe(!rememberMe)}
              className={`w-4 h-4 rounded-[4px] border border-black/20 flex items-center justify-center transition-colors flex-shrink-0 ${rememberMe ? "bg-[#1a1814] border-[#1a1814]" : "bg-white"}`}
              aria-checked={rememberMe}
              role="checkbox"
            >
              {rememberMe && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#f5f4f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <span
              className="text-[#7a7770] text-[14px] font-medium leading-5"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Keep me signed in
            </span>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="mt-4 w-full h-11 bg-[#1a1814] text-[#f5f4f0] text-[14px] font-medium rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#2c2a26] transition-colors"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            Sign in
            <ArrowRight size={15} strokeWidth={1.25} />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex-1 h-px bg-black/10" />
          <span
            className="text-[#bbb9b4] text-[12px] leading-4"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            or continue with
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-4 mt-8">
          <button
            className="flex-1 h-[41.6px] bg-white border border-black/[0.12] rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#f0ede8] transition-colors"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            <GoogleIcon />
            <span className="text-[#1a1814] text-[14px] font-medium leading-5">Google</span>
          </button>
          <button
            className="flex-1 h-[41.6px] bg-white border border-black/[0.12] rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#f0ede8] transition-colors"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            <GitHubIcon />
            <span className="text-[#1a1814] text-[14px] font-medium leading-5">GitHub</span>
          </button>
        </div>

        {/* Sign up link */}
        <p
          className="text-center mt-8 text-[#7a7770] text-[14px] leading-5"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          No account yet?{" "}
          <button className="text-[#1a1814] font-medium hover:underline">
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
