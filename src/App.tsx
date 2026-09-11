import HashScroll from './hash-scroll';

const pdfHref = 'downloads/%E7%8E%8B%E5%8D%97%E5%B4%8E_%E5%B7%A5%E4%B8%9A%E8%AE%BE%E8%AE%A1%E7%A1%95%E5%A3%AB%E7%94%B3%E8%AF%B7%E4%BD%9C%E5%93%81%E9%9B%86_2026.pdf?v=20260911';
const pdfDownloadName = '王南崎_工业设计硕士申请作品集_2026.pdf';

type ImageData = { base: string; widths: number[]; width: number; height: number; alt: string; caption?: string };
type CuratedProject = {
  id: string; theme: string; number: string; keyword: string; transition: string; cn: string; en: string;
  thesis: string; type: string; meta: string; tags: string[]; states: string[]; insight: string;
  principles: { title: string; detail: string }[]; steps: string[]; interaction: string;
  features: string[]; summary: string; next: string; nextLabel: string;
  hero: ImageData; signatureImages: ImageData[]; finalImage: ImageData; note?: string;
  systemRoles?: { label: string; detail: string }[];
};

function PortfolioImage({ image, className, sizes = '(max-width: 700px) 100vw, 60vw', eager = false }: { image: ImageData; className?: string; sizes?: string; eager?: boolean }) {
  const largest = image.widths[image.widths.length - 1];
  return <picture className={className}><source srcSet={image.widths.map((w) => `${image.base}-${w}.webp ${w}w`).join(', ')} sizes={sizes} /><img src={`${image.base}-${largest}.webp`} width={image.width} height={image.height} alt={image.alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} /></picture>;
}

function TransitionMark({ type }: { type: 'initiate' | 'detach' | 'settle' }) {
  if (type === 'initiate') return <svg className="transition-mark transition-mark-initiate" viewBox="0 0 100 40" aria-hidden="true"><path d="M24 20H66" /><circle cx="72" cy="20" r="6" /></svg>;
  if (type === 'detach') return <svg className="transition-mark transition-mark-detach" viewBox="0 0 80 80" aria-hidden="true"><path d="M28 10C50 23 55 45 39 64" /><circle cx="39" cy="67" r="6" /></svg>;
  return <svg className="transition-mark transition-mark-settle" viewBox="0 0 72 80" aria-hidden="true"><path d="M13 10C34 24 36 47 22 66M31 10C52 24 54 47 40 66" /><circle cx="22" cy="66" r="6" /></svg>;
}

function Navigation() {
  const links = <><a href="#home">HOME</a><a href="#preface">PREFACE</a><a href="#projects">PROJECTS</a><a href="#profile">PROFILE</a><a href={pdfHref} download={pdfDownloadName}><span className="download-label-desktop">DOWNLOAD</span><span className="download-label-mobile">DOWNLOAD PDF · 8.7 MB</span></a></>;
  return <><nav className="desktop-nav" aria-label="主导航">{links}</nav><details className="mobile-menu"><summary>MENU</summary><nav aria-label="移动端主导航">{links}</nav></details></>;
}

