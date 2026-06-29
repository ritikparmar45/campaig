/* ----------------------------------------------------
   CreatorsMela Campaign Dashboard - Application Logic
   Interactive Single Page Dashboard Controller
---------------------------------------------------- */

// --- DYNAMIC DATASTORE (Separated by Talent Manager Portfolios) ---
const portfolios = {
    alex: {
        name: "Alex Mercer",
        niche: "Tech & Gaming",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Alex",
        kpiTrends: {
            revenue: "+14.2% this month",
            campaigns: "2 starting next week",
            approvals: "1 requires immediate review",
            deliverables: "1 due today"
        },
        campaigns: [
            {
                id: "c1",
                name: "Quantum Keyboard Review",
                brand: "ApexTech",
                creator: "Marcus Tech",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Marcus",
                platform: "youtube",
                budget: 22500,
                progress: 65,
                status: "in_progress"
            },
            {
                id: "c2",
                name: "Aero Mouse Launch",
                brand: "LogiFit",
                creator: "LinusPlays",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Linus",
                platform: "youtube",
                budget: 48000,
                progress: 100,
                status: "live"
            },
            {
                id: "c3",
                name: "Neon Headset Promotion",
                brand: "SoundGlow",
                creator: "ValkyraeClone",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Rae",
                platform: "twitch",
                budget: 15000,
                progress: 15,
                status: "planning"
            },
            {
                id: "c4",
                name: "RTX 5090 Build Vlog",
                brand: "NvidiaClone",
                creator: "HardwareGuru",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Guru",
                platform: "youtube",
                budget: 85000,
                progress: 40,
                status: "in_progress"
            },
            {
                id: "c5",
                name: "Console Battle Live",
                brand: "SonyPlay",
                creator: "GamerBro",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Bro",
                platform: "twitch",
                budget: 35000,
                progress: 100,
                status: "live"
            }
        ],
        approvals: [
            {
                id: "a1",
                campaignId: "c1",
                campaignName: "Quantum Keyboard Review",
                creator: "Marcus Tech",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Marcus",
                platform: "youtube",
                draftType: "YouTube Short",
                mediaUrl: "assets/mock_image2.png",
                notes: "Unboxing layout highlighting the custom macro keys. Applied retro filter per brand style guidelines."
            }
        ],
        deliverables: [
            {
                id: "d1",
                title: "Nvidia Dedicated Video Upload",
                creator: "HardwareGuru",
                campaign: "RTX 5090 Build Vlog",
                platform: "youtube",
                dueText: "In 4 hours",
                isUrgent: true
            },
            {
                id: "d2",
                title: "Instagram Story Reel Promotion",
                creator: "LinusPlays",
                campaign: "Aero Mouse Launch",
                platform: "instagram",
                dueText: "Tomorrow",
                isUrgent: false
            },
            {
                id: "d3",
                title: "Twitch Integration Shoutout",
                creator: "ValkyraeClone",
                campaign: "Neon Headset Promotion",
                platform: "twitch",
                dueText: "In 3 days",
                isUrgent: false
            }
        ],
        tasks: [
            { id: "t1", text: "Review keyboard video draft from Marcus Tech", completed: false },
            { id: "t2", text: "Approve Logitech branding brief proposal", completed: true },
            { id: "t3", text: "Send media kit analytics to Nvidia rep", completed: false },
            { id: "t4", text: "Confirm streaming schedule with Valkyrae", completed: false }
        ],
        chartData: {
            revenue: [45000, 58000, 72000, 110000, 145000, 205500],
            commissions: [6750, 8700, 10800, 16500, 21750, 30825]
        }
    },
    elena: {
        name: "Elena Rostova",
        niche: "Fashion & Lifestyle",
        avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Elena",
        kpiTrends: {
            revenue: "+11.8% this month",
            campaigns: "1 starting next week",
            approvals: "1 requires immediate review",
            deliverables: "2 due today"
        },
        campaigns: [
            {
                id: "c6",
                name: "Summer Linen Lookbook",
                brand: "Aura Wear",
                creator: "Sarah Jenkins",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Sarah",
                platform: "instagram",
                budget: 32000,
                progress: 80,
                status: "in_progress"
            },
            {
                id: "c7",
                name: "Eco-Glow Skin Kit Launch",
                brand: "BioLuminate",
                creator: "ElenaGlow",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=ElenaGlow",
                platform: "tiktok",
                budget: 55000,
                progress: 95,
                status: "live"
            },
            {
                id: "c8",
                name: "Boho Travel Vlog Series",
                brand: "Wanderlust",
                creator: "TheTravelDuo",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Travel",
                platform: "youtube",
                budget: 60000,
                progress: 20,
                status: "planning"
            },
            {
                id: "c9",
                name: "Velvet Lipgloss Showcase",
                brand: "SilkLips",
                creator: "BeautyByMia",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Mia",
                platform: "instagram",
                budget: 18000,
                progress: 50,
                status: "in_progress"
            }
        ],
        approvals: [
            {
                id: "a2",
                campaignId: "c6",
                campaignName: "Summer Linen Lookbook",
                creator: "Sarah Jenkins",
                avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Sarah",
                platform: "instagram",
                draftType: "Grid Photo Shoot",
                mediaUrl: "assets/mock_image1.png",
                notes: "Draft mockup for Instagram grid featuring the linen shirt dress. Clean outdoor natural lighting applied."
            }
        ],
        deliverables: [
            {
                id: "d4",
                title: "Instagram Grid Post + Story Set",
                creator: "Sarah Jenkins",
                campaign: "Summer Linen Lookbook",
                platform: "instagram",
                dueText: "In 2 hours",
                isUrgent: true
            },
            {
                id: "d5",
                title: "TikTok GRWM Video",
                creator: "ElenaGlow",
                campaign: "Eco-Glow Skin Kit Launch",
                platform: "tiktok",
                dueText: "Today",
                isUrgent: true
            },
            {
                id: "d6",
                title: "YouTube Travel Vlog Integration",
                creator: "TheTravelDuo",
                campaign: "Boho Travel Vlog Series",
                platform: "youtube",
                dueText: "In 5 days",
                isUrgent: false
            }
        ],
        tasks: [
            { id: "t5", text: "Approve Sarah's grid draft photos", completed: false },
            { id: "t6", text: "Send invoice to SilkLips cosmetic rep", completed: true },
            { id: "t7", text: "Finalize Wanderlust contract terms", completed: false },
            { id: "t8", text: "Check BioLuminate TikTok live metrics", completed: true }
        ],
        chartData: {
            revenue: [60000, 72000, 80000, 95000, 110000, 165000],
            commissions: [9000, 10800, 12000, 14250, 16500, 24750]
        }
    }
};

