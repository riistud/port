import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  description, 
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col gap-4 items-center text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
      {description && (
        <p className="max-w-2xl text-dark-300">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