const tide: CuratedProject = {
  id: 'tidechron', theme: 'tide', number: '01', keyword: 'INITIATE', transition: '低行动状态 → 行动状态', cn: '潮汐之刻', en: 'TideChron',
  thesis: '把启动设计为一段渐进的感官过渡。', type: '桌面无屏幕感官节律启动装置', meta: '2026 · INDIVIDUAL PROJECT · RESEARCH / PRODUCT / INTERACTION / PROTOTYPING', tags: ['TOUCH', 'LIGHT', 'SOUND'],
  states: ['低行动状态', '缺失的启动过渡', '行动状态'],
  insight: '任务启动的困难并不总是缺少提醒，而是缺少一个低门槛、可被身体进入的开始过程。',
  principles: [{ title: '低门槛介入', detail: '一次轻触即可开始' }, { title: '渐进反馈', detail: '光声节律逐步展开' }, { title: '保留自主', detail: '不替用户决定任务' }],
  steps: ['轻触实体', '光与声音逐步进入', '感知状态正在转变', '开始行动'],
  interaction: '潮汐渐入渐退被转译为光声节律；一次轻触启动过渡，反馈逐步增强，再把注意力交还给行动。',
  features: ['无需先进入数字界面', '反馈逐步发生，而非突然催促', '过渡完成后技术退到背景'],
  summary: '潮汐之刻让“开始”成为一段可被身体进入、同时不过度占据注意力的过程。', next: '#mindhaven', nextLabel: 'NEXT · MINDHAVEN',
  hero: { base: 'images/tidechron/tidechron-product', widths: [480,768,1049], width: 1049, height: 1049, alt: '潮汐之刻暖白色卵石形桌面装置，顶部为柔和发光触摸区域' },
  signatureImages: [
    { base: 'images/tidechron/tidechron-standby', widths: [480,768,1049], width: 1049, height: 1049, alt: '潮汐之刻待机状态最终渲染，顶部灯光保持关闭', caption: '01 · STANDBY / 待机' },
    { base: 'images/tidechron/tidechron-running', widths: [480,768,1049], width: 1049, height: 1049, alt: '潮汐之刻运行状态最终渲染，壳体内部呈现柔和暖光', caption: '02 · RUNNING / 运行' },
    { base: 'images/tidechron/tidechron-light', widths: [480,768,1080,1440,1767], width: 1767, height: 1092, alt: '潮汐之刻实体原型顶部点亮，验证触摸后的柔和光反馈', caption: 'PHYSICAL PROTOTYPE · 实体亮灯反馈验证' },
    { base: 'images/tidechron/tidechron-app-ui', widths: [390], width: 390, height: 844, alt: '潮汐之刻真实手机端状态校准界面，提供状态选择与主动查看入口', caption: 'APP · LATER / 主动进入' }
  ],
  systemRoles: [
    { label: 'DEVICE · NOW', detail: '轻触实体 · 光声确认 · 开始状态过渡' },
    { label: 'APP · LATER', detail: '状态校准 · 记录回看 · 个性化设置' },
    { label: 'AI · BACKSTAGE', detail: '分析历史 · 生成轻量建议 · 不作为独立入口' }
  ],
  finalImage: { base: 'images/tidechron/tidechron-context', widths: [480,768,1080,1440,1672], width: 1672, height: 941, alt: '用户在桌面工作环境中轻触潮汐之刻，准备进入行动状态' }
};

const mind: CuratedProject = {
  id: 'mindhaven', theme: 'mind', number: '02', keyword: 'DETACH', transition: '任务占用 → 暂时退出', cn: '留白', en: 'MindHaven',
  thesis: '为暂时退出任务建立可信、可逆的实体边界。', type: '实体认知交接与延后取回装置', meta: '2026 · INDIVIDUAL PROJECT · RESEARCH / SYSTEM / PRODUCT / INTERACTION', tags: ['HANDOFF', 'SEAL', 'RETURN'],
  states: ['任务空间', '认知空间', '休息空间'],
  insight: '任务动作停止后，未完成内容仍可能持续占据认知；真正的退出不仅需要记录，还需要可信的交接边界和主动返回权。',
  principles: [{ title: '可靠交接', detail: '内容有明确暂存去处' }, { title: '身体可感', detail: '旋转封存形成边界' }, { title: '延迟取回', detail: '由用户决定返回时机' }],
  steps: ['交接当前内容', '旋转并封存', '装置进入静默', '需要时主动取回'],
  interaction: '交接动作被压缩为可逆的旋转封存；装置随后保持静默，直到用户决定重新打开边界。',
  features: ['实体装置是主要入口', '数字端仅作可选归档，不主动提醒', '返回时机始终由用户决定'],
  summary: '留白把“暂时离开”从一次界面操作，转化为可被信任、也可以重新开启的实体边界。', next: '#sensoripple', nextLabel: 'NEXT · SENSORIPPLE',
  hero: { base: 'images/mindhaven/mind-hero', widths: [480,768,1080,1350], width: 1350, height: 1165, alt: '留白装置最终产品渲染，暖白色旋转上盖位于浅米色底座上' },
  signatureImages: [
    { base: 'images/mindhaven/mind-approach', widths: [480,768,1080,1440,1448], width: 1448, height: 1086, alt: '用户把手伸向留白装置，准备交接当前任务内容', caption: '01 · HANDOFF' },
    { base: 'images/mindhaven/mind-seal', widths: [480,768,1080,1402], width: 1402, height: 1122, alt: '手指旋转留白装置上盖，完成实体封存动作', caption: '02 · ROTATE & SEAL' },
    { base: 'images/mindhaven/mind-rest', widths: [480,768,1080,1440,1448], width: 1448, height: 1086, alt: '留白装置在卧室中保持静默，支持用户暂时退出任务', caption: '03 · QUIET EXIT' },
    { base: 'images/mindhaven/mind-retrieval', widths: [480,768,1080,1440,1448], width: 1448, height: 1053, alt: '白天用户从留白装置主动取回先前封存的任务内容', caption: '04 · ACTIVE RETRIEVAL' }
  ],
  finalImage: { base: 'images/mindhaven/mind-context', widths: [480,768,1080,1440,1448], width: 1448, height: 1086, alt: '留白装置置于安静的暖白卧室床头，呈现暂时退出后的休息情境' }
};