// Global Notifications Store
let notifications = [
    { id: "n1", text: "Sarah Jenkins uploaded a draft grid photo for 'Summer Linen'", time: "10m ago", urgent: false },
    { id: "n2", text: "Urgent: 'Nvidia Dedicated Video' upload is due in 4 hours!", time: "25m ago", urgent: true },
    { id: "n3", text: "ApexTech approved budget increase request ($22.5k)", time: "2h ago", urgent: false }
];

// --- APP STATE ---
let currentManager = "alex";
let currentFilter = "all";
let currentChartMode = "revenue"; // "revenue" or "commissions"
let searchString = "";
let financialChartInstance = null;
let currentApprovalPreviewItem = null;

// --- DOM ELEMENTS ---
const sidebar = document.getElementById("app-sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const managerSelectBtn = document.getElementById("manager-select-btn");
const managerDropdown = document.getElementById("manager-dropdown");
const activeManagerAvatar = document.getElementById("active-manager-avatar");
const activeManagerName = document.getElementById("active-manager-name");
const pageGreeting = document.getElementById("page-greeting");
const managerNicheSubtitle = document.getElementById("manager-niche-subtitle");

const globalSearchInput = document.getElementById("global-search");
const headerBtnCampaign = document.getElementById("header-btn-campaign");
const notificationBtn = document.getElementById("notification-btn");
const notificationsDropdown = document.getElementById("notifications-dropdown");
const notificationList = document.getElementById("notification-list");
const clearNotiBtn = document.getElementById("clear-noti-btn");
const notiDot = document.getElementById("noti-dot");

// KPI values
const kpiValRevenue = document.getElementById("kpi-val-revenue");
const kpiTrendRevenue = document.getElementById("kpi-trend-revenue");
const kpiValCampaigns = document.getElementById("kpi-val-campaigns");
const kpiSubCampaigns = document.getElementById("kpi-sub-campaigns");
const kpiValApprovals = document.getElementById("kpi-val-approvals");
const kpiSubApprovals = document.getElementById("kpi-sub-approvals");
const kpiValDeliverables = document.getElementById("kpi-val-deliverables");
const kpiSubDeliverables = document.getElementById("kpi-sub-deliverables");

// Chart elements
const toggleChartRevenue = document.getElementById("toggle-chart-revenue");
const toggleChartCommissions = document.getElementById("toggle-chart-commissions");

// Lists and checklist elements
const campaignsListContainer = document.getElementById("campaigns-list-container");
const approvalsStackContainer = document.getElementById("approvals-stack-container");
const deliverablesListContainer = document.getElementById("deliverables-list-container");
const tasksListContainer = document.getElementById("tasks-list-container");
const taskProgressText = document.getElementById("task-pct-text");
const taskProgressBarFill = document.getElementById("task-pct-fill");
const addTaskForm = document.getElementById("add-task-form");
const taskInputText = document.getElementById("task-input-text");

// Quick Actions
const actionLaunchCampaign = document.getElementById("action-launch-campaign");
const actionAddTask = document.getElementById("action-add-task");
const actionExportReport = document.getElementById("action-export-report");
const actionToastTest = document.getElementById("action-toast-test");

// Modals
const campaignModal = document.getElementById("campaign-modal");
const modalCloseCampaign = document.getElementById("modal-close-campaign");
const btnCancelCampaign = document.getElementById("btn-cancel-campaign");
const campaignLaunchForm = document.getElementById("campaign-launch-form");

const previewModal = document.getElementById("preview-modal");
const modalClosePreview = document.getElementById("modal-close-preview");
const previewModalImage = document.getElementById("preview-modal-image");
const previewModalTitle = document.getElementById("preview-modal-title");
const previewModalNotes = document.getElementById("preview-modal-notes");
const btnRejectDraft = document.getElementById("btn-reject-draft");
const btnApproveDraft = document.getElementById("btn-approve-draft");

const toastContainer = document.getElementById("toast-container");

// Nav link highlights
const navItems = document.querySelectorAll(".menu-item");
const campaignFilters = document.querySelectorAll(".filter-tab");

// --- EVENT INITIALIZATION ---
function initEventListeners() {
    // Sidebar responsive toggle
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
    
    // Close sidebar on body click in mobile
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove("open");
        }
    });

    // Profile Dropdown Switcher
    managerSelectBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        managerDropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        managerDropdown.classList.remove("open");
    });

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            const manager = item.getAttribute("data-manager");
            if (manager !== currentManager) {
                switchManager(manager);
            }
            document.querySelectorAll(".dropdown-item").forEach(d => d.classList.remove("active"));
            item.classList.add("active");
            managerDropdown.classList.remove("open");
        });
    });

    // Search bar focus shortcut (/)
    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== globalSearchInput) {
            e.preventDefault();
            globalSearchInput.focus();
        }
    });

    globalSearchInput.addEventListener("input", (e) => {
        searchString = e.target.value.toLowerCase();
        renderCampaigns();
    });

    // Sidebar navigation highlights (visual navigation feedback)
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(n => n.classList.remove("active"));
            item.classList.add("active");
            const view = item.getAttribute("data-view");
            showToast(`Navigated to ${view.toUpperCase()}`, "info");
        });
    });

    // Campaigns filtering tabs
    campaignFilters.forEach(tab => {
        tab.addEventListener("click", () => {
            campaignFilters.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilter = tab.getAttribute("data-filter");
            renderCampaigns();
        });
    });

    // Chart toggles
    toggleChartRevenue.addEventListener("click", () => {
        toggleChartRevenue.classList.add("active");
        toggleChartCommissions.classList.remove("active");
        currentChartMode = "revenue";
        updateFinancialChart();
    });

    toggleChartCommissions.addEventListener("click", () => {
        toggleChartCommissions.classList.add("active");
        toggleChartRevenue.classList.remove("active");
        currentChartMode = "commissions";
        updateFinancialChart();
    });

    // Tasks Management
    addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = taskInputText.value.trim();
        if (!text) return;

        const newId = "t_" + Date.now();
        portfolios[currentManager].tasks.push({
            id: newId,
            text: text,
            completed: false
        });

        taskInputText.value = "";
        renderTasks();
        showToast("Task successfully logged", "success");
    });

    // Notification dropdown
    notificationBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        notificationsDropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        notificationsDropdown.classList.remove("open");
    });

    notificationsDropdown.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    clearNotiBtn.addEventListener("click", () => {
        notifications = [];
        renderNotifications();
        showToast("Notifications cleared", "info");
    });

    // Quick Actions
    actionLaunchCampaign.addEventListener("click", openCampaignModal);
    headerBtnCampaign.addEventListener("click", openCampaignModal);
    actionAddTask.addEventListener("click", () => {
        taskInputText.focus();
        showToast("Scroll down to Today's Tasks checklist", "info");
    });
    actionExportReport.addEventListener("click", exportCSVReport);
    actionToastTest.addEventListener("click", runPlatformHealthCheck);

    // Campaign Launch Modal Closes
    modalCloseCampaign.addEventListener("click", closeCampaignModal);
    btnCancelCampaign.addEventListener("click", closeCampaignModal);
    campaignModal.addEventListener("click", (e) => {
        if (e.target === campaignModal) closeCampaignModal();
    });

    // Launch Campaign Form Submit
    campaignLaunchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const campName = document.getElementById("input-camp-name").value.trim();
        const creator = document.getElementById("input-creator").value.trim();
        const brand = document.getElementById("input-brand").value.trim();
        const platform = document.getElementById("input-platform").value;
        const budget = parseInt(document.getElementById("input-budget").value, 10);
        const status = document.getElementById("input-status").value;
        const progress = parseInt(document.getElementById("input-progress").value, 10) || 0;

        const newCampaign = {
            id: "c_" + Date.now(),
            name: campName,
            brand: brand,
            creator: creator,
            avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${creator.replace(/\s+/g, '')}`,
            platform: platform,
            budget: budget,
            progress: progress,
            status: status
        };

        portfolios[currentManager].campaigns.push(newCampaign);
        
        // Add relative deliverable automatically for higher-fidelity interactivity
        portfolios[currentManager].deliverables.push({
            id: "d_" + Date.now(),
            title: `Deliver content brief to ${brand}`,
            creator: creator,
            campaign: campName,
            platform: platform,
            dueText: "In 2 days",
            isUrgent: false
        });

        // Add task automatically
        portfolios[currentManager].tasks.push({
            id: "t_" + Date.now(),
            text: `Follow up with ${creator} on campaign kickoff for ${brand}`,
            completed: false
        });

        campaignLaunchForm.reset();
        closeCampaignModal();
        renderDashboard();
        showToast(`Campaign '${campName}' launched!`, "success");
    });

    // Close preview modal
    modalClosePreview.addEventListener("click", closePreviewModal);
    previewModal.addEventListener("click", (e) => {
        if (e.target === previewModal) closePreviewModal();
    });

    btnApproveDraft.addEventListener("click", () => {
        if (currentApprovalPreviewItem) {
            approveItem(currentApprovalPreviewItem.id);
            closePreviewModal();
        }
    });

    btnRejectDraft.addEventListener("click", () => {
        if (currentApprovalPreviewItem) {
            rejectItem(currentApprovalPreviewItem.id);
            closePreviewModal();
        }
    });
}

// --- PORTFOLIO SWITCHER ---
function switchManager(manager) {
    currentManager = manager;
    
    // Animate content body container swap (fade-in)
    const viewContainer = document.getElementById("dashboard-view");
    viewContainer.style.opacity = 0;
    
    setTimeout(() => {
        // Update Manager Details
        const activeMgr = portfolios[manager];
        activeManagerAvatar.src = activeMgr.avatar;
        activeManagerName.textContent = activeMgr.name;
        pageGreeting.textContent = `Welcome back, ${activeMgr.name.split(' ')[0]}!`;
        managerNicheSubtitle.textContent = `${activeMgr.niche} Portfolio`;
        
        renderDashboard();
        
        // Update Chart values
        updateFinancialChart();
        
        // Fade in
        viewContainer.style.transition = 'opacity 0.25s ease';
        viewContainer.style.opacity = 1;
        
        showToast(`Switched portfolio to ${activeMgr.name}`, "success");
    }, 150);
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let iconName = "check-circle";
    if (type === "info") iconName = "info";
    if (type === "warning") iconName = "alert-circle";
    
    toast.innerHTML = `
        <i data-lucide="${iconName}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    lucide.createIcons(); // Initialize the lucide icon on toast creation
    
    // Remove toast after duration
    setTimeout(() => {
        toast.style.animation = "toastFadeOut 0.2s forwards";
        setTimeout(() => {
            toast.remove();
        }, 200);
    }, 4000);
}

