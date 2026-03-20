interface ProgressBarProps {
  step: number; // 0-indexed current step
  total: number;
}

export default function ProgressBar({ step, total }: ProgressBarProps) {
  return (
    <div className="flex gap-2 mb-6">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className="flex-1 h-1 rounded-full"
          style={{ backgroundColor: i <= step ? "#218579" : "#e5e7eb" }}
        />
      ))}
    </div>
  );
}
