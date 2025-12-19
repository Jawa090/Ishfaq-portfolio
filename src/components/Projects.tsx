import { ArrowUpRight, Target, TrendingUp, Users, Mail } from 'lucide-react';

const projects = [
  {
    icon: Target,
    title: 'B2B Lead Generation Campaigns',
    problem: 'Clients needed qualified business leads to grow their customer base.',
    strategy: 'Implemented multi-channel outreach including LinkedIn prospecting, email campaigns, and targeted content marketing.',
    result: 'Generated 500+ qualified leads with 35% conversion rate for multiple clients.',
    tools: ['LinkedIn', 'Email Outreach', 'CRM', 'Lead Magnets'],
  },
  {
    icon: TrendingUp,
    title: 'Social Media Growth Projects',
    problem: 'Brands struggling with low engagement and follower growth.',
    strategy: 'Developed content calendars, implemented engagement strategies, and optimized posting schedules.',
    result: 'Achieved 200% average growth in engagement and 150% increase in followers.',
    tools: ['Instagram', 'Facebook', 'Content Strategy', 'Analytics'],
  },
  {
    icon: Users,
    title: 'Content Strategy for Brands',
    problem: 'Cafés and local brands needed cohesive brand voice and content.',
    strategy: 'Created comprehensive content strategies including visual identity, posting guidelines, and promotional campaigns.',
    result: 'Increased brand awareness and customer footfall by 40%.',
    tools: ['Canva', 'Content Planning', 'Brand Strategy', 'Social Media'],
  },
  {
    icon: Mail,
    title: 'Email Outreach & List Building',
    problem: 'Businesses needed targeted prospect lists for sales outreach.',
    strategy: 'Built verified email lists using research tools and implemented personalized outreach sequences.',
    result: 'Delivered 10,000+ verified contacts with 95% accuracy rate.',
    tools: ['Email Verification', 'Research Tools', 'Outreach Automation', 'CRM'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Projects
          </p>
          <h2 className="heading-lg text-foreground mb-6">
            Work That Speaks Results
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card-hover p-8 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              <h3 className="text-foreground font-semibold text-xl mb-6">
                {project.title}
              </h3>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    Strategy
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.strategy}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    Result
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
