import { Users, Award, Clock, Eye, Target, Heart } from "lucide-react";

const AboutContent = () => {
  const features = [
    { icon: Users, title: "Expert Team" },
    { icon: Award, title: "Quality Assured" },
    { icon: Clock, title: "On-time Delivery" }
  ];

  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading digital innovation partner, empowering businesses to thrive in the digital age."
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "Delivering exceptional digital solutions that exceed expectations and drive measurable results."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Innovation, integrity, collaboration, and excellence guide everything we do."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">About Vortex Strategies</h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            Pioneering digital innovation with expertise, creativity, and commitment to excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">Our Story</h3>
            <p className="text-neutral mb-6 leading-relaxed">
              Founded with a passion for digital innovation, Vortex Strategies Limited has emerged as a leading 
              technology solutions provider. We specialize in transforming ideas into powerful digital experiences 
              that drive business success.
            </p>
            <p className="text-neutral mb-6 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively to deliver 
              exceptional results across game development, mobile applications, web solutions, and publishing services.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'
                  }`}>
                    <feature.icon className="text-white h-4 w-4" />
                  </div>
                  <span className="text-dark font-semibold">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaborating at work" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${
                index === 0 ? 'from-primary to-secondary' : 
                index === 1 ? 'from-secondary to-accent' : 'from-accent to-primary'
              } rounded-full flex items-center justify-center mx-auto mb-4`}>
                <value.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">{value.title}</h3>
              <p className="text-neutral">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
