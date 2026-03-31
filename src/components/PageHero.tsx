import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="page-hero-overlay" />
      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <div className="orange-accent-line mb-6" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
