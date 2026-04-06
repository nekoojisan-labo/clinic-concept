import type { Metadata } from "next";
import clinic from "@/data/clinic.json";

export const metadata: Metadata = { title: "アクセス" };

export default function AccessPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Page header */}
        <div className="mb-16">
          <p className="label-en mb-2">Access</p>
          <h1 className="font-serif text-3xl text-espresso tracking-wide">アクセス</h1>
          <div className="w-12 border-t border-copper mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Map */}
          <div>
            <div
              className="w-full"
              style={{ border: "1px solid #E8DDD0" }}
            >
              <iframe
                src={clinic.mapEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="クリニック地図"
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8 text-sm text-sienna font-light">
            <div>
              <p className="label-en mb-3">Clinic Name</p>
              <p className="font-serif text-espresso text-base">{clinic.name}</p>
            </div>

            <div className="border-t border-warm-border pt-6">
              <p className="label-en mb-3">Address</p>
              <p>〒{clinic.postalCode}</p>
              <p className="mt-1">{clinic.address}</p>
            </div>

            <div className="border-t border-warm-border pt-6">
              <p className="label-en mb-3">Station</p>
              <p className="leading-relaxed">{clinic.nearestStation}</p>
            </div>

            <div className="border-t border-warm-border pt-6">
              <p className="label-en mb-3">Parking</p>
              <p>{clinic.parking}</p>
            </div>

            <div className="border-t border-warm-border pt-6">
              <p className="label-en mb-3">Tel / Fax</p>
              <p>
                TEL:{" "}
                <a href={`tel:${clinic.phone}`} className="text-copper hover:text-sienna transition-colors">
                  {clinic.phone}
                </a>
              </p>
              <p className="mt-1">FAX: {clinic.fax}</p>
            </div>
          </div>
        </div>

        {/* Hours table */}
        <div className="mt-16 pt-12 border-t border-copper/20">
          <p className="label-en mb-3">Hours</p>
          <h2 className="font-serif text-xl text-espresso tracking-wide mb-8">診療時間</h2>
          <table className="text-sm text-sienna font-light w-full max-w-md">
            <thead>
              <tr className="border-b border-copper/20">
                <th className="text-left py-2 font-light text-xs tracking-wider text-sienna/60 w-20">曜日</th>
                <th className="text-left py-2 font-light text-xs tracking-wider text-sienna/60">午前</th>
                <th className="text-left py-2 font-light text-xs tracking-wider text-sienna/60">午後</th>
              </tr>
            </thead>
            <tbody>
              {clinic.hours.map((h) => (
                <tr key={h.day} className="border-b border-warm-border/50">
                  <td className="py-2">{h.day}</td>
                  <td className="py-2">{h.morning === "休診" ? <span className="text-sienna/40">−</span> : h.morning}</td>
                  <td className="py-2">{h.afternoon === "休診" ? <span className="text-sienna/40">−</span> : h.afternoon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
