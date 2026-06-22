import { useNavigate } from "react-router";
import { LayoutDashboard, Users, FileText, Settings, LogOut } from "lucide-react";

const stats = [
  { label: "Total Projects", value: "12", icon: LayoutDashboard },
  { label: "Team Members", value: "24", icon: Users },
  { label: "Documents", value: "48", icon: FileText },
  { label: "Settings", value: "6", icon: Settings },
];

export default function HomePage() {
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      <nav className="border-b border-black/10 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span
            className="text-[#1a1814] text-[22px] font-bold tracking-[-0.6px]"
            style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Alcove
          </span>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-[#7a7770] text-[14px] font-medium hover:text-[#1a1814] transition-colors"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <h1
            className="text-[#1a1814] text-[32px] font-bold leading-[38px]"
            style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Welcome back, Maya
          </h1>
          <p
            className="mt-2 text-[#7a7770] text-[15px] leading-5"
            style={{ fontFamily: "'Figtree', sans-serif" }}
          >
            Here's what's happening with your workspace today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-6 border border-black/[0.06]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1814]/5">
                  <Icon size={18} className="text-[#1a1814]" />
                </div>
                <p
                  className="text-[#1a1814] text-[28px] font-semibold leading-8"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-[#7a7770] text-[13px] leading-4"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-xl bg-white p-6 border border-black/[0.06]">
            <h2
              className="text-[#1a1814] text-[16px] font-semibold leading-5"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Recent Activity
            </h2>
            <div className="mt-4 space-y-4">
              {["Updated project proposal", "Added team member", "Completed design review"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#c8a96e]" />
                  <p
                    className="text-[#4a4844] text-[14px] leading-4"
                    style={{ fontFamily: "'Figtree', sans-serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 border border-black/[0.06]">
            <h2
              className="text-[#1a1814] text-[16px] font-semibold leading-5"
              style={{ fontFamily: "'Figtree', sans-serif" }}
            >
              Quick Actions
            </h2>
            <div className="mt-4 space-y-3">
              {["New Project", "Invite Members", "Upload Document"].map((action) => (
                <button
                  key={action}
                  className="w-full rounded-lg border border-black/[0.08] px-4 py-2.5 text-left text-[14px] font-medium text-[#4a4844] hover:bg-[#1a1814]/5 hover:text-[#1a1814] transition-colors"
                  style={{ fontFamily: "'Figtree', sans-serif" }}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
