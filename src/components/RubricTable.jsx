import { CheckCircle2, CircleDashed, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length * 2;
  const completedMilestones = projects.reduce((acc, project) => {
    const reportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
    const imgDone = project.evidenceImg !== 'Sẽ cập nhật sau' && project.evidenceImg !== '' && project.evidenceImg !== 'Không yêu cầu';
    return acc + (reportDone ? 1 : 0) + (imgDone ? 1 : 0);
  }, 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);

  return (
    <div className="space-y-8">
      <div data-reveal className="reveal glass-card outcome-glow overflow-hidden rounded-[32px] p-8 md:p-10 lg:p-12">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="section-kicker">Learning outcomes & digital skills</span>
            <h2 className="mt-3 text-3xl font-extrabold text-academic-ink md:text-5xl">Tổng kết kỹ năng</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-academic-muted">
              Hành trình sáu bài tập kết nối quản lý dữ liệu, nghiên cứu thông tin, tư duy AI, cộng tác, sáng tạo và liêm chính học thuật.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/70 bg-white/55 px-7 py-5 text-center backdrop-blur-xl">
            <p className="text-5xl font-black text-academic-deep-rose">{progressPercent}%</p>
            <p className="mt-1 text-xs font-bold uppercase text-academic-muted">Portfolio readiness</p>
          </div>
        </div>
        <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/60">
          <div className="h-full rounded-full bg-academic-deep-rose shadow-[0_0_24px_rgba(103,75,181,0.4)] transition-all duration-700" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-academic-muted">
          <RefreshCw size={15} />
          <span>{completedMilestones}/{totalMilestones} mục báo cáo và ảnh minh chứng đã được đồng bộ.</span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const reportDone = project.report !== 'Sẽ cập nhật sau' && project.report !== '' && project.report !== 'Không yêu cầu';
          const imgDone = project.evidenceImg !== 'Sẽ cập nhật sau' && project.evidenceImg !== '' && project.evidenceImg !== 'Không yêu cầu';
          const isFullyDone = reportDone && imgDone;
          const rubricItem = rubric[project.id];

          return (
            <article data-reveal key={project.id} className="reveal soft-card hover-lift rounded-[24px] p-7">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-academic-deep-rose">{String(project.id).padStart(2, '0')}</span>
                {isFullyDone ? <CheckCircle2 className="text-academic-deep-rose" size={21} /> : <CircleDashed className="text-academic-muted" size={21} />}
              </div>
              <h3 className="mt-4 font-bold leading-6 text-academic-ink">{project.title}</h3>
              <p className="mt-3 text-sm font-semibold text-academic-deep-rose">{isFullyDone ? 'Đạt chuẩn minh chứng' : 'Cần bổ sung minh chứng'}</p>
              {rubricItem && <p className="mt-3 text-sm leading-6 text-academic-muted">{rubricItem.action}</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
}