// --- MODAL UTILS ---
function openCampaignModal() {
    campaignModal.classList.add("open");
    document.getElementById("input-camp-name").focus();
}

function closeCampaignModal() {
    campaignModal.classList.remove("open");
}

function openPreviewModal(approvalId) {
    const currentList = portfolios[currentManager].approvals;
    const approval = currentList.find(a => a.id === approvalId);
    if (!approval) return;

    currentApprovalPreviewItem = approval;
    previewModalImage.src = approval.mediaUrl;
    previewModalTitle.textContent = `Draft: ${approval.draftType}`;
    previewModalNotes.textContent = `"${approval.notes}" - ${approval.creator}`;
    
    previewModal.classList.add("open");
}

function closePreviewModal() {
    previewModal.classList.remove("open");
    currentApprovalPreviewItem = null;
}

// --- DYNAMIC RENDERING ENGINES ---
function renderDashboard() {
    renderKPIs();
    renderCampaigns();
    renderApprovals();
    renderDeliverables();
    renderTasks();
    renderNotifications();
    lucide.createIcons();
}

// 1. KPIs Renderer
function renderKPIs() {
    const activeMgr = portfolios[currentManager];
    
    // Calculate total managed revenue
    const totalBudget = activeMgr.campaigns.reduce((sum, camp) => sum + camp.budget, 0);
    kpiValRevenue.textContent = `$${(totalBudget / 1000).toFixed(0)}K`;
    kpiTrendRevenue.textContent = activeMgr.kpiTrends.revenue;

    // Active campaigns count
    const activeCount = activeMgr.campaigns.filter(c => c.status === "in_progress" || c.status === "live").length;
    kpiValCampaigns.textContent = activeCount;
    kpiSubCampaigns.textContent = activeMgr.kpiTrends.campaigns;

    // Approvals count
    const approvalsCount = activeMgr.approvals.length;
    kpiValApprovals.textContent = approvalsCount;
    kpiSubApprovals.textContent = approvalsCount === 0 ? "All items approved" : `${approvalsCount} await manager review`;
    
    // Sync header badge
    const badgeNavApprovals = document.getElementById("badge-nav-approvals");
    const badgeApprovalsCount = document.getElementById("badge-approvals-count");
    badgeNavApprovals.textContent = approvalsCount;
    badgeApprovalsCount.textContent = approvalsCount;
    
    if (approvalsCount === 0) {
        badgeNavApprovals.style.display = "none";
        badgeApprovalsCount.className = "badge badge-accent";
    } else {
        badgeNavApprovals.style.display = "inline-block";
        badgeApprovalsCount.className = "badge badge-accent-glow";
    }

    // Deliverables count
    const deliverablesCount = activeMgr.deliverables.length;
    const urgentCount = activeMgr.deliverables.filter(d => d.isUrgent).length;
    kpiValDeliverables.textContent = deliverablesCount;
    kpiSubDeliverables.textContent = urgentCount > 0 ? `${urgentCount} due in next 24 hours` : "0 critical due dates";
}

