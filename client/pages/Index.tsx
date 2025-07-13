import {
  Github,
  ExternalLink,
  Award,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
}

const games: Game[] = [
  {
    id: "1",
    title: "Pixel Adventure",
    description:
      "A 2D platformer game built with Unity featuring custom physics, level editor, and engaging gameplay mechanics.",
    image: "/placeholder.svg",
    technologies: ["Unity", "C#", "2D Physics"],
    githubUrl: "https://github.com/username/pixel-adventure",
    liveUrl: "https://pixel-adventure.game",
    featured: true,
  },
  {
    id: "2",
    title: "Space Shooter Pro",
    description:
      "Fast-paced space combat game with procedural enemy generation and power-up systems.",
    image: "/placeholder.svg",
    technologies: ["Unity", "C#", "Procedural Generation"],
    githubUrl: "https://github.com/username/space-shooter",
  },
  {
    id: "3",
    title: "Puzzle Master",
    description:
      "Mind-bending puzzle game with over 100 levels and intuitive touch controls.",
    image: "/placeholder.svg",
    technologies: ["Unity", "C#", "Mobile"],
    liveUrl: "https://puzzle-master.app",
  },
  {
    id: "4",
    title: "Racing Legends",
    description:
      "3D racing game with realistic physics and customizable vehicles.",
    image: "/placeholder.svg",
    technologies: ["Unity", "C#", "3D Graphics"],
    githubUrl: "https://github.com/username/racing-legends",
  },
];

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Unity Certified Developer",
    issuer: "Unity Technologies",
    date: "2023",
    image: "/placeholder.svg",
    credentialUrl: "https://unity.com/credentials/123",
  },
  {
    id: "2",
    title: "Game Development Specialization",
    issuer: "Coursera - University of Michigan",
    date: "2023",
    image: "/placeholder.svg",
    credentialUrl: "https://coursera.org/credentials/456",
  },
  {
    id: "3",
    title: "C# Programming Certificate",
    issuer: "Microsoft",
    date: "2022",
    image: "/placeholder.svg",
    credentialUrl: "https://microsoft.com/credentials/789",
  },
  {
    id: "4",
    title: "3D Animation & Modeling",
    issuer: "Blender Institute",
    date: "2022",
    image: "/placeholder.svg",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-lg">Abhiraam B</div>
          <div className="flex items-center gap-6">
            <a
              href="#games"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Games
            </a>
            <a
              href="#certificates"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Certificates
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Picture */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative group animate-fade-in cursor-pointer">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse group-hover:animate-none"></div>

                {/* Main Image Container */}
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/25">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fcbef59f32b8f46c3878540ede7051753%2F254a63b0e22f454ca1658a3b8434be20?format=webp&width=800"
                    alt="Abhiraam B - Game Developer"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out filter group-hover:brightness-110 group-hover:contrast-110"
                  />

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/30 group-hover:via-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="absolute bottom-6 left-8 w-1 h-1 bg-blue-300 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 w-1 h-1 bg-purple-300 rounded-full animate-bounce"
                      style={{ animationDelay: "0.6s" }}
                    ></div>
                  </div>
                </div>

                {/* Tech Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                  Game Dev
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Game Developer &
                <span className="text-primary block">
                  Creative Technologist
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
                I craft immersive gaming experiences and interactive digital
                worlds. Passionate about pushing the boundaries of what's
                possible in game development. I have been coding since 5 years
                old .
              </p>
              <div className="flex items-center gap-4 text-muted-foreground mb-8 animate-fade-in">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Antonio , TX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>abhiraambijumon@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-fade-in">
                <a
                  href="#games"
                  className="relative group bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    View My Games
                    <div
                      className="w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                  </span>
                </a>
                <a
                  href="https://github.com/abhiraam-bijumon"
                  target="_blank"
                  className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Games
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of games I've developed, showcasing different genres
              and technical challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <div
                key={game.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {game.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {game.githubUrl && (
                      <a
                        href={game.githubUrl}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {game.liveUrl && (
                      <a
                        href={game.liveUrl}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Play</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and courses that have shaped my
              expertise in game development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-muted rounded-lg mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Credential
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a game project or have a question?
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:abhiraambijumon@gmail.com"
              className="relative group bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 flex items-center gap-2"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
                {/* Floating sparkle */}
                <div className="w-1 h-1 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              </span>
            </a>
            <a
              href="https://github.com/abhiraam-bijumon"
              target="_blank"
              className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Abhiraam B. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
