import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Code,
  Smartphone,
  Globe,
  Users,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ModernGCSGCWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Développement Web",
      description:
        "Applications web modernes avec React, Vue.js, et technologies de pointe",
      features: [
        "Progressive Web Apps",
        "E-commerce",
        "CMS personnalisés",
        "API REST/GraphQL",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Développement Mobile",
      description: "Applications natives et cross-platform pour iOS et Android",
      features: [
        "React Native",
        "Flutter",
        "Applications natives",
        "UI/UX optimisé",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Sites Web Professionnels",
      description: "Sites vitrines et corporate responsive et optimisés SEO",
      features: [
        "Design responsive",
        "Optimisation SEO",
        "Performance optimale",
        "Maintenance incluse",
      ],
    },
  ];

  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Analyse des Besoins",
      description: "Étude approfondie de vos objectifs et contraintes",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Conception UX/UI",
      description: "Design centré utilisateur et interface intuitive",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement",
      description: "Codage avec les meilleures pratiques et technologies",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Tests & QA",
      description: "Tests rigoureux et assurance qualité",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Déploiement",
      description: "Mise en ligne et formation utilisateur",
    },
  ];

  const projects = [
    {
      title: "Goal Live Togo",
      description:
        "Plateforme de scores en direct du football togolais avec notifications temps réel",
      tech: ["React", "Node.js", "Socket.io"],
      image: "🏆",
    },
    {
      title: "Taxi d'Afrique",
      description:
        "Solution de transport longue distance connectant les villes africaines",
      tech: ["React Native", "Firebase", "Maps API"],
      image: "🚗",
    },
    {
      title: "E-Commerce FCFA",
      description: "Marketplace locale avec paiement mobile money intégré",
      tech: ["Next.js", "Stripe", "MongoDB"],
      image: "🛒",
    },
  ];

  const testimonials = [
    {
      name: "Kofi Mensah",
      company: "StartupTech Ghana",
      content:
        "GCSGC Agency a transformé notre vision en une application mobile exceptionnelle. Leur expertise technique et leur compréhension du marché africain sont remarquables.",
      rating: 5,
    },
    {
      name: "Aminata Diallo",
      company: "Commerce Plus",
      content:
        "Une équipe professionnelle qui livre dans les délais. Notre site e-commerce génère maintenant 300% plus de ventes qu'avant.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          showNavbar ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span
                className={`text-xl font-bold ${
                  showNavbar ? "text-gray-800" : "text-white"
                }`}
              >
                GCSGC Agency
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className={`hover:text-teal-500 transition-colors ${
                  showNavbar ? "text-gray-800" : "text-white"
                }`}
              >
                Services
              </a>
              <a
                href="#process"
                className={`hover:text-teal-500 transition-colors ${
                  showNavbar ? "text-gray-800" : "text-white"
                }`}
              >
                Processus
              </a>
              <a
                href="#portfolio"
                className={`hover:text-teal-500 transition-colors ${
                  showNavbar ? "text-gray-800" : "text-white"
                }`}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Devis Gratuit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 ${
                showNavbar ? "text-gray-800" : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="text-gray-800 hover:text-teal-500"
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="text-gray-800 hover:text-teal-500"
                >
                  Processus
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-800 hover:text-teal-500"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full text-center"
                >
                  Devis Gratuit
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transformons vos
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              idées
            </span>
            <br />
            en solutions digitales
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Agence de développement spécialisée dans les applications web,
            mobiles et sites internet en Afrique de l'Ouest
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Démarrer un Projet
            </a>
            <a
              href="#portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
            >
              Voir nos Réalisations
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nos Expertises
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions technologiques adaptées aux besoins du marché
              africain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6 group-hover:text-teal-500 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-600 hover:text-teal-500 font-semibold"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 bg-gradient-to-r from-blue-900 to-teal-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                  <div className="text-white">{step.icon}</div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-uns des projets qui ont marqué notre parcours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-teal-500 font-semibold"
                  >
                    Voir le projet <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600">
              Ce que nos partenaires disent de notre travail
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble la solution digitale qui
            fera la différence
          </p>
          <a
            href="#contact"
            className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Obtenir un Devis Gratuit
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-400">
              Démarrons votre projet ensemble
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-teal-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Adresse
                  </h3>
                  <p className="text-gray-400">Attiegou, Lomé, Togo</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-teal-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Téléphone
                  </h3>
                  <p className="text-gray-400">+228 93 23 13 46</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-teal-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-400">info@gcsgcagency.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Sujet"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                />
                <textarea
                  rows="5"
                  placeholder="Décrivez votre projet..."
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
                />
                <button
                  onClick={() =>
                    alert("Message envoyé ! Nous vous recontacterons bientôt.")
                  }
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer"
                >
                  Envoyer le Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <span className="text-xl font-bold">GCSGC Agency</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire digital en Afrique de l'Ouest
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Développement Web</li>
                <li>Applications Mobile</li>
                <li>Sites Internet</li>
                <li>Consulting IT</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li>À propos</li>
                <li>Notre équipe</li>
                <li>Carrières</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GCSGC Agency. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernGCSGCWebsite;
