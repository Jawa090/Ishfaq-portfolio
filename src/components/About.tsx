import { MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="heading-lg text-foreground mb-6">
            Driving Growth Through Strategic Marketing
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <p className="body-text leading-relaxed">
                I am a results-driven <span className="text-foreground font-medium">Digital Marketing Strategist</span> with hands-on experience in social media marketing, lead generation, content creation, and performance optimization.
              </p>
              <p className="body-text leading-relaxed mt-4">
                I have worked with local and international clients, helping businesses grow through targeted marketing strategies and high-quality leads. My approach combines creative thinking with data-driven insights to deliver measurable results.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card-hover p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="glass-card-hover p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="text-foreground font-medium">3+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="heading-md text-foreground flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>

            <div className="space-y-4">
              <div className="glass-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold">BS Cyber Security</h4>
                    <p className="text-primary text-sm font-medium">The Islamia University of Bahawalpur</p>
                    <p className="text-muted-foreground text-sm mt-1">2021 – 2025</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-foreground text-sm font-medium">CGPA: 3.50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-semibold">FSC (Pre-Medical)</h4>
                    <p className="text-primary text-sm font-medium">Government Degree College</p>
                    <p className="text-muted-foreground text-sm mt-1">2018 – 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
