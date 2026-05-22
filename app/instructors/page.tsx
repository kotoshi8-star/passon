import Image from "next/image"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function InstructorsPage() {
  const instructors = [
    {
      name: "浦濱 大牙",
      title: "早稲田大学 教育学部 軟式庭球部",
      achievements: [
        "第 70 回東西六大学ソフトテニス選抜対抗戦 優勝",
        "第 144 回 秋季東京六大学ソフトテニスリーグ戦 全勝賞",
        "第 56 回 全日本私立高等学校選抜ソフトテニス大会 男子団体戦 ベスト 8",
        "第 14 回ソフトテニスジュニアジャパンカップシングルス 9 位",
        "ソフトテニス全日本 U-14 候補選手、かごしま国体東京都代表選手"
      ],
      subjects: ["ソフトテニス"],
      challenge: "『pass on』を通じて未来ある students の人生を少しでも豊かにするお手伝いをすること、ソフトテニスに打ち込んでいる姿を見ていただき、一人でも多くの人に感動を与えること",
      message: "最高に楽しい挑戦を私と共にしましょう！",
      introducer: "會百花からの紹介",
      introduction: "浦濱くんは話しているだけで自然と元気をもらえる、まさに太陽のような存在です。頑張ることを決して努力と思わず、楽しみながら積み上げていく姿に励まされます。大きな夢に向かうその歩みは、きっと多くの人の原動力になるはずです。"
    },
    {
      name: "浦濱 大馬",
      title: "早稲田大学 政治経済学部",
      achievements: [
        "ソフトテニス全日本 U-17 候補選手",
        "佐賀国スポ東京都代表選手、かごしま国体東京都代表選手",
        "JOC ジュニアオリンピックカップ U-17 第 3 位",
        "ソフトテニス全日本 U-14 選手",
        "第 53 回 全国中学校ソフトテニス大会 第 3 位",
        "Soft Tennis Festa 2022 全国中学生ソフトテニス対抗戦 優勝",
        "第 52 回 全国中学校ソフトテニス大会 優勝"
      ],
      subjects: ["ソフトテニス"],
      challenge: "行きたい留学先に行くため、必要な英語力を身につける。",
      message: "これまでの恩返しができるように頑張ります。",
      introducer: "浦濱大牙からの紹介",
      introduction: "大馬は自慢の弟です。真面目で、努力家で、やり切る力があり、楽しいことに思う存分チャレンジしています。早稲田実業では、成績優等賞と特別教育活動賞をｗ受賞しており、まさに高いレベルの文武両道を実現しました。大馬の挑戦にはいつも驚かされます。人気 YouTuber の企画に挑戦したり、自転車で100キロ完走したり、本当に楽しそうに毎日を全力で生きています。大馬が羨ましいし、かっこいいし、何より心から誇りに思います。大馬との出会いが何かの「きっかけ」になりますように。"
    },
    {
      name: "辻窪 凛音",
      title: "早稲田大学 教育学部 珠算部",
      achievements: [
        "二十五代珠算名人位",
        "フラッシュ暗算 元ギネス記録 3 桁 15 口 1.62 秒",
        "フラッシュ暗算ネット検定 二十段",
        "そろばんクリスマスカップ 2024・2025 そろばん日本一，フラッシュ暗算日本一",
        "そろばんグランプリジャパン 2017-2019, 2022-2024 そろばん日本一"
      ],
      subjects: ["そろばん", "フラッシュ暗算"],
      challenge: "フラッシュ暗算 3 桁 30 口ギネス記録達成に向けて頑張っています。",
      message: "数字に苦手意識がある人も、そろばんで数字が大好きになります！一緒に楽しく挑戦しましょう！",
      introducer: "浦濱大牙からの紹介",
      introduction: "そろばん、 フラッシュ暗算で日本1、世界 1 の経験があるりんねに講師をお願いしました！彼女は日本だけではなく、 海外のテレビに取り上げられるほど有名です。謙虚で、好きなことにとことん挑戦する姿は多くの人を惹きつけます。"
    },
    {
      name: "會 百花",
      title: "早稲田大学 政治経済学部",
      achievements: [
        "2017 年に丸美屋食品ミュージカル『Annie』アニー役",
        "2024 年劇団 Tip Tap『Bye Bye My Last Cut』"
      ],
      subjects: ["歌（ミュージカル）"],
      challenge: "自分の歌を 1 人でも多くの人に届ける、英語と韓国語の習得、料理",
      message: "あなたが想像できることはすべて実現できる。私の好きな言葉です。ワクワクする未来を一緒に開きましょう！",
      introducer: "浦濱大牙からの紹介",
      introduction: "かいももは周りに元気とパワーを与えるプロです。彼女の周りはいつも笑顔いっぱいで、楽しいや幸せで溢れています。何事にも全力で楽しそうに挑戦する姿は、周りに勇気を与えます。かいもものスーパーポジティブパワーを沢山受け取って、是非色々なことに挑戦してください。"
    },
    {
      name: "林 鈴",
      title: "早稲田大学 教育学部 早大テニスクラブ",
      achievements: [
        "インターハイ 2023 団体ベスト４",
        "関東中学生テニス選手権大会 2019 ダブルス優勝",
        "関東高等学校テニス選手権大会 ダブルス優勝",
        "IST 全国学生テニストーナメント シングル・ダブルス優勝",
        "関東学生庭球同好会連盟個人選手権 シングルス準優勝/ダブルス優勝"
      ],
      subjects: ["硬式テニス"],
      challenge: "『英語の勉強』 洋画が大好きで、英語字幕で鑑賞することにハマっています！2週目に日本語字幕で見直します(笑)楽しみながら継続することを大切にしています。『テニスサークル界の普及・活性化』 全日本庭球同好会連盟の副理事長を務めています。テニスサークルに対するネガティブなイメージを払拭し、誰もが前向きに活動できる環境作りを目指して取り組んでいます。テニスサークル界をより活気あるものにすることが目標です！",
      message: "Nothing ventured, nothing gained. 挑戦なければ得るものなし",
      introducer: "浦濱大牙からの紹介",
      introduction: "りんりんはいつも笑顔いっぱいで太陽のような存在です。多くの場面でリーダーシップを発揮し、沢山の人に『楽しい！』を届ける天才です。チャレンジ精神旺盛で、興味のあることにはとことん挑戦するところも彼女の魅力です。様々なことに挑戦中のりんりん。Nothing ventured, nothing gained. 挑戦する彼女はとてもかっこいい。彼女のエネルギーがあなたの挑戦を応援します。"
    },
    {
      name: "比留間 文人",
      title: "早稲田大学 政治経済学部 フットサルサークル",
      achievements: [
        "日商簿記検定 1 級",
        "公認会計士試験短答式試験合格",
        "全国高等学校総合体育大会（インターハイ）登山大会出場",
        "早稲田実業学校 大隈賞受賞"
      ],
      subjects: ["簿記・会計", "会計士試験への挑戦相談"],
      challenge: "公認会計士試験論文式試験合格に向けて勉強中",
      message: "ビジネスの入り口にして根幹をなす簿記・会計を一緒に勉強しましょう！",
      introducer: "浦濱大牙からの紹介",
      introduction: "文人は早稲田実業でたった一人だけに授与される大隈賞を受賞しており、文武両道の鏡です。それなのに天狗になる姿もなく、みんなに愛されています。企画や幹事のような仕事も嫌な顔せず真摯に取り組む彼はいつも最高にかっこいいです。本当に尊敬できる友人です。"
    },
    {
      name: "橋本 泰良",
      title: "早稲田大学 創造理工学部 早稲田大学交響楽団",
      achievements: [
        "IELTS 6.5"
      ],
      subjects: ["高校数学", "英語"],
      challenge: "長期インターン探し、アメリカ留学エンジョイ",
      message: "楽しくやりましょう",
      introducer: "浦濱大牙からの紹介",
      introduction: "たいらの発する穏やかな雰囲気が大好きです。彼はほのぼのとした性格がある反面、芯がしっかりとあり、好きなこと・やりたいことに挑戦できる人間で、とても素敵な世界観を持っています。僕はそんなたいらを尊敬しています。今もアメリカに留学していて、世界に出て挑戦中です。授業はなんとアメリカから。是非、たいらワールドを楽しんでください。"
    },
    {
      name: "古村 賢",
      title: "早稲田大学 商学部 / ウィーン経済・経営大学",
      achievements: [
        "日本言語学オリンピック銀賞",
        "アジア太平洋言語学オリンピック出場"
      ],
      subjects: ["AI を活用したアプリ、Web サイト開発"],
      challenge: "早稲田生に特化した飲食店まとめサイトの運営 (https://www.wasemeshi.com/)",
      message: "AI を使ってほしいサービスを一緒に作ろう！",
      introducer: "浦濱大牙からの紹介",
      introduction: "さとしとは高校時代、同じ部活で長い時間を共にしました。お互い主将と副主将。喜びも悲しみも分かち合った戦友です。後輩からも慕われており、多くの人を引き付ける力があります。部活だけではなく、勉強や早実セミナー等、多くのことに全力で取り組んでいました。早くから起業に興味を持ち、大学に入ってからはその学びを活かし、実際にサービスを立ち上げています。その中の一つが『わせメシアプリ』。早稲田生の食を支えるサイトです。僕もチームの一員。さとしが声をかけてくれました。彼の挑戦は、周りの人を幸せにするものばかりです。本当に尊敬します。さとしは、挑戦したい、何かを創り出したい、幸せを生み出したい、そんな思いを抱く Students の力にきっとなってくれるはずです。"
    }
  ]

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
          講師紹介
        </h1>

        <p className="text-center text-muted-foreground mb-8">
          pass onには多彩な経歴を持つ講師陣が在籍しています。
        </p>

        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {instructors.map((instructor, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl shadow-sm border border-border px-6 py-2 overflow-hidden border-b-0">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold shrink-0">
                      {instructor.name.slice(0, 1)}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-lg text-foreground">{instructor.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {instructor.subjects.map((subject, i) => (
                          <span key={i} className="px-2 py-1 bg-muted rounded text-xs text-foreground">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 border-t">
                  <div className="space-y-4">
                    {instructor.title && (
                      <div className="text-sm font-medium text-muted-foreground">
                        {instructor.title}
                      </div>
                    )}
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">実績</p>
                      <ul className="space-y-2">
                        {instructor.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">🏆</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {instructor.challenge && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">今挑戦していること</p>
                        <p className="text-sm text-foreground">{instructor.challenge}</p>
                      </div>
                    )}

                    {instructor.message && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Students への一言</p>
                        <p className="text-sm text-foreground font-medium">「{instructor.message}」</p>
                      </div>
                    )}

                    {instructor.introduction && (
                      <div className="bg-muted p-4 rounded-lg mt-4">
                        <p className="text-xs text-muted-foreground mb-1">{instructor.introducer || "紹介文"}</p>
                        <p className="text-sm text-foreground italic">{instructor.introduction}</p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
