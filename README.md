## Project Description
**EventSphere** is a dynamic platform for planning, discovering, and managing events. Users can create events, register for them, and leave reviews, fostering an active community.

## 🔥 Key Features

### 🎉 Creating and Managing Events
- Fill out a form to create an event (React Hook Form).
- Validate data before submission (title, date, location, and description).
- Send event information to the server via Axios.

### 🔍 Event List with Filtering
- Fetch event lists via React Query.
- Filter events by date, category, and location.
- Display events as interactive cards.

### 📌 Event Details Page
- View complete event details.
- Organizer information.
- Register for events with a "Register" button.

### ✅ Event Registration
- Register for events using a form (React Portal API).
- Confirmation notifications after successful registration.

### 🌎 Context-Based State Management
- Light/dark theme toggle using React Context API.
- Store user information and event participation details.

### 📅 Event Calendar
- Interactive calendar displaying events.
- Quickly view events for specific dates.

### 💬 Comments and Reviews
- Leave reviews on past events.
- Load comments dynamically using React Query.

## ⚙️ Tech Stack
- **React** — core framework
- **React Router** — page routing
- **React Query** — cache and API request management
- **React Hook Form** — flexible forms
- **Axios** — server communication
- **React Context API** — global state management
- **React Portal API** — modals and notifications

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Local Server
```bash
npm start
```

### 3️⃣ Build the Project
```bash
npm run build
```

## 📌 Usage Scenarios
1. An organizer creates an event using an intuitive form, and attendees register.
2. A user filters events by date/category and selects an interesting one.
3. After the event, participants leave reviews and comments.
