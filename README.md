# Ottobon Platform Frontend

This is the React frontend for the Ottobon Platform.

## Architecture

The frontend is built using:
- **React (Vite)** for the core framework.
- **Tailwind CSS** for styling, utilizing a custom design system for premium enterprise aesthetics.
- **React Router v6** for routing.

### Authentication & Routing

We use a completely **stateless routing architecture** to achieve maximum scalability.

1. **AuthContext:** The `AuthContext` stores the user's JWT token and decoded `user` object.
2. **JWT-Embedded Roles:** When a user logs in, the backend sends back their `WorkspaceMemberships` embedded in the response. We store this in the frontend context.
3. **Dynamic Routing (`SignIn.tsx` / `SetPassword.tsx`):**
   Upon login, the application instantly reads the user's workspace memberships in memory to route them:
   - If they have a membership to an `OTTOBON` workspace, they are routed to the **Admin Dashboard**.
   - If they have an `ORGANIZATION` workspace that is `PENDING_REVIEW`, they are routed to the **Under Review** screen.
   - If their `ORGANIZATION` is `ACTIVE`, they are routed to their **Organization Dashboard**.

### Protected Routes

We use strict wrapper components to protect routes:
- `<ProtectedRoute>`: Ensures the user has a valid session.
- `<AdminRoute>`: Ensures the user specifically holds an `OTTOBON` workspace membership. If they do not, they are redirected to `/access-denied`.

## Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```
