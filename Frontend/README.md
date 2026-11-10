# 🚗 Uber Clone — Frontend

A modern **React.js** frontend for an Uber-like ride-hailing app. Built with **Vite**, styled with **TailwindCSS**, and powered by **React Router** for navigation and **Axios** for API communication.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library |
| **Vite** | Fast build tool & dev server |
| **TailwindCSS** | Utility-first styling |
| **React Router DOM v6** | Client-side routing |
| **Axios** | HTTP API calls |
| **Context API** | Global state management |
| **Socket.IO Client** | Real-time communication |

---

## 📁 Folder Structure

```
Frontend/
├── public/                        # Static assets (images, icons)
├── src/
│   ├── assets/                    # Images, SVGs, fonts
│   ├── components/                # Reusable UI components
│   │   ├── CaptainDetails.jsx     # Captain info card (name, rating, vehicle)
│   │   ├── ConfirmRide.jsx        # User ride confirmation panel
│   │   ├── ConfirmRidePopUp.jsx   # Captain ke liye ride confirm popup
│   │   ├── FinishRide.jsx         # Captain ride complete panel
│   │   ├── LiveTracking.jsx       # Google Maps live tracking view
│   │   ├── LocationSearchPanel.jsx# Pickup/Destination search results
│   │   ├── LookingForDriver.jsx   # Driver dhundne ka loading panel
│   │   ├── RidePopUp.jsx          # Captain ko naya ride request popup
│   │   ├── VehiclePanel.jsx       # Vehicle type select panel (car/auto/moto)
│   │   └── WaitingForDriver.jsx   # Driver aaane ka wait panel
│   ├── context/                   # Global state (Context API)
│   │   ├── UserContext.jsx        # User auth state
│   │   └── CaptainContext.jsx     # Captain auth state
│   ├── pages/                     # Route-level page components
│   │   ├── Start.jsx              # Landing / splash screen
│   │   ├── UserLogin.jsx          # User login page
│   │   ├── UserSignup.jsx         # User registration page
│   │   ├── UserLogout.jsx         # User logout handler
│   │   ├── UserProtectWrapper.jsx # Protected route for users
│   │   ├── Home.jsx               # User home — ride booking
│   │   ├── Riding.jsx             # User active ride screen
│   │   ├── Captainlogin.jsx       # Captain login page
│   │   ├── CaptainSignup.jsx      # Captain registration page
│   │   ├── CaptainLogout.jsx      # Captain logout handler
│   │   ├── CaptainProtectWrapper.jsx # Protected route for captains
│   │   ├── CaptainHome.jsx        # Captain home — incoming rides
│   │   └── CaptainRiding.jsx      # Captain active ride screen
│   ├── App.jsx                    # Routes configuration
│   ├── App.css                    # Global styles
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind base imports
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── eslint.config.js               # ESLint rules
└── package.json
```

---

## 🚀 Getting Started

```bash
# 1. Frontend folder mein jao
cd Frontend

# 2. Dependencies install karo
npm install

# 3. Development server start karo
npm run dev
```

App chalegi: **`http://localhost:5173`**

---

## 📦 Scripts

```bash
npm run dev      # Vite dev server start karo
npm run build    # Production build banao (dist/ folder)
npm run preview  # Production build preview karo
```

---

## 🗺️ Pages & Routes

### 👤 User Flow

| Route | Page | Description |
|---|---|---|
| `/` | `Start.jsx` | Landing / splash screen |
| `/login` | `UserLogin.jsx` | User login form |
| `/signup` | `UserSignup.jsx` | User registration form |
| `/home` | `Home.jsx` | Ride booking screen *(Protected)* |
| `/riding` | `Riding.jsx` | Active ride tracking *(Protected)* |
| `/users/logout` | `UserLogout.jsx` | Logout & redirect |

### 🚖 Captain Flow

| Route | Page | Description |
|---|---|---|
| `/captain-login` | `Captainlogin.jsx` | Captain login form |
| `/captain-signup` | `CaptainSignup.jsx` | Captain registration form |
| `/captain-home` | `CaptainHome.jsx` | Incoming ride requests *(Protected)* |
| `/captain-riding` | `CaptainRiding.jsx` | Active ride management *(Protected)* |
| `/captains/logout` | `CaptainLogout.jsx` | Logout & redirect |

---

## 🧩 Components Guide

### `LocationSearchPanel`
Pickup aur destination search karne par suggestions dikhata hai.

### `VehiclePanel`
Teen vehicle options dikhata hai:
- 🚗 **Car** — 4 seats
- 🛵 **Motorcycle** — 1 seat  
- 🛺 **Auto** — 3 seats

Har option ke saath **fare estimate** dikhata hai.

### `ConfirmRide`
User selected vehicle confirm karta hai. Pickup, destination aur fare summary dikhata hai.

### `LookingForDriver`
Ride create hone ke baad driver dhundne ka animated loading screen.

### `WaitingForDriver`
Driver accept karne ke baad driver ka naam, photo, vehicle aur ETA dikhata hai.

### `RidePopUp`
Captain ke home screen pe naya ride request aata hai tab popup dikhata hai pickup/destination ke saath.

### `ConfirmRidePopUp`
Captain ride confirm karta hai aur OTP dikhata hai.

### `CaptainDetails`
Captain dashboard pe captain ki information — earnings, rating, online hours.

### `FinishRide`
Captain ride complete karne ke baad final screen.

### `LiveTracking`
Google Maps integration se real-time captain/user location tracking.

---

## 🔄 State Management (Context API)

### `UserContext`
```js
// Global user state
{
  user: { fullname, email, ... },
  setUser: fn
}
```

### `CaptainContext`
```js
// Global captain state
{
  captain: { fullname, email, vehicle, ... },
  setCaptain: fn
}
```

---

## 🔌 Real-time Features (Socket.IO)

Frontend Socket events:

| Event | Direction | Description |
|---|---|---|
| `join` | Send | App open hone par user/captain register |
| `update-location-captain` | Send | Captain live location update |
| `new-ride` | Receive | Captain ko naya ride request |
| `ride-confirmed` | Receive | User ko driver mila notification |
| `ride-started` | Receive | Ride shuru hone ka update |
| `ride-ended` | Receive | Ride complete hone ka update |

---

## 🔐 Protected Routes

`UserProtectWrapper` aur `CaptainProtectWrapper` check karte hain ki token valid hai ya nahi. Agar nahi hai toh login page pe redirect karte hain.

```jsx
<Route path='/home' element={
  <UserProtectWrapper>
    <Home />
  </UserProtectWrapper>
} />
```

---

## 🌐 API Integration

Backend se connect karne ke liye `axios` use hota hai:

```js
// Base URL set karo
axios.defaults.baseURL = 'http://localhost:4000';

// Example: User login
const response = await axios.post('/users/login', {
  email, password
});
```

---

## 🎨 Styling

TailwindCSS use hota hai. `index.css` mein:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

