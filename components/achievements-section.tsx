import { Trophy, Code2, Target } from "lucide-react"

const achievements = [
  {
    platform: "CodeChef",
    rating: "3 Star (Max: 1608)",
    problems: "300+",
    profile: "https://www.codechef.com/users/danish811",
    highlight: "Rank 463 (Top 2%) in Starters 113 Div4 among 28,000+ participants",
  },
  {
    platform: "LeetCode",
    rating: "Max: 1799 (Top 10%)",
    problems: "300+",
    profile: "https://leetcode.com/u/sheikhd811/",
    highlight: "Consistent top 10% performance in contests",
  },
  {
    platform: "Codeforces",
    rating: "Pupil (Max: 1280)",
    problems: "300+",
    profile: "https://codeforces.com/profile/sheikhd811",
    highlight: "Achieved Pupil rating through consistent practice",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="min-h-screen py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-[hsl(var(--kali-green))] text-sm">
            danish@kali:~$ cat achievements.sh && bash achievements.sh
          </span>
          <h2 className="section-title mt-2">Competitive Programming</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-6 bg-card/50 hover:border-[hsl(var(--kali-green))/0.8] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-[hsl(var(--kali-green))]" />
                <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))]">{achievement.platform}</h3>
              </div>

              <div className="space-y-2 mb-4">
                <p className="font-mono text-sm">
                  <span className="text-gray-400">Rating:</span>{" "}
                  <span className="text-white font-semibold">{achievement.rating}</span>
                </p>
                <p className="font-mono text-sm">
                  <span className="text-gray-400">Problems Solved:</span>{" "}
                  <span className="text-white font-semibold">{achievement.problems}</span>
                </p>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">{achievement.highlight}</p>

              <a
                href={achievement.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[hsl(var(--kali-green))] hover:underline font-mono text-sm"
              >
                View Profile →
              </a>
            </div>
          ))}
        </div>

        {/* Hackathon Achievement */}
        <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-8 bg-card/50 mb-8">
          <div className="flex items-start gap-4">
            <Trophy className="w-8 h-8 text-[hsl(var(--kali-green))]" />
            <div>
              <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))] mb-3">Hackathon Achievement</h3>
              <p className="text-white mb-2">
                <span className="font-mono text-[hsl(var(--kali-green))]">Team Naive-Bees</span> positioned among{" "}
                <span className="font-bold text-[hsl(var(--kali-green))]">Top 10 ranks</span> in DevSprint 1.0 Hackathon
              </p>
            </div>
          </div>
        </div>

        {/* Problem Solving Stats */}
        <div className="border border-[hsl(var(--kali-green))/0.3] rounded-lg p-8 bg-card/50">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-[hsl(var(--kali-green))]" />
            <h3 className="font-mono text-xl font-bold text-[hsl(var(--kali-green))]">Total Stats</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="font-mono text-3xl font-bold text-[hsl(var(--kali-green))]">900+</p>
              <p className="text-sm text-gray-400 mt-1">Problems Solved</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold text-[hsl(var(--kali-green))]">3</p>
              <p className="text-sm text-gray-400 mt-1">Platforms Mastered</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold text-[hsl(var(--kali-green))]">Top 2%</p>
              <p className="text-sm text-gray-400 mt-1">Contest Rank</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold text-[hsl(var(--kali-green))]">1608</p>
              <p className="text-sm text-gray-400 mt-1">Max Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
