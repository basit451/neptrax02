import { Shield, Lock, Info } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold text-[#f1f5f9] mb-4"
          >
            Privacy & Security
          </h1>
          <p className="text-[#94a3b8] text-lg">
            Your privacy and security are our top priorities
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Shield className="text-[#f1f5f9]" size={24} />
              </div>
              <h2
                className="text-2xl font-bold text-[#f1f5f9]"
              >
                Privacy Policy
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                At Neptrax, we respect your privacy and are committed to protecting your personal information.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Data Collection:</strong> We only collect data that you provide through our contact form, including your name, email address, and message content. We do not use tracking cookies or third-party analytics tools that compromise your privacy.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Data Usage:</strong> Your information is used solely to respond to your inquiries and provide the services you request. We will never share, sell, or distribute your information to third parties without your explicit consent.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Data Storage:</strong> All submitted data is stored securely using industry-standard encryption and security practices. We retain your information only as long as necessary to fulfill the purposes outlined above.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Your Rights:</strong> You have the right to request access to, correction of, or deletion of your personal information at any time. Simply contact us and we'll honor your request promptly.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Lock className="text-[#f1f5f9]" size={24} />
              </div>
              <h2
                className="text-2xl font-bold text-[#f1f5f9]"
              >
                Security Policy
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                We take security seriously and implement multiple layers of protection to safeguard your information.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Data Encryption:</strong> All data transmitted to and from our website is encrypted using industry-standard SSL/TLS protocols, ensuring secure communication between your browser and our servers.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Secure Hosting:</strong> Our website and databases are hosted on secure, professionally managed infrastructure with regular security updates, monitoring, and backup procedures.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Access Control:</strong> We maintain strict access controls to ensure that only authorized personnel can access sensitive data, and all access is logged and monitored.
              </p>
              <p>
                <strong className="text-[#f1f5f9]">Regular Audits:</strong> We conduct regular security audits and vulnerability assessments to identify and address potential security risks proactively.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] rounded-2xl p-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f1f5f9]/10 flex items-center justify-center flex-shrink-0">
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
