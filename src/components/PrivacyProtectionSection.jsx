import { motion } from "framer-motion";
import { Shield, UserX, KeyRound, EyeOff } from "lucide-react";

export default function PrivacyProtectionSection() {
  const points = [
    {
      icon: <EyeOff className="w-10 h-10 text-blue-600" />,
      title: "No Public Exposure",
      desc: "We ensure complete anonymity with discreet pickup and drop locations chosen as per VIP preference.",
    },
    {
      icon: <UserX className="w-10 h-10 text-blue-600" />,
      title: "Zero Social Disclosure",
      desc: "Our team strictly avoids social media mentions, photos, or location tracking during VIP movement.",
    },
    {
      icon: <KeyRound className="w-10 h-10 text-blue-600" />,
      title: "Encrypted Coordination",
      desc: "All communication is handled through secure, encrypted channels for maximum confidentiality.",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "High Confidential Handling",
      desc: "Client identity and travel details are confidential and shared strictly on a need-to-know basis.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-900"
        >
          How We Protect Privacy
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          Privacy is not just a feature — it's our foundation. Every movement is protected by strict confidentiality protocols.
        </motion.p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-6 bg-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-blue-900 text-center">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
