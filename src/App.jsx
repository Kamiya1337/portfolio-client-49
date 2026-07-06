import { useEffect } from 'react';
import { BookOpenText, FileCheck2, GraduationCap } from 'lucide-react';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const { student } = portfolioData;

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-academic-background text-academic-ink">
      <div className="bg-mesh" aria-hidden="true" />
      <header className="no-print fixed left-0 right-0 top-4 z-50 px-4 md:top-8">
        <div className="glass-nav mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap md:px-8 md:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Về đầu trang">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/80 p-1 ring-1 ring-white/70">
              <img src="/logo.png" alt="Logo ULIS" className="h-full w-full object-contain" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block text-[10px] font-extrabold uppercase text-academic-deep-rose">
                Chinese Language Portfolio
              </span>
              <span className="block truncate text-xs text-academic-muted">Công nghệ số & AI · ULIS - VNU</span>
            </span>
          </a>

          <div className="contents sm:flex sm:items-center sm:gap-5">
            <nav className="order-3 flex w-full items-center justify-center gap-4 border-t border-white/50 pt-2 text-xs font-bold sm:order-none sm:w-auto sm:justify-start sm:gap-6 sm:border-0 sm:pt-0 sm:text-sm" aria-label="Điều hướng chính">
              <a className="nav-link" href="#ho-so">Hồ sơ</a>
              <a className="nav-link" href="#bai-tap">Bài tập</a>
              <a className="nav-link" href="#minh-chung">Minh chứng</a>
              <a className="nav-link" href="#tong-ket">Tổng kết</a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-7xl space-y-20 px-5 pb-24 pt-32 md:px-10 md:pt-40 lg:space-y-28">
        <HomeTab />
        <ProjectsTab />
        <section id="minh-chung" className="section-anchor">
          <EvidenceTable />
        </section>
        <section id="tong-ket" className="section-anchor space-y-12">
          <RubricTable />
          <Summary />
        </section>
      </main>

      <footer className="no-print px-5 pb-10 pt-8 md:px-10">
        <div className="glass-card mx-auto grid max-w-7xl gap-8 rounded-[32px] p-8 md:grid-cols-[1fr_auto] md:p-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/75 p-1.5 ring-1 ring-white/70">
                <img src="/logo.png" alt="Logo ULIS" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-academic-ink">{student.name}</p>
                <p className="text-sm text-academic-muted">Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-academic-muted">
              Chinese Language & Culture Learning Portfolio · 2025-2026
            </p>
          </div>
          <div className="grid gap-3 text-sm text-academic-muted sm:grid-cols-2 md:text-right">
            <div className="flex items-center gap-2 md:justify-end">
              <GraduationCap size={16} className="text-academic-deep-rose" />
              <span>Ngôn ngữ và Văn hóa Trung Quốc</span>
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <BookOpenText size={16} className="text-academic-magenta" />
              <span>Công nghệ số & AI</span>
            </div>
            <div className="flex items-center gap-2 md:col-span-2 md:justify-end">
              <FileCheck2 size={16} className="text-academic-warning" />
              <span>Báo cáo, minh chứng và rubric được giữ nguyên dữ liệu thật</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
