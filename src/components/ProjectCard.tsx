import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  summary: string;
  category: string;
  image: string;
}

const ProjectCard = ({ title, summary, category, image }: ProjectCardProps) => {
  return (
    <div className="card-hover bg-card rounded-lg overflow-hidden border border-border group">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 border-t-2 border-transparent group-hover:border-primary transition-colors duration-300">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{summary}</p>
        <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
