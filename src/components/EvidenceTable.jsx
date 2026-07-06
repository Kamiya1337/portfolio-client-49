import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { AlertCircle, CheckCircle2, XCircle, X, Maximize2 } from 'lucide-react';

export default function EvidenceTable() {
  const { projects } = portfolioData;
  
  // State quản lý việc hiển thị Pop-up (Modal)
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  // Hàm mở pop-up
  const openPreview = (e, url, type) => {
    // Nếu là link Drive, giữ nguyên hành vi mở tab mới
    if (type === 'drive') return;
    
    // Nếu là PDF hoặc Ảnh, chặn mở tab mới và bật Pop-up
    e.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  // Thành phần render liên kết động thông minh
  const EvidenceLink = ({ value, label, type }) => {
    if (value === "Sẽ cập nhật sau" || !value) {
      return <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-bold text-yellow-700">Đang chờ</span>;
    }
    if (value === "Không yêu cầu") {
      return <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-500">---</span>;
    }
    return (
      <a 
        href={value} 
        target="_blank" 
        rel="noreferrer" 
        onClick={(e) => openPreview(e, value, type)}
        className="group inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-sm font-bold text-academic-deep-rose transition hover:bg-white"
      >
        {label}
        {type !== 'drive' && <Maximize2 size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
      </a>
    );
  };

  const StatusBadge = ({ report, img, drive }) => {
    const isReportDone = report !== "Sẽ cập nhật sau" && report !== "" && report !== "Không yêu cầu";
    const isImgDone = img !== "Sẽ cập nhật sau" && img !== "" && img !== "Không yêu cầu";
    const isDriveDone = drive !== "Sẽ cập nhật sau" && drive !== "" && drive !== "Không yêu cầu";
    
    if (isReportDone && isImgDone && isDriveDone) {
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
          <CheckCircle2 size={14}/> Đã nộp
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-600">
        <XCircle size={14}/> Thiếu MC
      </span>
    );
  };

  return (
    <div className="mx-auto max-w-6xl animate-fade-in pb-2">
      
      {/* KHU VỰC HIỂN THỊ POP-UP (MODAL) XEM TRƯỚC FILE */}
      {previewData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-academic-ink/70 p-4 backdrop-blur-md animate-fade-in print:hidden md:p-10">
          <div className="glass-card flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] shadow-glass">
            {/* Thanh Header của Modal */}
            <div className="flex items-center justify-between border-b border-white/60 bg-white/55 p-4">
              <h3 className="flex items-center gap-2 font-bold text-academic-ink">
                {previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}
              </h3>
              <div className="flex items-center gap-4">
                <a href={previewData.url} target="_blank" rel="noreferrer" className="text-sm font-bold text-academic-deep-rose hover:underline">
                  Mở thẻ mới
                </a>
                <button onClick={closePreview} className="icon-button">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Khu vực Nhúng nội dung */}
            <div className="flex flex-1 items-center justify-center overflow-auto bg-white/40 p-4">
              {previewData.type === 'pdf' ? (
                <iframe 
                  src={previewData.url} 
                  title="PDF Preview" 
                  className="h-full w-full rounded-2xl border-none bg-white shadow-sm"
                />
              ) : (
                <img 
                  src={previewData.url} 
                  alt="Minh chứng" 
                  className="max-h-full max-w-full rounded-2xl bg-white object-contain shadow-sm"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* GIAO DIỆN BẢNG CHÍNH */}
      <div className="mb-8 text-center">
        <span className="section-kicker">Evidence control</span>
        <h2 className="mt-3 text-3xl font-extrabold text-academic-ink md:text-4xl">Bảng kiểm soát minh chứng</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-academic-muted">Tổng hợp tình trạng các file báo cáo, hình ảnh và link sản phẩm cần nộp.</p>
      </div>

      <div className="glass-card overflow-hidden rounded-[28px]">
        <div className="flex items-start gap-3 border-b border-white/60 bg-white/45 p-4">
          <AlertCircle className="mt-0.5 flex-shrink-0 text-academic-deep-rose" size={20} />
          <p className="text-sm leading-6 text-academic-ink">
            <strong>Ghi chú:</strong> Click vào Báo cáo (PDF) hoặc Hình ảnh để xem nhanh ngay trên trình duyệt dưới dạng Pop-up.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-white/60 bg-academic-lavender/45 text-sm uppercase text-academic-muted">
                <th className="p-4 font-semibold w-1/4">Bài tập / Nhiệm vụ</th>
                <th className="p-4 font-semibold">File Báo cáo</th>
                <th className="p-4 font-semibold">Ảnh Screenshot</th>
                <th className="p-4 font-semibold">Link Google Drive</th>
                <th className="p-4 font-semibold text-center">Trạng thái chung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/60">
              {projects.map((project) => (
                <tr key={project.id} className="transition-colors hover:bg-white/45">
                  <td className="p-4">
                    <p className="text-sm font-bold leading-snug text-academic-ink">{project.title}</p>
                    <p className="mt-1 text-xs text-academic-muted">{project.chapter}</p>
                  </td>
                  <td className="p-4"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td>
                  <td className="p-4"><EvidenceLink value={project.evidenceImg} label="Xem ảnh" type="img" /></td>
                  <td className="p-4"><EvidenceLink value={project.driveLink} label="Mở Drive" type="drive" /></td>
                  <td className="p-4 text-center">
                    <StatusBadge report={project.report} img={project.evidenceImg} drive={project.driveLink} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
