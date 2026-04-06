import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import newsData from "@/data/news.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = newsData.find((n) => n.slug === slug);
  return { title: item?.title ?? "お知らせ" };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = newsData.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-8">
        {/* Back link */}
        <Link href="/news" className="text-xs text-copper tracking-wider hover:text-sienna transition-colors font-light inline-block mb-12">
          ← お知らせ一覧へ
        </Link>

        {/* Article */}
        <article className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs text-sienna/60 font-light">{item.date}</span>
            <span
              className="text-xs text-cream font-light px-2 py-0.5"
              style={{ backgroundColor: "#C67B4E" }}
            >
              {item.category}
            </span>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl text-espresso tracking-wide leading-snug mb-8">
            {item.title}
          </h1>
          <div className="w-12 border-t border-copper mb-8" />
          <p className="text-sm text-sienna font-light leading-[2]">{item.content}</p>
        </article>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-copper/20">
          <Link href="/news" className="text-xs text-copper tracking-wider hover:text-sienna transition-colors font-light">
            ← お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
