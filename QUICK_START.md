# 🚀 Quick Start Guide - Admin Portal

## TL;DR - Get Admin Portal Running in 3 Steps

### Step 1: Backend Setup (2 minutes)
```bash
# Terminal 1 - Start Backend
cd barbersBookServer
npm install
node scripts/set-admin.js edward.nardo@gmail.com
npm run dev
```

### Step 2: Frontend Setup (1 minute)
```bash
# Terminal 2 - Start Frontend
cd barbersBookMarketing
npm install
npm run dev
```

### Step 3: Access Admin Portal
1. Open browser: `http://localhost:5173/admin/login`
2. Login with: `edward.nardo@gmail.com` and your password
3. Done! 🎉

---

## Production Deployment

### Backend (One-time setup)
```bash
cd barbersBookServer
NODE_ENV=production node scripts/set-admin.js edward.nardo@gmail.com
```

### Frontend
1. Update `.env`:
   ```
   VITE_API_URL=https://your-production-api.com
   ```
2. Build and deploy:
   ```bash
   npm run build
   # Deploy dist/ folder
   ```

### Access Production Admin
Navigate to: `https://your-domain.com/admin/login`

---

## What You Get

### 📊 Dashboard
- Platform overview with 8 key metrics
- Subscription breakdown
- Real-time stats

### 👥 User Management
- Search, filter, paginate users
- Edit subscriptions
- Grant/revoke admin access
- View detailed user profiles

### 🏪 Shop Management
- View all shops
- Owner information
- Waitlist statistics

### 📈 Analytics
- Revenue trends (7d/30d/90d)
- User growth charts
- Detailed data tables

---

## Admin Routes (Hidden from Public)

- `/admin/login` - Admin login page
- `/admin/dashboard` - Stats overview
- `/admin/users` - User management
- `/admin/users/:id` - User detail
- `/admin/shops` - Shop management
- `/admin/analytics` - Platform analytics

**Note**: No links to admin portal exist on the public marketing site.

---

## Troubleshooting

**Can't login?**
- Verify backend is running on port 4000
- Check `edward.nardo@gmail.com` exists in database
- Re-run: `node scripts/set-admin.js edward.nardo@gmail.com`

**403 Forbidden?**
- User is not an admin
- Run the set-admin script

**Can't connect to API?**
- Check `VITE_API_URL` in `.env`
- Verify backend is running

---

## Security Notes

✅ Admin-only routes protected by JWT + isAdmin check  
✅ No public references to admin portal  
✅ Automatic logout on unauthorized access  
✅ Backend validates admin status on every request  

---

## Need Help?

See full documentation:
- [ADMIN_SETUP.md](ADMIN_SETUP.md) - Detailed setup instructions
- [ADMIN_IMPLEMENTATION.md](/Users/ednardo/ADMIN_IMPLEMENTATION.md) - Complete implementation details

---

**You're all set! Happy administrating! 🎊**
