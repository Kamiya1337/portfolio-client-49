import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ExternalLink, FileText, FolderOpen, Image, Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const unavailable = (value) => !value || value === 'Sẽ cập nhật sau';
const notRequired = (value) => value === 'Không yêu cầu';

function PreviewModal({ previewData, onClose }) {
  useEffect(() => {
    if (!previewData.isOpen) return undefined;
    const handleEscape = (event) => event.key === 'Escape' && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [previewData.isOpen, onClose]);

  if (!previewData.isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm print:hidden md:p-6" onMouseDown={onClose}>
      <div className="flex h-[calc(100dvh-1.5rem)] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-neutral-950 shadow-2xl md:h-[calc(100dvh-3rem)]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-neutral-900 px-4 py-3 text-white md:px-5">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase leading-4 text-violet-200">Preview</p>
            <h3 className="mt-1 font-bold text-white">{previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a href={previewData.url} target="_blank" rel="noreferrer" className="icon-button" aria-label="Mở trong tab mới"><ExternalLink size={18} /></a>
            <button type="button" onClick={onClose} className="icon-button" aria-label="Đóng bản xem trước"><X size={20} /></button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden bg-neutral-900">
          {previewData.type === 'pdf' ? (
            <iframe
              src={previewData.url}
              title="Bản xem trước báo cáo PDF"
              className="block h-full w-full border-0 bg-white"
            />
          ) : (
            <div className="flex h-full items-center justify-center overflow-auto bg-neutral-900 p-4">
              <img src={previewData.url} alt="Ảnh minh chứng bài tập" className="block max-h-full max-w-full object-contain" />
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ResourceAction({ value, type, onPreview }) {
  const config = {
    pdf: { label: 'Báo cáo PDF', icon: FileText },
    img: { label: 'Ảnh minh chứng', icon: Image },
    drive: { label: 'Google Drive', icon: FolderOpen },
  }[type];
  const Icon = config.icon;

  if (unavailable(value)) return <span className="resource-disabled"><Icon size={17} /> Sẽ cập nhật sau</span>;
  if (notRequired(value)) return <span className="resource-disabled"><Icon size={17} /> Không yêu cầu</span>;

  return (
    <a
      href={value}
      target={type === 'drive' ? '_blank' : undefined}
      rel={type === 'drive' ? 'noreferrer' : undefined}
      onClick={type === 'drive' ? undefined : (event) => onPreview(event, value, type)}
      className="resource-action"
    >
      <Icon size={17} />
      {config.label}
      {type === 'drive' ? <ExternalLink size={14} /> : <Maximize2 size={14} />}
    </a>
  );
}

export default function ProjectsTab() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  return (
    <section data-reveal className="reveal section-anchor space-y-10" aria-labelledby="cases-title">
      <PreviewModal previewData={previewData} onClose={closePreview} />

      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker">Digital learning cases</span>
        <h2 id="cases-title" className="mt-3 text-3xl font-extrabold md:text-4xl">6 case học phần</h2>
        <p className="mt-4 text-sm leading-7 text-academic-muted md:text-base">
          Sáu bài tập ghi lại cách kiến thức được chuyển thành sản phẩm, minh chứng và trải nghiệm học tập thực tế.
        </p>
      </div>

      {selectedProject && (
        <article className="glass-card soft-pink-glow overflow-hidden rounded-[32px]">
          <div className="relative overflow-hidden p-7 text-academic-ink md:p-10">
            <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-academic-rose/25 blur-3xl" />
            <div className="absolute -bottom-12 left-12 h-40 w-40 rounded-full bg-academic-yellow/25 blur-3xl" />
            <button type="button" onClick={() => setSelectedProject(null)} className="relative mb-7 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/55 px-4 py-2 text-sm font-bold text-academic-deep-rose backdrop-blur-xl transition hover:bg-white">
              <ArrowLeft size={17} /> Trở lại 6 case
            </button>
            <p className="section-kicker relative">Case {String(selectedProject.id).padStart(2, '0')} · {selectedProject.chapter}</p>
            <h3 className="relative mt-3 max-w-4xl text-3xl font-extrabold leading-tight md:text-4xl">{selectedProject.title}</h3>
            <p className="relative mt-4 max-w-3xl text-base leading-7 text-academic-muted">{selectedProject.shortDesc}</p>
          </div>

          <div className="grid gap-6 p-7 md:p-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-[24px] border border-white/60 bg-white/48 p-6 backdrop-blur-xl">
                <span className="section-kicker">Mục tiêu</span>
                <p className="mt-3 leading-7 text-academic-ink">{selectedProject.target}</p>
              </div>
              <div className="rounded-[24px] border border-white/60 bg-white/48 p-6 backdrop-blur-xl">
                <span className="section-kicker">Kỹ năng</span>
                <div className="mt-4 flex flex-wrap gap-2">{selectedProject.skills?.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/60 bg-white/48 p-6 backdrop-blur-xl">
              <span className="section-kicker">Quá trình thực hiện</span>
              <p className="mt-3 text-sm leading-7 text-academic-muted">{selectedProject.process}</p>
            </div>
          </div>

          <div className="border-t border-white/60 bg-white/30 p-7 md:px-10">
            <p className="section-kicker mb-4">Tài liệu & minh chứng</p>
            <div className="flex flex-wrap gap-3">
              <ResourceAction value={selectedProject.report} type="pdf" onPreview={openPreview} />
              <ResourceAction value={selectedProject.evidenceImg} type="img" onPreview={openPreview} />
              <ResourceAction value={selectedProject.driveLink} type="drive" onPreview={openPreview} />
            </div>
          </div>
        </article>
      )}

      <div className={`${selectedProject ? 'hidden' : 'grid'} gap-5 md:grid-cols-2`} aria-hidden={Boolean(selectedProject)}>
        {projects.map((project) => (
          <article data-reveal key={project.id} className="reveal soft-card hover-lift group flex min-h-[320px] flex-col rounded-[28px] p-7 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="section-kicker">Case {String(project.id).padStart(2, '0')}</span>
                  <p className="mt-2 text-xs font-bold uppercase text-academic-muted">{project.chapter}</p>
                </div>
                <span className="rounded-full bg-academic-lavender/70 px-3 py-1 text-xs font-bold text-academic-deep-rose">{project.status}</span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold leading-7 text-academic-ink">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-academic-muted">{project.shortDesc}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.skills?.slice(0, 3).map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
              <div className="mt-6 flex items-center justify-between border-t border-white/60 pt-5">
                <button type="button" onClick={() => setSelectedProject(project)} className="primary-button px-4 py-2 text-sm">Xem chi tiết</button>
                <button type="button" onClick={(event) => openPreview(event, project.report, 'pdf')} disabled={unavailable(project.report) || notRequired(project.report)} className="icon-button disabled:cursor-not-allowed disabled:opacity-35" aria-label={`Xem báo cáo ${project.title}`}><FileText size={18} /></button>
              </div>
          </article>
        ))}
      </div>
    </section>
  );
}
