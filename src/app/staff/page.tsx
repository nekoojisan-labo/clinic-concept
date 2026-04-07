import type { Metadata } from "next";
import staff from "@/data/staff.json";

export const metadata: Metadata = { title: "医師紹介" };

export default function StaffPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Page header */}
        <div className="mb-16">
          <p className="label-en mb-2">Staff</p>
          <h1 className="font-serif text-3xl text-espresso tracking-wide">医師紹介</h1>
          <div className="w-12 border-t border-copper mt-6" />
        </div>

        {/* Staff cards */}
        <div className="space-y-8">
          {staff.map((member) => (
            <div key={member.id} className="card-warm p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Photo */}
                {member.id === "director" ? (
                  <img
                    src="/clinic-concept/images/staff-director.png"
                    alt={member.name}
                    className="w-28 h-36 shrink-0 object-cover"
                    style={{ border: "1px solid #E8DDD0" }}
                  />
                ) : (
                  <div
                    className="w-28 h-36 shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "#F5EFE6", border: "1px solid #E8DDD0" }}
                  >
                    <span className="text-xs text-sienna/40 font-light tracking-wider text-center px-2">
                      Photo
                    </span>
                  </div>
                )}

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="text-xs text-cream font-light px-2 py-0.5"
                      style={{ backgroundColor: "#C67B4E" }}
                    >
                      {member.role}
                    </span>
                    {member.title && (
                      <span className="text-xs text-sienna/60 font-light">{member.title}</span>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl text-espresso tracking-wide mt-2 mb-4">{member.name}</h2>

                  {member.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((s) => (
                        <span key={s} className="text-xs text-sienna font-light border border-warm-border px-2 py-0.5">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-sienna font-light leading-relaxed mb-4">{member.message}</p>

                  {member.career.length > 0 && (
                    <div>
                      <p className="label-en text-sienna/50 mb-2" style={{ fontSize: "10px" }}>Career</p>
                      <ul className="text-xs text-sienna/70 font-light space-y-1">
                        {member.career.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
