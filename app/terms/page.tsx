import Image from "next/image"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 w-max">
          <Image
            src="/logo.jpg"
            alt="pass on ロゴ"
            width={80}
            height={50}
            className="object-contain"
          />
        </Link>
      </header>

      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">利用規約</h1>
        <ScrollArea className="h-[70vh] rounded-md border p-6 bg-card">
        <div className="space-y-8 text-sm leading-relaxed text-foreground">
          <p>
            この利用規約（以下、「本規約」といいます。）は、「pass on」およびこれに付随するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本規約は、本サービスを利用するすべてのお客様に適用されます。
          </p>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【本規約への同意】</h2>
            <p>お客様は、本サービスを利用するにあたり、本規約を誠実に遵守するものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【本サービスについて】</h2>
            <p>本サービスは、お客様が所定の料金を支払うことを条件に、zoomを利用したオンライン形式による家庭教師サービスを提供します。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【著作権】</h2>
            <p>本サービスにおいて提供される授業内容、教材、資料、映像等の著作物はpass on（以下、「当方」といいます。）または担当講師に帰属します。お客様は、無断で録画、録音、複製、転載、配布してはなりません。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【個人情報の保護】</h2>
            <p>当方は、お客様の個人情報を、個人情報保護法そのほかの関係法令を尊守し、適切に取得・管理します。取得した個人情報は、本サービスの提供、連絡、料金請求、問い合わせ対応の目的に限り利用し、法令に基づく場合を除き、第三者に提供しません。また、未成年者が本サービスを利用する場合には、法定代理人（保護者）の同意を得るものとし、当方が必要と判断した場合には、法定代理人の同意を確認するための書面、または連絡を求める場合があります。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【利用料金および支払方法】</h2>
            <ul className="list-inside space-y-1">
              <li>1, 本サービスの利用料金は、当方が別途定める料金とします。</li>
              <li>2, お客様は、当方が別途指定する銀行口座に、当方の定める期日までに利用料金を支払うものとします。</li>
              <li>3, 振込手数料はお客様の負担とします。</li>
              <li>4, 未成年者が利用する場合、利用料金の支払いは法定代理人の名義により行うものとします。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【キャンセル】</h2>
            <ul className="list-inside space-y-1">
              <li>1, お客様の都合によりキャンセルする場合、所定の方法により連絡するものとします。</li>
              <li>2, キャンセル料について、授業前日 17 時までのキャンセルは無料、それ以降は利用料金の100%とします。</li>
              <li>3, 未成年者が利用する場合、キャンセル料の支払い義務は法定代理人が負うものとします。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【遅延損害金】</h2>
            <p>当方に対する金銭債務の支払を遅滞したお客様は、当方に対し、年 14.6％の割合による遅延損害金を支払うものとします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【禁止事項】</h2>
            <p className="mb-2">お客様は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-inside space-y-1">
              <li>1, 授業の無断録画、録音、撮影</li>
              <li>2, 授業内容、教材、資料等の無断転載、複製、第三者への共有</li>
              <li>3, 講師または他のお客様に対する誹謗中傷、迷惑行為、ハラスメント行為</li>
              <li>4, 本サービスの運営を妨害する行為</li>
              <li>5, 不正アクセス、なりすまし行為</li>
              <li>6, 法定代理人の同意なく契約内容を変更する行為</li>
              <li>7, 反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>8, 公序良俗に違反する行為</li>
              <li>9, その他、当方が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【本規約違反等による解除】</h2>
            <p className="mb-2">当方は，お客様が以下のいずれかの事由に該当する場合には，お客様に事前に通知することなく，お客様との契約を解除することができるものとします。この場合、当方はお客様に対して損害賠償義務を負いません。</p>
            <ul className="list-inside space-y-1">
              <li>1, お客様が本規約に違反した場合又は違反するおそれがある場合</li>
              <li>2, 過去に本規約に違反した者又はその関係者である場合</li>
              <li>3, その他当方とお客様の信頼関係が損なわれたと当方が判断した場合</li>
              <li>4, 反社会的勢力等であるか、反社会的勢力等との何らかの交流若しくは関与を行っていると当方が判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【サービス内容の変更】</h2>
            <p>本サービスは、お客様に通知することなく、本サービスの内容を変更したり、本サービスの提供を中止、終了することができるものとします。本サービスは、これによってお客様に生じた損害について一切の責任を負いません。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【利用規約の変更】</h2>
            <p>本サービスは、お客様に通知することなく、いつでも本規約を変更することができるものとします。変更後の本規約は、本サービスのウェブサイト等に掲示された時点から効力を生じるものとします。本規約の変更後、本サービスの利用を継続したお客様は、変更後の本規約に同意したものとみなします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【通知または連絡】</h2>
            <p>お客様と本サービスとの間の通知または連絡は、本サービスの定める方法によって行うものとします。本サービスは、お客様から変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にお客様へ到達したものとみなします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【事業譲渡】</h2>
            <p>本サービスにかかる事業を他社に事業譲渡（事業譲渡、会社分割その他事業が移転するあらゆる場合を含みます。）した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びにお客様の情報を当該事業譲渡の譲受人に譲渡することができるものとします。お客様は、かかる譲渡につき予め同意したものとみなします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【適用関係】</h2>
            <p>
              本規約は、お客様と本サービスとの間の本サービスのご利用に関わる一切の関係に適用されるものとします。<br />
              本サービスは、本規約のほか、ご利用にあたってのルールを定めることがあります。これらのルールは、その名称のいかんに関わらず、本規約の一部を構成するものとします。本規約がこれらのルールと矛盾する場合には、これらのルールが優先して適用されるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【準拠法】</h2>
            <p>本規約の解釈にあたっては、日本法を準拠法とします。</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3 border-b pb-2">【裁判管轄】</h2>
            <p>本サービスのご利用に関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
          </section>

          <div className="pt-4 text-right">
            <p>2026 年 03 月 05 日 制定</p>
          </div>

          <div className="mt-12 pt-8 border-t text-muted-foreground">
            <p className="text-center font-medium">
              きっかけづくりの場<br />
              <br />
              passonは〜
            </p>
          </div>
        </div>
      </ScrollArea>

      <div className="mt-8 text-center pb-8">
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

