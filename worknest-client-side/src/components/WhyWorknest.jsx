import {
  Building2,
  Users,
  BarChart3,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

const WhyWorknest = () => {
  const painPoints = [
    {
      icon: Building2,
      problem: "Wasted Space & Resources",
      description:
        "Empty desks and underutilized meeting rooms are costing you money every day.",
      solution:
        "Real-time occupancy tracking and smart booking to maximize space utilization.",
    },
    {
      icon: Users,
      problem: "Employee Friction & Confusion",
      description:
        "Team members struggle to find available spaces and coordinate in-office days.",
      solution:
        "Intuitive desk and room booking with team visibility and favorites system.",
    },
    {
      icon: BarChart3,
      problem: "Lack of Data-Driven Insights",
      description:
        "Making decisions about office space without concrete usage data.",
      solution:
        "Comprehensive analytics dashboard with usage trends and recommendations.",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: "Increased Office Efficiency",
      description:
        "Reduce real estate costs by optimizing your space utilization based on actual data.",
    },
    {
      icon: CheckCircle2,
      title: "Enhanced Employee Experience",
      description:
        "Provide a seamless, frustration-free office experience that employees love.",
    },
    {
      icon: CheckCircle2,
      title: "Data-Backed Decision Making",
      description:
        "Make informed choices about office layout, capacity, and resources with clear insights.",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="fix-alignment">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            The Hybrid Work
            <span className="block text-primary">Challenge Solved</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Traditional office management struggles with hybrid work. WorkNest
            provides the modern solution.
          </p>
        </div>

        {/* Pain Points & Solutions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 rounded-xl h-full"
            >
              <div className="card-body">
                {/* Problem Icon */}
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary mx-auto flex items-center justify-center mb-4">
                  <point.icon size={24} />
                </div>

                {/* Problem */}
                <h3 className="card-title text-foreground mx-auto mb-2">
                  {point.problem}
                </h3>
                <p className="text-muted-foreground text-center mb-2">
                  {point.description}
                </p>

                {/* Solution with WorkNest */}
                <div className=" mt-auto pt-4 border-t border-gray-300">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-secondary mt-0.5 " />
                    <div>
                      <span className="font-semibold text-secondary">
                        With WorkNest:{" "}
                      </span>
                      <span className="text-foreground">{point.solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorknest;
