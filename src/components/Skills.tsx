import { 
  Target, 
  Users, 
  MessageSquare, 
  PenTool, 
  BarChart3, 
  UserCog,
  Megaphone,
  Mail,
  Search,
  Share2
} from 'lucide-react';

const coreSkills = [
  {
    icon: Target,
    title: 'Digital Marketing Strategy',
    description: 'Data-driven strategies that align with business goals and drive measurable results.',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'B2B & B2C lead generation, Upwork prospecting, and qualified lead nurturing.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Building brand presence and engagement across all major platforms.',
  },
  {
    icon: PenTool,
    title: 'Content Creation & Copywriting',
    description: 'Compelling content that converts and resonates with target audiences.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Data analysis and optimization for continuous campaign improvement.',
  },
  {
    icon: UserCog,
    title: 'Team Leadership',
    description: 'Leading cross-functional teams to achieve marketing objectives.',
  },
];

const tools = [
  { name: 'Facebook', category: 'Social' },
  { name: 'Instagram', category: 'Social' },
  { name: 'LinkedIn', category: 'Social' },
  { name: 'TikTok', category: 'Social' },
  { name: 'Meta Ads', category: 'Advertising' },
  { name: 'LinkedIn Ads', category: 'Advertising' },
  { name: 'Google Ads', category: 'Advertising' },
  { name: 'Email Marketing', category: 'Outreach' },
  { name: 'SEO', category: 'Optimization' },
  { name: 'Keyword Research', category: 'Optimization' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Skills & Expertise
          </p>
          <h2 className="heading-lg text-foreground mb-6">
            What I Bring to the Table
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Core Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="glass-card-hover p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="glass-card p-8 md:p-12">
          <h3 className="heading-md text-foreground text-center mb-8">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={tool.name}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-foreground text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
