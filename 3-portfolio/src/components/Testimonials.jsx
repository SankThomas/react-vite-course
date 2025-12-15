import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "Thomas delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise helped us launch ahead of schedule. The code quality was outstanding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "Working with Thomas was a game-changer for our team. He not only delivered high-quality code but also mentored our junior developers. His communication skills are top-notch.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Design Director",
      company: "Creative Agency",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "Thomas has an incredible ability to translate design concepts into pixel-perfect implementations. His understanding of both design and development made our collaboration seamless.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "InnovateLab",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "Thomas helped us build our MVP from scratch. His full-stack expertise and problem-solving skills were invaluable. We couldn't have asked for a better developer.",
      rating: 5,
    },
  ];

  const companies = [
    {
      name: "TechCorp",
      logo: "https://placehold.co/600x400?text=TechCorp",
    },
    {
      name: "StartupXYZ",
      logo: "https://placehold.co/600x400?text=StartupXYZ",
    },
    {
      name: "Creative Agency",
      logo: "https://placehold.co/600x400?text=Creative",
    },
    {
      name: "InnovateLab",
      logo: "https://placehold.co/600x400?text=InnovateLab",
    },
    {
      name: "DataFlow",
      logo: "https://placehold.co/600x400?text=DataFlow",
    },
    {
      name: "CloudTech",
      logo: "https://placehold.co/600x400?text=CloudTech",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from satisfied clients and collaborators
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote
              className="absolute top-6 left-6 text-primary-200"
              size={48}
            />

            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="size-16 rounded-full object-cover mr-4"
              />

              <div className="text-left">
                <h4 className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role} at{" "}
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`size-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-primary-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Trusted by leading companies
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
