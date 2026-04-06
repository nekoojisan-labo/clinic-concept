import Link from "next/link";
import clinic from "@/data/clinic.json";

export default function Footer() {
  return (
    <footer className="border-t border-copper/20 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-lg text-espresso tracking-wide">{clinic.name}</h3>
            <p className="text-xs text-sienna mt-3 leading-relaxed font-light">
              〒{clinic.postalCode}<br />{clinic.address}
            </p>
            <p className="text-xs text-sienna mt-2 font-light">
              TEL: <a href={"tel:" + clinic.phone} className="text-copper hover:text-sienna transition-colors">{clinic.phone}</a>
            </p>
          </div>
          <div>
            <p className="label-en mb-3">Hours</p>
            <table className="text-xs text-sienna w-full font-light">
              <thead><tr className="border-b border-warm-border"><th className="text-left py-1">曜日</th><th className="text-left py-1">午前</th><th className="text-left py-1">午後</th></tr></thead>
              <tbody>
                {clinic.hours.map((h) => (
                  <tr key={h.day} className="border-b border-warm-border/50">
                    <td className="py-1">{h.day}</td>
                    <td className="py-1">{h.morning === "休診" ? "−" : h.morning}</td>
                    <td className="py-1">{h.afternoon === "休診" ? "−" : h.afternoon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="label-en mb-3">Pages</p>
            <ul className="text-xs text-sienna space-y-2 font-light">
              <li><Link href="/" className="hover:text-copper">ホーム</Link></li>
              <li><Link href="/services" className="hover:text-copper">診療案内</Link></li>
              <li><Link href="/staff" className="hover:text-copper">医師紹介</Link></li>
              <li><Link href="/access" className="hover:text-copper">アクセス</Link></li>
              <li><Link href="/news" className="hover:text-copper">お知らせ</Link></li>
              <li><Link href="/reservation" className="hover:text-copper">ご予約</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-copper/10 text-center text-xs text-sienna/60 font-light">
          &copy; 2026 {clinic.name}
        </div>
      </div>
    </footer>
  );
}
