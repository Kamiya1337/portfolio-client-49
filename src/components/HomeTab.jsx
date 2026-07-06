import { portfolioData } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, FileText, Languages, Quote, Sparkles } from 'lucide-react';
import avatarImage from '../../docs/avatar.png';

export default function HomeTab() {
  const { student, overview } = portfolioData;

  return (
    <div className="relative z-10 space-y-20 lg:space-y-28">
      <section data-reveal className="reveal">
        <div className="portfolio-cover relative overflow-hidden rounded-[32px] border border-academic-rose/35 bg-white/74 p-7 text-left shadow-[0_24px_70px_rgba(252,121,189,0.10)] backdrop-blur-xl md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,221,255,0.34),rgba(255,255,255,0)_42%,rgba(255,226,76,0.18))]" aria-hidden="true" />
          <div className="relative">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <span className="section-kicker">Portfolio / Digital & AI Learning</span>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-academic-deep-rose/20 bg-white/62 px-4 py-2 text-xs font-extrabold text-academic-deep-rose">
                <CheckCircle2 size={15} />
                2025 - 2026
              </span>
            </div>

            <h1 className="mt-9 max-w-5xl text-4xl font-extrabold leading-[0.98] text-academic-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Portfolio học phần —<br />
              <span>{student.name}</span>
            </h1>
            <p className="mt-7 text-xl font-bold leading-8 text-academic-muted md:text-2xl">
              Chinese Language & Culture Learning Portfolio
            </p>
            <p className="mt-8 max-w-4xl text-base leading-8 text-academic-muted md:text-lg">
              {student.bio}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#bai-tap" className="primary-button inline-flex items-center justify-center gap-2 px-7 py-3 text-sm">
                Xem bài tập
                <ArrowRight size={17} />
              </a>
              <a href="#minh-chung" className="inline-flex items-center justify-center gap-2 rounded-full border border-academic-deep-rose/20 bg-white/58 px-7 py-3 text-sm font-extrabold text-academic-deep-rose backdrop-blur-xl transition hover:bg-white/78">
                Mở minh chứng
                <FileText size={17} />
              </a>
            </div>

            <div className="mt-12 h-px bg-academic-rose/35" />

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['Trường', 'ULIS - VNU'],
                ['Ngành', 'Ngôn ngữ và Văn hóa Trung Quốc'],
                ['Học phần', 'Công nghệ số & Ứng dụng AI'],
                ['Sinh viên', student.name],
                ['Mã sinh viên', '25041113'],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="section-kicker">{label}</span>
                  <p className="mt-3 text-sm font-extrabold leading-6 text-academic-ink">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ['6', 'bài thực hành'],
                ['7', 'năng lực học tập'],
                ['100%', 'liên kết minh chứng'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[24px] border border-white/70 bg-white/56 px-5 py-4 backdrop-blur-xl">
                  <p className="text-3xl font-extrabold text-academic-deep-rose">{value}</p>
                  <p className="mt-1 text-xs font-bold text-academic-muted">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {student.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="ho-so" className="section-anchor grid items-stretch gap-6 lg:grid-cols-12">
        <div data-reveal className="reveal soft-card hover-lift relative min-h-[360px] overflow-hidden rounded-[32px] p-8 lg:col-span-5">
          <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-academic-rose/20 blur-2xl" />
          <div className="absolute bottom-16 right-10 h-28 w-28 rounded-full bg-academic-yellow/30 blur-2xl" />
          <Quote className="absolute right-8 top-8 text-academic-pastel/40" size={72} strokeWidth={1.25} />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <span className="section-kicker">Student profile</span>
              <h2 className="mt-5 text-3xl font-extrabold text-academic-ink">{student.name}</h2>
              <figure className="mx-auto mt-5 w-full max-w-[250px] rounded-2xl border border-academic-border bg-white p-3 shadow-[0_10px_24px_rgba(236,72,153,0.14)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-academic-ivory">
                  
                  <img
  src={avatarImage}
  alt={`Ảnh chân dung ${student.name}`}
  className="h-full w-full object-cover object-center"
/>
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-2 text-[11px] font-bold text-academic-deep-rose shadow-sm backdrop-blur-sm">
                    {student.name}
                  </figcaption>
                </div>
              </figure>
              <p className="mt-2 text-academic-muted">{student.id} · ULIS - VNU</p>
            </div>
            <div>
              <p className="max-w-sm text-lg font-semibold leading-8 text-academic-ink">
                Học ngôn ngữ bằng tư duy số, sự tò mò văn hóa và cách sử dụng AI có trách nhiệm.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {student.skills.slice(0, 4).map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          <article data-reveal className="reveal soft-card hover-lift rounded-[24px] p-7">
            <Languages className="text-academic-deep-rose" size={25} />
            <span className="section-kicker mt-6 block">Global learning</span>
            <h3 className="mt-2 text-xl font-bold">Ngôn ngữ và Văn hóa Trung Quốc</h3>
            <p className="mt-3 text-sm leading-6 text-academic-muted">
              Học ngôn ngữ là quá trình đi từ cách dùng từ, đặt câu đến việc hiểu con người và văn hóa phía sau ngôn ngữ đó. Khi có nền tảng văn hóa, việc giao tiếp trở nên tự nhiên và có chiều sâu hơn.
            </p>
          </article>
          <article data-reveal className="reveal soft-card hover-lift rounded-[24px] p-7">
            <Sparkles className="text-academic-deep-rose" size={25} />
            <span className="section-kicker mt-6 block">Digital learning</span>
            <h3 className="mt-2 text-xl font-bold">Công nghệ số & AI</h3>
            <p className="mt-3 text-sm leading-6 text-academic-muted">
              Công cụ số hỗ trợ người học tìm kiếm tài liệu, ghi chép, hệ thống hóa thông tin và trình bày ý tưởng rõ ràng hơn. Điều quan trọng không chỉ là biết dùng công cụ, mà là biết chọn lọc và sử dụng đúng mục đích.
            </p>          
          </article>
          <blockquote data-reveal className="reveal soft-card hover-lift relative rounded-[24px] p-7 sm:col-span-2">
            <Quote className="absolute right-6 top-5 text-academic-pastel" size={38} />
            <span className="section-kicker">A note</span>
            <p className="mt-4 max-w-2xl text-lg italic leading-8 text-academic-ink">
              “Công nghệ không thay thế quá trình tự học, nhưng nếu được sử dụng một cách tỉnh táo, nó có thể giúp người học hiểu vấn đề nhanh hơn, chủ động hơn và biết nhìn lại cách mình học.”
            </p>
          </blockquote>
        </div>
      </section>

      <section id="bai-tap" data-reveal className="reveal section-anchor">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="section-kicker">Learning index</span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Bản đồ học tập</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-academic-muted md:text-right">
            Bảy năng lực nền tảng định hướng hành trình học tập và sáu bài thực hành trong portfolio.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {overview.map((item, index) => {
            const Icon = item.icon;
            return (
              <article data-reveal key={item.id} className="reveal soft-card hover-lift group rounded-[24px] p-6 transition">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-extrabold text-academic-deep-rose">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-academic-lavender/70 text-academic-deep-rose">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="font-extrabold text-academic-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-academic-muted">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section data-reveal className="reveal space-y-8">
        <div className="max-w-3xl">
          <span className="section-kicker">Digital learning profile</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Hồ sơ học tập</h2>
          <p className="mt-4 text-base leading-7 text-academic-muted">
            Portfolio phản ánh cách kiến thức ngôn ngữ, năng lực số và tư duy học thuật được kết nối thành một quá trình học tập có hệ thống.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Profile', 'Trọng tâm học tập', 'Ngôn ngữ Trung Quốc, văn hóa Trung Quốc và năng lực giao tiếp trong môi trường học thuật hiện đại.'],
            ['Objective', 'Mục tiêu học phần', 'Thành thạo công cụ số, biết đánh giá thông tin và sử dụng AI như một trợ lý học tập có trách nhiệm.'],
            ['Purpose', 'Lý do xây dựng portfolio', 'Hệ thống hóa sản phẩm, minh chứng tiến bộ và nhìn lại hành trình phát triển kỹ năng.'],
            ['Skills', 'Kỹ năng mũi nhọn', student.skills.join(' · ')],
            ['Digital focus', 'Định hướng ứng dụng', 'Quản lý dữ liệu, nghiên cứu thông tin, prompt engineering, cộng tác trực tuyến và sáng tạo nội dung.'],
            ['Academic values', 'Giá trị học thuật', 'Chính xác, minh bạch, tôn trọng bản quyền và chủ động kiểm chứng nội dung do AI hỗ trợ.'],
          ].map(([label, title, description]) => (
            <article data-reveal className="reveal soft-card hover-lift rounded-[24px] p-7" key={label}>
              <span className="section-kicker">{label}</span>
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-academic-muted">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
