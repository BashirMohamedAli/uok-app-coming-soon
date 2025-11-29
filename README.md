# University of Kabridahar - Beta Testing Landing Page

A clean, modern landing page to collect Gmail addresses for Google Play Store beta testing.

## Features

- ✅ Clean, modern design with improved UX
- ✅ Mobile-responsive layout
- ✅ Gmail address validation
- ✅ Email notifications for beta testers
- ✅ Progress tracking for beta tester goal (12 testers)
- ✅ SEO optimized
- ✅ Light theme only (matches mobile app theme)

## Setup

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Environment Variables

Copy the example environment file:

```bash
cp env.example .env.local
```

Then edit `.env.local` and add your Gmail credentials:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Get Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Step Verification if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Generate a new app password for "Mail"
5. Copy the 16-character password and use it as `GMAIL_APP_PASSWORD`

### 4. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Design

The landing page uses the UOK mobile app color scheme:
- **Primary**: `#137fec` (Blue)
- **Background**: `#f6f7f8` (Light gray)
- **Text**: `#0f172a` (Dark slate)
- **Light theme only** - No dark mode

## Project Structure

```
university-coming-soon-page/
├── app/
│   ├── api/subscribe/     # Email subscription API
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Main page
├── components/
│   ├── coming-soon.tsx    # Main landing component
│   └── subscription-form.tsx  # Email form component
└── public/                # Static assets (logo, favicon)
```

## Requirements

- Node.js 18+ 
- Gmail account with App Password
- At least 12 Gmail addresses needed for Google Play Store closed testing

## License

Private - University of Kabridahar

