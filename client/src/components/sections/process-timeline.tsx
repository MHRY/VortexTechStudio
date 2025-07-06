import { Lightbulb, Compass, Code, Bug, Settings, Rocket } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "1. Ideation",
      description: "We start by understanding your vision, goals, and requirements. Through collaborative brainstorming sessions, we define the project scope and create a strategic roadmap.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Compass,
      title: "2. Pre-production",
      description: "Detailed planning, wireframing, and technical architecture design. We create prototypes and establish the technical foundation for your project.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Code,
      title: "3. Development",
      description: "Our expert developers bring your vision to life using the latest technologies and best practices. Regular updates and milestone reviews ensure quality and transparency.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Bug,
      title: "4. Testing",
      description: "Comprehensive testing across all platforms and devices. We ensure your product is bug-free, performant, and delivers an exceptional user experience.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Settings,
      title: "5. Post-production",
      description: "Final optimizations, documentation, and preparation for launch. We ensure everything is polished and ready for your users.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Rocket,
      title: "6. Launch",
      description: "Successful deployment and launch of your product. We provide ongoing support and maintenance to ensure continued success and growth.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Our Development Process</h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            A structured approach to deliver exceptional results at every stage
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${
                        index % 3 === 0 ? 'from-primary to-secondary' : 
                        index % 3 === 1 ? 'from-secondary to-accent' : 'from-accent to-primary'
                      } rounded-full flex items-center justify-center mr-4`}>
                        <step.icon className="text-white h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-dark">{step.title}</h3>
                    </div>
                    <p className="text-neutral">
                      {step.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? 'order-1 md:order-2' : ''}>
                    <img 
                      src={step.image} 
                      alt={`${step.title} process`} 
                      className="rounded-lg shadow-md w-full h-auto"
                    />
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

export default ProcessTimeline;
