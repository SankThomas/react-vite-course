import { Code, Palette, Zap, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code className="size-8 text-primary-600" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Palette className="size-8 text-primary-600" />,
      title: "Design Focus",
      description:
        "Creating beautiful interfaces with attention to user experience",
    },
    {
      icon: <Zap className="size-8 text-primary-600" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: <Users className="size-8 text-primary-600" />,
      title: "Collaboration",
      description:
        "Working effectively with teams to deliver exceptional results",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            blanditiis, repudiandae perferendis placeat natus nulla?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Working"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building the future, one line of code at a time
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              nesciunt autem distinctio officia doloremque repudiandae pariatur
              possimus nisi nulla, asperiores saepe voluptates nihil quod
              necessitatibus.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              nesciunt autem distinctio officia doloremque repudiandae pariatur
              possimus nisi nulla, asperiores saepe voluptates nihil quod
              necessitatibus.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
