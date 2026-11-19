interface ApontualLogoProps {
  className?: string;
}

export function ApontualLogo({ className = 'w-full h-full' }: ApontualLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M95 3C81 12 67 17 55 18L42 44L49 48C66 34 83 18 95 3Z" fill="#0B4F8A" />
      <path d="M5 91C21 83 37 70 48 58L38 49C28 63 17 78 5 91Z" fill="#0B3B70" />
      <path d="M87 89L80 42C74 49 68 57 62 64L87 89Z" fill="#1368AA" />
      <path d="M27 36L49 52C67 37 83 20 95 3C85 27 69 51 51 72L44 57L27 36Z" fill="#89C765" />
    </svg>
  );
}
