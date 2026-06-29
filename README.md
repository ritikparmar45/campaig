# CreatorsMela Campaign Dashboard

A high-fidelity, interactive, and responsive internal campaign management dashboard designed for **Talent Managers** at CreatorsMela. 

This solution is built using **Vanilla HTML5, CSS3, and ES6 JavaScript**, requiring **zero build configuration or installation steps** to run. It implements modern design patterns, including **glassmorphism**, a rich dark palette with neon violet and emerald accents, custom micro-animations, and dynamic state switching.

---

## Key Features

1. **Portfolio State Switcher (Multi-Manager Support)**
   - Click the Profile Switcher at the bottom of the sidebar to swap between **Alex Mercer** (Tech & Gaming portfolio) and **Elena Rostova** (Fashion & Lifestyle portfolio).
   - Switching portfolios dynamically updates all KPIs, active campaigns, media approvals, upcoming deliverables, checklist tasks, and financial datasets with a smooth fade-in animation.

2. **Interactive Revenue Analytics**
   - Integrates **Chart.js** with customized tooltips, grid lines, and gradient color fills.
   - Includes interactive toggles in the header to switch between **Managed Budget** (violet theme) and **Commissions (15%)** (emerald theme).

3. **Content Approval Media Queue**
   - Talent Managers can inspect creator content drafts (mockup assets) directly in the dashboard.
   - Click a draft to open an interactive full-screen **Inspector Modal** with detailed creator notes.
   - Approve or reject drafts to trigger slide-out animations, update campaign progress percentages, insert follow-up tasks, and trigger Toast notification popups.

4. **Task Checklist Manager**
   - Dynamic checklist to add, delete, and check off items.
   - Features a real-time progress bar computing the completion percentage dynamically.

5. **Campaign Kick-Off Engine**
   - Click "Launch Campaign" to open a modal form.
   - Fill in details (campaign name, creator, brand, platform, budget, initial status, and starting progress) to instantly inject a new card, schedule a kick-off deliverable, and log check-list tasks.

6. **Toast Alert System & Health Diagnostics**
   - Custom-built Toast Notification system displaying Success, Info, and Warning alerts with slide-in animations.
   - A "Check Platform Status" quick action triggers mock API pings to core social media gateways, outputting status reports in the alert feed and notifications history.

---

## File Structure

```text
campaign-dashboard/
├── assets/
│   ├── mock_image1.png    # Fashion creator draft photo
│   └── mock_image2.png    # Tech desktop draft photo
├── index.html             # HTML layout skeleton and modal definitions
├── styles.css             # Design tokens, layouts, glassmorphism, and keyframe animations
├── app.js                 # Portfolio datasets, state controllers, and DOM engines
└── README.md              # Project documentation and execution guide
```

---

## Technologies Used

* **Core**: Modern Semantic HTML5, CSS3 (variables, flexbox, grid, transitions, keyframe animations).
* **Logic**: Vanilla JavaScript (ES6+ modules, event orchestration, state updates).
* **Data Visualization**: Chart.js (via CDN).
* **Iconography**: Lucide Icons (via CDN).
* **Typography**: Google Fonts (Plus Jakarta Sans).

---

## Getting Started

### Method 1: Instant Launch (Zero Installation)
Simply double-click the `index.html` file or open it in any modern web browser (Chrome, Safari, Edge, Firefox). The project resolves all styles, scripts, and libraries natively.

### Method 2: Local Server (Recommended for complete asset rendering)
For optimal security policy resolution regarding local mock images, run a simple local web server:

**Using Python:**
1. Open your terminal in the `campaign-dashboard` folder.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your web browser.

**Using Node.js:**
1. Open your terminal in the project directory.
2. Run:
   ```bash
   npx serve
   ```
3. Open the port indicated in the terminal (usually `http://localhost:3000` or `http://localhost:5000`).

---

## Deployment Guidelines

Because the application is built entirely of static front-end assets (HTML, CSS, JS), it can be deployed for free in under a minute to any static hosting provider:

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the `campaign-dashboard` folder and follow the prompts.

### Netlify Deployment
1. Drag and drop the `campaign-dashboard` folder directly onto the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. It will deploy instantly and generate a live URL.

### GitHub Pages
1. Initialize a git repository: `git init`
2. Add files and commit: `git add . && git commit -m "Initial commit"`
3. Push to your GitHub repository.
4. Go to **Settings > Pages** in your repository, select the branch (e.g. `main`), and save. The live deployment will be active shortly.
