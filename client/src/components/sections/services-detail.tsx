import { Gamepad2, Smartphone, Code, Rocket, Check } from "lucide-react";

const ServicesDetail = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Create immersive gaming experiences with our Unity and Unreal Engine expertise. From concept to launch, we develop games that captivate and engage players across all platforms.",
      features: [
        "Unity & Unreal Engine Development",
        "Cross-platform Gaming Solutions",
        "2D & 3D Game Development",
        "Game Optimization & Performance"
      ],
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build powerful mobile applications for Android and iOS platforms. Our apps are designed for performance, user experience, and scalability.",
      features: [
        "Native Android & iOS Development",
        "Cross-platform Solutions",
        "UI/UX Design & Development",
        "App Store Optimization"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-accent to-primary"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Create modern, responsive websites and web applications that deliver exceptional user experiences and drive business growth.",
      features: [
        "Responsive Web Design",
        "Full-stack Development",
        "E-commerce Solutions",
        "SEO & Performance Optimization"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Rocket,
      title: "Publishing Services",
      description: "Launch your apps and games successfully with our comprehensive publishing services. From store optimization to marketing strategies, we ensure maximum visibility and downloads.",
      features: [
        "App Store Optimization (ASO)",
        "Marketing & Promotion",
        "Analytics & Performance Tracking",
        "Post-launch Support"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Detailed Services</h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            Discover how our specialized services can transform your business
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
                </div>
                <p className="text-neutral mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 text-neutral">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-primary mr-3 h-5 w-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                <img 
                  src={service.image} 
                  alt={`${service.title} workspace`} 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
