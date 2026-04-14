import Image from "next/image";
import { ArrowUpRight, BrainCircuit, Command, Github, Search, ShieldCheck, Workflow } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const installCommand = "npx skills add alchaincyf/nuwa-skill";

const pillars = [
  {
    title: "输入一个名字",
    description: "从乔布斯到张小龙，从芒格到塔勒布，人物与主题都可以成为蒸馏对象。",
  },
  {
    title: "自动完成调研与提炼",
    description: "著作、访谈、社媒、批评者视角、决策记录与人生时间线被拆成并行采集流。",
  },
  {
    title: "输出可调用的 Skill",
    description: "产出 3-7 个心智模型、5-10 条决策启发式、表达 DNA、反模式与诚实边界。",
  },
];

const steps = [
  {
    icon: Search,
    index: "01",
    title: "六路采集，不靠单一语录",
    description:
      "著作、播客、社交媒体、批评者视角、决策记录与人生时间线同时归档，先把材料做厚。",
  },
  {
    icon: BrainCircuit,
    index: "02",
    title: "三重验证，只收真正的认知框架",
    description:
      "一个观点必须跨域复现、对新问题有生成力、并且具备排他性，否则只降级为启发式。",
  },
  {
    icon: Workflow,
    index: "03",
    title: "写成可运行的 Skill",
    description:
      "不是把名言拼起来，而是把心智模型、决策方式、表达节奏和价值边界写进一个可调用入口。",
  },
  {
    icon: ShieldCheck,
    index: "04",
    title: "带着边界上线",
    description:
      "每个 Skill 都会说明自己做不到什么，避免“像得太满”的幻觉，也避免把公开表达误当成全部真相。",
  },
];

const layers = [
  "怎么说话：语气、节奏、用词偏好与表达颗粒度。",
  "怎么想：心智模型、认知框架与问题切入角度。",
  "怎么判断：碰到新问题时优先调用的决策启发式。",
  "什么不做：此人持续拒绝的模式、原则与边界。",
  "知道局限：信息不足、无法提炼、以及应该诚实保留的不确定性。",
];

const examples = [
  {
    name: "Naval",
    lens: "欲望即合同",
    user: "我想同时做自媒体、写书、做独立开发，精力总是不够。",
    answer:
      "女娲产出的 Naval 不会给你三件事都做的鸡汤，它会先逼你找出那件会让你忘记时间的事，再要求你串行复利。",
  },
  {
    name: "马斯克",
    lens: "先算理论极限",
    user: "我们的 SaaS 获客成本太高了。",
    answer:
      "它不会先谈投放优化，而会先追问获客动作的物理下限，再比较你的实际路径到底绕了多少倍。",
  },
  {
    name: "乔布斯",
    lens: "聚焦与端到端控制",
    user: "OpenAI 和 Anthropic 谁的方向更对？",
    answer:
      "得到的不是模仿腔调，而是把问题拉回到品味、聚焦和控制权，逼你重新审视产品栈的完整性。",
  },
  {
    name: "张雪峰",
    lens: "教育 ROI 与阶层现实",
    user: "普通家庭读金融值不值？",
    answer:
      "Skill 会把这个问题拆回资源结构、就业出口与成本收益，而不是泛泛鼓励“追随热爱”。",
  },
];

