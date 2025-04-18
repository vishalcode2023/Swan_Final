import {
  FaHandsHelping,
  FaHeadset,
  FaTools,
  FaCogs,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Pre-Sale",
    icon: FaHandsHelping,
    details: [
      "Consulting Solution Service",
      "Configuration Suggestion",
      "Layout Suggestion",
    ],
  },
  {
    title: "Help Desk",
    icon: FaHeadset,
    details: [
      "Remote troubleshooting",
      "Remote machine adjusting",
      "Faulty escalation",
    ],
  },
  {
    title: "On-Site",
    icon: FaTools,
    details: [
      "Routing inspection",
      "Commissioning",
      "Troubleshooting",
      "Recovery",
    ],
  },
  {
    title: "Spare Parts",
    icon: FaCogs,
    details: [
      "Risky spare parts supply",
      "Warranty service",
      "Key parts maintenance",
    ],
  },
  {
    title: "Training",
    icon: FaGraduationCap,
    details: ["Local training", "High-level headquarters"],
  },
  {
    title: "Warranty",
    icon: FaShieldAlt,
    details: ["Standard warranty", "Long-term warranty", "SLA"],
  },
];

export default function ServiceSection() {
  return (
    <div className="w-full  text-gray-900 py-16 px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        We will help you on every step
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <service.icon className="text-blue-500 text-3xl" />
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
            <ul className="text-gray-700">
              {service.details.map((detail, i) => (
                <li key={i} className="text-sm mb-1">
                  • {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Extra Service Info */}
      <div className="max-w-4xl mx-auto mt-12 text-center bg-white rounded-lg p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
          ✨ Pre-Sale Service
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-loose">
          We provide{" "}
          <span className="font-semibold text-gray-900 inline-block">
            comprehensive insights
          </span>{" "}
          into our sorting solutions, ensuring they meet your unique needs.
        </p>

        <div className="border-t-2 border-gray-200 my-6"></div>

        <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mt-6 sm:mt-8 mb-4">
          🔧 After-Sale Service
        </h3>
        <ul className="text-gray-700 text-base sm:text-lg leading-loose space-y-4">
          <li className="flex items-start gap-2">
            <span className="inline-block">
              24-hour{" "}
              <span className="font-semibold text-gray-900 inline-block">
                on-site service
              </span>{" "}
              with fast response.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block">
              Two-year warranty with{" "}
              <span className="font-semibold text-gray-900 inline-block">
                complimentary maintenance
              </span>
              .
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
