# Firebase Auth (Email/Password) — Expo + React Native


https://github.com/user-attachments/assets/8cea1f8c-7653-4a5a-bae8-e66388823dc8


A minimal Expo Router app using **Firebase Authentication** via **@react-native-firebase/auth**.

## What this project does

- **Register** with **Email/Password**
- **Login** with **Email/Password**
- After login, users land on a simple protected screen
- **Sign out** (calls `auth().signOut()`)
- Root layout listens to Firebase auth state (`auth().onAuthStateChanged`) and redirects users accordingly

## Tech stack

- Expo (SDK ~54)
- React Native
- Expo Router
- `@react-native-firebase/app` + `@react-native-firebase/auth`

---

## Prerequisites

- Node.js (LTS)
- npm
- For native builds:
  - Android Studio / Emulator (Android)
  - Xcode (iOS)
- A Firebase project

---

## 1) Install dependencies

```bash
npm install
```

---

## 2) Configure Firebase (important)

This app expects the Firebase config files to exist in the project root:

- `google-services.json` (Android)
- `GoogleService-Info.plist` (iOS)

### iOS: bundle identifier + config file

1. Edit `app.json`:

```json
"ios": {
  "bundleIdentifier": "com.yourcompany.firebaseapp",
  "googleServicesFile": "./GoogleService-Info.plist"
}
```

2. In **Firebase Console**:
   - Go to **Project settings** → **Your apps**
   - Add/select an **iOS app**
   - Use the **same bundle id** as in `app.json`
   - Download `GoogleService-Info.plist`
   - Place it in the project root (same folder as `package.json`)

### Android: package name + config file

1. Edit `app.json`:

```json
"android": {
  "package": "com.yourcompany.firebaseapp",
  "googleServicesFile": "./google-services.json"
}
```

2. In **Firebase Console**:
   - Go to **Project settings** → **Your apps**
   - Add/select an **Android app**
   - Use the **same package name** as in `app.json`
   - Download `google-services.json`
   - Place it in the project root

---

## 3) Enable Authentication providers

1. Firebase Console → **Authentication**
2. Click **Get started**
3. Enable **Email/Password**
4. Add **Google** provider
   - Make sure Google is configured with the **iOS + Android config** above
   - The required **reverse client id** is included when you download the updated iOS config from Firebase

---

## 4) Run the app

### Development (quickest)

```bash
npx expo start
```

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

---

## Notes / troubleshooting

- If login fails on device but works in code:
  - Confirm the correct Firebase config files were copied into the project root
  - Confirm bundle/package identifiers match exactly
- If Google sign-in gives an error:
  - Re-download iOS/Android config from Firebase after registering both apps

---

## Project structure (high level)

- `app/index.tsx` → Login/Register UI
- `app/(auth)/home.tsx` → Protected home + Sign out button
- `app/_layout.tsx` → Auth listener and routing

