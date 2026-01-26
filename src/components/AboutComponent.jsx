import React, { useState, useEffect, useRef } from "react";
import {
  Building2,
  Cloud,
  Shield,
  Cpu,
  Brain,
  Rocket,
  Target,
  Award,
  Users,
  Heart,
  GraduationCap,
  Briefcase,
  Zap,
  BarChart3,
  Globe,
  Lock,
  Server,
  Code2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const AboutComponent = () => {
  const [activeFounder, setActiveFounder] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Founder data
  const founders = [
    {
      id: 1,
      name: "Michael Chen",
      role: "CEO & Lead Architect",
      bio: "Michael brings 15+ years of enterprise software experience with a specialization in cloud infrastructure and scalable solutions. Previously led engineering teams at Fortune 500 companies.",
      education: "M.S. Computer Science, Stanford University",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      expertise: [
        "Cloud Architecture",
        "Enterprise Solutions",
        "Team Leadership",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "CTO & Security Director",
      bio: "Sarah is a cybersecurity expert with a passion for building secure, resilient systems. She has authored multiple papers on data privacy and holds 8 security certifications.",
      education: "Ph.D. Cybersecurity, MIT",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      expertise: ["Cybersecurity", "Data Privacy", "Risk Management"],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "VP of Engineering",
      bio: "David specializes in DevOps and agile methodologies, having led the transformation of multiple organizations toward continuous delivery and deployment practices.",
      education: "B.S. Software Engineering, Carnegie Mellon",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      expertise: ["DevOps", "Agile Methodologies", "CI/CD"],
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "VP of Product & Strategy",
      bio: "Priya has a unique blend of technical expertise and business acumen, having worked as both a software developer and product manager before co-founding VM Software Solutions.",
      education: "MBA & M.S. Computer Science, Harvard University",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      expertise: [
        "Product Strategy",
        "Business Development",
        "Market Analysis",
      ],
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  // Company info
  const companyInfo = {
    name: "VM Software Solutions",
    founded: "2018",
    mission:
      "To deliver innovative, reliable, and scalable software solutions that empower businesses to thrive in the digital age.",
    vision:
      "To be the most trusted technology partner for businesses worldwide, driving digital transformation through cutting-edge solutions.",
    values: [
      {
        title: "Innovation",
        desc: "Pushing boundaries with creative solutions",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        title: "Excellence",
        desc: "Delivering superior quality in everything",
        icon: <Award className="w-6 h-6" />,
      },
      {
        title: "Integrity",
        desc: "Building trust through transparency",
        icon: <CheckCircle className="w-6 h-6" />,
      },
      {
        title: "Collaboration",
        desc: "Working together for shared success",
        icon: <Users className="w-6 h-6" />,
      },
    ],
    specialties: [
      {
        name: "Enterprise Software",
        icon: <Building2 className="w-8 h-8" />,
        color: "from-blue-500 to-blue-600",
      },
      {
        name: "Cloud Solutions",
        icon: <Cloud className="w-8 h-8" />,
        color: "from-sky-500 to-cyan-600",
      },
      {
        name: "Cybersecurity",
        icon: <Lock className="w-8 h-8" />,
        color: "from-emerald-500 to-green-600",
      },
      {
        name: "DevOps",
        icon: <Server className="w-8 h-8" />,
        color: "from-purple-500 to-violet-600",
      },
      {
        name: "AI Integration",
        icon: <Brain className="w-8 h-8" />,
        color: "from-rose-500 to-pink-600",
      },
      {
        name: "Digital Transformation",
        icon: <Rocket className="w-8 h-8" />,
        color: "from-orange-500 to-amber-600",
      },
    ],
  };

  // Stats with animation
  const stats = [
    {
      number: "150+",
      label: "Projects Delivered",
      icon: <Target className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      number: "40+",
      label: "Team Members",
      icon: <Users className="w-6 h-6" />,
      color: "bg-emerald-500",
    },
    {
      number: "99.7",
      label: "Client Satisfaction",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-rose-500",
    },
    {
      number: "12",
      label: "Industry Awards",
      icon: <Award className="w-6 h-6" />,
      color: "bg-amber-500",
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/20 to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>

      <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with animated underline */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 font-semibold tracking-wider uppercase text-sm">
                About Us
              </span>
              <div
                className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full ml-3 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Driving{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in{" "}
              <span className="font-semibold text-blue-600">
                {companyInfo.founded}
              </span>
              ,{" "}
              <span className="font-semibold text-gray-800">
                VM Software Solutions
              </span>{" "}
              is led by industry pioneers who combine technical expertise with
              business insight to deliver exceptional results.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div
              className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {companyInfo.mission}
              </p>
              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-6 rounded-xl border border-blue-100/50">
                <div className="flex items-center mb-3">
                  <Globe className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700">{companyInfo.vision}</p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center mb-8">
                <Award className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Core Values
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {companyInfo.values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">{value.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Meet Our Leadership
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The visionary founders who turned a shared dream into a thriving
                enterprise
              </p>
            </div>

            {/* Founder Selection Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {founders.map((founder) => (
                <button
                  key={founder.id}
                  onClick={() => setActiveFounder(founder.id)}
                  className={`flex items-center px-5 py-3 rounded-full font-medium transition-all duration-300 transform ${
                    activeFounder === founder.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 shadow hover:shadow-md hover:scale-[1.02] border border-gray-200"
                  }`}
                >
                  <span className="mr-2">{founder.icon}</span>
                  {founder.name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Active Founder Display */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {founders.map((founder) => (
                <div
                  key={founder.id}
                  className={`transition-all duration-500 ${activeFounder === founder.id ? "opacity-100 block" : "opacity-0 hidden"}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <h3 className="text-2xl font-bold text-white">
                          {founder.name}
                        </h3>
                        <p className="text-blue-200 font-medium">
                          {founder.role}
                        </p>
                      </div>
                      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-full p-3">
                        {founder.icon}
                      </div>
                    </div>

                    <div className="p-8 lg:col-span-2">
                      <div className="mb-6">
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
                          <GraduationCap className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-blue-700 font-medium">
                            {founder.education}
                          </span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {founder.bio}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-4">
                          <Code2 className="w-5 h-5 text-purple-600 mr-2" />
                          <h4 className="text-lg font-semibold text-gray-900">
                            Areas of Expertise
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {founder.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg text-sm font-medium border border-blue-100 flex items-center"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {founders.map((founder) => (
                <div
                  key={founder.id}
                  onClick={() => setActiveFounder(founder.id)}
                  className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 group ${activeFounder === founder.id ? "ring-4 ring-blue-500 scale-105 shadow-xl" : "hover:scale-105 shadow-lg hover:shadow-xl"}`}
                >
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${activeFounder === founder.id ? "bg-blue-600/20" : "bg-black/40 group-hover:bg-black/20"}`}
                  ></div>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white font-medium text-sm">
                      {founder.name.split(" ")[0]}
                    </p>
                    <p className="text-blue-200 text-xs">
                      {founder.role.split("&")[0]}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    {founder.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Specialties
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to meet your unique business
                needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {companyInfo.specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${specialty.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{specialty.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {specialty.name}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-gray-200 to-gray-300 mx-auto rounded-full group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10"></div>
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`${stat.color} rounded-full p-3 text-white`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <p className="text-blue-100 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business with Technology?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join the hundreds of businesses that have accelerated their
                growth with our custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                  View Our Case Studies
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                Trusted by 200+ companies worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-grid-white {
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }

        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutComponent;
