import {
  Github,
  ExternalLink,
  Award,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

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
    title: "Drive Into Nothing",
    description:
      "An exciting driving game on Roblox that has various levels and is a lot of fun. Achieved 2,000+ visits!",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fcbef59f32b8f46c3878540ede7051753%2Fbd5d064fec154237ae2daf145e3ad6ea?format=webp&width=800",
    technologies: ["Roblox Studio", "Lua", "Game Design"],
    liveUrl: "https://www.roblox.com/games/114930253549665/Drive-In-To-Nothing",
    featured: true,
  },
  {
    id: "2",
    title: "Platformer School",
    description:
      "A fun platformer adventure where players explore a school setting and complete challenging school-themed levels. Navigate through classrooms, hallways, and school grounds in this upcoming release!",
    image: "/placeholder.svg",
    technologies: ["Unity", "C#", "Platformer Design"],
    featured: true,
  },
];

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Roblox Game: 2K+ Visits",
    issuer: "Roblox Platform",
    date: "2024",
    image: "/placeholder.svg",
    credentialUrl:
      "https://www.roblox.com/games/114930253549665/Drive-In-To-Nothing",
  },
  {
    id: "2",
    title: "Unity Game Development",
    issuer: "Unity Technologies",
    date: "2024",
    image: "/placeholder.svg",
    credentialUrl: "https://unity.com/learn",
  },
];

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="fixed pointer-events-none z-30 opacity-50"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(300px circle at center, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.08), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(1px)",
          transition: "all 0.1s ease-out",
        }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-lg">Abhiraam B</div>
          <div className="flex items-center gap-6">
            <a
              href="#games"
              className="relative group text-muted-foreground hover:text-foreground transition-all duration-500 py-2 px-4 rounded-lg cursor-pointer"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-medium group-hover:text-blue-300 transition-colors duration-300">
                Games
              </span>

              {/* Animated underline */}
              <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full transform -translate-x-1/2"></div>
            </a>
            <a
              href="#certificates"
              className="relative group text-muted-foreground hover:text-foreground transition-all duration-500 py-2 px-4 rounded-lg cursor-pointer"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-medium group-hover:text-emerald-300 transition-colors duration-300">
                Certificates
              </span>

              {/* Animated underline */}
              <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-3/4 transition-all duration-500 rounded-full transform -translate-x-1/2"></div>
            </a>
            <a
              href="#contact"
              className="relative group text-muted-foreground hover:text-foreground transition-all duration-500 py-2 px-4 rounded-lg cursor-pointer"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text */}
              <span className="relative z-10 font-medium group-hover:text-purple-300 transition-colors duration-300">
                Contact
              </span>

              {/* Animated underline */}
              <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-500 rounded-full transform -translate-x-1/2"></div>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500  group-hover:animate-none"></div>

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

                {/* Game Dev Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                  Game Dev
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Unity & Roblox Developer
                <span className="text-primary block">
                  Creative Technologist
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
                I create engaging games across multiple platforms including
                Unity and Roblox. Passionate about building immersive
                experiences, interactive gameplay mechanics, and worlds that
                bring players together. I have been coding since 5 years old.
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
                  className="relative group inline-block cursor-pointer"
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

                  {/* Main Button */}
                  <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-1 overflow-hidden shadow-2xl group-hover:shadow-blue-500/50">
                    {/* Inner Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>

                    {/* Particle System */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="absolute top-3 right-6 w-0.5 h-0.5 bg-blue-300 rounded-full "
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="absolute bottom-3 left-6 w-0.5 h-0.5 bg-purple-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                      <div
                        className="absolute bottom-2 right-4 w-1 h-1 bg-white rounded-full "
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                    </div>

                    {/* Text with Enhanced Effects */}
                    <span className="relative z-10 flex items-center gap-3 text-lg tracking-wide">
                      <span className="group-hover:text-blue-100 transition-colors duration-300">
                        View My Games
                      </span>

                      {/* Animated Dots */}
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 bg-white/80 rounded-full opacity-60 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-white/80 rounded-full opacity-60 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-white/80 rounded-full opacity-60 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                      </div>
                    </span>

                    {/* Border Animation */}
                    <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                  </div>
                </a>
                <a
                  href="https://github.com/abhiraam-bijumon"
                  target="_blank"
                  className="relative group inline-block cursor-pointer"
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

                  {/* Main Button */}
                  <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-2 border-slate-600 group-hover:border-slate-400 text-white px-6 py-3 rounded-xl font-medium transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1 overflow-hidden shadow-xl group-hover:shadow-slate-500/30">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 skew-x-12"></div>

                    {/* GitHub-themed particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-2 left-3 w-0.5 h-0.5 bg-green-400 rounded-full "
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="absolute top-3 right-4 w-0.5 h-0.5 bg-slate-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="absolute bottom-2 left-5 w-0.5 h-0.5 bg-blue-400 rounded-full "
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>

                    {/* Text Content */}
                    <span className="relative z-10 flex items-center gap-2 text-base">
                      <Github className="w-5 h-5 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-700 drop-shadow-lg" />
                      <span className="group-hover:text-slate-200 transition-colors duration-300">
                        GitHub
                      </span>

                      {/* Code bracket effect */}
                      <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-green-400 text-sm font-mono">{`{}`}</span>
                      </div>
                    </span>
                  </div>
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
                className="relative group animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>

                {/* Main Card Container */}
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/25 transform group-hover:scale-105 group-hover:rotate-1">
                  {/* Game Image Section */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out filter group-hover:brightness-110 group-hover:contrast-110"
                    />

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/30 group-hover:via-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>

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

                    {/* Featured Badge */}
                    {game.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg group-hover:scale-110 transition-transform duration-300">
                        ⭐ Featured
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="relative p-6">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {game.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {game.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300 hover:scale-110"
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4">
                      {game.githubUrl && (
                        <a
                          href={game.githubUrl}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                        >
                          <Github className="w-4 h-4 group-hover/link:rotate-12 group-hover/link:scale-110 transition-all duration-300" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                      {game.liveUrl && (
                        <a
                          href={game.liveUrl}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 group-hover/link:scale-110 transition-all duration-300" />
                          <span className="text-sm font-medium">Play</span>
                        </a>
                      )}
                    </div>
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
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Credentials
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
              className="relative group inline-block cursor-pointer"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

              {/* Main Button */}
              <div className="relative bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-1 overflow-hidden shadow-2xl group-hover:shadow-emerald-500/50">
                {/* Inner Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>

                {/* Particle System */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute top-2 left-4 w-1 h-1 bg-emerald-300 rounded-full "
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute top-3 right-6 w-0.5 h-0.5 bg-blue-300 rounded-full "
                    style={{ animationDelay: "0.15s" }}
                  ></div>
                  <div
                    className="absolute bottom-3 left-6 w-0.5 h-0.5 bg-purple-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="absolute bottom-2 right-4 w-1 h-1 bg-white rounded-full "
                    style={{ animationDelay: "0.45s" }}
                  ></div>
                </div>

                {/* Text with Enhanced Effects */}
                <span className="relative z-10 flex items-center gap-3 text-lg tracking-wide">
                  <Mail className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 drop-shadow-lg" />
                  <span className="group-hover:text-emerald-100 transition-colors duration-300">
                    Get In Touch
                  </span>

                  {/* Magic Sparkle */}
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500"></div>
                </span>

                {/* Border Animation */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/50 transition-colors duration-300"></div>
              </div>
            </a>
            <a
              href="https://github.com/abhiraam-bijumon"
              target="_blank"
              className="relative group inline-block cursor-pointer"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>

              {/* Main Button */}
              <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-2 border-slate-600 group-hover:border-slate-400 text-white px-8 py-3 rounded-xl font-medium transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1 overflow-hidden shadow-xl group-hover:shadow-slate-500/30">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 skew-x-12"></div>

                {/* GitHub-themed particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute top-2 left-4 w-0.5 h-0.5 bg-green-400 rounded-full "
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute top-3 right-6 w-0.5 h-0.5 bg-slate-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute bottom-2 left-6 w-0.5 h-0.5 bg-blue-400 rounded-full "
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="absolute bottom-3 right-4 w-0.5 h-0.5 bg-purple-400 rounded-full "
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>

                {/* Text Content */}
                <span className="relative z-10 flex items-center gap-3 text-base">
                  <Github className="w-5 h-5 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-700 drop-shadow-lg" />
                  <span className="group-hover:text-slate-200 transition-colors duration-300">
                    Follow on GitHub
                  </span>

                  {/* Follow indicator */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-green-400 rounded-full "></div>
                    <span className="text-green-400 text-xs font-mono">+</span>
                  </div>
                </span>
              </div>
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
