// data/organizationMembers.ts

import { OrganizationMember } from "@/types/contactType";


export const organizationMembers: OrganizationMember[] = [
  {
    id: 'indiazi_alvin_wesley',
    first_name: 'Indiazi',
    last_name: 'Alvin',
    member_title: 'Full Stack Developer ',
    about: '',
    nationality: 'Kenyan',
    gender: 'male',
    organization_id: 'org-001',
    is_active: true,
    expertise_areas: [
      'Backend Design',
      'Next.js',
      'Java Script',
      'MySQL',
      'Api Design',
      'Front End Design'
    ],
    contacts: [
      {
        id: 'contact-006',
        template_id: 'email',
        member_id: 'indiazi_alvin_wesley',
        user_name: 'indiazialvin8@gmail.com',
        hyperlink: 'mailto:indiazialvin8@gmail.com',
        contact_availability: 'weekdays',
        availability_time_interval: {
          from: '10:00 AM',
          to: '4:00 PM'
        },
        is_active: true,
        created_at: '2024-01-01',
        updated_at: '2024-01-01'
      },
      {
        id: 'contact-007',
        template_id: 'linkedin',
        member_id: 'indiazi_alvin_wesley',
        user_name: 'alvin_indiazi',
        hyperlink: 'inkedin.com/in/alvin-indiazi-56b2b2265',
        contact_availability: 'alltime',
        is_active: true,
        created_at: '2026-01-01',
        updated_at: '2026-01-01'
      },
      {
        id: 'contact-008',
        template_id: 'website',
        member_id: 'indiazi_alvin_wesley',
        user_name: 'indiazi_alvin',
        hyperlink: 'https://mour-tech-portfolio.vercel.app',
        contact_availability: 'alltime',
        is_active: true,
        created_at: '2025-01-01',
        updated_at: '2025-01-01'
      },
    ]
  }
];