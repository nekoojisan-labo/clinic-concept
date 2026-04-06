import type { Metadata } from "next";
import Link from "next/link";
import newsData from "@/data/news.json";

export const metadata: Metadata = { title: "お知らせ" };

export default function NewsPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Page header */}
        <div className="mb-16">
          <p className="label-en mb-2">News</p>
          <h1 className="font-serif text-3xl text-espresso tracking-wide">お知らせ</h1>
          <div className="w-12 border-t border-copper mt-6" />
        </div>

        {/* News list */}
        <div className="space-y-4">
          {newsData.map((item) => (
            <Link key={item.slug} href={`/news/${item.slug}`} className="card-warm block p-6">
              <div className="flex items-start gap-4">
                <span className="text-xs text-sienna/60 font-light mt-0.5 shrink-0">{item.date}</span>
                <span
                  className="text-xs text-cream font-light px-2 py-0.5 shrink-0"
                  style={{ backgroundColor: "#C67B4E" }}
                >
                  {item.category}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-espresso font-light mb-2">{item.title}</p>
                  <p className="text-xs text-sienna/60 font-light leading-relaxed line-clamp-2">{item.content}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
