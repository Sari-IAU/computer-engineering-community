import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Option { label: string; value: string; }

export default function CustomSelect({ 
  value, 
  onChange, 
  options 
}: { 
  value: string; 
  onChange: (val: any) => void; 
  options: Option[] 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === value)?.label;

  return (
    <div className="relative w-40" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 border rounded-xl text-xs font-bold shadow-sm transition-all bg-[var(--bg)] border-[var(--border)] text-[var(--text-h)]"
      >
        {selectedLabel}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full border rounded-xl shadow-xl z-50 overflow-hidden bg-[var(--card-bg)] border-[var(--border)]">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
              className="w-full text-right px-4 py-2.5 text-xs font-bold hover:bg-[var(--card-hover)] transition-colors"
              style={{ color: value === opt.value ? "var(--accent)" : "var(--text)" }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}