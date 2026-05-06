import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const navItems = [
    { label: "創設者の想い", href: "/founder" },
    { label: "申込方法", href: "/application" },
    { label: "講師紹介", href: "/instructors" },
    { label: "利用規約", href: "/terms" },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="py-3 px-4 flex items-center justify-between border-b border-border/50 animate-fade-in">
        <Image
          src="/logo.jpg"
          alt="pass on"
          width={56}
          height={36}
          className="object-contain"
        />
        <span className="text-[10px] text-muted-foreground tracking-wider">オンライン家庭教師</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-4 py-4 overflow-y-auto">
        {/* pass on とは */}
        <section className="mb-4 text-center animate-fade-in-up">
          <h1 className="text-sm font-medium text-primary tracking-wide font-serif">
            オンライン家庭教師『pass on』の特徴
          </h1>
        </section>

        {/* 強みは多彩な講師 */}
        <section className="border border-border/60 rounded-xl p-4 mb-3 bg-card shadow-sm animate-fade-in-up animation-delay-100">
          <h2 className="text-[13px] font-semibold text-primary mb-3 pb-2 border-b border-border/40 tracking-wide font-serif">
            強みは多彩な講師
          </h2>
          <ul className="space-y-1.5 text-foreground text-[11px] mb-3">
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">2017年ミュージカル『Annie』のアニー役</span>
            </li>
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">二十五代珠算名人位</span>
            </li>
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">フラッシュ暗算 元ギネス記録保持者</span>
            </li>
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">早稲田実業学校 高等部『大隈賞』受賞者</span>
            </li>
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">現役の早稲田大学生 etc.</span>
            </li>
          </ul>
          <p className="text-center text-muted-foreground text-[10px] py-2 bg-muted/50 rounded-lg tracking-wide">
            数学、英語、芸術、簿記・会計、フラッシュ暗算、算盤、スポーツ
          </p>
        </section>

        {/* きっかけづくりの場 */}
        <section className="border border-border/60 rounded-xl p-4 mb-3 bg-card shadow-sm animate-fade-in-up animation-delay-200">
          <h2 className="text-[13px] font-semibold text-primary mb-3 pb-2 border-b border-border/40 tracking-wide font-serif">
            『きっかけづくり』の場
          </h2>
          <p className="text-foreground text-[11px] mb-3 leading-relaxed">
            pass onが一番大事にしていること、それは大切な「きっかけづくり」です
          </p>
          <ul className="space-y-1.5 text-foreground text-[11px] mb-3">
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">モチベーションを上げてくれる</span>
            </li>
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">前に進む力を与えてくれる</span>
            </li>
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">自己肯定感を上げてくれる</span>
            </li>
            <li className="flex items-start gap-2 group">
              <span className="w-1.5 h-1.5 bg-primary/70 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary transition-colors"></span>
              <span className="leading-relaxed">多くの選択肢を与えてくれる</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-[10px] leading-relaxed">
            全ては「きっかけ」から始まります。何かの「きっかけ」で、モチベーションが上がり、楽しく前向きに、自ら進んで取り組むようになります。pass onは、そんな「きっかけづくり」の場所を目指します。
          </p>
        </section>

        {/* タグライン */}
        <p className="text-center text-primary text-xs font-medium py-2 tracking-wider font-serif animate-fade-in-up animation-delay-300">
          「なりたい自分に近づく」「なりたい自分を見つける」
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border/50 py-4 px-4 bg-muted/30 animate-slide-in-bottom animation-delay-300">
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-3 bg-primary text-primary-foreground rounded-lg text-xs font-medium text-center hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-sm"
              style={{ animationDelay: `${400 + index * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border/60 text-foreground rounded-lg text-xs font-medium hover:bg-accent hover:border-border active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border/60 text-foreground rounded-lg text-xs font-medium hover:bg-accent hover:border-border active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINE
          </a>
        </div>
      </nav>
    </main>
  )
}
