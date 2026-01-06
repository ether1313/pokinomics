import { useEffect, useState } from 'react';

export default function CoreConnections({
  coreRef,
  cardRefs,
  visible,
}: {
  coreRef: React.RefObject<HTMLDivElement>;
  cardRefs: React.RefObject<(HTMLDivElement | null)[]>;
  visible: boolean;
}) {
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  useEffect(() => {
    if (!coreRef.current) return;

    const container = coreRef.current.closest('section');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const coreRect = coreRef.current.getBoundingClientRect();

    const newLines = cardRefs.current
      .map((card) => {
        if (!card) return null;

        const r = card.getBoundingClientRect();

        return {
          x1:
            coreRect.left +
            coreRect.width / 2 -
            containerRect.left,
          y1:
            coreRect.top +
            coreRect.height / 2 -
            containerRect.top,
          x2:
            r.left + r.width / 2 - containerRect.left,
          y2:
            r.top + r.height / 2 - containerRect.top,
        };
      })
      .filter(Boolean) as any[];

    setLines(newLines);
  }, [visible]);

  if (!visible) return null;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        <linearGradient id="coreLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="url(#coreLine)"
          strokeWidth="1"
          className="animate-line-in"
        />
      ))}
    </svg>
  );
}
