# Payman AI - Expert Support Platform

## Project Overview
Payman AI is a platform that connects AI tool users to human experts when they get stuck. Think "instant expert help for when AI fails" - users pay $5 for 5-minute expert sessions.

## Features

### Expert Dashboard
- ✅ Real-time task queue with skill-based routing
- ✅ Status management (Available/Busy/Break)
- ✅ WebRTC video session interface
- ✅ Daily performance tracking
- ✅ Live task updates via WebSocket

### Admin Dashboard
- ✅ System overview and metrics
- ✅ Expert status monitoring
- ✅ Task routing and manual assignment
- ✅ Performance analytics
- ✅ System health monitoring

### Core Components
- ✅ Task queue management
- ✅ Expert-task matching system
- ✅ Video calling interface
- ✅ Real-time status updates

## Tech Stack

- **Frontend**: Next.js 14, React/TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: NextAuth.js (ready for integration)
- **Real-time**: Socket.io client (WebSocket support)
- **Video**: WebRTC for browser-based sessions
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd parable-admin
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Application Routes

### Main Pages
- `/` - Landing page with platform overview
- `/login` - Expert authentication (demo accounts available)
- `/dashboard` - Expert dashboard (main expert interface)
- `/admin` - Admin dashboard (system monitoring)

### Demo Accounts
- **Expert Demo**: `expert@payman.ai` / `demo`
- **Admin Demo**: `admin@payman.ai` / `demo`

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── dashboard/       # Expert dashboard
│   ├── admin/          # Admin dashboard  
│   ├── login/          # Authentication
│   └── page.tsx        # Landing page
├── components/         # Reusable React components
│   ├── TaskQueue.tsx   # Expert task list
│   ├── StatusControl.tsx  # Expert status toggle
│   ├── SessionView.tsx # Video session interface
│   └── DailyStats.tsx  # Performance metrics
├── hooks/              # Custom React hooks
│   ├── useWebSocket.ts # Real-time connections
│   └── useWebRTC.ts    # Video calling
└── types/              # TypeScript definitions
    └── index.ts        # Core data models
```

## Key Features Implemented

### Expert Dashboard (`/dashboard`)
- Task queue showing skill-matched assignments
- One-click task acceptance
- Status control (Available/Busy/Break)
- WebRTC video session interface
- Daily performance statistics

### Admin Dashboard (`/admin`)
- Live system metrics (active experts, pending tasks)
- Expert status monitoring
- Task queue management with manual assignment
- System health indicators
- Quick action buttons

### Real-time Features
- WebSocket connections for live updates
- Task status changes propagated instantly
- Expert availability updates
- Session management

### Video Integration
- WebRTC peer-to-peer connections
- Video controls (mute, video toggle, screen share)
- Picture-in-picture layout for expert sessions
- Browser-based (no downloads required)

## Development Status

✅ **Phase 1 Complete**: Expert Dashboard MVP
- Expert login and authentication flow
- Real-time task queue with skill matching
- Status management system
- WebRTC session interface
- Basic performance tracking

🔄 **Next Steps**:
- Authentication integration (NextAuth.js)
- WebSocket server implementation
- Database integration (PostgreSQL)
- Production WebRTC signaling
- Payment integration

## Architecture Notes

### Expert-Centric Design
- Tasks are pre-filtered and routed to matching experts
- No marketplace browsing - experts only see relevant work
- Salaried employee model vs. freelancer marketplace

### 5-Minute Session Target
- UI optimized for quick problem resolution
- Minimal friction from task acceptance to video call
- Session timer and completion tracking

### Skill-Based Routing
- Tasks matched to expert capabilities
- Automatic routing when possible
- Manual assignment fallback for complex cases

## Deployment

The application is configured for Vercel deployment:

```bash
npm run build
```

Environment variables needed:
- `NEXTAUTH_SECRET` - Authentication secret
- `NEXTAUTH_URL` - Application URL
- `DATABASE_URL` - PostgreSQL connection
- `WEBSOCKET_URL` - Real-time server endpoint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Private - Payman AI Platform# parable-experts
