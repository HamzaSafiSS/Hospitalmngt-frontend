import { Users, Stethoscope, Calendar } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Patient Management",
      desc: "Register, update, and manage patient records easily."
    },
    {
      icon: Stethoscope,
      title: "Doctor Directory",
      desc: "Organize doctors and specializations efficiently."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      desc: "Book appointments with automatic conflict detection."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <Icon className="mx-auto text-blue-600 mb-4" size={36} />
                <h4 className="text-xl font-semibold mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}