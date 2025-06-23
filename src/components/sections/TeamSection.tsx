
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const team = [
    {
      name: "Adithya K Jayan",
      role: "CEO & Founder",
      bio: "Full-stack developer and fintech enthusiast, passionate about creating innovative currency solutions.",
      image: "/lovable-uploads/7b6cd422-9cb4-4f8a-8c35-fac70e28ee91.png"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Creator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by innovation and a passion for financial technology.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 max-w-md">
            <CardContent className="p-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={team[0].image} 
                  alt={team[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{team[0].name}</h3>
              <p className="text-primary font-medium mb-4">{team[0].role}</p>
              <p className="text-muted-foreground leading-relaxed">{team[0].bio}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
