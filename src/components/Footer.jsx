import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/fleet", label: "Fleet" },
    { path: "/contact", label: "Contact" },
  ];

  const legalContent = {
    Privacy: { title: "Privacy Policy", content: `<p>Content...</p>` },
    Terms: { title: "Terms & Conditions", content: `<p>Content...</p>` },
    Disclaimer: { title: "Disclaimer", content: `<p>Content...</p>` },
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-blue-900 to-[#081526] text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP */}
    <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* BRAND */}
      <div>
        <div className="flex items-center gap-3 mb-4">

          {/* LOGO */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
            <img
              src="/data/assets/logo.jpeg"
              alt="Anand Celebrity Service"
              className="w-7 h-7 object-contain"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-wide">
              <span className="text-orange-400">ANAND </span>CELEBRITY SERVICE
            </h2>
            <p className="text-xs text-gray-400 italic mt-1">
              “Seamless • Secure • Private Movement”
            </p>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          Anand Celebrity Service delivers discreet, luxury travel and security
          solutions for celebrities and high-profile professionals across India, ensuring
          effortless, confident movement with absolute privacy.
        </p>

        {/* SOCIAL */}
        <div className="flex gap-3 mt-4">
          {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="
                w-9 h-9 flex items-center justify-center
                rounded-lg bg-white/10
                hover:bg-orange-400 hover:text-black
                transition
              "
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="md:pl-20">
        <h3 className="text-lg font-semibold text-orange-400 mb-4">
          Quick Links
        </h3>

        <nav className="space-y-2">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block text-gray-300 text-sm hover:text-orange-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="text-lg font-semibold text-orange-400 mb-4">
          Contact
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          Jubilee Hills, Hyderabad <br />
          Telangana – 500033
        </p>

        <p className="text-gray-300 text-sm mt-2">
          📞 +91 98765 43210
        </p>
        <p className="text-gray-300 text-sm">
          📧 info@anandgroup.org
        </p>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
      <p>© {currentYear} Anand Celebrity Service. All rights reserved.</p>

      <div className="flex gap-4">
        {["Privacy", "Terms", "Disclaimer"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveModal(item)}
            className="hover:text-orange-400 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>

  </div>
</footer>


      {/* LEGAL MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {legalContent[activeModal]?.title}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-500 hover:text-black text-2xl"
              >
                ×
              </button>
            </div>

            <div
              className="mt-4 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: legalContent[activeModal]?.content,
              }}
            />

            <button
              onClick={() => setActiveModal(null)}
              className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 w-12 h-12 rounded-full
            bg-yellow-500 text-white shadow-xl
            hover:bg-yellow-600 hover:scale-110
            flex items-center justify-center
            transition-all duration-300 z-50
          "
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
