import {
  Plus,
  Wallet,
  Clock,
  Layers,
  Users,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-12">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Monitor collections, payments and overall activity.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition">
          <Plus size={18} />
          Create Collection
        </button>
      </div>

      {/* ================= STATS (HORIZONTAL) ================= */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max px-1">

          {[
            {
              label: "Total Collected",
              value: "₦1,250,000",
              icon: <Wallet size={20} className="text-blue-600" />,
            },
            {
              label: "Amount Pending",
              value: "₦420,000",
              icon: <Clock size={20} className="text-blue-600" />,
            },
            {
              label: "Active Collections",
              value: "4",
              icon: <Layers size={20} className="text-blue-600" />,
            },
            {
              label: "Total Contributors",
              value: "186",
              icon: <Users size={20} className="text-blue-600" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="min-w-[220px] border border-gray-200 rounded-2xl p-6 bg-white flex-shrink-0 hover:border-blue-600 transition"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{item.label}</p>
                <div>{item.icon}</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mt-4 tracking-tight">
                {item.value}
              </h2>
            </div>
          ))}

        </div>
      </div>

      {/* ================= ACTIVE COLLECTIONS (HORIZONTAL) ================= */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max px-1">

          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="min-w-[300px] border border-gray-200 rounded-2xl p-6 bg-white flex-shrink-0 hover:border-blue-600 transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">
                  Final Year Project Dues
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                32 contributors • Deadline: Mar 20, 2026
              </p>

              <div className="mt-5">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span className="text-gray-900 font-medium">₦300,000 collected</span>
                  <span className="text-gray-500">₦500,000 target</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full w-3/5" />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
