interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTransition({ children, className = "" }: SectionTransitionProps) {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  );
}