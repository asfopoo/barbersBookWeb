# Admin Portal Setup - BarbersBook

## Overview
The admin portal is built into the barbersBookMarketing site as a separate route with no public references. It provides comprehensive admin capabilities for managing the BarbersBook platform.

## Setup Instructions

### 1. Backend Setup (barbersBookServer)

#### Install Dependencies
```bash
cd barbersBookServer
npm install
```

#### Database Migration
The `isAdmin` field needs to be added to the users table. If using TypeORM synchronize in development, it will be added automatically. For production, you may need to manually add the column:

```sql
ALTER TABLE users ADD COLUMN is_admin BOOLEAN DEFAULT false;
```

#### Set Admin User
Run the script to grant admin access to edward.nardo@gmail.com:

```bash
# Development
cd barbersBookServer
node scripts/set-admin.js edward.nardo@gmail.com

# Production
cd barbersBookServer
NODE_ENV=production node scripts/set-admin.js edward.nardo@gmail.com
```

#### Start the Server
```bash
npm run dev
```

### 2. Frontend Setup (barbersBookMarketing)

#### Install Dependencies
```bash
cd barbersBookMarketing
npm install
```

#### Environment Variables
Create a `.env` file in the barbersBookMarketing directory:

```env
VITE_API_URL=http://localhost:4000
```

For production, update this to your production API URL.

#### Start the Dev Server
```bash
npm run dev
```

### 3. Access the Admin Portal

Navigate to: `http://localhost:5173/admin/login`

Login with your admin credentials (edward.nardo@gmail.com).

## Admin Features

### Dashboard
- Total users and active subscriptions
- Recent signups (last 30 days)
- Active shops count
- Total haircuts and revenue
- Subscription tier breakdown
- Waitlist statistics

### User Management
- View all users with pagination
- Search by email
- Filter by subscription tier and status
- View detailed user profiles
- Edit subscription tiers and statuses
- Grant/revoke admin access
- Reset export counts
- Soft delete users

### Shop Management
- View all shops with pagination
- Search shops by name
- Filter by active/inactive status
- View shop owner details
- See waitlist statistics per shop
- View shop subscription plans

### Analytics
- Daily revenue trends (7d, 30d, 90d)
- Total haircuts and average revenue per haircut
- User growth over last 12 months
- Revenue breakdown by date

## API Endpoints

All admin routes are protected by JWT authentication + admin check middleware.

Base URL: `/api/admin`

### Stats
- `GET /api/admin/stats` - Dashboard statistics

### Users
- `GET /api/admin/users` - List all users (paginated)
- `GET /api/admin/users/:id` - Get user details
- `PATCH /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Soft delete user

### Shops
- `GET /api/admin/shops` - List all shops (paginated)

### Analytics
- `GET /api/admin/analytics/revenue` - Revenue analytics
- `GET /api/admin/analytics/users` - User growth analytics
- `GET /api/admin/haircuts` - Haircut data (filtered)
- `GET /api/admin/expenses` - Expense data (filtered)

## Security Notes

1. **No Public References**: The admin portal has no links from the marketing home page
2. **Protected Routes**: All admin routes require JWT authentication + isAdmin flag
3. **Admin Middleware**: Backend validates admin status on every request
4. **Token Storage**: Admin tokens stored in localStorage
5. **Auto Logout**: Unauthorized requests (401) automatically logout and redirect to login

## Deployment

### Backend
Ensure the admin routes are included in your production build and the `isAdmin` column exists in your production database.

### Frontend
Set the production API URL in your environment variables:

```env
VITE_API_URL=https://your-api-domain.com
```

Build and deploy:
```bash
npm run build
```

The admin portal will be accessible at: `https://your-domain.com/admin/login`

## Maintenance

### Adding More Admins
Use the set-admin script:
```bash
node scripts/set-admin.js new-admin@example.com
```

### Removing Admin Access
Update the user directly in the database or create a remove-admin script:
```sql
UPDATE users SET is_admin = false WHERE email = 'user@example.com';
```

## Troubleshooting

### Can't Login
- Verify the user exists in the database
- Verify `isAdmin` is set to `true`
- Check API URL is correct in `.env`
- Check backend is running and accessible

### 403 Forbidden
- User does not have admin privileges
- Re-run the set-admin script

### Token Issues
- Clear localStorage and login again
- Check JWT_SECRET is consistent across restarts
