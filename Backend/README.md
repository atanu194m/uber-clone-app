# 🚗 Uber Clone — Backend

A robust **Node.js + Express** REST API backend for an Uber-like ride-hailing application. It supports real-time communication via **Socket.IO**, authentication via **JWT**, and location services via **Google Maps API**.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB + Mongoose** | Database & ODM |
| **Socket.IO** | Real-time communication |
| **JWT** | Authentication tokens |
| **bcrypt** | Password hashing |
| **Google Maps API** | Geocoding, Distance, Autocomplete |
| **express-validator** | Input validation |
| **dotenv** | Environment variables |
| **cookie-parser** | Cookie handling |
| **cors** | Cross-origin requests |
| **nodemon** | Dev auto-restart |

---

## 📁 Folder Structure

```
Backend/
├── controllers/
│   ├── user.controller.js       # User register, login, profile, logout
│   ├── captain.controller.js    # Captain register, login, profile, logout
│   ├── map.controller.js        # Coordinates, distance, autocomplete
│   └── ride.controller.js       # Create, confirm, start, end ride
├── middlewares/
│   └── auth.middleware.js       # JWT auth for user & captain
├── models/
│   ├── user.model.js            # User schema
│   ├── captain.model.js         # Captain schema (with vehicle info)
│   └── ride.model.js            # Ride schema
├── routes/
│   ├── user.routes.js           # /users/*
│   ├── captain.routes.js        # /captains/*
│   ├── maps.routes.js           # /maps/*
│   └── ride.routes.js           # /rides/*
├── services/
│   ├── user.service.js          # User DB operations
│   ├── captain.service.js       # Captain DB operations
│   └── maps.service.js          # Google Maps API calls
├── db/
│   └── db.js                    # MongoDB connection
├── socket.js                    # Socket.IO initialization & events
├── app.js                       # Express app setup
├── server.js                    # HTTP server entry point
├── .env                         # Environment variables
└── package.json
```

---

## ⚙️ Environment Variables

`.env` file mein ye variables set karo:

```env
PORT=4000
DB_CONNECT=mongodb://localhost:27017/uber-clone
JWT_SECRET=your_jwt_secret_key
GOOGLE_MAPS_API=your_google_maps_api_key
```

---

## 🚀 Getting Started

```bash
# 1. Backend folder mein jao
cd Backend

# 2. Dependencies install karo
npm install

# 3. Development server start karo
npm run dev

# 4. Production server start karo
npm start
```

Server chalega: **`http://localhost:4000`**

---

## 📡 API Endpoints

### 👤 User Routes — `/users`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/users/register` | ❌ | Naya user register karo |
| `POST` | `/users/login` | ❌ | User login |
| `GET` | `/users/profile` | ✅ | User profile dekho |
| `GET` | `/users/logout` | ✅ | User logout |

#### POST `/users/register` — Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secret123"
}
```

#### POST `/users/login` — Request Body
```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

---

### 🚖 Captain Routes — `/captains`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/captains/register` | ❌ | Naya captain register karo |
| `POST` | `/captains/login` | ❌ | Captain login |
| `GET` | `/captains/profile` | ✅ | Captain profile dekho |
| `GET` | `/captains/logout` | ✅ | Captain logout |

#### POST `/captains/register` — Request Body
```json
{
  "fullname": {
    "firstname": "Ali",
    "lastname": "Khan"
  },
  "email": "ali@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "Black",
    "plate": "MH01AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

> Vehicle types: `car` | `motorcycle` | `auto`

---

### 🗺️ Maps Routes — `/maps`

> All routes require **User Auth Token**

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/maps/get-coordinates?address=` | Address se lat/lng lo |
| `GET` | `/maps/get-distance-time?origin=&destination=` | Distance & time lo |
| `GET` | `/maps/get-suggestions?input=` | Autocomplete suggestions |

---

### 🚗 Ride Routes — `/rides`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/rides/create` | 👤 User | Nayi ride create karo |
| `GET` | `/rides/get-fare?pickup=&destination=` | 👤 User | Fare calculate karo |
| `POST` | `/rides/confirm` | 🚖 Captain | Ride accept karo |
| `GET` | `/rides/start-ride?rideId=&otp=` | 🚖 Captain | OTP verify karke ride shuru karo |
| `POST` | `/rides/end-ride` | 🚖 Captain | Ride complete karo |

#### POST `/rides/create` — Request Body
```json
{
  "pickup": "Connaught Place, Delhi",
  "destination": "India Gate, Delhi",
  "vehicleType": "car"
}
```

---

## 🔌 Socket.IO Events

### Client → Server

| Event | Data | Description |
|---|---|---|
| `join` | `{ userId, userType }` | User/Captain socket register karo |
| `update-location-captain` | `{ userId, location: { ltd, lng } }` | Captain live location update |

### Server → Client

| Event | Description |
|---|---|
| `new-ride` | Captain ko naya ride request |
| `ride-confirmed` | User ko ride confirm notification |
| `ride-started` | Ride shuru hone ka notification |
| `ride-ended` | Ride khatam hone ka notification |

---

## 🗄️ Database Models

### User Model
```
fullname: { firstname, lastname }
email (unique)
password (hashed, hidden by default)
socketId
```

### Captain Model
```
fullname: { firstname, lastname }
email (unique)
password (hashed, hidden by default)
socketId
status: active | inactive
vehicle: { color, plate, capacity, vehicleType }
location: { ltd, lng }
```

### Ride Model
```
user (ref: User)
captain (ref: Captain)
pickup
destination
fare
status: pending | accepted | ongoing | completed | cancelled
duration (seconds)
distance (meters)
otp (hidden by default)
paymentID, orderId, signature
```

---

## 🔐 Authentication Flow

1. User/Captain register ya login karta hai
2. Server **JWT token** generate karta hai (24h expiry)
3. Token **cookie** mein store hoti hai
4. Protected routes mein `auth.middleware.js` token verify karta hai

---

## 📦 Scripts

```bash
npm run dev    # nodemon se development server
npm start      # production server
```

