# 🌸 FemFlow — Setup Instructions

## Option A: CodeSandbox (Fastest — test on your phone in minutes)

1. Go to **codesandbox.io** and create a free account
2. Click **"Create Sandbox"** → choose **"React (Vite)"**
3. You'll see a file panel on the left — do the following:
   - Replace `src/App.jsx` with the contents of `src/App.jsx` from this folder
   - Replace `src/main.jsx` with the contents of `src/main.jsx` from this folder
   - Replace `package.json` with the contents of `package.json` from this folder
4. CodeSandbox will auto-install and run it live
5. Click **"Open in new tab"** to see full screen, or scan the QR code to view on your phone

---

## Option B: Vercel (Best for sharing a real live link)

### Step 1 — Run it locally first
Make sure you have **Node.js** installed (download at nodejs.org if not).

Open your terminal and run:
```
cd femflow-app
npm install
npm run dev
```
Then open **http://localhost:5173** in your browser.

### Step 2 — Push to GitHub
1. Create a free account at **github.com**
2. Click **"New Repository"** → name it `femflow` → click Create
3. In your terminal, run:
```
git init
git add .
git commit -m "FemFlow initial build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/femflow.git
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to **vercel.com** and create a free account
2. Click **"Add New Project"** → **"Import Git Repository"**
3. Select your `femflow` repo
4. Leave all settings as default → click **"Deploy"**
5. In ~60 seconds you'll get a live URL like: `femflow.vercel.app`
6. Open it on your phone and test! 🎉

---

## File Structure
```
femflow-app/
├── index.html          ← App entry point
├── package.json        ← Dependencies
├── vite.config.js      ← Build config
└── src/
    ├── main.jsx        ← React root
    └── App.jsx         ← All FemFlow code lives here
```

---

## Making Changes
All of the app content and design is inside **`src/App.jsx`**.
- To change colors → edit the `C` object at the top
- To change phase content → edit the `phases` array
- To add a new page → add a new component and a nav button

Happy building! 🌸
