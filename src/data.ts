export interface Experience {
  id: number;
  title: string;
  description: string;
  type: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  images: string[];
}

export const experiences: Experience[] = [
  { id: 1, title: 'Secretary of OSIS', description: 'Managing central administration and internal school coordination.', type: 'secretary' },
  { id: 2, title: 'Secretary of Fr.Artz 2026', description: 'Handling administration and documentation for the 12th-grade practical exam art exhibition.', type: 'secretary' },
  { id: 3, title: 'Secretary of LDKS', description: 'Handling documentation and leadership training logistics.', type: 'secretary' },
  { id: 4, title: 'Treasurer & Group Mentor in OPK 2024', description: 'Managing financial reports and guiding scout groups.', type: 'treasurer' },
  { id: 5, title: 'Security Section in OPK 2025', description: 'Ensuring safety and discipline during scout orientation.', type: 'security' },
  { id: 6, title: 'Treasurer & Games Section in KKP 2025', description: 'Managing budget while designing leadership activities.', type: 'treasurer' },
  { id: 7, title: 'Games Section in KKP 2026', description: 'Creating and coordinating strategic team-building games.', type: 'games' },
  { id: 8, title: 'Secretary of Frateran Cup', description: 'Leading the administrative workflow and scheduling for the major school event.', type: 'secretary' },
  { id: 9, title: 'Secretary & Mentor for MPLS 2026', description: 'Organizing orientation logistics and mentoring new students.', type: 'secretary' }
];

export const skills = [
  'Organizational Leadership & Strategic Planning',
  'Administrative & Secretarial Excellence',
  'Financial Management & Bookkeeping (Treasury)',
  'Event Coordination & Games Design',
  'Public Speaking, Mentoring, & Basic Video Editing'
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'School Event Management',
    description: 'Administrative and secretarial hub for Frateran Cup, MPLS 2026, and Fr.Artz 2026.',
    category: 'Event',
    images: ['/uploads/school.jpeg',]
  },
  {
    id: 2,
    title: 'Organizational Leadership',
    description: 'Strategic planning and financial reports for OSIS, LDKS, and Scout activities (OPK/KKP).',
    category: 'Leadership',
    images: ['/uploads/organi.jpeg']
  },
  {
    id: 3,
    title: 'Personal Documentation',
    description: 'Video projects and photos capturing my hiking journeys and musical inspirations.',
    category: 'Personal',
    images: ['/uploads/personal.jpeg']
  }
];
