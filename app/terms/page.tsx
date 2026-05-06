import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
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
          利用規約
        </h1>

        <div className="bg-card rounded-xl p-6 shadow-sm border border-border space-y-6">
          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第1条（適用）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本規約は、オンライン家庭教師サービス「pass on」（以下「本サービス」といいます）の利用に関する条件を定めるものです。
              本サービスをご利用いただくすべてのお客様に適用されます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第2条（サービス内容）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本サービスは、オンラインを通じた家庭教師サービスを提供します。
              サービス内容の詳細については、別途お問い合わせください。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第3条（料金）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本サービスの料金は、別途定める料金表に基づきます。
              料金の支払い方法については、お申込み時にご案内いたします。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第4条（キャンセル）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              レッスンのキャンセルは、原則として24時間前までにご連絡ください。
              それ以降のキャンセルについては、キャンセル料が発生する場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第5条（禁止事項）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本サービスの利用にあたり、以下の行為を禁止します。
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside mt-2 space-y-1">
              <li>講師への直接連絡（本サービスを介さない連絡）</li>
              <li>レッスン内容の録画・録音（事前許可がある場合を除く）</li>
              <li>他のお客様への迷惑行為</li>
              <li>その他、本サービスの運営を妨げる行為</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第6条（個人情報の取り扱い）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              お客様の個人情報は、本サービスの提供のためにのみ使用し、
              適切に管理いたします。第三者への提供は、法令に基づく場合を除き行いません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第7条（免責事項）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本サービスの利用により生じた損害について、当方の故意または重過失による場合を除き、
              責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg text-foreground mb-3">第8条（規約の変更）</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              本規約は、必要に応じて変更することがあります。
              変更後の規約は、本ウェブサイトに掲載した時点で効力を生じます。
            </p>
          </section>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          最終更新日：2024年1月
        </p>

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
