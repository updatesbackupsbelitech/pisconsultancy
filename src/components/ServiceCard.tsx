import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="card-hover bg-card rounded-lg p-8 border border-border group">
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
