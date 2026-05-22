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

        <div className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-6">
          <h2 className="text-xl font-bold text-center mb-6">
            ～From Students, For Students～<br />
            （大学生から未来へ）
          </h2>
          <p className="text-foreground leading-relaxed">
            私は昨年二十歳になりました。沢山の方に支えられ、 素敵な方々との出会いに恵まれ、 様々な景色に触れながら多くの経験を重ね、幸せな時間を過ごしてきました。 <br />
            成人を迎え、 大人の仲間入りをした今、 これまでの人生が幸せであふれていたことに改めて気づきました。 思い返すと、出会いを通して得た 、あの時の「あの経験が」 「あの風景が」「あの一言が」 私の人生を大きく変えてくれました。 あの時の 「ちょっとしたキッカケが」私に多くの選択肢を与え、 人生を豊かにしてくれました。 皆様から授けて頂いた 「キッカケ」は私の宝物です。 <br />
            次は、私がその 「キッカケ」 を繋ぐことで、 一人ひとりの歩む道に芽生えと可能性を添えたい。そして、これまでの感謝をご恩返ししたい。 <br />
            私は決断しました。
          </p>

          <p className="text-foreground leading-relaxed">
            2026 年３月 15 日より、未来ある Students へ「ちょっとしたキッカケ」を繋ぐサービスをスタートします。サービス名は『pass on』。「繋ぐ」＋「恩」の気持ちを込めています。 <br />
            『pass on』 は、 私、 弟、 同じ想いを持つ仲間と共に、 私たちが培ってきた知識、 経験、 想いを伝え、とっても大切な「ちょっとしたキッカケ」を未来ある Students へ繋ぐものです。 <br />
            『pass on』 の一番の強みは、私の想いを受け止め引き受けてくれた「講師=仲間たち」 にあります。 私が心から尊敬する仲間たちです。 みんなで 『pass on』 を通じて、 未来あるStudentsの人生に彩りを添え、前に進む力を届けます。 <br />
            数学、英語、芸術、簿記、会計、算盤、フラッシュ暗算、スポーツ等、仲間たちの好きや得意であなたに寄り添います。 <br />
            仲間たちも現役大学生として挑戦中にあるため、可能な範囲で進めてまいります。
          </p>

          <p className="text-foreground leading-relaxed">
            これは、 大人になった私の最初の挑戦でもあり、 これまでの人生の中で最も大きな挑戦です。 <br />
            やりたいことに挑戦でき、一人ひとりの歩む道に幸せを感じる瞬間を増やしたい。 <br />
            私たちが繋ぎたい“想い”が、未来ある Students の人生を少しでも豊かにするお手伝いが出来ると幸いです。
          </p>

          <p className="text-foreground leading-relaxed">
            最後に、 自分の目標に向かって忙しいにも関わらず、 想いに共感しパートナーになってくれた仲間たち、 本当にありがとう。 みんながいてくれて、 最ッ高に幸せです。 未来あるStudentsのためによろしくお願いします。 
          </p>

          <p className="text-foreground leading-relaxed font-bold text-right mt-8">
            浦濱 大牙
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
