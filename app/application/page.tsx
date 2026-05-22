import Image from "next/image"
import Link from "next/link"

export default function ApplicationPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">
          ご利用案内
        </h1>

        {/* 予約方法 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center border-b-2 border-primary/20 pb-2 mb-6">
            予約方法
          </h2>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border space-y-6">
            <div className="bg-muted p-3 text-center rounded text-foreground font-medium mb-4">
              LINEで行います
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">① 公式LINEのリンクから、友だち追加をしてください。</p>
                <div className="bg-primary/5 p-4 rounded-lg flex flex-col items-center justify-center border border-primary/10 my-4">
                  <a href="https://line.me/R/ti/p/@012kmgoz" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c..."/>
                    </svg>
                    page.line.me/012kmgoz
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">↑ まずはクリック!!</p>
                </div>
              </div>
              
              <div>
                <p className="font-bold mb-2">② お名前・ご希望の講師・日時・科目等を「pass on」公式LINEに送信してください。</p>
                <p className="text-sm text-muted-foreground mt-2">
                  ※ご質問も公式LINEで受け付けております。<br />
                  気になることがございましたらお気軽にお問い合わせください。
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-3 text-center rounded text-primary font-bold mt-6">
              講師と調整後、速やかにご返信させて頂きます
            </div>
          </div>
        </section>

        {/* 受講方法 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center border-b-2 border-primary/20 pb-2 mb-6">
            受講方法
          </h2>
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border space-y-6">
            <div className="bg-muted p-3 text-center rounded text-foreground font-medium mb-4">
              Zoomで行います
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">① 受講前までにLINEでZoomのリンクを送信します。</p>
                <p className="text-sm text-muted-foreground">
                  ※Zoomアプリを事前にインストールし、<br />
                  マイク・ビデオ機能が正常に作動するかご確認ください。
                </p>
              </div>
              
              <div className="pt-4">
                <p className="font-bold mb-2">② 受講開始時刻になりましたら、お送りしたリンクからZoomアプリを開き、ミーティングにご参加ください。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 料金 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center border-b-2 border-primary/20 pb-2 mb-6">
            料金
          </h2>
          <div className="bg-[#782828] text-white rounded-xl p-8 shadow-sm text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-wide">
              1コマ(25分) 2,500円<span className="text-lg font-normal"> (税込み)</span>
            </h3>
            
            <p className="text-lg mb-8 font-medium">
              お支払い方法 : 後払い (銀行振込)
            </p>
            
            <div className="text-sm text-left text-white/90 space-y-2 border-t border-white/20 pt-6">
              <p>＊受講月の翌月3日までに、指定口座へお振込みください。</p>
              <p>　振込手数料はお客様のご負担にてお願い申し上げます。</p>
              <p>　(例) 3月15日に受講された場合、4月3日までにお振込みください。</p>
            </div>
          </div>
        </section>

        {/* キャンセル */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center border-b-2 border-primary/20 pb-2 mb-6">
            キャンセル
          </h2>
          <div className="bg-[#782828] text-white rounded-xl p-8 shadow-sm border border-dashed border-white/40">
            <h3 className="text-xl font-bold text-center mb-8">
              キャンセルのご連絡は【公式LINE】へお送りください
            </h3>
            
            <div className="border rounded-2xl p-6 mb-8 border-white/30 max-w-sm mx-auto">
              <p className="text-sm text-white/80 mb-4">記載内容</p>
              <div className="space-y-2 text-lg">
                <p>件名：キャンセル依頼</p>
                <p>本文：お名前<span className="text-sm">(予約者様)</span> / 講師名 / 日時 / 科目</p>
              </div>
            </div>
            
            <div className="text-center font-medium text-lg leading-relaxed">
              <p>※授業前日17時まで → キャンセル料はございません</p>
              <p>それ以降 → 授業料金の100%</p>
            </div>
          </div>
        </section>

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