const senso: CuratedProject = {
  id: 'sensoripple', theme: 'senso', number: '03', keyword: 'SETTLE', transition: '高唤醒状态 → 静息状态', cn: '息纹', en: 'SensoRipple',
  thesis: '通过掌心承托和柔和触觉支持睡前状态过渡。', type: '掌中睡前触觉感官调节工具', meta: '2026 · INDIVIDUAL PROJECT · RESEARCH / FORM / INTERACTION / PROTOTYPING', tags: ['PALM', 'TACTILE', 'REST'],
  states: ['高唤醒状态', '缺失的感官过渡', '静息状态'],
  insight: '进入卧室不等于进入静息；睡前体验需要一段连续、主动、可随时停止并且不重新占据注意力的身体过渡。',
  principles: [{ title: '掌中承托', detail: '手掌与床面共同承重' }, { title: '柔和触觉', detail: '局部反馈避免再度唤醒' }, { title: '实体闭环', detail: '不依赖屏幕即可完成' }],
  steps: ['从底座取出', '掌心与床面共同承托', '感受柔和局部反馈', '放回底座'],
  interaction: '局部、缓慢的掌心形变提供可感知、低刺激且能够停止的身体反馈；其具体舒缓效果仍需在后续用户研究中验证。',
  features: ['不依赖屏幕', '触觉温和且可以停止', '使用结束后自然回到底座'],
  summary: '息纹不控制睡眠，而是为进入睡前状态提供一段安静、可自主结束的身体过渡。', next: '#profile', nextLabel: 'PROFILE · WANG NANQI',
  hero: { base: 'images/sensoripple/senso-hero', widths: [480,768,1080,1254], width: 1254, height: 1254, alt: '息纹掌中触觉装置与波纹形充电底座的最终产品渲染' },
  signatureImages: [
    { base: 'images/sensoripple/senso-human-scale', widths: [480,768,1080,1440,1536], width: 1536, height: 1024, alt: '最终产品位于用户掌心，拇指自然触达蓝色触觉区域', caption: 'HUMAN SCALE · 掌心承托与拇指触达' },
    { base: 'images/sensoripple/senso-tactile-contact', widths: [480,768,1080,1280], width: 1968, height: 984, alt: '息纹与掌心保持稳定接触时的侧面形态', caption: '01 · 稳定接触' },
    { base: 'images/sensoripple/senso-tactile-change', widths: [480,768,1080,1280], width: 1968, height: 984, alt: '息纹产生局部触觉变化时的侧面形态', caption: '02 · 局部触觉变化' },
    { base: 'images/sensoripple/senso-tactile-return', widths: [480,768,1080,1280], width: 1968, height: 984, alt: '息纹触觉反馈渐进回落时的侧面形态', caption: '03 · 渐进回落' }
  ],
  finalImage: { base: 'images/sensoripple/senso-scene', widths: [480,768,1080,1440,1491], width: 1491, height: 1055, alt: '睡前用户把息纹轻放在掌心，产品与床品共同形成安静承托' }
};

