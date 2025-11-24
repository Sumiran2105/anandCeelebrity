import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/fleet", label: "Fleet" },
    { path: "/book", label: "Book VIP" },
    { path: "/contact", label: "Contact" }
  ];

  const openLegalModal = (type) => setActiveModal(type);
  const closeLegalModal = () => setActiveModal(null);

  const SocialIcons = {
  instagram: (
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm6-1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>
  ),

  facebook: (
    <path d="M13 22V12h3.5l.5-4H13V6.5c0-1.1.3-1.5 1.5-1.5H17V1h-3c-3 0-5 2-5 5v2H7v4h2v10h4z"/>
  ),

  twitter: (
    <path d="M22 5.8c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0-7.3 3v1A10.6 10.6 0 0 1 3 5.2s-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5v-.5A7 7 0 0 0 22 5.8z"/>
  ),

  youtube: (
    <path d="M10 15l5.2-3L10 9v6zm12-3c0 3-0.3 5-0.8 6a3.2 3.2 0 0 1-2 2c-1.8.5-9.2.5-11 0a3.2 3.2 0 0 1-2-2C6.3 17 6 15 6 12s0.3-5 0.8-6a3.2 3.2 0 0 1 2-2c1.8-.5 9.2-.5 11 0a3.2 3.2 0 0 1 2 2c0.5 1 0.8 3 0.8 6z"/>
  ),
};


  const legalContent = {
    Privacy: {
      title: "Privacy Policy",
      content: `<p>Your privacy policy content will go here...</p>`
    },
    Terms: {
      title: "Terms & Conditions",
      content: `<p>Your terms content will go here...</p>`
    },
    Disclaimer: {
      title: "Disclaimer",
      content: `<p>Your disclaimer content will go here...</p>`
    }
  };

  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="bg-gradient-to-b from-gray-900 to-[#071420] text-white mt-10">
        <div className="container mx-auto px-6">

          {/* GRID WRAPPER */}
          <div className="pt-6 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

              {/* BRANDING */}
              <div className="md:col-span-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-300">
                    <img src="/data/assets/founder.jpg" alt="Founder" />
                  </div>
                  <img src="/data/assets/Anandhlogo.png" className="w-14 h-14" alt="Logo" />
                </div>

                <h2 className="text-2xl font-bold">
                  <span className="text-orange-400">ANAND</span> CELEBRITY SERVICE
                </h2>
                <p className="text-orange-200 text-sm italic">
                  "Seamless • Secure • Private Movement"
                </p>
              </div>

              {/* QUICK LINKS */}
              <div className="md:col-span-2">
  <h3 className="text-lg font-semibold mb-3 text-orange-400">Quick Links</h3>

  <div className="grid grid-cols-2 gap-y-2">
    {quickLinks.map((link) => (
      <Link
        key={link.label}
        to={link.path}
        className="text-gray-300 text-sm hover:text-orange-400"
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>


              {/* CONTACT */}
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Contact</h3>
                <p className="text-gray-300 text-sm">
                  📍 Jubilee Hills, Hyderabad<br />Telangana - 500033
                </p>
                <p className="text-gray-300 text-sm mt-2">📞 +91 98765 43210</p>
                <p className="text-gray-300 text-sm">📧 support@anandcelebrityservice.com</p>
              </div>

              {/* SOCIAL ICONS */}
  <div className="flex gap-3">
  {Object.keys(SocialIcons).map((icon) => (
    <div
      key={icon}
      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition text-white"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        {SocialIcons[icon]}
      </svg>
    </div>
  ))}
</div>



            </div>
          </div>

          {/* COPYRIGHT BAR */}
          <div className="border-t border-white/10 py-3 text-sm flex flex-col md:flex-row justify-between text-gray-400">
            <p>© {currentYear} Anand Celebrity Service — All Rights Reserved.</p>

            <div className="flex gap-4 mt-2 md:mt-0">
              {["Privacy", "Terms", "Disclaimer"].map((item) => (
                <button key={item} onClick={() => openLegalModal(item)} className="hover:text-orange-400">
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* LEGAL MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-2xl w-full rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{legalContent[activeModal]?.title}</h3>
              <button onClick={closeLegalModal} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>

            <div
              className="mt-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: legalContent[activeModal]?.content }}
            />

            <button onClick={closeLegalModal} className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
