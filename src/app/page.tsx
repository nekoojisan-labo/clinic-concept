import Link from "next/link";
import clinic from "@/data/clinic.json";
import newsData from "@/data/news.json";

export default function Home() {
  const latestNews = newsData.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-cream overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/clinic-concept/images/hero-lobby.png)" }}
        />
        {/* Cream overlay for text readability */}
        <div className="absolute inset-0 bg-cream/60" />
        {/* Morning light decoration — amber radial from upper-right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, rgba(232,184,109,0.12), transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-8 w-full py-24 relative z-10">
          <p className="label-en mb-4">Sakura Clinic</p>
          <h1 className="font-serif text-5xl md:text-6xl text-espresso tracking-wide leading-tight mb-6">
            さくら内科<br />クリニック
          </h1>
          <div className="w-12 border-t border-copper my-6" />
          <p className="text-sienna font-light text-base md:text-lg leading-relaxed max-w-md mb-10">
            {clinic.catchphrase}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/reservation" className="btn-copper inline-block">
              ご予約はこちら
            </Link>
            <Link href="/services" className="inline-block px-6 py-3 text-sm font-sans font-medium tracking-wider text-sienna border border-warm-border hover:border-copper hover:text-copper transition-colors">
              診療案内を見る
            </Link>
          </div>
          <div className="mt-16 text-xs text-sienna/50 font-light tracking-widest uppercase">
            {clinic.nameEn}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-line" />

      {/* News */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label-en mb-2">News</p>
              <h2 className="font-serif text-2xl text-espresso tracking-wide">お知らせ</h2>
            </div>
            <Link href="/news" className="text-xs text-copper tracking-wider hover:text-sienna transition-colors font-light">
              すべて見る →
            </Link>
          </div>
          <div className="space-y-4">
            {latestNews.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="card-warm block p-5">
                <div className="flex items-start gap-4">
                  <span className="text-xs text-sienna/60 font-light mt-0.5 shrink-0">{item.date}</span>
                  <span
                    className="text-xs text-cream font-light px-2 py-0.5 shrink-0"
                    style={{ backgroundColor: "#C67B4E" }}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm text-espresso font-light leading-snug">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-line" />

      {/* Hours */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="label-en mb-2">Hours</p>
              <h2 className="font-serif text-2xl text-espresso tracking-wide mb-8">診療時間</h2>
              <table className="text-sm text-sienna w-full font-light">
                <thead>
                  <tr className="border-b border-copper/20">
                    <th className="text-left py-2 font-light text-xs tracking-wider text-sienna/60">曜日</th>
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
            <div>
              <p className="label-en mb-2">Access</p>
              <h2 className="font-serif text-2xl text-espresso tracking-wide mb-8">アクセス</h2>
              <div className="space-y-4 text-sm text-sienna font-light">
                <div>
                  <p className="text-xs text-sienna/50 tracking-wider uppercase mb-1">Address</p>
                  <p>〒{clinic.postalCode}</p>
                  <p>{clinic.address}</p>
                </div>
                <div className="border-t border-warm-border/50 pt-4">
                  <p className="text-xs text-sienna/50 tracking-wider uppercase mb-1">Station</p>
                  <p className="leading-relaxed">{clinic.nearestStation}</p>
                </div>
                <div className="border-t border-warm-border/50 pt-4">
                  <p className="text-xs text-sienna/50 tracking-wider uppercase mb-1">Tel</p>
                  <a href={`tel:${clinic.phone}`} className="text-copper hover:text-sienna transition-colors text-base">
                    {clinic.phone}
                  </a>
                </div>
                <Link href="/access" className="inline-block mt-4 text-xs text-copper tracking-wider hover:text-sienna transition-colors">
                  詳しいアクセスを見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-line" />

      {/* CTA */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="label-en mb-3">Reservation</p>
          <h2 className="font-serif text-2xl text-espresso tracking-wide mb-4">ご予約・ご相談</h2>
          <div className="w-8 border-t border-copper mx-auto mb-6" />
          <p className="text-sienna font-light text-sm leading-relaxed max-w-sm mx-auto mb-8">
            診療のご予約はお電話またはWebからお気軽にどうぞ。初めての方も歓迎いたします。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/reservation" className="btn-copper inline-block">
              Web予約
            </Link>
            <a href={`tel:${clinic.phone}`} className="inline-block px-6 py-3 text-sm font-sans font-medium tracking-wider text-sienna border border-warm-border hover:border-copper hover:text-copper transition-colors">
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