function StateDiagram({ states }: { states: string[] }) {
  return <div className="state-diagram" aria-label={`${states[0]}到${states[2]}的状态转换`}><span>{states[0]}</span><i aria-hidden="true" /><span className="missing-state">{states[1]}</span><i aria-hidden="true" /><span>{states[2]}</span></div>;
}

function SignatureEvidence({ project }: { project: CuratedProject }) {
  if (project.id === 'tidechron') {
    const [standby, running, prototype, appInterface] = project.signatureImages;
    return <div className="tide-evidence-grid">
      <section className="evidence-panel operation-states"><header><strong>OPERATION STATES</strong><span>待机 → 运行</span></header><div>{[standby, running].map((image) => <figure key={image.base}><PortfolioImage image={image} sizes="(max-width: 700px) 50vw, 24vw" /><figcaption>{image.caption}</figcaption></figure>)}</div></section>
      <figure className="evidence-panel physical-light"><header><strong>PHYSICAL EVIDENCE</strong><span>实体原型</span></header><PortfolioImage image={prototype} sizes="(max-width: 700px) 100vw, 45vw" /><figcaption>{prototype.caption}</figcaption></figure>
      <section className="device-first-panel" aria-labelledby="device-app-title"><header className="device-first-heading"><strong id="device-app-title">DEVICE FIRST · APP LATER</strong><span>实体当下启动 · 数字按需进入</span></header><div className="device-app-visual"><figure className="device-now"><PortfolioImage image={standby} sizes="(max-width: 700px) 44vw, 24vw" /><figcaption>DEVICE · NOW / 待机状态</figcaption></figure><div className="device-app-bridge" aria-hidden="true"><span>NOW</span><i /><span>LATER</span></div><figure className="app-later"><PortfolioImage image={appInterface} sizes="(max-width: 700px) 40vw, 16vw" /><figcaption>{appInterface.caption}</figcaption></figure></div><div className="system-role-list">{project.systemRoles?.map((role) => <div key={role.label}><b>{role.label}</b><p>{role.detail}</p></div>)}<p className="system-summary">核心启动直接在实体中完成；App仅在用户主动进入时承担查看、校准与个性化设置。</p></div></section>
    </div>;
  }

  if (project.id === 'sensoripple') {
    const [humanScale, ...tactileStates] = project.signatureImages;
    return <div className="senso-evidence-grid">
      <figure className="evidence-panel human-scale"><header><strong>HUMAN SCALE</strong><span>掌心承托与拇指触达</span></header><PortfolioImage image={humanScale} sizes="(max-width: 700px) 100vw, 42vw" /><figcaption>{humanScale.caption}</figcaption></figure>
      <section className="evidence-panel tactile-response"><header><strong>TACTILE RESPONSE</strong><span>局部掌心形变</span></header><div className="tactile-state-grid">{tactileStates.map((image) => <figure key={image.base}><PortfolioImage image={image} sizes="(max-width: 700px) 100vw, 18vw" /><figcaption>{image.caption}</figcaption></figure>)}</div><p>{project.interaction}</p></section>
    </div>;
  }

  return <div className={`signature-gallery signature-gallery-${project.theme}`}>{project.signatureImages.map((image) => <figure key={image.base}><PortfolioImage image={image} /><figcaption>{image.caption}</figcaption></figure>)}</div>;
}

