/* ==========================================================================
   Harness Handbook — bilingual EN/ZH i18n
   --------------------------------------------------------------------------
   EN strings live in the DOM (cached on first run) and in tr() fallbacks in
   script.js. This file provides the ZH dictionary + the runtime that swaps
   languages. Keys match data-i18n / data-i18n-text attributes in index.html
   and tr() calls in script.js.
   ========================================================================== */
(function () {
  "use strict";

  const LS_KEY = "hh-lang";
  const VALID = new Set(["en", "zh"]);

  const META = {
    en: {
      title: "Harness Handbook — Making Evolving Agent Harnesses Readable, Navigable & Editable",
      description:
        "A behavior-first map of an agent-harness codebase. Harness Handbook lets developers and coding agents locate a behavior, read the code evidence, and edit with confidence.",
    },
    zh: {
      title: "Harness Handbook — 让不断演进的 Agent Harness 可读、可导航、可编辑",
      description:
        "一张以行为为先的 Harness 代码地图：开发者与 coding agent 先定位行为、查看代码证据，再放心地修改。",
    },
  };

  const ZH = {
    /* ---- chrome ---- */
    "brand.text": "Harness Handbook",
    "nav.method": "方法",
    "nav.results": "结果",
    "nav.paper": "阅读论文",
    "theme.toggle": "切换深色模式",
    "lang.en": "EN",
    "lang.zh": "中文",

    /* ---- TOC ---- */
    "toc.title": "目录",
    "toc.1": "Harness 是 Agent 的另一半",
    "toc.2": "真正的瓶颈",
    "toc.3": "一张地图，三层细节",
    "toc.4": "如何构建",
    "toc.5": "如何使用",
    "toc.6": "是否有效？",
    "toc.7": "我们学到了什么",
    "toc.8": "要点总结",

    /* ---- hero ---- */
    "hero.kicker": "研究 &nbsp;·&nbsp; 腾讯混元大模型 &nbsp;·&nbsp; 2026 年 6 月",
    "hero.title": "Harness Handbook",
    "hero.dek": "让不断演进的 Agent Harness 可读、可导航、可编辑。",
    "hero.subtitle":
      "修改 Agent Harness 最难的不是写补丁，而是找齐一个行为的所有落点。Harness Handbook 是一张<b>以行为为先的代码地图</b>：开发者和 coding agent 从系统<em>做什么</em>出发，逐层下钻到实现它的代码，然后带着完整的图景去修改。",
    "hero.authors":
      "Ruhan Wang · Yucheng Shi · Zongxia Li · Zhongzhi Li · Kishan Panaganti · Haitao Mi · Dongruo Zhou · Leoweiliang",
    "hero.affils":
      "腾讯混元大模型 &nbsp;·&nbsp; Indiana University &nbsp;·&nbsp; University of Maryland &nbsp;·&nbsp; University of Georgia",
    "hero.figcap":
      "<b>一张图看懂核心思想。</b>一条行为请求很少只对应一处实现。Handbook 位于<span class=\"u-b\">你想要的行为</span>与<span class=\"u-i\">它在代码中的落点</span>之间，让定位发生在编辑之前，而不是编辑之中。",

    /* ---- TL;DR ---- */
    "tldr.kicker": "一分钟速览",
    "tldr.1":
      "Agent 的行为不仅由模型决定，同样由它的 <b>Harness</b> 塑造——即模型周围负责构建提示、调用工具、维护状态的那层代码。",
    "tldr.2":
      "Harness 持续演化，而修改它很难：<b>单个行为往往分散</b>在多个文件、执行阶段和共享状态中。找齐所有落点——<i>行为定位</i>——才是真正的瓶颈。",
    "tldr.3":
      "<b>Harness Handbook</b> 按「系统做什么」重新组织 Harness。三层细节从系统概览一路通到具体代码，每条结论都链接回可验证的证据。",
    "tldr.4":
      "在两个生产级 Harness 上，先查阅 Handbook 的 planner 给出<b>更好的修改方案，且消耗更少 token</b>——由三个独立模型评审得出。",

    /* ---- §01 ---- */
    "s01.num": "第 01 节",
    "s01.title": "Harness 是 Agent 的另一半",
    "s01.p1":
      "谈到 AI Agent，人们通常想到的是模型。但在部署好的系统里，模型只是其中一个组件。其余的一切——模型看到什么、能调用哪些工具、状态如何跨步骤延续、一次响应如何变成下一步动作——都由 <span class=\"u-h\">Harness</span>（模型周围的编排层）决定。",
    "s01.p2":
      "这正是同一个模型能造出两个行为完全不同的 Agent 的原因：Harness 定义了工作流。而 Harness 从不静止。模型在升级，API 在变化，新工具不断接入，产品持续提出新的行为需求。开发者因此不停地修改 Harness——收紧重试策略、加一步确认、重新设计记忆。我们把这个持续过程称为 <b>Harness 演化</b>。",
    "s01.note.label": "什么是 Harness？",
    "s01.note.p":
      "模型周围的运行时层：组装上下文、暴露工具、跨步骤维护状态、把模型输出变成动作。AutoGen、OpenHands 等框架和 Claude Code、Codex 等生产系统，都把 Harness 设计视为影响 Agent 可靠性的一等因素。",
    "s01.p3":
      "演化 Harness 的新兴方式，是用自然语言描述期望的<span class=\"u-b\">行为</span>，让 coding agent 把它翻译成代码改动。问题在于：生产级 Harness 体量大、高度互联、行为分布分散。一个行为可能同时落在许多文件、函数、执行阶段和共享状态里。所以在任何人——无论人还是 agent——动手修改之前，都必须先回答一个看似简单的问题：<b>这个行为到底在哪里实现？</b>",
    "s01.q": "这个行为到底在哪里实现？",

    /* ---- §02 ---- */
    "s02.num": "第 02 节",
    "s02.title": "真正的瓶颈：找到行为住在哪里",
    "s02.p1":
      "举个具体的请求：<i>「在破坏性工具调用之前先询问确认。」</i>听上去像一行代码的改动。但 Harness 是按<span class=\"u-i\">实现</span>组织的——文件、函数、配置、控制流——而请求是按<span class=\"u-b\">行为</span>表述的。在生产级 Harness 里，这一个行为会同时触及提示模板、工具包装器、特性开关、状态管理器、遥测和一个下游消费者，而它们各自住在不同的目录里。",
    "s02.figcap":
      "<b>一个行为，六个落点。</b>确认行为分散在四个子系统中，其中一半的文件从未出现过 <i>confirm</i> 这个词——只靠关键词搜索会漏掉它们。在编辑之前找齐<em>所有</em>落点，就是论文所说的<b>行为定位</b>。",
    "s02.p2":
      "<b>行为定位</b>——把行为请求映射到所有需要检查或修改的实现位置——往往是 Harness 演化的首要瓶颈。难的不是生成补丁，而是知道补丁应该落在哪里，并且确信没有遗漏。",
    "s02.p3":
      "Coding agent 对这个瓶颈体会最深。受限于上下文窗口，agent 无法一次看到整个 Harness，只能逐个文件探索仓库，边走边重建行为到代码的映射。这种探索缓慢、昂贵，而且常常不完整——镜像路径、回退逻辑、冷门执行分支，恰恰是它最容易漏看的地方。",
    "s02.p4":
      "这正是 Harness Handbook 要填补的空档：让开发者和 coding agent <b>从行为出发</b>，被引导到真正相关的实现位置。",

    /* ---- §03 ---- */
    "s03.num": "第 03 节",
    "s03.title": "Handbook：一张地图，三层细节",
    "s03.p1":
      "Harness Handbook 不是常规文档。它按<span class=\"u-b\">系统做什么</span>来重新组织 Harness，而不是按源码目录结构，同时保留指回<span class=\"u-i\">代码</span>的精确链接。它把系统展示为三个深度层级——只有需要时才继续下钻。",
    "s03.figcap":
      "<b>渐进式披露。</b>每一层回答一个问题，并把搜索范围收窄一步：从整个系统，到涉及的组件，再到带代码证据的单个行为单元。没有人要求你读完全部——只读当前决策需要的那一层。",
    "s03.l1":
      "<b>L1 · 系统概览</b>回答<i>「这个系统整体在做什么？」</i>——架构、执行模型、主要阶段、数据与状态流、入口与出口条件。",
    "s03.l2":
      "<b>L2 · 组件概览</b>回答<i>「涉及哪些部分？」</i>——各阶段与组件的职责、输入输出、依赖关系和关键状态。行为请求在这一层被收窄到相关组件。",
    "s03.l3":
      "<b>L3 · 单元深潜</b>回答<i>「代码具体在哪里？」</i>——完整呈现一个行为单元：执行逻辑、状态转换、异常处理，以及精确到文件、函数、行号的源码锚点。",
    "s03.entry.head": "一个条目长什么样",
    "s03.entry.p":
      "下面是前文确认行为对应的 L3 条目——经过压缩，但结构忠实于原样。注意每条陈述都以一个<b>证据链接</b>收尾：文件、函数、行号区间。文字负责解释，事实负责锚定。",

    /* ---- unit card ---- */
    "unit.badge": "行为单元 · Act 阶段",
    "unit.title": "破坏性调用确认",
    "unit.summary": "在任何被标记为破坏性的工具调用执行前暂停，请用户批准或拒绝。",
    "unit.f1.k": "触发条件",
    "unit.f1.v": "Planner 发出带 <code>destructive=true</code> 的工具调用",
    "unit.f2.k": "状态",
    "unit.f2.v": "设置 <code>pending_confirmation</code>；用户响应后清除",
    "unit.f3.k": "控制流",
    "unit.f3.v": "批准 → 执行调用 &nbsp;·&nbsp; 拒绝 → 跳过并记录",
    "unit.f4.k": "边界情况",
    "unit.f4.v": "设置 <code>flags.headless</code> 时自动批准",
    "unit.ev.label": "证据",
    "unit.figcap":
      "<b>一个 L3 行为单元。</b>一屏文字，替代原本要花一下午的仓库搜索——每条结论都附带可核查的链接。",

    /* ---- §04 ---- */
    "s04.num": "第 04 节",
    "s04.title": "如何构建一本 Handbook",
    "s04.p1":
      "Handbook 由现有 Harness 代码库经三步生成。贯穿始终的设计约束是：<b>事实来自代码，而不是模型的猜测。</b>",
    "s04.figcap":
      "<b>从代码库到手册。</b>静态分析产出事实；提议者–评审者循环把事实按行为组织；最后合成三层结构的手册，证据链接全程保留。",
    "s04.step1.title": "提取事实",
    "s04.step1.out": "→ 程序图",
    "s04.step1.p":
      "对仓库做静态分析，收集文件、函数、类、调用关系、状态读写、配置边界和外部 API 调用。它们共同构成一张<b>程序图</b>：实现之间真实的连接方式。",
    "s04.step2.title": "按行为组织",
    "s04.step2.out": "→ 行为地图",
    "s04.step2.p":
      "从 Harness 生命周期的粗略<b>执行骨架</b>出发，把程序图中的函数和代码区域映射到行为阶段上。一个<b>提议者–评审者循环</b>不断精化映射——提议者建议阶段归属和骨架更新，评审者对照调用关系、状态依赖和执行流检查——直到地图收敛。",
    "s04.step3.title": "合成手册",
    "s04.step3.out": "→ Handbook",
    "s04.step3.p":
      "收敛后的行为地图被渲染为三层结构：系统概览、组件概览、单元深潜。解释用自然语言书写，但每个源码链接、函数引用和代码片段都锚定在提取出的事实上——<b>文字解释，事实锚定</b>。",

    /* ---- §05 ---- */
    "s05.num": "第 05 节",
    "s05.title": "使用 Handbook：由粗到细",
    "s05.p1":
      "地图只有改变你的走法才有价值。论文的使用流程——<b>行为引导的渐进披露</b>（BGPD）——把 Handbook 变成一个结构化的定位工作流：每一步只打开当前决策需要的那一层。",
    "s05.figcap":
      "<b>从请求到修改方案。</b>请求选中执行阶段；阶段选中行为单元；单元暴露实现链接；然后才写修改方案。仓库始终是事实来源——Handbook 只负责决定去哪里看。",
    "s05.flow.1": "请求",
    "s05.flow.2": "阶段",
    "s05.flow.3": "行为单元",
    "s05.flow.4": "代码链接",
    "s05.flow.5": "修改方案",
    "s05.use.head": "实际用起来是什么样",
    "s05.use.dev.label": "作为开发者",
    "s05.use.dev.1": "通过 L1 完成上手，而不是从目录树开始——先看执行故事，再看文件。",
    "s05.use.dev.2": "按行为搜索（「确认」「重试」「终止」），而不是靠猜文件名。",
    "s05.use.dev.3": "动手前先打开单元的证据链接——分散的落点已经替你列好了。",
    "s05.use.agent.label": "作为 coding agent",
    "s05.use.agent.1": "Planner 在接触仓库之前，先按 BGPD 查阅 Handbook。",
    "s05.use.agent.2": "每一步只把一层内容装入上下文——不再全仓库漫游。",
    "s05.use.agent.3": "修改方案引用 Handbook 证据，执行者再对照真实代码验证。",

    /* ---- §06 ---- */
    "s06.num": "第 06 节",
    "s06.title": "是否有效？",
    "s06.p1":
      "评估只问一个窄问题：先查阅 Handbook，是否帮助 agent 在编辑前完成行为定位？其余全部固定——同样的编码流程、同样的请求——只改变一个变量：planner 是否先用 BGPD 查阅 Handbook。",
    "s06.spec1.label": "被测 Harness",
    "s06.spec1.value": "Terminus-2 与 Codex",
    "s06.spec1.note": "两个生产级 Harness，具有多阶段控制流和跨模块行为。",
    "s06.spec2.label": "对照设置",
    "s06.spec2.value": "用 vs. 不用 Handbook",
    "s06.spec2.note": "流水线完全相同；唯一区别是 planner 编辑前是否查阅 Handbook。",
    "s06.spec3.label": "评审",
    "s06.spec3.value": "三个独立模型",
    "s06.spec3.note": "GPT-5.5、Opus 4.8、DeepSeek-V4-Pro——取平均以降低单一评审的偏差。",
    "s06.reqtypes":
      "请求分三种：<b>Q</b>——微调既有行为（时机、触发、控制流）；<b>CF</b>——跨 schema、流水线与接口端到端加一个能力；<b>SH</b>——对搜索不友好的改动，散布在镜像、回退与冷路径中，关键词搜索常常漏掉。",

    "s06.r1.tag": "结果 1",
    "s06.r1.head": "方案更好，搜索成本更低",
    "s06.r1.p":
      "在成对评审下，借助 Handbook 的 planner 在两个 Harness 上都赢得更多——而且每个案例消耗的 planner token 更少，因为搜索更有的放矢。",
    "chart.win.title": "总体胜率",
    "chart.win.sub": "成对比较中获胜的百分比 · 越高越好",
    "chart.tok.title": "Planner token 成本",
    "chart.tok.sub": "每案例百万 token · 越低越好",
    "legend.baseline": "基线",
    "legend.handbook": "使用 Handbook",
    "s06.r1.figcap":
      "<b>胜率与成本同向改善。</b>Handbook 在两个 Harness 上都提升胜率（Codex +10.0，Terminus +18.9），同时每案例 planner token 下降（0.102→0.093&nbsp;M 与 0.058→0.053&nbsp;M）。",
    "chart.judges.title": "每位评审、两个 Harness",
    "chart.judges.sub": "各评审给出的胜率：不用 → 使用 Handbook",
    "chart.judges.axis": "胜率 %",
    "s06.judges.figcap":
      "<b>不是单一评审的偶然。</b>三位评审在两个 Harness 上都偏好 Handbook 一侧；单项最大提升 +26.7 个百分点（Opus&nbsp;4.8 于 Terminus）。",

    "s06.r2.tag": "结果 2",
    "s06.r2.head": "收益来自定位",
    "s06.r2.p":
      "以参考答案为基准、在文件与符号两个粒度上为预测的修改位置打分，可以看出改进从何而来：几乎所有设置下召回、精确率和 F1 同步上升，而完全找错子系统的 <i>Wrong</i> 案例大幅下降。",
    "seg.opus": "Opus 4.8 参考",
    "seg.gpt": "GPT-5.5 参考",
    "seg.opus.short": "Opus 4.8",
    "seg.gpt.short": "GPT-5.5",
    "loc.th.harness": "Harness",
    "loc.th.level": "粒度",
    "loc.th.metric": "指标",
    "loc.th.baseline": "基线",
    "loc.th.handbook": "Handbook",
    "loc.th.gap": "Δ",
    "loc.l.file": "文件",
    "loc.l.symbol": "符号",
    "loc.m.recall": "召回",
    "loc.m.precision": "精确率",
    "loc.m.f1": "F1",
    "loc.m.wrong": "Wrong",
    "loc.cap":
      "<b>以参考答案为基准的定位得分</b>（{label} 参考）。<b>Wrong</b> 越低越好。",
    "s06.aside.summary": "LLM 评分维度怎么看？",
    "s06.aside.p":
      "评审还按三个维度打分——<b>定位</b>、<b>范围膨胀</b>、<b>推理</b>。Handbook 提升定位与推理，范围膨胀基本持平：planner 检查了<em>更相关</em>的位置，而不是提出更宽更潦草的修改。是瞄得更准，不是撒网更大。",

    "s06.r3.tag": "结果 3",
    "s06.r3.head": "对请求类型与难度都稳健",
    "s06.r3.p":
      "优势在三种请求类型以及 Easy、Medium、Hard 三个难度上都成立——Hard 指依赖藏在不显眼执行路径中的案例。定位越难的地方，Handbook 帮得越多。",
    "seg.codex": "Codex",
    "seg.terminus": "Terminus",
    "seg.pattern": "按请求类型",
    "seg.difficulty": "按难度",
    "sc.q": "Q · 微调",
    "sc.cf": "CF · 跨文件",
    "sc.sh": "SH · 搜索不友好",
    "sc.easy": "Easy",
    "sc.medium": "Medium",
    "sc.hard": "Hard",
    "s06.r3.figcap":
      "<b>泛化性。</b>在两个 Harness 上，不同修改类型与难度下胜率均保持领先。",

    /* ---- §07 ---- */
    "s07.num": "第 07 节",
    "s07.title": "我们学到了什么",
    "s07.i1.title": "瓶颈确实是定位",
    "s07.i1.p":
      "Handbook 的收益与定位指标高度同步。把 planner 引到行为相关的代码区域，更好的修改方案自然随之而来，无谓的探索也随之减少。",
    "s07.i2.title": "瞄得更准，而不是撒网更大",
    "s07.i2.p":
      "planner 并不是检查了更多文件——它找对了文件和符号。精确率与召回同时上升，范围膨胀保持平稳。",
    "s07.i3.title": "这种表示是通用的",
    "s07.i3.p":
      "收益在两个 Harness、三位评审、三种请求类型、三个难度级别上全部成立——说明它来自通用的行为中心表示，而非针对基准的技巧。",

    /* ---- §08 ---- */
    "s08.num": "第 08 节",
    "s08.title": "要点总结",
    "s08.1": "Harness 演化之所以难，是因为行为改动很少对应到一个明显的代码位置。",
    "s08.2": "有用的 Harness 表示应当按行为组织系统——并让每条结论都链接回代码证据。",
    "s08.3": "渐进式披露契合人与 agent 的工作方式：只读当前决策需要的那一层。",
    "s08.4": "先定位，再编辑。测得的所有收益——更高胜率、更好的召回与精确率、更少 token——都来自这个顺序。",
    "s08.closing":
      "如果你的团队维护着一个 Agent Harness，这套模式可以直接迁移：提取事实，按行为组织，保留证据链接——让你的开发者和 coding agent 都从行为出发。",

    /* ---- footer ---- */
    "footer.cite.title": "引用本工作",
    "bib.copy": "复制",
    "bib.copied": "已复制 ✓",
    "bib.failed": "复制失败",

    /* ================= figures (script.js) ================= */
    /* hero */
    "fig.hero.aria": "一条行为请求，经由 Handbook 映射到代码中的实现位置",
    "fig.hero.olA": "你想要的行为",
    "fig.hero.q1": "「在破坏性工具调用之前",
    "fig.hero.q2": "先询问确认。」",
    "fig.hero.subA1": "由开发者或 coding agent",
    "fig.hero.subA2": "用自然语言表述。",
    "fig.hero.olB": "HANDBOOK",
    "fig.hero.l1": "系统概览",
    "fig.hero.l1s": "Harness 在做什么",
    "fig.hero.l2": "组件概览",
    "fig.hero.l2s": "哪些部分在做",
    "fig.hero.l3": "单元深潜",
    "fig.hero.l3s": "做这件事的代码",
    "fig.hero.olC": "它在代码中的落点",
    "fig.hero.subC": "五个分散的落点——在动手编辑之前就已找齐",

    /* tree */
    "fig.tree.aria": "一条行为请求对应 Harness 代码库中六个分散的文件",
    "fig.tree.olA": "请求",
    "fig.tree.q1": "「在破坏性工具调用之前",
    "fig.tree.q2": "先询问确认。」",
    "fig.tree.subA": "听上去像一行代码的改动。",
    "fig.tree.olC": "每个落点做什么",
    "fig.tree.a1": "跟踪待确认状态",
    "fig.tree.a2": "拦截破坏性调用",
    "fig.tree.a3": "告诉模型何时询问",
    "fig.tree.a4": "该行为的特性开关",
    "fig.tree.a5": "记录结果",
    "fig.tree.a6": "消费用户的决定",
    "fig.tree.stat1": "6 个落点，横跨 4 个子系统。",
    "fig.tree.stat2": "其中一半从未出现「confirm」。",

    /* levels */
    "fig.levels.aria": "Handbook 的三层：系统概览、组件概览、单元深潜",
    "fig.levels.l1tab": "L1 · 系统概览",
    "fig.levels.l1line": "五阶段执行循环：每一轮从用户输入走到完成动作。",
    "fig.levels.st1": "输入",
    "fig.levels.st2": "规划",
    "fig.levels.st3": "执行",
    "fig.levels.st4": "观察",
    "fig.levels.st5": "收尾",
    "fig.levels.q1a": "整个系统",
    "fig.levels.q1b": "在做什么？",
    "fig.levels.l2tab": "L2 · 组件概览",
    "fig.levels.l2line": "执行阶段内部——组件、职责、输入输出、关键状态。",
    "fig.levels.c1": "工具调用",
    "fig.levels.c1s": "校验、分发并包装每次工具调用",
    "fig.levels.c2": "沙箱执行",
    "fig.levels.c2s": "隔离副作用",
    "fig.levels.c3": "结果路由",
    "fig.levels.c3s": "把输出转发给状态与遥测",
    "fig.levels.q2a": "涉及哪些",
    "fig.levels.q2b": "部分？",
    "fig.levels.l3tab": "L3 · 单元深潜",
    "fig.levels.l3title": "破坏性调用确认",
    "fig.levels.l3line": "触发条件、状态转换、异常路径——并附指向源码的锚点。",
    "fig.levels.q3a": "代码具体",
    "fig.levels.q3b": "在哪里？",

    /* pipeline */
    "fig.pipe.aria": "Handbook 构建流程：提取事实、按行为组织、合成手册",
    "fig.pipe.repo": "harness 仓库",
    "fig.pipe.t1": "提取事实",
    "fig.pipe.d1a": "对文件、函数、调用、",
    "fig.pipe.d1b": "状态与配置做静态分析",
    "fig.pipe.o1": "程序图",
    "fig.pipe.t2": "按行为组织",
    "fig.pipe.d2a": "把代码映射到执行骨架上，",
    "fig.pipe.d2b": "反复精化直至收敛",
    "fig.pipe.o2": "行为地图",
    "fig.pipe.t3": "合成手册",
    "fig.pipe.d3a": "渲染三层结构，",
    "fig.pipe.d3b": "保留全部证据链接",
    "fig.pipe.o3": "Handbook · L1–L3",
    "fig.pipe.loop": "提议者 ⇄ 评审者，直至收敛",
    "fig.pipe.foot": "文字解释，事实锚定——每个条目都链接到可验证的代码证据。",

    /* bgpd */
    "fig.bgpd.aria": "BGPD 把请求经由阶段与单元收窄到代码链接和修改方案",
    "fig.bgpd.h1": "1 · 请求",
    "fig.bgpd.h2": "2 · 阶段",
    "fig.bgpd.h3": "3 · 行为单元",
    "fig.bgpd.h4": "4 · 代码链接",
    "fig.bgpd.h5": "5 · 修改方案",
    "fig.bgpd.q1": "「删除之前",
    "fig.bgpd.q2": "先加确认。」",
    "fig.bgpd.st1": "输入",
    "fig.bgpd.st2": "规划",
    "fig.bgpd.st3": "执行",
    "fig.bgpd.st4": "观察",
    "fig.bgpd.st5": "收尾",
    "fig.bgpd.u1": "删除防护",
    "fig.bgpd.u2": "提示规则",
    "fig.bgpd.u3": "工具包装器",
    "fig.bgpd.u4": "回退路径",
    "fig.bgpd.d1": "确认检查",
    "fig.bgpd.d2": "提示规则",
    "fig.bgpd.d3": "直接删除路径",
    "fig.bgpd.d4": "范围小而精确",
    "fig.bgpd.coarse": "粗 — 整个系统",
    "fig.bgpd.fine": "细 — 一次修改",
    "fig.bgpd.note": "每一步只展示当前决策需要的信息——仓库始终是事实来源。",
  };

  /* ===================== runtime ===================== */
  let currentLang = "en";
  const EN = {};
  let cached = false;

  function cacheDefaults() {
    if (cached) return;
    cached = true;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) EN[key] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-text]").forEach((el) => {
      const key = el.getAttribute("data-i18n-text");
      if (key) EN[key] = el.textContent;
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) EN[key] = el.getAttribute("title") || "";
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) EN[key] = el.getAttribute("aria-label") || "";
    });

    EN["meta.title"] = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) EN["meta.description"] = metaDesc.getAttribute("content") || "";
  }

  function getLang() {
    return currentLang;
  }

  function tr(key, enFallback) {
    cacheDefaults();
    if (currentLang === "zh" && Object.prototype.hasOwnProperty.call(ZH, key)) {
      return ZH[key];
    }
    if (Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
    if (enFallback !== undefined) return enFallback;
    return key;
  }

  function applyMeta(lang) {
    const pack = META[lang] || META.en;
    document.title = pack.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", pack.description);
  }

  function applyLang(lang) {
    if (!VALID.has(lang)) lang = "en";
    cacheDefaults();
    currentLang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    applyMeta(lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.innerHTML = tr(key);
    });
    document.querySelectorAll("[data-i18n-text]").forEach((el) => {
      const key = el.getAttribute("data-i18n-text");
      if (key) el.textContent = tr(key);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) el.setAttribute("title", tr(key));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", tr(key));
    });

    const langSwitch = document.getElementById("lang-switch");
    if (langSwitch) {
      langSwitch.querySelectorAll(".seg__btn[data-lang]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.lang === lang);
      });
    }

    document.dispatchEvent(new CustomEvent("hh-langchange", { detail: { lang } }));
  }

  function setLang(lang) {
    if (!VALID.has(lang)) return;
    try {
      localStorage.setItem(LS_KEY, lang);
    } catch (_) { /* private mode */ }
    applyLang(lang);
  }

  function init() {
    let saved = "en";
    try {
      saved = localStorage.getItem(LS_KEY) || "en";
    } catch (_) {
      saved = "en";
    }
    const forced = new URLSearchParams(location.search).get("lang"); // ?lang=en|zh
    if (VALID.has(forced)) saved = forced;
    applyLang(saved === "zh" ? "zh" : "en");

    const langSwitch = document.getElementById("lang-switch");
    if (langSwitch) {
      langSwitch.querySelectorAll(".seg__btn[data-lang]").forEach((btn) => {
        btn.addEventListener("click", () => setLang(btn.dataset.lang));
      });
    }
  }

  window.HH_I18N = { getLang, setLang, tr, applyLang, cacheDefaults, ZH, META, init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
