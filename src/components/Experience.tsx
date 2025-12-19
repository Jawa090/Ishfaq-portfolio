import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Social Media Manager',
    company: 'World Wide Admissions Hub',
    location: 'Lahore',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    responsibilities: [
      'Managing comprehensive social media strategies across multiple platforms',
      'Creating engaging content calendars and executing campaigns',
      'Analyzing performance metrics and optimizing engagement rates',
      'Building community and fostering audience relationships',
    ],
    current: true,
  },
  {
    title: 'Lead Generation Specialist',
    company: 'Freelancing',
    location: 'Remote',
    period: '2023 – Present',
    type: 'Freelance',
    responsibilities: [
      'Generating high-quality B2B and B2C leads for diverse clients',
      'Building targeted prospect lists and email outreach campaigns',
      'Implementing lead nurturing strategies and conversion optimization',
      'Managing client relationships and delivering consistent results',
    ],
    current: true,
  },
  {
    title: 'Call Center Specialist',
    company: 'Eagle Eye Dispatch Services LLC',
    location: 'Remote',
    period: 'Apr 2024 – May 2025',
    type: 'Full-time',
    responsibilities: [
      'Handling inbound and outbound customer communications',
      'Resolving customer inquiries with professionalism and efficiency',
      'Maintaining detailed records and documentation',
      'Meeting and exceeding performance targets consistently',
    ],
    current: false,
  },
  {
    title: 'Social Media Manager & Content Creator',
    company: 'Magnum Cafe',
    location: 'Lahore',
    period: 'Dec 2024 – Mar 2025',
    type: 'Part-time',
    responsibilities: [
      'Developed and executed social media content strategy',
      'Created visually appealing content for Instagram and Facebook',
      'Increased brand engagement and follower growth',
      'Collaborated with team on promotional campaigns',
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Experience
          </p>
          <h2 className="heading-lg text-foreground mb-6">
            My Professional Journey
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card-hover p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          Current
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-foreground font-semibold text-xl mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
