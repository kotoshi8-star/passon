import Image from "next/image"
import Link from "next/link"

export default function InstructorsPage() {
  const instructors = [
    {
      name: "講師 A",
      achievements: ["2017年ミュージカル『Annie』のアニー役"],
      subjects: ["芸術", "英語"],
      description: "舞台経験を活かした表現力指導が得意です。"
    },
    {
      name: "講師 B", 
      achievements: ["二十五代珠算名人位", "フラッシュ暗算 元ギネス記録保持者"],
      subjects: ["フラッシュ暗算", "算盤", "数学"],
      description: "計算力・集中力を楽しく伸ばします。"
    },
    {
      name: "講師 C",
      achievements: ["早稲田実業学校 高等部『大隈賞』受賞者", "現役の早稲田大学生"],
      subjects: ["数学", "英語", "簿記・会計"],
      description: "受験対策から資格取得まで幅広くサポートします。"
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
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">
                  {instructor.name.slice(-1)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{instructor.name}</h3>
                  
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">実績</p>
                    <ul className="space-y-1">
                      {instructor.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-1">
                          <span className="text-primary">🏆</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">担当科目</p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.subjects.map((subject, i) => (
                        <span key={i} className="px-2 py-1 bg-muted rounded text-xs text-foreground">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{instructor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-muted rounded-xl p-6 text-center">
          <p className="text-foreground mb-2">他にも多数の講師が在籍しています</p>
          <p className="text-sm text-muted-foreground">
            お子様に合った講師をご紹介いたします。お気軽にお問い合わせください。
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
