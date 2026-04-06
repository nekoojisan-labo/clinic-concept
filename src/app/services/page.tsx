import type { Metadata } from "next";
import services from "@/data/services.json";

export const metadata: Metadata = { title: "診療案内" };

const iconMap: Record<string, string> = {
  stethoscope: "◎",
  heart: "◇",
  clipboard: "□",
  syringe: "◆",
  shield: "△",
  activity: "○",
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Page header */}
        <div className="mb-16">
          <p className="label-en mb-2">Services</p>
          <h1 className="font-serif text-3xl text-espresso tracking-wide">診療案内</h1>
          <div className="w-12 border-t border-copper mt-6" />
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card-warm p-6">
              <div className="flex items-start gap-4">
                <span className="text-copper text-xl mt-0.5 font-serif">{iconMap[service.icon] ?? "◎"}</span>
                <div>
                  <h2 className="font-serif text-lg text-espresso tracking-wide mb-3">{service.name}</h2>
                  <p className="text-sm text-sienna font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 pt-8 border-t border-copper/20">
          <p className="text-xs text-sienna/60 font-light leading-relaxed">
            ※ 診療内容・検査項目等についてご不明な点は、お気軽にお電話またはご来院時にお尋ねください。
          </p>
        </div>
      </div>
    </div>
  );
}
