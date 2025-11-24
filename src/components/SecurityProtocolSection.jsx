import { ShieldCheck, Lock, EyeOff, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

function SecurityProtocolSection() {
  const items = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Elite Security Standards",
      desc: "Each movement is executed with high-level protocols ensuring VIP protection at every step.",
    },
    {
      icon: <EyeOff className="w-10 h-10 text-blue-600" />,
      title: "Total Privacy Protection",
      desc: "Zero-disclosure policy with discreet pickup, anonymous routing, and confidential client handling.",
    },
    {
      icon: <Lock className="w-10 h-10 text-blue-600" />,
      title: "Encrypted Communication",
      desc: "All coordination is handled via secure channels to avoid data leaks or external access.",
    },
    {
      icon: <MapPinned className="w-10 h-10 text-blue-600" />,
      title: "Safe Route Planning",
      desc: "Routes are pre-validated, secure, and optimized for VIP speed, safety, and minimal crowd exposure.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-900"
        >
          Security & Privacy Protocols
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-blue-900 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurityProtocolSection;
