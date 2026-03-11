'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Calendar, 
  Users, 
  Code2,
  Smartphone,
  Globe,
  Gamepad2,
  Terminal,
  Library,
  Box,
  Users2,
  User,
  Medal,
  Clock,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticProject, ProjectType } from '@/types/projects';

// Map project types to icons
const ProjectTypeIcon: Record<ProjectType, any> = {
  web: Globe,
  android: Smartphone,
  ios: Smartphone,
  windows: Box,
  cross_platform: Smartphone,
  command_line: Terminal,
  gaming: Gamepad2,
  library: Library
};

interface ProjectCardProps {
  project: StaticProject;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const TypeIcon = ProjectTypeIcon[project.project_type] || Code2;
  
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <motion.div
      className="relative group w-full max-w-sm mx-auto overflow-hidden cursor-pointer"
      style={{
        borderRadius: 30,
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Card Container */}
      <div className="relative h-[380px] w-full overflow-hidden bg-black">
        {/* Background Image with subtle overlay */}
        <Image
          src={project.display_photo_url}
          alt={project.project_name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Stronger gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        {/* Subtle white accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Category Badge - Black & White Theme */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border ${
            project.category === 'group' 
              ? 'bg-white/10 text-white border-white/20' 
              : 'bg-white/10 text-white border-white/20'
          }`}>
            {project.category === 'group' ? (
              <Users2 className="w-3.5 h-3.5" />
            ) : (
              <User className="w-3.5 h-3.5" />
            )}
            <span>{project.category === 'group' ? 'Group' : 'Personal'}</span>
          </div>
        </div>

        {/* Contribution Badge - Black & White Theme */}
        {project.category === 'group' && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
              <Medal className="w-3.5 h-3.5" />
              <span>{project.contribution_percentage}%</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          {/* Project Type Icon & Name */}
          <motion.div 
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
              <TypeIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-white/60 uppercase tracking-wider">
              {project.project_type.replace('_', ' ')}
            </span>
          </motion.div>

          {/* Project Name */}
          <motion.h3 
            className="text-2xl font-bold text-white mb-2 line-clamp-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.project_name}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-sm text-white/70 mb-3 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.project_description}
          </motion.p>

          {/* Technologies */}
          <motion.div 
            className="flex flex-wrap gap-1.5 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-md text-xs text-white/80 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-md text-xs text-white/80 flex items-center gap-1 border border-white/10">
                <Layers className="w-3 h-3" />
                <span>+{project.technologies.length - 3}</span>
              </span>
            )}
          </motion.div>

          {/* Metadata Row - Reorganized for better layout */}
          <motion.div 
            className="flex items-center justify-between mb-3 text-xs text-white/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(project.date_started)}</span>
              </div>
              {project.team_members && (
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>{project.team_members.length}</span>
                </div>
              )}
            </div>
            
            {/* Status Badge - Black & White Theme */}
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${
              project.date_completed 
                ? 'bg-white/10 text-white border-white/20' 
                : 'bg-white/10 text-white border-white/20'
            }`}>
              <Clock className="w-3 h-3" />
              <span>{project.date_completed ? 'Done' : 'Active'}</span>
            </div>
          </motion.div>

          {/* Action Buttons - COMPLETELY REDESIGNED with Black/White Theme */}
          <motion.div 
            className="flex gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {project.github_url && (
              <Link 
                href={project.github_url}
                target="_blank"
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300 border border-white/30 hover:bg-white hover:text-black hover:border-white group"
                >
                  <Github className="w-4 h-4 transition-colors duration-300 group-hover:text-black" />
                  <span>Code</span>
                </motion.button>
              </Link>
            )}
            
            {project.project_url && (
              <Link 
                href={project.project_url}
                target="_blank"
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white text-black rounded-lg text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white border border-white hover:border-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </motion.button>
              </Link>
            )}

            {/* View Details Button - Black & White Theme */}
            {!project.github_url && !project.project_url && (
              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300 border border-white/30 hover:bg-white hover:text-black group"
              >
                <span>Details</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Hover Glow Effect - Subtle white glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[30px]"
        style={{
          boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.15)'
        }}
      />
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}