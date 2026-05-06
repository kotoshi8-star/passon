import Image from "next/image"
import Link from "next/link"

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="pass on ロゴ"
            width={80}
            height={50}
            className="object-contain"
          />
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          創設者の想い
        </h1>

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <p className="text-foreground leading-relaxed mb-6">
            pass onを立ち上げたきっかけは、私自身の経験にあります。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            学生時代、素晴らしい先生との出会いが私の人生を大きく変えました。
            その先生は、勉強を教えるだけでなく、「なりたい自分」を見つける手助けをしてくれました。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            「きっかけ」が人の可能性を広げることを、身をもって体験したのです。
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            pass onでは、単なる学習指導ではなく、
            生徒一人ひとりの「きっかけ」となる場所を目指しています。
            多彩な経歴を持つ講師陣が、様々な視点から生徒の可能性を引き出します。
          </p>
          <p className="text-foreground leading-relaxed">
            「なりたい自分に近づく」「なりたい自分を見つける」
            そのお手伝いができれば幸いです。
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
