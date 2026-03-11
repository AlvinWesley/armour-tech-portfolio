'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Filter, 
  Search, 
  Grid3x3, 
  LayoutGrid,
  Scroll,
  Medal,
  Star,
  Crown,
  Shield,
  Sparkles,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { certificatesData } from '@/data/certificatesData';
import { CertificateCard } from './certificateCard';

export default function CertificatesSection() {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  // Get unique levels for filter
  const levels = ['all', ...new Set(certificatesData.map(c => c.level))];

  // Filter certificates
  const filteredCertificates = useMemo(() => {
    return certificatesData.filter(cert => {
      if (filter !== 'all' && cert.level !== filter) return false;
      
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        return (
          cert.cert_name.toLowerCase().includes(term) ||
          cert.cert_description.toLowerCase().includes(term) ||
          cert.cert_provider.toLowerCase().includes(term) ||
          cert.skills_covered.some(skill => skill.toLowerCase().includes(term))
        );
      }
      
      return true;
    });
  }, [filter, searchTerm]);

  // Statistics
  const stats = {
    total: certificatesData.length,
    expert: certificatesData.filter(c => c.level === 'expert').length,
    advanced: certificatesData.filter(c => c.level === 'advanced').length,
    intermediate: certificatesData.filter(c => c.level === 'intermediate').length,
    beginner: certificatesData.filter(c => c.level === 'beginner').length,
    valid: certificatesData.filter(c => c.is_valid).length
  };

  // Level icons mapping
  const levelIcons = {
    beginner: Medal,
    intermediate: Star,
    advanced: Crown,
    expert: Shield
  };

  return (
    <section id="certificates" className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 px-4 md:px-8">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Elegant and certificate-like */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Decorative header accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/30" />
            <div className="flex items-center gap-3">
              <Scroll className="w-6 h-6 text-amber-500/70" />
              <span className="text-amber-500/70 text-sm font-serif tracking-[0.3em] uppercase">
                Credentials
              </span>
              <Scroll className="w-6 h-6 text-amber-500/70" />
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/30" />
          </div>

          {/* Main title with elegant styling */}
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 mb-4">
            Professional Certifications
          </h2>
          
          <p className="text-amber-200/70 text-lg max-w-2xl mx-auto font-light italic">
            Industry-recognized credentials validating expertise and commitment to excellence
          </p>

          {/* Decorative bottom line */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          </div>
        </motion.div>

        {/* Stats Bar - Like certificate seals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10"
        >
          {[
            { icon: Award, label: 'Total', value: stats.total, color: 'amber' },
            { icon: Shield, label: 'Expert', value: stats.expert, color: 'purple' },
            { icon: Crown, label: 'Advanced', value: stats.advanced, color: 'blue' },
            { icon: Star, label: 'Intermediate', value: stats.intermediate, color: 'green' },
            { icon: Medal, label: 'Beginner', value: stats.beginner, color: 'amber' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -2 }}
              className="group relative"
            >
              {/* Background with gold border */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-lg border border-amber-500/20" />
              
              {/* Content */}
              <div className="relative p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-full bg-${stat.color}-500/10 border border-${stat.color}-500/30`}>
                    <stat.icon className={`w-3.5 h-3.5 text-${stat.color}-400`} />
                  </div>
                  <span className={`text-${stat.color}-400/70 text-xs font-serif uppercase tracking-wider`}>
                    {stat.label}
                  </span>
                </div>
                <p className={`text-2xl font-serif font-bold text-${stat.color}-300`}>
                  {stat.value}
                </p>
                
                {/* Decorative corner accents */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-amber-500/30" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-amber-500/30" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-amber-500/30" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-amber-500/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Controls Bar - Elegant and understated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10"
        >
          {/* Level Filters - Like certificate ribbons */}
          <div className="flex gap-1 p-1 bg-amber-900/20 rounded-lg border border-amber-500/20 backdrop-blur-sm overflow-x-auto max-w-[99%]">
            {levels.map((level) => {
              const Icon = level === 'all' ? Filter : levelIcons[level as keyof typeof levelIcons] || Award;
              return (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-md capitalize whitespace-nowrap transition-all duration-300 group ${
                    filter === level
                      ? 'text-amber-900'
                      : 'text-amber-400/70 hover:text-amber-300'
                  }`}
                >
                  {/* Background for active state */}
                  {filter === level && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 rounded-md"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <Icon size={16} className={filter === level ? 'text-amber-900' : 'text-amber-400/70'} />
                    <span className="text-sm font-serif">{level}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Search Bar - Elegant */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search certificates or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-amber-900/10 border border-amber-500/20 rounded-lg text-amber-100 placeholder-amber-700/50 focus:outline-none focus:border-amber-400/50 transition-colors font-light"
            />
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/30" />
          </div>

          {/* View Toggle - Elegant */}
          <div className="flex gap-1 p-1 bg-amber-900/20 rounded-lg border border-amber-500/20 backdrop-blur-sm">
            {[
              { mode: 'grid', icon: Grid3x3 },
              { mode: 'compact', icon: LayoutGrid }
            ].map(({ mode, icon: Icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode as 'grid' | 'compact')}
                className={`relative p-2 rounded-md transition-all duration-300 ${
                  viewMode === mode ? 'text-amber-900' : 'text-amber-400/70 hover:text-amber-300'
                }`}
              >
                {viewMode === mode && (
                  <motion.div
                    layoutId="activeView"
                    className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 rounded-md"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <div className="relative">
                  <Icon size={16} />
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <AnimatePresence mode="wait">
          {filteredCertificates.length > 0 ? (
            <motion.div
              key="certificates"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`grid ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              }`}
            >
              {filteredCertificates.map((certificate, index) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative text-center py-20"
            >
              {/* Empty state with certificate styling */}
              <div className="absolute inset-0 bg-amber-900/5 rounded-2xl border border-amber-500/20" />
              
              <div className="relative">
                <div className="inline-flex p-4 bg-amber-900/20 rounded-full border border-amber-500/30 mb-6">
                  <Scroll className="w-12 h-12 text-amber-400/50" />
                </div>
                
                <p className="text-amber-200/70 text-lg mb-2 font-serif">
                  No certificates found
                </p>
                <p className="text-amber-400/50 text-sm">
                  Try adjusting your search or filter criteria
                </p>
                
                {/* Decorative corners */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/30 rounded-tl" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-500/30 rounded-tr" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber-500/30 rounded-bl" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/30 rounded-br" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer with counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-amber-900/10 rounded-full border border-amber-500/20">
            <Bookmark className="w-3.5 h-3.5 text-amber-400/70" />
            <span className="text-amber-200/70 text-sm font-serif">
              Showing {filteredCertificates.length} of {certificatesData.length} certificates
            </span>
            <Bookmark className="w-3.5 h-3.5 text-amber-400/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}