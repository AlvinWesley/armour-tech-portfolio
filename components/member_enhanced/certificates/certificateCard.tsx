'use client';

import { Certificate } from '@/types/certificates';
import { motion } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  Shield, 
  CheckCircle,
  Clock,
  Hash,
  Building,
  Medal,
  Scroll,
  Stamp,
  Ribbon,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

// Elegant color schemes for different certificate levels
const colorSchemes = {
  beginner: {
    seal: 'from-blue-400/20 to-blue-600/20',
    border: 'border-blue-500/30',
    badge: 'bg-blue-600',
    text: 'text-blue-300',
    accent: 'blue-400',
    ribbon: 'from-blue-600 to-blue-700'
  },
  intermediate: {
    seal: 'from-green-400/20 to-green-600/20',
    border: 'border-green-500/30',
    badge: 'bg-green-600',
    text: 'text-green-300',
    accent: 'green-400',
    ribbon: 'from-green-600 to-green-700'
  },
  advanced: {
    seal: 'from-amber-400/20 to-amber-600/20',
    border: 'border-amber-500/30',
    badge: 'bg-amber-600',
    text: 'text-amber-300',
    accent: 'amber-400',
    ribbon: 'from-amber-600 to-amber-700'
  },
  expert: {
    seal: 'from-purple-400/20 to-purple-600/20',
    border: 'border-purple-500/30',
    badge: 'bg-purple-600',
    text: 'text-purple-300',
    accent: 'purple-400',
    ribbon: 'from-purple-600 to-purple-700'
  }
};

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  const colors = colorSchemes[certificate.level];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Certificate Card - Premium Parchment Style */}
      <div className={`
        relative bg-gradient-to-br from-amber-50 to-amber-100/90
        rounded-lg border-2 ${colors.border}
        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]
        overflow-hidden
      `}>
        
        {/* Premium Paper Texture */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay'
          }}
        />

        {/* Decorative Golden Border Pattern */}
        <div className="absolute inset-2 border border-amber-300/30 rounded" />
        <div className="absolute inset-3 border border-amber-200/20 rounded" />
        
        {/* Ornate Corner Accents - More realistic */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600/40 rounded-tl" />
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/30 rounded-tl" />
        </div>
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600/40 rounded-tr" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr" />
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16">
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600/40 rounded-bl" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/30 rounded-bl" />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600/40 rounded-br" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/30 rounded-br" />
        </div>

        {/* Main Content */}
        <div className="relative p-7 z-10">
          {/* Header with Seal and Ribbon Effect */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              {/* Level Badge - More like a ribbon */}
              <div className="inline-flex items-center gap-1.5 mb-2">
                <div className={`h-4 w-8 ${colors.ribbon} rounded-l-full`} />
                <span className={`text-xs font-serif italic ${colors.text}`}>
                  {certificate.level.charAt(0).toUpperCase() + certificate.level.slice(1)} Level
                </span>
                <div className={`h-4 w-8 ${colors.ribbon} rounded-r-full`} />
              </div>
              
              {/* Certificate Title - Elegant serif font */}
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-1 leading-tight">
                {certificate.cert_name}
              </h3>
              
              {/* Provider */}
              <div className="flex items-center gap-1.5 text-gray-600">
                <Building className="w-3.5 h-3.5 text-amber-600/60" />
                <span className="text-xs font-medium">{certificate.cert_provider}</span>
              </div>
            </div>

            {/* Official Seal/Wax Seal Effect */}
            <div className="relative">
              <div className={`
                w-14 h-14 rounded-full bg-gradient-to-br ${colors.seal}
                border-2 border-amber-600/30 flex items-center justify-center
                shadow-inner
              `}>
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-600/20">
                  <Stamp className={`w-5 h-5 text-amber-700`} />
                </div>
              </div>
              {/* Verification Star */}
              {certificate.is_valid && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center ring-2 ring-amber-50">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          </div>

          {/* Description with decorative quotes */}
          <div className="relative mb-4">
            <span className="absolute -top-2 -left-1 text-3xl text-amber-600/20 font-serif">"</span>
            <p className="text-gray-700 text-xs leading-relaxed px-3 italic">
              {certificate.cert_description}
            </p>
            <span className="absolute -bottom-4 -right-1 text-3xl text-amber-600/20 font-serif">"</span>
          </div>

          {/* Skills Covered - Like gold embossing */}
          <div className="mb-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Ribbon className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-serif font-bold text-gray-700 uppercase tracking-wider">
                Competencies
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skills_covered.slice(0, 3).map((skill) => (
                <span 
                  key={skill}
                  className="px-2 py-1 bg-amber-100/80 rounded text-xs font-medium text-gray-700 border border-amber-200/50 shadow-sm"
                >
                  {skill}
                </span>
              ))}
              {certificate.skills_covered.length > 3 && (
                <span className="px-2 py-1 bg-amber-100/80 rounded text-xs font-medium text-gray-700 border border-amber-200/50">
                  +{certificate.skills_covered.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Certificate Details Grid - Like fine print */}
          <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-amber-50/80 rounded border border-amber-200/50">
            <div className="flex items-start gap-2">
              <Calendar className="w-3.5 h-3.5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Issued</p>
                <p className="text-xs font-serif font-medium text-gray-800">
                  {new Date(certificate.issue_date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            
            {certificate.expiry_date ? (
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Valid Until</p>
                  <p className="text-xs font-serif font-medium text-gray-800">
                    {new Date(certificate.expiry_date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Status</p>
                  <p className="text-xs font-serif font-medium text-green-700">Lifetime Achievement</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-2 col-span-2">
              <Hash className="w-3.5 h-3.5 text-amber-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Credential ID</p>
                <p className="text-xs font-mono text-gray-700 bg-amber-100/50 px-2 py-1 rounded border border-amber-200/50">
                  {certificate.credential_id}
                </p>
              </div>
            </div>
          </div>

          {/* Verification Button - Like an embossed seal */}
          {certificate.credential_url && (
            <Link href={certificate.credential_url} target="_blank">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-[70%] group relative overflow-hidden"
              >
                {/* Button Background with depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-900 rounded" />
                <div className="absolute inset-[1px] bg-gradient-to-r from-amber-700 to-amber-800 rounded" />
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-2 py-2.5 px-4">
                  <Shield className="w-4 h-4 text-amber-200" />
                  <span className="text-sm font-serif font-medium text-amber-50">
                    Verify Authenticity
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-300/70" />
                </div>
                
                {/* Gold shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -translate-x-full group-hover:translate-x-full" />
              </motion.button>
            </Link>
          )}
        </div>

        {/* Embossed Watermark */}
        <div className="absolute bottom-2 right-2 opacity-10">
          <Award className="w-20 h-20 text-amber-800" />
        </div>

        {/* Decorative bottom border with text */}
        <div className="absolute bottom-1 left-0 right-0 text-center">
          <span className="text-[8px] text-amber-600/30 font-serif uppercase tracking-[0.3em]">
            ✦ Official Document ✦
          </span>
        </div>
      </div>
    </motion.div>
  );
}