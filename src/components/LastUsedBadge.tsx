/** Proof-of-concept "last used provider" pill; position inside a `relative` parent. */
export default function LastUsedBadge() {
  return (
    <span
      className="pointer-events-none absolute -right-1 -top-3 z-10 select-none rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium leading-tight text-gray-600 shadow-md"
      aria-hidden
    >
      Last used
    </span>
  );
}
