import { Award, Camera, Users, Sparkles } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    title: 'Executive Member',
    organization: 'IUB Arts & Photography Society',
    description: 'Active leadership role in university creative society.',
  },
  {
    icon: Camera,
    title: 'Social Media Lead',
    organization: 'IUB Arts & Photography Society',
    description: 'Managed social media presence and digital engagement.',
  },
  {
    icon: Award,
    title: 'Event Organizer',
    organization: 'University Events',
    description: 'Organized exhibitions, workshops, and competitions.',
  },
  {
    icon: Sparkles,
    title: 'Engagement Champion',
    organization: 'Creative Initiatives',
    description: 'Boosted engagement through creative content strategies.',
  },
];

const languages = [
  { name: 'English', level: 90, proficiency: 'Professional' },
  { name: 'Urdu', level: 100, proficiency: 'Native' },
  { name: 'Saraiki', level: 100, proficiency: 'Native' },
];

const Achievements = () => {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Achievements */}
          <div>
            <div className="mb-12">
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Achievements
              </p>
              <h2 className="heading-lg text-foreground mb-6">
                Beyond Work
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="glass-card-hover p-6 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="mb-12">
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Languages
              </p>
              <h2 className="heading-lg text-foreground mb-6">
                Communication
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <div className="glass-card p-8 space-y-8">
              {languages.map((language, index) => (
                <div key={language.name}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-medium">{language.name}</span>
                    <span className="text-muted-foreground text-sm">{language.proficiency}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ 
                        width: `${language.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