// 2. Active Campaigns Grid Renderer
function renderCampaigns() {
    campaignsListContainer.innerHTML = "";
    const activeList = portfolios[currentManager].campaigns;

    // Filter list
    let filteredList = activeList.filter(camp => {
        if (currentFilter === "all") return true;
        return camp.status === currentFilter;
    });

    // Search filter
    if (searchString) {
        filteredList = filteredList.filter(camp => 
            camp.name.toLowerCase().includes(searchString) || 
            camp.creator.toLowerCase().includes(searchString) || 
            camp.brand.toLowerCase().includes(searchString)
        );
    }

    if (filteredList.length === 0) {
        campaignsListContainer.innerHTML = `
            <div class="empty-state col-2">
                <i data-lucide="folder-search" class="empty-icon"></i>
                <p>No campaigns matching search or active filter.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filteredList.forEach(camp => {
        const platformIcons = {
            youtube: "youtube",
            tiktok: "video",
            instagram: "instagram",
            twitch: "twitch"
        };
        const iconName = platformIcons[camp.platform] || "globe";

        const card = document.createElement("div");
        card.className = "campaign-card-inner";
        card.innerHTML = `
            <div class="campaign-card-header">
                <div class="campaign-card-meta">
                    <span class="campaign-brand">${camp.brand}</span>
                    <span class="campaign-name-title" title="${camp.name}">${camp.name}</span>
                </div>
                <div class="campaign-platform-badge ${camp.platform}" title="Platform: ${camp.platform}">
                    <i data-lucide="${iconName}"></i>
                </div>
            </div>
            
            <div class="campaign-creator-row">
                <img src="${camp.avatar}" alt="${camp.creator}" class="creator-mini-avatar">
                <span class="creator-mini-name">${camp.creator}</span>
            </div>

            <div class="campaign-progress-area">
                <div class="progress-header">
                    <span>Milestone Progress</span>
                    <span>${camp.progress}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${camp.progress}%"></div>
                </div>
            </div>

            <div class="campaign-card-footer">
                <div class="campaign-budget">
                    <span class="campaign-budget-label">BUDGET</span>
                    <span class="campaign-budget-value">$${camp.budget.toLocaleString()}</span>
                </div>
                <span class="status-pill ${camp.status}">${camp.status.replace('_', ' ')}</span>
            </div>
        `;

        campaignsListContainer.appendChild(card);
    });
    lucide.createIcons();
}

// 3. Pending Approvals Renderer
function renderApprovals() {
    approvalsStackContainer.innerHTML = "";
    const activeList = portfolios[currentManager].approvals;

    if (activeList.length === 0) {
        approvalsStackContainer.innerHTML = `
            <div class="empty-state-small">
                <i data-lucide="check-circle-2" class="empty-icon success-icon"></i>
                <p>All items approved! Excellent work.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    activeList.forEach(app => {
        const item = document.createElement("div");
        item.className = "approval-item";
        item.id = `approval-card-${app.id}`;
        
        item.innerHTML = `
            <div class="approval-media-box" onclick="openPreviewModal('${app.id}')" title="Zoom draft preview">
                <img src="${app.mediaUrl}" alt="Media draft">
                <div class="approval-media-overlay">
                    <span class="approval-platform-badge">
                        <i data-lucide="image"></i>
                        <span>${app.draftType}</span>
                    </span>
                </div>
            </div>
            <div class="approval-info">
                <div class="approval-creator">
                    <img src="${app.avatar}" alt="${app.creator}">
                    <div>
                        <span class="approval-creator-name">${app.creator}</span>
                        <div class="approval-draft-type">${app.draftType}</div>
                    </div>
                </div>
                <div class="approval-item-campaign">${app.campaignName}</div>
                <p class="approval-note">"${app.notes}"</p>
                <div class="approval-buttons">
                    <button class="btn-reject" onclick="rejectItem('${app.id}')">Needs Edit</button>
                    <button class="btn-approve" onclick="approveItem('${app.id}')">Approve</button>
                </div>
            </div>
        `;

        approvalsStackContainer.appendChild(item);
    });
    lucide.createIcons();
}

// Approve item actions
function approveItem(id) {
    const itemCard = document.getElementById(`approval-card-${id}`);
    if (itemCard) {
        // Slide out animations
        itemCard.classList.add("dismissed");
        
        setTimeout(() => {
            // State update
            const activeList = portfolios[currentManager].approvals;
            const index = activeList.findIndex(a => a.id === id);
            
            if (index > -1) {
                const approvedItem = activeList[index];
                
                // Trigger campaign progress updates dynamically for realistic dashboard flow!
                const campaign = portfolios[currentManager].campaigns.find(c => c.name === approvedItem.campaignName);
                if (campaign) {
                    campaign.progress = Math.min(campaign.progress + 15, 100);
                }

                // Add audit task
                portfolios[currentManager].tasks.push({
                    id: "t_" + Date.now(),
                    text: `Notify client of final approved content launch for ${approvedItem.campaignName}`,
                    completed: false
                });

                activeList.splice(index, 1);
                
                // Re-render
                renderDashboard();
                showToast(`Approved content draft from ${approvedItem.creator}!`, "success");
            }
        }, 400); // matches css animation duration
    }
}

// Reject/edit item actions
function rejectItem(id) {
    const itemCard = document.getElementById(`approval-card-${id}`);
    if (itemCard) {
        itemCard.classList.add("dismissed");
        
        setTimeout(() => {
            const activeList = portfolios[currentManager].approvals;
            const index = activeList.findIndex(a => a.id === id);
            
            if (index > -1) {
                const item = activeList[index];
                activeList.splice(index, 1);
                
                // Automatically create task to log feedback session
                portfolios[currentManager].tasks.push({
                    id: "t_" + Date.now(),
                    text: `Call ${item.creator} regarding revision comments on draft`,
                    completed: false
                });

                renderDashboard();
                showToast(`Revision request sent to ${item.creator}`, "warning");
            }
        }, 400);
    }
}

// 4. Upcoming Deliverables Renderer
function renderDeliverables() {
    deliverablesListContainer.innerHTML = "";
    const activeList = portfolios[currentManager].deliverables;

    if (activeList.length === 0) {
        deliverablesListContainer.innerHTML = `
            <div class="empty-state-small">
                <i data-lucide="check-square" class="empty-icon text-positive"></i>
                <p>No upcoming deliverables due.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    activeList.forEach(del => {
        const item = document.createElement("div");
        item.className = "deliverable-item";

        const platformIcons = {
            youtube: "youtube",
            tiktok: "video",
            instagram: "instagram",
            twitch: "twitch"
        };
        const iconName = platformIcons[del.platform] || "file-text";

        item.innerHTML = `
            <div class="deliverable-icon-box ${del.isUrgent ? 'urgent' : ''}">
                <i data-lucide="${iconName}"></i>
            </div>
            <div class="deliverable-details">
                <span class="deliverable-title" title="${del.title}">${del.title}</span>
                <span class="deliverable-subtext">by <span>${del.creator}</span> • ${del.campaign}</span>
            </div>
            <span class="deliverable-due-tag ${del.isUrgent ? 'today' : 'upcoming'}">${del.dueText}</span>
        `;

        deliverablesListContainer.appendChild(item);
    });
    lucide.createIcons();
}

// 5. Today's Checklist Tasks Renderer
function renderTasks() {
    tasksListContainer.innerHTML = "";
    const activeTasks = portfolios[currentManager].tasks;

    if (activeTasks.length === 0) {
        tasksListContainer.innerHTML = `
            <div class="empty-state">
                <i data-lucide="clipboard-check" class="empty-icon text-positive"></i>
                <p>All clean! Create a task above to get started.</p>
            </div>
        `;
        taskProgressText.textContent = "0% Complete";
        taskProgressBarFill.style.width = "0%";
        lucide.createIcons();
        return;
    }

    activeTasks.forEach(task => {
        const item = document.createElement("li");
        item.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        item.innerHTML = `
            <label class="task-checkbox-container">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskStatus('${task.id}')">
                <span class="checkmark"></span>
            </label>
            <span class="task-text">${task.text}</span>
            <button class="task-delete-btn" onclick="deleteTask('${task.id}')" aria-label="Delete Task">
                <i data-lucide="trash-2"></i>
            </button>
        `;

        tasksListContainer.appendChild(item);
    });

    // Compute progress metrics
    const completedCount = activeTasks.filter(t => t.completed).length;
    const completionPercentage = Math.round((completedCount / activeTasks.length) * 100) || 0;
    
    taskProgressText.textContent = `${completionPercentage}% Complete`;
    taskProgressBarFill.style.width = `${completionPercentage}%`;
    
    lucide.createIcons();
}

function toggleTaskStatus(id) {
    const taskList = portfolios[currentManager].tasks;
    const task = taskList.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        
        if (task.completed) {
            showToast("Task completed!", "success");
        }
    }
}

function deleteTask(id) {
    const taskList = portfolios[currentManager].tasks;
    const index = taskList.findIndex(t => t.id === id);
    if (index > -1) {
        taskList.splice(index, 1);
        renderTasks();
        showToast("Task deleted", "info");
    }
}

// 6. Notifications List Renderer
function renderNotifications() {
    notificationList.innerHTML = "";
    
    if (notifications.length === 0) {
        notificationList.innerHTML = `<div class="dropdown-empty-state">No new notifications</div>`;
        notiDot.style.display = "none";
        return;
    }

    notiDot.style.display = "block";

    notifications.forEach(n => {
        const item = document.createElement("div");
        item.className = `notification-item ${n.urgent ? 'alert-priority' : ''}`;
        item.innerHTML = `
            <div class="notification-item-text">
                <div>${n.text}</div>
                <div class="notification-time">${n.time}</div>
            </div>
        `;
        notificationList.appendChild(item);
    });
}

// --- ANALYTICS / CHART SYSTEM (Chart.js) ---
function initFinancialChart() {
    const ctx = document.getElementById('revenue-chart').getContext('2d');
    
    // Gradient backgrounds for visual richness (Outfit/Plus Jakarta theme matches)
    const gradientViolet = ctx.createLinearGradient(0, 0, 0, 300);
    gradientViolet.addColorStop(0, 'rgba(139, 92, 246, 0.45)');
    gradientViolet.addColorStop(1, 'rgba(139, 92, 246, 0.02)');

    const activeMgr = portfolios[currentManager];
    const datasetLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const initialData = activeMgr.chartData[currentChartMode];

    financialChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datasetLabels,
            datasets: [{
                label: 'Managed Revenue ($)',
                data: initialData,
                borderColor: '#8b5cf6',
                borderWidth: 3,
                backgroundColor: gradientViolet,
                fill: true,
                tension: 0.35,
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                pointBorderWidth: 1.5,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#6366f1',
                pointHoverBorderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // We use our custom UI buttons instead
                },
                tooltip: {
                    backgroundColor: '#0f0e22',
                    titleColor: '#f3f4f6',
                    bodyColor: '#9ca3af',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `Value: $${context.raw.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.04)',
                        drawTicks: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: 'Plus Jakarta Sans',
                            size: 11
                        },
                        padding: 10
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.04)',
                        drawTicks: false
                    },
                    ticks: {
                        color: '#9ca3af',
                        font: {
                            family: 'Plus Jakarta Sans',
                            size: 11
                        },
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        },
                        padding: 10
                    }
                }
            }
        }
    });
}

