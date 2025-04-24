"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@jesusserpa/components/ui/button"
import { Card, CardContent } from "@jesusserpa/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Barra de navegación */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-orange-500/20">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/favicon-js.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#sobre-mi" className="text-sm hover:text-orange-500 transition-colors">
              Sobre Mí
            </Link>
            <Link href="#habilidades" className="text-sm hover:text-orange-500 transition-colors">
              Skills
            </Link>
            <Link href="#proyectos" className="text-sm hover:text-orange-500 transition-colors">
              Proyectos
            </Link>
            <Link href="#contacto" className="text-sm hover:text-orange-500 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-orange-500">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </header>

      {/* Sección Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white">Hola, soy </span>
              <span className="text-orange-500">Jesus Serpa</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desarrollador Full Stack <br />
              QA tester
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="#proyectos">Proyectos</Link>
              </Button>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500">
                <Link href="#contacto">Contáctame</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="py-20 bg-white text-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Sobre <span className="text-orange-500">Mí</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border-2 border-orange-500 rounded-lg transform translate-x-4 translate-y-4"></div>
                <Image
                  src="/images/img.jpg?height=400&width=400"
                  alt="Jesus Serpa"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-full relative z-10"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-6">
                  Desarrollador Full Stack con experiencia en la creación de sitios y aplicaciones, utilizando tecnologías como NextJS, TailwindCSS, JavaScript, ReactJS, PHP, Python y Node.js. Experiencia en bases de datos relacionales y no relacionales (MySQL, MongoDB, PostgreSQL). Formación en Análisis y Desarrollo de Software, con una sólida base en pruebas manuales y automatizadas, asegurando calidad en cada etapa del desarrollo.
                </p>
                <p className="text-gray-700 mb-6">
                  Habilidades en metodologías ágiles (Scrum), gestión de versiones con Git/GitHub y herramientas de gestión de proyectos como Jira. Apasionado por la tecnología y el aprendizaje continuo, con enfoque en soluciones eficientes y escalables.
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2"
                  >
                    <Link href="https://github.com/jesusserpa" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2"
                  >
                    <Link href="https://www.linkedin.com/in/jesusserpa" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2"
                  >
                    <Link href="mailto:jesusdavidserpa@hotmail.com">
                      <Mail className="h-6 w-6" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Habilidades */}
      <section id="habilidades" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-orange-500">Skills</span>
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
              {habilidades.map((habilidad, index) => (
                <motion.div
                  key={habilidad.nombre}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/5 border border-orange-500/20 rounded-lg p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center text-orange-500">{habilidad.icono}</div>
                  </div>
                  <h3 className="font-medium">{habilidad.nombre}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="py-20 bg-white text-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-orange-500">Proyectos</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectos.map((proyecto, index) => (
                <motion.div
                  key={proyecto.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-orange-500/20 hover:border-orange-500/50 transition-colors">
                    <div className="relative aspect-video">
                      <Image
                        src={proyecto.imagen || "/placeholder.svg"}
                        alt={proyecto.titulo}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{proyecto.titulo}</h3>
                      {/* <p className="text-gray-600 mb-4">{proyecto.descripcion}</p> */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proyecto.tecnologias.map((tech) => (
                          <span key={tech} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2"
                        >
                          <Link href={proyecto.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Código
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2"
                        >
                          <Link href={proyecto.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ponte en <span className="text-orange-500">Contacto</span>
            </motion.h2>
            <motion.div
              className="bg-white/5 border border-orange-500/20 rounded-lg p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Enviar Mensaje</Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="py-8 bg-black border-t border-orange-500/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jesus Serpa. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                <Link href="https://github.com/jesusserpa" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                <Link href="https://www.linkedin.com/in/jesusserpa" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-orange-500">
                <Link href="mailto:jesusdavidserpa@hotmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Datos de habilidades
const habilidades = [
  { nombre: "React", icono: <div className="text-2xl">⚛️</div> },
  { nombre: "Next.js", icono: <div className="text-2xl">▲</div> },
  { nombre: "TypeScript", icono: <div className="text-2xl">TS</div> },
  { nombre: "Node.js", icono: <div className="text-2xl">🟢</div> },
  { nombre: "Tailwind CSS", icono: <div className="text-2xl">🌊</div> },
  { nombre: "MongoDB", icono: <div className="text-2xl">🍃</div> },
  { nombre: "GraphQL", icono: <div className="text-2xl">◢</div> },
  { nombre: "PHP", icono: <div className="text-2xl">🐘</div> },
]

// Datos de proyectos
const proyectos = [
  {
    titulo: "Inmover",
    imagen: "/images/projects/in-mover.png",
    tecnologias: ["React", "Tailwind"],
    github: "https://github.com/jesusserpa",
    demo: "https://in-mover.netlify.app/",
  },
  {
    titulo: "VisionPro",
    imagen: "/images/projects/vision-pro.png",
    tecnologias: ["React", "Tailwind"],
    github: "https://github.com/jesusserpa",
    demo: "https://vision-pro-js.netlify.app/",
  },
  {
    titulo: "BULLGYM Landing",
    imagen: "/images/projects/bullgym.png",
    tecnologias: ["Javascript", "Bootstrap"],
    github: "https://github.com/jesusserpa/bullgym",
    demo: "https://bullgym-js.vercel.app/",
  },
  {
    titulo: "Crypto Tracker",
    imagen: "/images/projects/crypto.png",
    tecnologias: ["React", "Crypto API"],
    github: "https://github.com/jesusserpa",
    demo: "https://crypto-trackerjs.netlify.app/",
  },
  {
    titulo: "Convertidor de Temperaturas",
    imagen: "/images/projects/convert-img.png",
    tecnologias: ["Javascript"],
    github: "https://github.com/jesusserpa/convertidor-tiempo",
    demo: "https://convertidor-tiempo.vercel.app/",
  },
  {
    titulo: "Hanging Game",
    imagen: "/images/projects/hanging-game.png",
    tecnologias: ["Typescript"],
    github: "https://github.com/jesusserpa/Hanging-Game",
    demo: "https://hanging-game.vercel.app/",
  },
  {
    titulo: "Software de Ventas",
    imagen: "/images/projects/softwareventas.png",
    tecnologias: ["JavaScript", "Java"],
    github: "https://github.com/jesusserpa/Software-Ventas",
    demo: "https://github.com/jesusserpa/Software-Ventas",
  },
  {
    titulo: "BlackJack Game",
    imagen: "/images/projects/blackjack-img.png",
    tecnologias: ["JavaScript"],
    github: "https://github.com/jesusserpa/blackjack",
    demo: "https://blackjack-two-delta.vercel.app/",
  },
]


