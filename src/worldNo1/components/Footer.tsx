import { Facebook, Instagram, MapPin, Music2, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Facilities", href: "#facilities" },
    { name: "Food", href: "#food" },
    { name: "Nearby", href: "#nearby" },
    { name: "Contact", href: "#contact" },
  ];

  const rules = [
    "Gate in time: 8:00 PM",
    "Gate out time: 6:00 AM",
    "Visitors: parents only",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <span className="ml-2 font-black text-xl text-white">
                Aaryan Boys Hostel
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Aaryan Boys Hostel - Student living in Bajrang Chowk, Janakpur.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/1Cv1gUDFxr/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/aaryanboyshostel?igsh=MXRsbHQ2bnhvbzIxZw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@aaryan.boys.hostel?_r=1&_d=efe0bjjm72m1kd&sec_uid=MS4wLjABAAAAjWx9AJMpBb379r8c252BIpF-ObimTLfgTETCJm4ce5ViB0BSgqilDlNb7hVHE6sy&share_author_id=6623239574699261954&sharer_language=en&source=h5_m&u_code=d3565hf1fihi6f&timestamp=1780573589&user_id=6623239574699261954&sec_user_id=MS4wLjABAAAAjWx9AJMpBb379r8c252BIpF-ObimTLfgTETCJm4ce5ViB0BSgqilDlNb7hVHE6sy&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7647275626513057552&share_link_id=74315043-4117-4570-a74b-fec5e5913818&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 bg-white/10 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-sky-300 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hostel Rules</h4>
            <ul className="space-y-2 text-slate-400">
              {rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex gap-2">
                <Phone className="mt-1 h-4 w-4 text-sky-300" />
                <span>+977 9809672987</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-1 h-4 w-4 text-sky-300" />
                <span>Bajrang Chowk, Janakpur, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} PickYourHostel.com.</p>
        </div>
      </div>
    </footer>
  );
}