function CuratedProjectSection({ project }: { project: CuratedProject }) {
  return <section className={`curated-project project-${project.theme}`} id={project.id} aria-labelledby={`${project.id}-title`}>
    <div className="curated-project-inner section-shell">
      <article className="project-module curated-hero">
        <div className="module-label"><span>PROJECT HERO</span><span>{project.number} · {project.keyword}</span></div>
        <div className="curated-hero-copy"><p className="curated-project-cn">{project.cn}</p><h2 id={`${project.id}-title`}>{project.en}</h2><p className="curated-type">{project.type}</p><p className="curated-project-meta">{project.meta}</p><p className="curated-transition">{project.transition}</p><h3>{project.thesis}</h3><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        <PortfolioImage image={project.hero} className="curated-hero-image" sizes="(max-width: 700px) 90vw, 48vw" eager={project.number === '01'} />
      </article>

      <article className="project-module curated-why">
        <div className="module-label"><span>WHY THIS TRANSITION</span><span>STATE · INSIGHT · PRINCIPLES</span></div>
        <StateDiagram states={project.states} />
        <blockquote>{project.insight}</blockquote>
        <div className="principle-list">{project.principles.map((item, index) => <div key={item.title}><b>0{index + 1}</b><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div>
      </article>

      <article className="project-module curated-signature">
        <div className="module-label"><span>SIGNATURE INTERACTION</span><span>{project.keyword}</span></div>
        <ol className="signature-steps">{project.steps.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>)}</ol>
        <SignatureEvidence project={project} />
        {project.id !== 'sensoripple' && <div className="interaction-note"><p>{project.interaction}</p>{project.note && <small>{project.note}</small>}</div>}
      </article>

      <article className="project-module curated-final">
        <div className="module-label"><span>FINAL EXPERIENCE</span><span>IN USE</span></div>
        <PortfolioImage image={project.finalImage} className="final-experience-image" sizes="(max-width: 700px) 100vw, 72vw" />
        <div className="final-experience-copy"><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><p>{project.summary}</p><div className="final-actions"><a className="case-study-link" href={pdfHref} download={pdfDownloadName}>DOWNLOAD FULL CASE STUDY PDF ↓</a><a href={project.next}>{project.nextLabel} ↓</a></div></div>
      </article>
    </div>
  </section>;
}

export default function Home() {
  return <><HashScroll /><main>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="返回首页">WNQ · 2026</a><Navigation /></header>
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-meta hero-name"><strong>王南崎</strong><span>WANG NANQI</span></div><div className="hero-meta hero-portfolio"><strong>工业设计硕士申请作品集</strong><span>INDUSTRIAL DESIGN GRADUATE APPLICATION PORTFOLIO</span></div><div className="hero-year">2026</div>
      <div className="hero-title-wrap"><h1 id="hero-title" className="hero-wordmark" aria-label="PORTFOLIO"><span aria-hidden="true">P</span><span className="hero-letter-o hero-letter-o-initiate" aria-hidden="true">O<span className="hero-letter-mark hero-letter-mark-initiate"><TransitionMark type="initiate" /></span></span><span aria-hidden="true">RTF</span><span className="hero-letter-o hero-letter-o-detach" aria-hidden="true">O<span className="hero-letter-mark hero-letter-mark-detach"><TransitionMark type="detach" /></span></span><span aria-hidden="true">LI</span><span className="hero-letter-o hero-letter-o-settle" aria-hidden="true">O<span className="hero-letter-mark hero-letter-mark-settle"><TransitionMark type="settle" /></span></span></h1></div>
      <div className="hero-bottom"><div><p className="hero-theme">DESIGNING TANGIBLE INTERACTIONS<br />FOR EVERYDAY TRANSITIONS</p><p className="hero-theme-cn">为日常状态转换设计可触的交互</p></div><div className="hero-download"><div className="hero-actions"><a className="button button-primary" href="#projects">VIEW PROJECTS <span aria-hidden="true">↘</span></a><a className="button button-secondary" href={pdfHref} download={pdfDownloadName}>DOWNLOAD PDF · 8.7 MB <span aria-hidden="true">↓</span></a></div><p className="mobile-download-note">手机端将直接下载；若微信内受限，请使用系统浏览器打开。</p></div></div>
    </section>
    <section className="preface section-shell" id="preface" aria-labelledby="preface-title"><div className="section-index"><span>P.01</span><span>PREFACE</span></div><div className="preface-heading"><h2 id="preface-title">为状态转换而设计</h2><p>DESIGNING FOR TRANSITIONS</p></div><div className="preface-copy"><p>状态之间，也是一段值得被设计的体验。日常生活里，真正困难的往往不是某个稳定状态，而是从停滞进入行动、从任务中暂时退出，或从高唤醒慢慢回到静息。</p><p>三个项目以实体形态、身体动作与感官反馈回应这些容易被忽略的过渡，使变化可感知、可调节，并避免增加额外负担。数字技术不占据注意力中心，而是在需要时介入，在不需要时退后。</p></div></section>
    <section className="project-hub section-shell" id="projects" aria-labelledby="projects-title"><div className="section-index"><span>P.02</span><span>CONTENTS</span></div><div className="hub-heading"><h2 id="projects-title">三个日常过渡</h2><p>THREE EVERYDAY TRANSITIONS</p></div><div className="transition-grid"><a className="transition-card initiate" href="#tidechron"><span className="transition-number">01</span><strong>INITIATE</strong><TransitionMark type="initiate" /><p>低行动状态 → 行动状态</p><h3>TideChron｜潮汐之刻</h3></a><a className="transition-card detach" href="#mindhaven"><span className="transition-number">02</span><strong>DETACH</strong><TransitionMark type="detach" /><p>任务占用 → 暂时退出</p><h3>MindHaven｜留白</h3></a><a className="transition-card settle" href="#sensoripple"><span className="transition-number">03</span><strong>SETTLE</strong><TransitionMark type="settle" /><p>高唤醒状态 → 静息状态</p><h3>SensoRipple｜息纹</h3></a></div></section>
    <CuratedProjectSection project={tide} /><CuratedProjectSection project={mind} /><CuratedProjectSection project={senso} />
    <section className="profile section-shell" id="profile" aria-labelledby="profile-title">
      <div className="profile-intro"><div className="section-index profile-index"><span>PROFILE</span></div><div className="profile-name"><p>王南崎</p><h2 id="profile-title">WANG NANQI</h2><span>INDUSTRIAL DESIGN</span></div><PortfolioImage image={{ base: 'images/profile/wang-nanqi-portrait', widths: [480,768,1080,1440,1500], width: 1500, height: 2100, alt: '王南崎个人证件照' }} sizes="(max-width: 700px) 72vw, 28vw" className="profile-photo" /><div className="profile-statement"><p>我关注注意、感官与情绪调节中的个体差异，并从神经多样性视角探索实体与具身交互如何支持心理福祉。我的设计将体验需求转译为可触摸的产品形态、身体动作与低负担感官反馈，使技术在需要时介入、在不需要时退后，并尊重用户自主性。</p></div></div>
      <div className="profile-details"><article><h3>研究兴趣 <span>RESEARCH INTERESTS</span></h3><ul><li>人机交互</li><li>实体与具身交互</li><li>心理福祉设计</li><li>面向神经多样性的包容性设计</li></ul><p className="english-list">HUMAN–COMPUTER INTERACTION<br />TANGIBLE & EMBODIED INTERACTION<br />DESIGN FOR MENTAL WELLBEING<br />INCLUSIVE DESIGN FOR NEURODIVERSITY</p></article><article><h3>教育 <span>EDUCATION</span></h3><p><strong>中国地质大学（武汉）</strong><br />机械与电子信息学院 · 工业设计系</p><dl className="academic-metrics"><div><dt>GPA</dt><dd>3.57 / 5.0</dd></div><div><dt>专业成绩排名</dt><dd>3 / 32</dd></div></dl></article><article><h3>荣誉 <span>SELECTED HONORS</span></h3><ul className="honors"><li><b>2024</b><span>国家奖学金</span></li><li><b>2026</b><span>第14届未来设计师·全国高校数字艺术设计大赛省级赛（湖北赛区）二等奖（团队）</span></li><li><b>2026</b><span>湖北省大学生机械创新设计大赛暨第十二届全国大学生机械创新设计大赛湖北省三等奖（团队）</span></li></ul></article><article><h3>核心能力 <span>CAPABILITIES</span></h3><div className="capability-groups"><p><b>DESIGN &amp; PROTOTYPING</b>Rhino · KeyShot · Figma · Adobe Illustrator</p><p><b>PHYSICAL COMPUTING</b>Arduino · ESP32-S3 · MCU Prototyping</p></div></article></div>
      <footer className="contact-footer"><div><p>CONTACT</p><a href="mailto:13527320227@163.com">13527320227@163.com</a></div><div className="footer-download"><a className="button button-primary" href={pdfHref} download={pdfDownloadName}>下载完整作品集 <span>PDF · 8.7 MB ↓</span></a><p className="mobile-download-note">若微信内无法下载，请使用系统浏览器打开。</p></div><p>© 2026 WANG NANQI</p></footer>
    </section>
  </main></>;
}

