interface SheetHeaderProps {
  index: string;
  label: string;
  title: string;
}

export default function SheetHeader({ index, label, title }: SheetHeaderProps) {
  return (
    <div className="mb-10 flex items-end justify-between border-b border-line pb-4 md:mb-14">
      <div>
        <p className="font-mono text-xs tracking-wide text-paper-dim">
          {label}
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-paper md:text-4xl">
          {title}
        </h2>
      </div>
      <p className="hidden font-mono text-xs text-paper-faint md:block">
        FEUILLE {index}
      </p>
    </div>
  );
}
