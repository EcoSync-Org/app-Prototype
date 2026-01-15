# EcoSync - Admin Dashboard

Rwanda's first AI-powered sustainability platform - Web Admin Portal

## 🌿 Overview

EcoSync is a comprehensive platform that transforms students from eco-learners to eco-leaders by connecting smart home energy optimization with gamified, verified environmental action. This repository contains the **Web Admin Dashboard** for managing the EcoSync ecosystem.

## ✨ Features

### 🎯 Core Functionality
- **Dashboard Overview** - Real-time metrics and analytics
- **Verification Queue** - Manual review and approval of student submissions
- **School Management** - Manage schools and track performance
- **Student Management** - Monitor student engagement and achievements
- **Challenge Management** - Create and manage eco-challenges
- **Impact Analytics** - Comprehensive environmental impact tracking
- **CSV Export** - Download reports for stakeholders

### 🎨 Design Highlights
- Modern, minimalistic UI with blue and white color scheme
- Responsive design for all screen sizes
- Beautiful data visualizations with Recharts
- Accessible components built with Radix UI
- Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecosync.git
cd ecosync
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Default Login (Demo)
- **Email:** admin@ecosync.rw
- **Password:** Any password (demo mode)

## 📁 Project Structure

```
ecosync/
├── app/
│   ├── dashboard/          # Dashboard pages
│   │   ├── analytics/      # Impact analytics
│   │   ├── challenges/     # Challenge management
│   │   ├── schools/        # School management
│   │   ├── students/       # Student management
│   │   ├── verification/   # Verification queue
│   │   └── page.tsx        # Dashboard overview
│   ├── login/              # Authentication
│   └── layout.tsx          # Root layout
├── components/
│   ├── dashboard/          # Dashboard components
│   │   ├── header.tsx
│   │   └── sidebar.tsx
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── utils.ts            # Utility functions
│   └── export.ts           # CSV export utilities
└── public/                 # Static assets
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Charts:** Recharts
- **Icons:** Lucide React
- **State Management:** React Hooks

## 📊 Key Pages

### Dashboard Overview
- Real-time statistics (active students, submissions, verified actions)
- Weekly submission trends
- Environmental impact visualization
- Top-performing schools

### Verification Queue
- Manual submission review
- AI confidence scores
- Image verification
- Approve/reject workflow with reasons

### School Management
- Add/edit schools
- Track school performance
- Monitor student enrollment
- View contact information

### Student Management
- Student roster with rankings
- Individual performance metrics
- Engagement tracking
- Filter by school/district

### Challenge Management
- Create eco-challenges
- Set point values and impact metrics
- Track participation and completion rates
- Manage active/inactive status

### Impact Analytics
- Monthly impact trends (energy, water, waste)
- District performance comparison
- Challenge type distribution
- School performance radar charts
- Weekly verification trends
- Export reports to CSV

## 🎨 Design System

### Colors
- **Primary:** Blue (#2563eb)
- **Success:** Green (#10b981)
- **Warning:** Orange (#f59e0b)
- **Destructive:** Red (#ef4444)
- **Background:** White (#ffffff)
- **Muted:** Slate gray (#f1f5f9)

### Typography
- **Font Family:** Geist Sans (primary), Geist Mono (code/data)
- **Font Sizes:** Tailwind's default scale
- **Font Weights:** Medium (500), Semibold (600), Bold (700)

## 🔐 Authentication (Future)

The current version uses demo authentication. In production, this will be replaced with:
- JWT-based authentication
- Role-based access control (Super Admin, School Admin, District Admin)
- Secure password hashing
- Session management

## 📡 API Integration (Future)

The dashboard currently uses mock data. Future integration points:
- `/api/auth` - Authentication endpoints
- `/api/dashboard` - Dashboard statistics
- `/api/submissions` - Student submissions
- `/api/schools` - School management
- `/api/students` - Student data
- `/api/challenges` - Challenge management
- `/api/analytics` - Analytics data

## 🌍 Deployment

### Netlify (Recommended)
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

### Vercel
1. Import your repository to Vercel
2. Vercel auto-detects Next.js configuration
3. Deploy!

## 📝 Environment Variables (Future)

```env
NEXT_PUBLIC_API_URL=https://api.ecosync.rw
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
```

## 🤝 Contributing

This is a pilot project for EcoSync. For contributions or questions, please contact the EcoSync team.

## 📄 License

Copyright © 2026 EcoSync. All rights reserved.

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Advanced analytics filters
- [ ] Multi-language support (Kinyarwanda, English, French)
- [ ] Mobile-responsive improvements
- [ ] Ministry-level dashboards
- [ ] Campaign automation
- [ ] REG integration for real-time energy data

## 📞 Support

For support, email admin@ecosync.rw or contact the EcoSync team.

---

**Built with 💚 for Rwanda's sustainable future**
