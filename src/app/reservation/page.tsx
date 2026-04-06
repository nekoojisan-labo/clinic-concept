import type { Metadata } from "next";
import clinic from "@/data/clinic.json";

export const metadata: Metadata = { title: "ご予約" };

export default function ReservationPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Page header */}
        <div className="mb-16">
          <p className="label-en mb-2">Reservation</p>
          <h1 className="font-serif text-3xl text-espresso tracking-wide">ご予約</h1>
          <div className="w-12 border-t border-copper mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-serif text-lg text-espresso tracking-wide mb-8">Web予約フォーム</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs text-sienna/60 tracking-wider uppercase mb-2 font-light">
                  お名前 <span className="text-copper">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="田中 花子"
                  className="w-full border border-warm-border bg-cream px-4 py-3 text-sm text-espresso font-light placeholder:text-sienna/30 focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-sienna/60 tracking-wider uppercase mb-2 font-light">
                  電話番号 <span className="text-copper">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="03-0000-0000"
                  className="w-full border border-warm-border bg-cream px-4 py-3 text-sm text-espresso font-light placeholder:text-sienna/30 focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-sienna/60 tracking-wider uppercase mb-2 font-light">
                  メールアドレス
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border border-warm-border bg-cream px-4 py-3 text-sm text-espresso font-light placeholder:text-sienna/30 focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-sienna/60 tracking-wider uppercase mb-2 font-light">
                  ご希望の診療 <span className="text-copper">*</span>
                </label>
                <select
                  required
                  className="w-full border border-warm-border bg-cream px-4 py-3 text-sm text-sienna font-light focus:outline-none focus:border-copper transition-colors appearance-none"
                >
                  <option value="">選択してください</option>
                  <option value="general">一般内科</option>
                  <option value="lifestyle">生活習慣病</option>
                  <option value="checkup">健康診断</option>
                  <option value="vaccination">予防接種</option>
                  <option value="allergy">アレルギー科</option>
                  <option value="gastro">消化器内科</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-sienna/60 tracking-wider uppercase mb-2 font-light">
                  ご希望の日時
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-warm-border bg-cream px-4 py-3 text-sm text-espresso font-light focus:outline-none focus:border-copper transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-sienna/60 tracking-wider uppercase mb-2 font-light">
                  ご相談・症状など
                </label>
                <textarea
                  rows={4}
                  placeholder="症状やご相談内容をご記入ください"
                  className="w-full border border-warm-border bg-cream px-4 py-3 text-sm text-espresso font-light placeholder:text-sienna/30 focus:outline-none focus:border-copper transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-copper w-full">
                予約を申し込む
              </button>

              <p className="text-xs text-sienna/50 font-light leading-relaxed">
                ※ 送信後、確認のご連絡をお電話またはメールにてお送りします。<br />
                ※ お急ぎの場合はお電話でのご予約をおすすめします。
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-serif text-lg text-espresso tracking-wide mb-8">お電話でのご予約</h2>
            <div className="card-warm p-6 space-y-4">
              <div>
                <p className="label-en mb-1">Tel</p>
                <a href={`tel:${clinic.phone}`} className="font-serif text-2xl text-copper hover:text-sienna transition-colors">
                  {clinic.phone}
                </a>
              </div>
              <div className="border-t border-warm-border pt-4">
                <p className="label-en mb-2">Hours</p>
                <ul className="text-xs text-sienna font-light space-y-1">
                  <li>月・火・木・金 9:00〜12:30 / 15:00〜18:30</li>
                  <li>水 9:00〜12:30（午後休診）</li>
                  <li>土 9:00〜13:00（午後休診）</li>
                  <li className="text-sienna/50">日・祝 休診</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs text-sienna/60 font-light leading-relaxed">
                初めてご来院の方は、保険証をお持ちください。<br />
                お薬手帳をお持ちの方はご持参いただけると診療がスムーズです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