function updateFinancialChart() {
    if (!financialChartInstance) return;

    const activeMgr = portfolios[currentManager];
    const newData = activeMgr.chartData[currentChartMode];
    const newLabel = currentChartMode === "revenue" ? "Managed Revenue ($)" : "Commission Earned ($)";
    const themeColor = currentChartMode === "revenue" ? "#8b5cf6" : "#10b981";

    financialChartInstance.data.datasets[0].data = newData;
    financialChartInstance.data.datasets[0].label = newLabel;
    financialChartInstance.data.datasets[0].borderColor = themeColor;
    financialChartInstance.data.datasets[0].pointBackgroundColor = themeColor;

    // Update gradient background color dynamically
    const ctx = document.getElementById('revenue-chart').getContext('2d');
    const newGradient = ctx.createLinearGradient(0, 0, 0, 300);
    if (currentChartMode === "revenue") {
        newGradient.addColorStop(0, 'rgba(139, 92, 246, 0.45)');
        newGradient.addColorStop(1, 'rgba(139, 92, 246, 0.02)');
    } else {
        newGradient.addColorStop(0, 'rgba(16, 185, 129, 0.45)');
        newGradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
    }
    financialChartInstance.data.datasets[0].backgroundColor = newGradient;

    financialChartInstance.update('active');
}

