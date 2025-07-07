import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 50, label: "PROJECTS COMPLETED" },
    { value: 100, label: "HAPPY CLIENTS" },
    { value: 5, label: "YEARS EXPERIENCE" },
    { value: 24, label: "HOUR SUPPORT" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Card key={index} className="gaming-card p-8 rounded-xl">
              <CardContent className="p-0">
                <div className="stats-counter font-orbitron mb-2">
                  {isVisible ? (
                    <AnimatedCounter target={stat.value} />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-neutral font-space font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
};

export default Stats;
