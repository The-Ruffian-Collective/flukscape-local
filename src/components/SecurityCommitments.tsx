import { Shield, Lock, Eye, Server } from 'lucide-react';

const commitments = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Your travel data is encrypted and secured using industry-standard protocols'
  },
  {
    icon: Lock,
    title: 'Private by Default',
    description: 'We never share your personal information with third parties without consent'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear, simple privacy policies with no hidden terms or conditions'
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Built on enterprise-grade cloud infrastructure with 24/7 monitoring'
  }
];

export function SecurityCommitments() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Your Privacy Matters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take your privacy seriously. Our commitment to security means you can focus on planning your next adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white/50 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
                <commitment.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2">{commitment.title}</h3>
              <p className="text-gray-600 text-sm">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