const faqs = [
  {
    question: "女娲是在做角色扮演吗？",
    answer:
      "不是。女娲的目标不是复刻一个人的口头禅，而是提炼他的认知操作系统，让新问题也能得到有辨识度的分析路径。",
  },
  {
    question: "它和同事.skill是什么关系？",
    answer:
      "同事.skill 证明“把一个人蒸馏成 Skill”是可行的。女娲把对象从同事扩展到了公开世界里的顶级头脑与主题方法论。",
  },
  {
    question: "最终会生成什么？",
    answer:
      "一个可安装、可调用的 SKILL.md，里面包含心智模型、决策启发式、表达 DNA、反模式、边界声明和验证结果。",
  },
  {
    question: "什么对象最适合被蒸馏？",
    answer:
      "留下过足够公开材料、并且在多个领域持续展示稳定判断方式的人物或主题，效果通常最好。",
  },
  {
    question: "它能完全等于本人吗？",
    answer:
      "不能。女娲提炼的是公开材料中的稳定结构，不是神谕。真正有用的地方是让你借一个人的框架思考，而不是假装那个人真的复活了。",
  },
  {
    question: "适合谁来用？",
    answer:
      "独立开发者、内容创作者、投资人、研究者、产品经理，或者任何需要借更强认知框架来校正判断的人。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function NuwaSkillLanding() {
  return (
    <>
      <section className="relative isolate min-h-[86vh] overflow-hidden border-b border-white/10">
        <Image
          src="/brand/nuwa-hero.png"
          alt="Nuwa Skill 品牌海报"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,7,0.38)_0%,rgba(8,8,7,0.72)_50%,rgba(8,8,7,0.96)_100%)]" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-between px-6 pb-8 pt-14 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 border border-white/15 bg-black/35 px-3 py-2 text-[11px] font-medium uppercase text-white/72 backdrop-blur-sm">
              女娲.skill
              <span className="h-1 w-1 rounded-full bg-[#8cd7c2]" />
              Distill minds into tools
            </p>
            <h1 className="max-w-4xl text-balance text-[clamp(2.9rem,7vw,6.4rem)] font-semibold leading-[0.92] text-white [font-family:var(--font-nuwa-serif)]">
              把任何人的
              <br />
              思维方式蒸馏成可调用的 Skill
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
              不是复读名言，不是人格扮演。女娲把公开材料里的认知框架、表达 DNA、决策启发式与诚实边界提炼成一个真正能用的入口。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/alchaincyf/nuwa-skill"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d5542f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#e1643e]"
              >
                查看 GitHub
                <Github className="size-4" />
              </a>
              <a
                href="#install"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/20 px-5 py-3 text-sm font-medium text-white/82 transition hover:border-[#8cd7c2]/55 hover:text-white"
              >
                安装方式
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-white/68 sm:grid-cols-3">
              <li className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
                输入一个名字，自动完成调研、提炼、验证。
              </li>
              <li className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
                输出 3-7 个心智模型与 5-10 条决策启发式。
              </li>
              <li className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
                每个 Skill 都会明确告诉你它不知道什么。
              </li>
            </ul>
          </div>

          <div className="grid gap-3 pt-10 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase text-[#8cd7c2]">不是语录库</p>
              <p className="mt-2 text-sm leading-7 text-white/72">它提炼的是“怎么想”，不是“说过什么”。</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase text-[#d7c768]">不是复活术</p>
              <p className="mt-2 text-sm leading-7 text-white/72">它借你的问题去运行一个人的框架，而不是假装本人降临。</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase text-[#d5542f]">不是全知回答</p>
              <p className="mt-2 text-sm leading-7 text-white/72">边界写进 Skill，本身就是可信度的一部分。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3 md:px-10 lg:px-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-lg border border-white/10 bg-black/18 p-5">
              <p className="text-sm font-medium text-white">{pillar.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/65">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="framework" className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-xs uppercase text-[#8cd7c2]">方法论</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight text-white [font-family:var(--font-nuwa-serif)]">
              从原始材料里提炼一个人的认知操作系统
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              女娲的核心不是“会说得像”，而是“会判断得像”。真正被写进 Skill 的内容，必须经得起跨域复现、生成新判断和体现独特视角这三道门。
            </p>
            <div className="mt-8 space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="rounded-lg border border-white/10 bg-black/18 p-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-lg border border-white/12 bg-white/5">
                        <Icon className="size-4 text-[#d5542f]" />
                      </span>
                      <div>
                        <p className="text-[11px] uppercase text-white/44">{step.index}</p>
                        <p className="text-base font-medium text-white">{step.title}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-black/28">
              <Image
                src="/brand/nuwa-process-map.png"
                alt="Nuwa Skill 提炼流程图"
                width={1400}
                height={1100}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="rounded-lg border border-white/10 bg-black/18 p-6">
              <p className="text-xs uppercase text-[#d7c768]">蒸馏五层</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/68">
                {layers.map((layer) => (
                  <li key={layer} className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
                    {layer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#d5542f]">效果示例</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight text-white [font-family:var(--font-nuwa-serif)]">
              不是像本人说话，而是像本人思考
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              同一个问题交给不同 Skill，真正拉开差距的不是语气，而是他们会优先看见什么、怀疑什么、砍掉什么。
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {examples.map((example) => (
              <article key={example.name} className="rounded-lg border border-white/10 bg-black/18 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-medium text-white">{example.name}</p>
                    <p className="text-xs uppercase text-[#8cd7c2]">{example.lens}</p>
                  </div>
                  <span className="rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-[11px] uppercase text-white/48">
                    perspective
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  <div className="rounded-lg border border-white/8 bg-white/4 p-4">
                    <p className="text-xs uppercase text-white/42">用户问题</p>
                    <p className="mt-2 text-sm leading-7 text-white/78">{example.user}</p>
                  </div>
                  <div className="rounded-lg border border-white/8 bg-black/24 p-4">
                    <p className="text-xs uppercase text-white/42">Skill 的典型反应</p>
                    <p className="mt-2 text-sm leading-7 text-white/66">{example.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-18 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-xs uppercase text-[#d7c768]">安装</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight text-white [font-family:var(--font-nuwa-serif)]">
              一条命令，把女娲放进你的工作流
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              适用于 Claude Code 与兼容 skills.sh 的环境。安装之后，你可以直接输入一个名字，让女娲开始蒸馏。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/62">
              <span className="rounded-lg border border-white/10 bg-black/18 px-3 py-2">调研</span>
              <span className="rounded-lg border border-white/10 bg-black/18 px-3 py-2">提炼</span>
              <span className="rounded-lg border border-white/10 bg-black/18 px-3 py-2">验证</span>
              <span className="rounded-lg border border-white/10 bg-black/18 px-3 py-2">生成 SKILL.md</span>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/22 p-6">
            <div className="flex items-center gap-3 text-white/66">
              <span className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Command className="size-4 text-[#8cd7c2]" />
              </span>
              <div>
                <p className="text-sm font-medium text-white">安装命令</p>
                <p className="text-xs uppercase text-white/42">复制到终端后执行</p>
              </div>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-lg border border-white/8 bg-[#0f1110] px-4 py-5 text-sm leading-7 text-[#f3efe3]">
              <code>{installCommand}</code>
            </pre>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <a
                href="https://github.com/alchaincyf/nuwa-skill"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm font-medium text-white/84 transition hover:border-[#8cd7c2]/60"
              >
                浏览仓库
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/5 px-4 py-3 text-sm font-medium text-white/84 transition hover:border-[#d5542f]/60"
              >
                先看 FAQ
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-18 md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#8cd7c2]">FAQ</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-white [font-family:var(--font-nuwa-serif)]">
              常见问题
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              这里集中回答“女娲到底做的是什么”和“它为什么有用”。
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="rounded-lg border border-white/10 bg-black/18 px-5"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-white/66">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-6 py-18 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(213,84,47,0.14),rgba(140,215,194,0.08),rgba(215,199,104,0.14))] p-8 md:p-10">
          <p className="text-xs uppercase text-white/52">最后一屏</p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight text-white [font-family:var(--font-nuwa-serif)]">
                把下一个想蒸馏的人，直接交给女娲
              </h2>
              <p className="mt-4 text-base leading-8 text-white/68">
                如果你已经厌倦了泛泛的建议，想借一个更锋利的认知框架来思考问题，女娲正好是那个入口。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/alchaincyf/nuwa-skill"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#0d0d0c] transition hover:bg-[#f2ede0]"
              >
                去 GitHub
                <Github className="size-4" />
              </a>
              <a
                href="#install"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-black/22 px-5 py-3 text-sm font-medium text-white/84 transition hover:border-white/25"
              >
                查看安装命令
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