// --- ADDITIONAL QUICK ACTION TRIGGERS ---
function exportCSVReport() {
    const activeMgr = portfolios[currentManager];
    
    // Compose dummy CSV structure representing actual details
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Campaign Name,Brand Partner,Creator Assigned,Platform,Budget,Progress,Status\n";
    
    activeMgr.campaigns.forEach(c => {
        csvContent += `"${c.name}","${c.brand}","${c.creator}","${c.platform}",${c.budget},${c.progress}%,${c.status}\n`;
    });
    
    // Create element download action
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${activeMgr.name.replace(/\s+/g, '_')}_Portfolio_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast("CSV report compiled and downloaded!", "success");
}

function runPlatformHealthCheck() {
    showToast("Pinging external API gateways...", "info");
    
    setTimeout(() => {
        const statuses = ["YouTube V3 API: ONLINE (32ms)", "TikTok Business API: ONLINE (45ms)", "Instagram Graph API: ONLINE (21ms)"];
        notifications.unshift({
            id: "n_" + Date.now(),
            text: "Platform status check complete: All core integrations operational.",
            time: "Just now",
            urgent: false
        });
        
        renderNotifications();
        showToast("Check Complete: Services operational!", "success");
    }, 1200);
}

// --- APP LAUNCH ---
window.addEventListener("DOMContentLoaded", () => {
    initEventListeners();
    renderDashboard();
    initFinancialChart();
    
    // Display greeting toast
    setTimeout(() => {
        showToast("Connected to CreatorsMela backend servers.", "info");
    }, 800);
});

// Expose actions to window context for onclick inline handlers
window.toggleTaskStatus = toggleTaskStatus;
window.deleteTask = deleteTask;
window.approveItem = approveItem;
window.rejectItem = rejectItem;
window.openPreviewModal = openPreviewModal;
