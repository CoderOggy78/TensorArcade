/* ==========================================================================
   TENSORARCADE: CORE APPLICATION LOGIC
   Handles UI state, search/filter, gamified progress, bookmarks & modal
   ========================================================================== */

(function () {
  'use strict';

  // State Management
  const state = {
    activeCategory: 'all',
    activeTrack: 'all',
    activeProjectTier: 'all',
    searchQuery: '',
    completedMilestones: new Set(JSON.parse(localStorage.getItem('tensorarcade_completed') || '[]')),
    bookmarkedResources: new Set(JSON.parse(localStorage.getItem('tensorarcade_bookmarks') || '[]')),
    totalXP: 0,
    theme: localStorage.getItem('tensorarcade_theme') || 'light'
  };

  // DOM Cache
  const elements = {
    hudLevelBadge: document.getElementById('hud-level-badge'),
    hudRankText: document.getElementById('hud-rank-text'),
    hudBarFill: document.getElementById('hud-bar-fill'),
    hudStatsText: document.getElementById('hud-stats-text'),
    roadmapContainer: document.getElementById('roadmap-stages-list'),
    resourcesGrid: document.getElementById('resources-cards-grid'),
    resourceCount: document.getElementById('resource-count'),
    searchInput: document.getElementById('resource-search-input'),
    filterChips: document.querySelectorAll('.filter-chip'),
    trackPills: document.querySelectorAll('.track-pill'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    soundToggleBtn: document.getElementById('sound-toggle-btn'),
    modal: document.getElementById('arcade-detail-modal'),
    modalContent: document.getElementById('modal-dynamic-content'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    exportProgressBtn: document.getElementById('export-progress-btn'),
    resetProgressBtn: document.getElementById('reset-progress-btn'),
    projectsGrid: document.getElementById('projects-cards-grid'),
    projectTierBtns: document.querySelectorAll('.project-tier-btn'),
    formulasGrid: document.getElementById('formulas-grid'),
    toolsGrid: document.getElementById('tools-arsenal-grid')
  };

  // Rank Tiers based on XP
  const RANK_TIERS = [
    { threshold: 0, level: 'LVL 01', rank: 'Novice Hacker' },
    { threshold: 600, level: 'LVL 02', rank: 'Vector Apprentice' },
    { threshold: 1400, level: 'LVL 03', rank: 'Gradient Disciple' },
    { threshold: 2400, level: 'LVL 04', rank: 'Neural Tinkerer' },
    { threshold: 3600, level: 'LVL 05', rank: 'Attention Architect' },
    { threshold: 4800, level: 'LVL 06', rank: 'Agent Engineer' },
    { threshold: 6200, level: 'LVL 07', rank: 'MLOps Commander' },
    { threshold: 7800, level: 'LVL 08', rank: 'Staff Applied Scientist' },
    { threshold: 9500, level: 'LVL 09', rank: 'Principal AI Luminary' },
    { threshold: 12000, level: 'LVL 10', rank: 'Turing-Level Overlord' }
  ];

  /* --------------------------------------------------------------------------
     INITIALIZATION
     -------------------------------------------------------------------------- */
  function init() {
    applyTheme(state.theme);
    updateSoundIcon();
    renderRoadmap();
    renderResources();
    renderVideoVault();
    renderBookshelf();
    renderPlaybook();
    renderProjects();
    renderFormulas();
    renderToolArsenal();
    updateHUD();
    bindEvents();
    initCustomCursor();
  }

  /* --------------------------------------------------------------------------
     THEME & AUDIO TOGGLES
     -------------------------------------------------------------------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tensorarcade_theme', theme);
    state.theme = theme;
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
      elements.themeToggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
    }
  }

  function updateSoundIcon() {
    if (elements.soundToggleBtn) {
      const isMuted = window.arcadeAudio.isMuted;
      elements.soundToggleBtn.textContent = isMuted ? '🔇' : '🔊';
      elements.soundToggleBtn.setAttribute('title', isMuted ? 'Unmute 8-Bit Audio' : 'Mute Audio');
    }
  }

  /* --------------------------------------------------------------------------
     HUD & GAMIFICATION PROGRESS
     -------------------------------------------------------------------------- */
  function updateHUD() {
    let totalMilestones = 0;
    ROADMAP_STAGES.forEach(stage => {
      stage.modules.forEach(m => {
        totalMilestones += m.milestones.length;
      });
    });

    const completedCount = state.completedMilestones.size;
    const progressPercent = totalMilestones > 0 ? Math.round((completedCount / totalMilestones) * 100) : 0;

    // Calculate XP: 100 XP per completed milestone
    const currentXP = completedCount * 100;
    state.totalXP = currentXP;

    // Determine current rank
    let currentTier = RANK_TIERS[0];
    for (let i = RANK_TIERS.length - 1; i >= 0; i--) {
      if (currentXP >= RANK_TIERS[i].threshold) {
        currentTier = RANK_TIERS[i];
        break;
      }
    }

    if (elements.hudLevelBadge) elements.hudLevelBadge.textContent = currentTier.level;
    if (elements.hudRankText) elements.hudRankText.textContent = currentTier.rank;
    if (elements.hudBarFill) elements.hudBarFill.style.width = `${progressPercent}%`;
    if (elements.hudStatsText) {
      elements.hudStatsText.textContent = `${completedCount}/${totalMilestones} Milestones (${progressPercent}%) • ${currentXP} XP`;
    }
  }

  /* --------------------------------------------------------------------------
     ROADMAP RENDERING & MILESTONE INTERACTION
     -------------------------------------------------------------------------- */
  function renderRoadmap() {
    if (!elements.roadmapContainer) return;

    elements.roadmapContainer.innerHTML = ROADMAP_STAGES.map(stage => {
      // Calculate stage completion
      let stageMilestones = 0;
      let stageCompleted = 0;
      stage.modules.forEach(m => {
        m.milestones.forEach(item => {
          stageMilestones++;
          if (state.completedMilestones.has(item.id)) stageCompleted++;
        });
      });
      const stagePercent = stageMilestones > 0 ? Math.round((stageCompleted / stageMilestones) * 100) : 0;

      return `
        <article class="stage-card" id="${stage.id}" data-stage-id="${stage.id}">
          <div class="stage-header" tabindex="0" role="button" aria-expanded="true" aria-controls="body-${stage.id}">
            <div class="stage-info">
              <div class="stage-number">${stage.number}</div>
              <div class="stage-meta">
                <h3 class="stage-title">${stage.title}</h3>
                <div class="stage-stats">
                  <span>${stage.tagline}</span>
                  <span>•</span>
                  <span class="neo-badge neo-badge-amber">+${stage.xp} XP</span>
                  <span>•</span>
                  <span class="stage-completion-pill font-mono">${stagePercent}% Completed</span>
                </div>
              </div>
            </div>
            <div class="stage-toggle-icon">▼</div>
          </div>
          <div class="stage-body" id="body-${stage.id}">
            <p class="stage-description">${stage.description}</p>
            <div class="stage-modules-grid">
              ${stage.modules.map(mod => `
                <div class="module-box">
                  <div class="module-header">
                    <h4 class="module-title">${mod.name}</h4>
                    <span class="neo-badge neo-badge-blue">${mod.milestones.length} Tasks</span>
                  </div>
                  <ul class="milestones-list">
                    ${mod.milestones.map(m => {
                      const isChecked = state.completedMilestones.has(m.id);
                      return `
                        <li class="milestone-item ${isChecked ? 'completed' : ''}" data-milestone-id="${m.id}">
                          <input type="checkbox" class="milestone-checkbox" id="chk-${m.id}" ${isChecked ? 'checked' : ''} aria-label="${m.text}">
                          <span>${m.text}</span>
                        </li>
                      `;
                    }).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
            <div class="stage-resources-footer">
              <button class="neo-btn neo-btn-sm view-stage-res-btn" data-stage="${stage.id}">
                Explore Stage Resources (${stage.linkedResourceIds.length}) ↗
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach stage accordion toggles
    document.querySelectorAll('.stage-header').forEach(header => {
      header.addEventListener('click', () => {
        window.arcadeAudio.playClick();
        const card = header.closest('.stage-card');
        card.classList.toggle('collapsed');
        const isExpanded = !card.classList.contains('collapsed');
        header.setAttribute('aria-expanded', isExpanded);
      });
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    });

    // Attach milestone checkbox toggles
    document.querySelectorAll('.milestone-checkbox').forEach(box => {
      box.addEventListener('change', (e) => {
        const milestoneItem = box.closest('.milestone-item');
        const mId = milestoneItem.dataset.milestoneId;

        if (box.checked) {
          state.completedMilestones.add(mId);
          milestoneItem.classList.add('completed');
          window.arcadeAudio.playCheck();

          // Check if level up
          const prevXP = (state.completedMilestones.size - 1) * 100;
          const newXP = state.completedMilestones.size * 100;
          const passedTier = RANK_TIERS.find(t => newXP >= t.threshold && prevXP < t.threshold && t.threshold > 0);
          if (passedTier) {
            window.arcadeAudio.playLevelUp();
            showToast(`LEVEL UP! You reached ${passedTier.level}: ${passedTier.rank}! 🚀`);
          }
        } else {
          state.completedMilestones.delete(mId);
          milestoneItem.classList.remove('completed');
          window.arcadeAudio.playClick();
        }

        localStorage.setItem('tensorarcade_completed', JSON.stringify(Array.from(state.completedMilestones)));
        updateHUD();
        updateStageProgress(milestoneItem.closest('.stage-card'));
      });
    });

    // Stage resources jump buttons
    document.querySelectorAll('.view-stage-res-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.arcadeAudio.playClick();
        const resSection = document.getElementById('resources');
        if (resSection) {
          resSection.scrollIntoView({ behavior: 'auto' });
        }
      });
    });
  }

  function updateStageProgress(stageCard) {
    if (!stageCard) return;
    const allBoxes = stageCard.querySelectorAll('.milestone-checkbox');
    const checkedBoxes = stageCard.querySelectorAll('.milestone-checkbox:checked');
    const percent = allBoxes.length > 0 ? Math.round((checkedBoxes.length / allBoxes.length) * 100) : 0;
    const pill = stageCard.querySelector('.stage-completion-pill');
    if (pill) pill.textContent = `${percent}% Completed`;
  }

  /* --------------------------------------------------------------------------
     RESOURCE MATRIX RENDERING & FILTERING
     -------------------------------------------------------------------------- */
  function renderResources() {
    if (!elements.resourcesGrid) return;

    let filtered = RESOURCES_DATA.filter(res => {
      // Category filter
      if (state.activeCategory !== 'all' && res.category !== state.activeCategory) return false;
      // Track filter
      if (state.activeTrack !== 'all' && res.track !== state.activeTrack) return false;
      // Search query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const titleMatch = res.title.toLowerCase().includes(q);
        const creatorMatch = res.creator.toLowerCase().includes(q);
        const descMatch = res.description.toLowerCase().includes(q);
        const tagMatch = res.tags.some(t => t.toLowerCase().includes(q));
        if (!titleMatch && !creatorMatch && !descMatch && !tagMatch) return false;
      }
      return true;
    });

    if (elements.resourceCount) {
      elements.resourceCount.textContent = `${filtered.length} Curated Items`;
    }

    if (filtered.length === 0) {
      elements.resourcesGrid.innerHTML = `
        <div class="neo-box" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
          <p class="pixel-font" style="font-size: 1rem; margin-bottom: 0.75rem;">NO RESOURCES FOUND</p>
          <p class="mono-font" style="color: var(--text-secondary);">Try clearing your search query or switching filters.</p>
          <button class="neo-btn neo-btn-primary" id="clear-filters-btn" style="margin-top: 1.5rem;">Reset All Filters</button>
        </div>
      `;
      const clearBtn = document.getElementById('clear-filters-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          state.searchQuery = '';
          state.activeCategory = 'all';
          state.activeTrack = 'all';
          if (elements.searchInput) elements.searchInput.value = '';
          updateFilterButtons();
          renderResources();
        });
      }
      return;
    }

    elements.resourcesGrid.innerHTML = filtered.map(res => {
      const isBookmarked = state.bookmarkedResources.has(res.id);
      return `
        <div class="resource-card" data-res-id="${res.id}">
          <div class="resource-card-top">
            <div class="resource-badge-row">
              <span class="neo-badge neo-badge-${getBadgeColor(res.category)}">${res.category}</span>
              <span class="neo-badge neo-badge-purple">${res.difficulty}</span>
              ${res.isVerified ? '<span class="neo-badge neo-badge-amber" title="Verified Masterwork">⭐ Gold Pick</span>' : ''}
              <span class="mono-font" style="font-size: 0.75rem; color: var(--text-muted); margin-left: auto;">${res.duration}</span>
            </div>
            <h3 class="resource-title">${res.title}</h3>
            <div class="resource-author">by ${res.creator}</div>
            <p class="resource-desc">${res.description}</p>
            <div class="resource-tags">
              ${res.tags.map(tag => `<span class="resource-tag">#${tag}</span>`).join('')}
            </div>
          </div>
          <div class="resource-card-footer">
            <button class="bookmark-btn ${isBookmarked ? 'saved' : ''}" data-bookmark-id="${res.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Save to Bookmarks'}" aria-label="Bookmark">
              ${isBookmarked ? '★' : '☆'}
            </button>
            <div style="display: flex; gap: 0.5rem;">
              <button class="neo-btn neo-btn-sm inspect-res-btn" data-modal-id="${res.id}">Deep Dive 🔍</button>
              <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="neo-btn neo-btn-sm neo-btn-primary">Visit ↗</a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bookmark event listeners
    elements.resourcesGrid.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.bookmarkId;
        if (state.bookmarkedResources.has(id)) {
          state.bookmarkedResources.delete(id);
          btn.classList.remove('saved');
          btn.textContent = '☆';
          window.arcadeAudio.playClick();
        } else {
          state.bookmarkedResources.add(id);
          btn.classList.add('saved');
          btn.textContent = '★';
          window.arcadeAudio.playCheck();
        }
        localStorage.setItem('tensorarcade_bookmarks', JSON.stringify(Array.from(state.bookmarkedResources)));
      });
    });

    // Deep Dive modal inspection
    elements.resourcesGrid.querySelectorAll('.inspect-res-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.modalId;
        openModal(id);
      });
    });
  }

  function getBadgeColor(category) {
    switch (category) {
      case 'video': return 'red';
      case 'course': return 'green';
      case 'book': return 'amber';
      case 'paper': return 'purple';
      case 'repo': return 'blue';
      default: return 'blue';
    }
  }

  /* --------------------------------------------------------------------------
     VIDEO VAULT & PLAYLISTS
     -------------------------------------------------------------------------- */
  function renderVideoVault() {
    const container = document.getElementById('video-vault-grid');
    if (!container) return;

    const videoResources = RESOURCES_DATA.filter(r => r.category === 'video' || r.category === 'course');

    container.innerHTML = videoResources.slice(0, 9).map(item => `
      <div class="video-card">
        <div class="video-thumb-container" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8));">
          <div class="video-play-badge">▶</div>
          <span class="video-duration">${item.duration}</span>
        </div>
        <div class="video-card-body">
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span class="neo-badge neo-badge-red">YouTube / Lecture</span>
            <span class="neo-badge neo-badge-amber">${item.difficulty}</span>
          </div>
          <h4 class="resource-title" style="font-size: 0.95rem;">${item.title}</h4>
          <div class="resource-author">${item.creator}</div>
          <p class="resource-desc" style="font-size: 0.82rem;">${item.description.slice(0, 110)}...</p>
          <div style="margin-top: auto; padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
            <button class="neo-btn neo-btn-sm inspect-res-btn" data-modal-id="${item.id}">Syllabus</button>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="neo-btn neo-btn-sm neo-btn-primary">Watch Now ↗</a>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.inspect-res-btn').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.modalId));
    });
  }

  /* --------------------------------------------------------------------------
     CANONICAL BOOKSHELF
     -------------------------------------------------------------------------- */
  function renderBookshelf() {
    const container = document.getElementById('bookshelf-grid');
    if (!container) return;

    const bookResources = RESOURCES_DATA.filter(r => r.category === 'book' || r.tags.includes('Textbook'));

    container.innerHTML = bookResources.map(b => `
      <div class="book-card">
        <div>
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span class="neo-badge neo-badge-green">100% Free / Open Access</span>
          </div>
          <h3 class="resource-title" style="font-size: 1.05rem;">${b.title}</h3>
          <p class="resource-author" style="margin-bottom: 0.75rem;">By ${b.creator}</p>
          <p class="resource-desc">${b.description}</p>
        </div>
        <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
          <span class="mono-font" style="font-size: 0.75rem; color: var(--text-muted);">${b.duration}</span>
          <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="neo-btn neo-btn-sm neo-btn-amber">Read Online ↗</a>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     FAANG PLAYBOOK RENDERING
     -------------------------------------------------------------------------- */
  function renderPlaybook() {
    const systemDesignContainer = document.getElementById('system-design-steps');
    if (systemDesignContainer) {
      systemDesignContainer.innerHTML = INTERVIEW_PLAYBOOK.systemDesignFramework.map(step => `
        <li class="playbook-step-item">
          <span class="playbook-step-num">STEP 0${step.step}</span>
          <div>
            <strong style="color: var(--text-primary); font-family: var(--font-mono); font-size: 0.95rem;">${step.title}</strong>
            <p style="margin-top: 0.25rem;">${step.description}</p>
          </div>
        </li>
      `).join('');
    }

    const careerGrid = document.getElementById('career-tracks-grid');
    if (careerGrid) {
      careerGrid.innerHTML = INTERVIEW_PLAYBOOK.careerTracks.map(track => `
        <div class="neo-box" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <h4 class="pixel-font" style="font-size: 0.85rem; color: var(--text-primary);">${track.title}</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">${track.focus}</p>
          <div style="font-size: 0.82rem; font-family: var(--font-mono); background: var(--bg-canvas); padding: 0.75rem; border: 1.5px solid var(--border-color); border-radius: 4px;">
            <div><strong style="color: #059669;">PROS:</strong> ${track.pros}</div>
            <div style="margin-top: 0.35rem;"><strong style="color: #DC2626;">CONS:</strong> ${track.cons}</div>
            <div style="margin-top: 0.35rem;"><strong style="color: #D97706;">INTERVIEW:</strong> ${track.interviewEmphasis}</div>
          </div>
        </div>
      `).join('');
    }

    const whiteboardContainer = document.getElementById('whiteboard-drills-list');
    if (whiteboardContainer) {
      whiteboardContainer.innerHTML = INTERVIEW_PLAYBOOK.whiteboardMathDrills.map((drill, idx) => `
        <div class="neo-box" style="padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="display: flex; justify-content: space-between;">
            <span class="neo-badge neo-badge-red">Math Drill 0${idx + 1}</span>
          </div>
          <strong style="font-family: var(--font-mono); font-size: 0.95rem;">${drill.question}</strong>
          <details style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary); cursor: pointer;">
            <summary style="font-weight: 700; color: var(--arcade-blue);">Show Mathematical Derivation & Solution</summary>
            <div style="margin-top: 0.6rem; padding: 0.75rem; background: var(--bg-canvas); border: 1.5px solid var(--border-color); border-radius: 4px;">
              <p style="font-style: italic; margin-bottom: 0.4rem;">Hint: ${drill.hint}</p>
              <p style="font-family: var(--font-mono);">${drill.answer}</p>
            </div>
          </details>
        </div>
      `).join('');
    }
  }

  /* --------------------------------------------------------------------------
     PROJECT QUEST VAULT (PORTFOLIO TIERS)
     -------------------------------------------------------------------------- */
  function renderProjects() {
    if (!elements.projectsGrid || typeof PROJECTS_DATA === 'undefined') return;

    const filtered = PROJECTS_DATA.filter(p => {
      if (state.activeProjectTier === 'all') return true;
      return p.tier.toLowerCase() === state.activeProjectTier.toLowerCase();
    });

    elements.projectsGrid.innerHTML = filtered.map(proj => {
      const isGod = proj.tier.toLowerCase() === 'god level';
      return `
        <div class="project-card ${isGod ? 'tier-god' : ''}">
          <div>
            <div class="project-header-top">
              <span class="neo-badge ${proj.difficultyBadge}">
                ${isGod ? '⚡ GOD LEVEL' : proj.tier}
              </span>
              <span class="project-domain">${proj.domain}</span>
            </div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-summary" style="margin-top: 0.6rem;">${proj.summary}</p>
            
            <div class="project-meta-box" style="margin-top: 1rem;">
              <div><strong>Dataset:</strong> ${proj.dataset}</div>
              <div style="margin-top: 0.3rem;"><strong>Est. Timeline:</strong> ${proj.timeEstimate}</div>
              <div style="margin-top: 0.3rem; display: flex; flex-wrap: wrap; gap: 0.3rem;">
                ${proj.techStack.map(t => `<span class="resource-tag">${t}</span>`).join('')}
              </div>
            </div>

            <div class="resume-bullet-callout" style="margin-top: 1rem;">
              <span class="resume-bullet-label">★ RESUME IMPACT BULLET:</span>
              "${proj.resumeBullet}"
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; padding-top: 1rem; border-top: 1.5px dashed var(--border-color);">
            <span class="mono-font" style="font-size: 0.72rem; color: var(--text-muted);">${proj.tierLevel}</span>
            <button class="neo-btn neo-btn-sm ${isGod ? 'neo-btn-primary' : ''} inspect-proj-btn" data-project-id="${proj.id}">
              Inspect Blueprint 🔍
            </button>
          </div>
        </div>
      `;
    }).join('');

    elements.projectsGrid.querySelectorAll('.inspect-proj-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openProjectModal(btn.dataset.projectId);
      });
    });
  }

  function openProjectModal(projectId) {
    if (typeof PROJECTS_DATA === 'undefined') return;
    const proj = PROJECTS_DATA.find(p => p.id === projectId);
    if (!proj || !elements.modal || !elements.modalContent) return;

    window.arcadeAudio.playModalOpen();

    const isGod = proj.tier.toLowerCase() === 'god level';

    elements.modalContent.innerHTML = `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="neo-badge ${proj.difficultyBadge}">${isGod ? '⚡ GOD LEVEL' : proj.tier}</span>
        <span class="neo-badge neo-badge-blue">${proj.domain}</span>
        <span class="neo-badge neo-badge-amber">${proj.timeEstimate}</span>
      </div>
      <h2 class="mono-font" style="font-size: 1.3rem; font-weight: 700; margin-top: 0.35rem;">${proj.title}</h2>
      
      <div style="background: var(--bg-canvas); padding: 1.25rem; border: 2px solid var(--border-color); border-radius: 6px; margin-top: 0.75rem;">
        <h4 class="pixel-font" style="font-size: 0.75rem; margin-bottom: 0.5rem; color: var(--arcade-amber);">MISSION BRIEF & ARCHITECTURE</h4>
        <p style="font-size: 0.92rem; line-height: 1.6;">${proj.summary}</p>
        <div style="margin-top: 0.75rem; font-family: var(--font-mono); font-size: 0.8rem; background: var(--bg-card); padding: 0.6rem; border: 1.5px solid var(--border-color); border-radius: 4px;">
          <strong>Target Repo Structure:</strong> <code>${proj.githubArchitecture}</code>
        </div>
      </div>

      <div style="margin-top: 0.75rem;">
        <h4 class="pixel-font" style="font-size: 0.75rem; margin-bottom: 0.6rem; color: var(--arcade-amber);">CORE LEARNING OUTCOMES</h4>
        <ul style="list-style: square inside; display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.88rem; color: var(--text-secondary);">
          ${proj.learningOutcomes.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="resume-bullet-callout" style="margin-top: 0.75rem;">
        <span class="resume-bullet-label">★ HOW TO PHRASE ON YOUR RESUME / GITHUB:</span>
        "${proj.resumeBullet}"
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem; border-top: 1.5px dashed var(--border-color); padding-top: 1.25rem;">
        <button class="neo-btn" id="modal-close-inner-btn">Close</button>
        <a href="#roadmap" onclick="document.getElementById('arcade-detail-modal').setAttribute('hidden', 'true');" class="neo-btn neo-btn-primary">Find Prerequisite Courses ➔</a>
      </div>
    `;

    elements.modal.removeAttribute('hidden');
    elements.modal.classList.remove('hidden');

    const innerClose = document.getElementById('modal-close-inner-btn');
    if (innerClose) innerClose.addEventListener('click', closeModal);
  }

  /* --------------------------------------------------------------------------
     FIRST PRINCIPLES FORMULA SHEET & TOOL ARSENAL
     -------------------------------------------------------------------------- */
  function renderFormulas() {
    if (!elements.formulasGrid || typeof FORMULA_SHEET_DATA === 'undefined') return;

    elements.formulasGrid.innerHTML = FORMULA_SHEET_DATA.map(category => `
      <div class="formula-category-box">
        <h3 class="pixel-font" style="font-size: 0.95rem; color: var(--arcade-amber);">[ ${category.category.toUpperCase()} ]</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${category.items.map(item => `
            <div class="formula-item">
              <strong style="font-family: var(--font-mono); font-size: 0.95rem; color: var(--text-primary);">${item.name}</strong>
              <div class="formula-code">${item.formula}</div>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${item.intuition}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderToolArsenal() {
    if (!elements.toolsGrid || typeof TOOL_ARSENAL_DATA === 'undefined') return;

    elements.toolsGrid.innerHTML = TOOL_ARSENAL_DATA.map(group => `
      <div class="tool-group-card">
        <h4 class="pixel-font" style="font-size: 0.85rem; color: var(--text-primary);">${group.category}</h4>
        <ul class="tool-list">
          ${group.tools.map(tool => `
            <li class="tool-list-item">
              <div>
                <strong style="font-family: var(--font-mono); font-size: 0.88rem; color: var(--text-primary);">${tool.name}</strong>
                <p style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.2rem;">${tool.role}</p>
              </div>
              <span class="neo-badge neo-badge-blue" style="font-size: 0.65rem;">${tool.badge}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     MODAL DIALOG
     -------------------------------------------------------------------------- */
  function openModal(resourceId) {
    const resource = RESOURCES_DATA.find(r => r.id === resourceId);
    if (!resource || !elements.modal || !elements.modalContent) return;

    window.arcadeAudio.playModalOpen();

    elements.modalContent.innerHTML = `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span class="neo-badge neo-badge-${getBadgeColor(resource.category)}">${resource.category}</span>
        <span class="neo-badge neo-badge-purple">${resource.difficulty}</span>
        <span class="neo-badge neo-badge-blue">${resource.duration}</span>
      </div>
      <h2 class="mono-font" style="font-size: 1.35rem; font-weight: 700;">${resource.title}</h2>
      <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-muted);">Creator: ${resource.creator}</div>
      
      <div style="background: var(--bg-canvas); padding: 1.25rem; border: 2px solid var(--border-color); border-radius: 6px;">
        <h4 class="pixel-font" style="font-size: 0.75rem; margin-bottom: 0.5rem; color: var(--arcade-amber);">OVERVIEW</h4>
        <p style="font-size: 0.92rem; line-height: 1.6;">${resource.description}</p>
        <p style="font-size: 0.88rem; line-height: 1.6; margin-top: 0.75rem; color: var(--text-secondary);">${resource.deepDive}</p>
      </div>

      <div>
        <h4 class="pixel-font" style="font-size: 0.75rem; margin-bottom: 0.75rem; color: var(--arcade-amber);">CURRICULUM & SYLLABUS HIGHLIGHTS</h4>
        <ul style="list-style: square inside; display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.88rem; color: var(--text-secondary);">
          ${resource.syllabus ? resource.syllabus.map(s => `<li>${s}</li>`).join('') : '<li>Comprehensive open-access curriculum</li>'}
        </ul>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem; border-top: 1.5px dashed var(--border-color); padding-top: 1.25rem;">
        <button class="neo-btn" id="modal-close-inner-btn">Close</button>
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="neo-btn neo-btn-primary">Launch Resource ↗</a>
      </div>
    `;

    elements.modal.removeAttribute('hidden');
    elements.modal.classList.remove('hidden');

    const innerClose = document.getElementById('modal-close-inner-btn');
    if (innerClose) innerClose.addEventListener('click', closeModal);
  }

  function closeModal() {
    if (!elements.modal) return;
    window.arcadeAudio.playClick();
    elements.modal.setAttribute('hidden', 'true');
    elements.modal.classList.add('hidden');
  }

  /* --------------------------------------------------------------------------
     EVENTS & SHORTCUTS
     -------------------------------------------------------------------------- */
  function bindEvents() {
    // Theme Switcher
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', () => {
        window.arcadeAudio.playClick();
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    // Audio Mute Toggle
    if (elements.soundToggleBtn) {
      elements.soundToggleBtn.addEventListener('click', () => {
        window.arcadeAudio.toggleMute();
        updateSoundIcon();
        if (!window.arcadeAudio.isMuted) window.arcadeAudio.playCheck();
      });
    }

    // Modal Close button & Overlay Click
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeModal);
    }
    if (elements.modal) {
      elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
      });
    }

    // Keyboard navigation: Escape to close modal, Slash to focus search
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.modal && !elements.modal.hasAttribute('hidden')) {
        closeModal();
      }
      if (e.key === '/' && document.activeElement !== elements.searchInput) {
        e.preventDefault();
        if (elements.searchInput) {
          elements.searchInput.focus();
          elements.searchInput.select();
        }
      }
    });

    // Search Input with Debounce
    let debounceTimer;
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          state.searchQuery = e.target.value.trim();
          renderResources();
        }, 150);
      });
    }

    // Category Filter Chips
    elements.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        window.arcadeAudio.playClick();
        elements.filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeCategory = chip.dataset.category || 'all';
        renderResources();
      });
    });

    // Track Pills
    elements.trackPills.forEach(pill => {
      pill.addEventListener('click', () => {
        window.arcadeAudio.playClick();
        elements.trackPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeTrack = pill.dataset.track || 'all';
        renderResources();
      });
    });

    // Project Tier Filter Buttons
    document.querySelectorAll('.project-tier-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.arcadeAudio.playClick();
        document.querySelectorAll('.project-tier-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeProjectTier = btn.dataset.tier || 'all';
        renderProjects();
      });
    });

    // Export Progress to Markdown / Notion
    if (elements.exportProgressBtn) {
      elements.exportProgressBtn.addEventListener('click', () => {
        window.arcadeAudio.playCheck();
        exportStudyPlanMarkdown();
      });
    }

    // Reset Progress
    if (elements.resetProgressBtn) {
      elements.resetProgressBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all completed milestones and XP?')) {
          window.arcadeAudio.playClick();
          state.completedMilestones.clear();
          localStorage.removeItem('tensorarcade_completed');
          renderRoadmap();
          updateHUD();
          showToast('Progress reset to Level 1.');
        }
      });
    }
  }

  function updateFilterButtons() {
    elements.filterChips.forEach(c => {
      if (c.dataset.category === state.activeCategory) c.classList.add('active');
      else c.classList.remove('active');
    });
    elements.trackPills.forEach(p => {
      if (p.dataset.track === state.activeTrack) p.classList.add('active');
      else p.classList.remove('active');
    });
  }

  /* --------------------------------------------------------------------------
     EXPORT PROGRESS (NOTION / MARKDOWN READY)
     -------------------------------------------------------------------------- */
  function exportStudyPlanMarkdown() {
    let md = `# TensorArcade: My Machine Learning Learning Plan & Progress\n\n`;
    md += `**Player Level:** ${elements.hudLevelBadge ? elements.hudLevelBadge.textContent : 'LVL 01'} • **Total XP:** ${state.totalXP}\n\n`;
    md += `---\n\n`;

    ROADMAP_STAGES.forEach(stage => {
      md += `## Stage ${stage.number}: ${stage.title}\n`;
      md += `*${stage.tagline}*\n\n`;
      stage.modules.forEach(mod => {
        md += `### ${mod.name}\n`;
        mod.milestones.forEach(item => {
          const checked = state.completedMilestones.has(item.id);
          md += `- [${checked ? 'x' : ' '}] ${item.text}\n`;
        });
        md += `\n`;
      });
    });

    // Copy to clipboard or trigger download
    navigator.clipboard.writeText(md).then(() => {
      showToast('Markdown checklist copied to clipboard! Paste directly into Notion or Obsidian.');
    }).catch(() => {
      // Fallback: download file
      const blob = new Blob([md], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'TensorArcade_ML_Roadmap.md';
      a.click();
      URL.revokeObjectURL(url);
      showToast('Downloaded TensorArcade_ML_Roadmap.md');
    });
  }

  /* --------------------------------------------------------------------------
     TOAST NOTIFICATIONS
     -------------------------------------------------------------------------- */
  function showToast(message) {
    let toast = document.getElementById('arcade-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'arcade-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.right = '24px';
      toast.style.zIndex = '99999';
      toast.style.background = 'var(--arcade-amber)';
      toast.style.color = '#121826';
      toast.style.fontFamily = 'var(--font-mono)';
      toast.style.fontWeight = '700';
      toast.style.fontSize = '0.85rem';
      toast.style.padding = '0.85rem 1.25rem';
      toast.style.border = '2px solid var(--border-color)';
      toast.style.borderRadius = '6px';
      toast.style.boxShadow = 'var(--shadow-md)';
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3500);
  }

  /* --------------------------------------------------------------------------
     CUSTOM RETRO ARCADE CURSOR ANIMATION
     -------------------------------------------------------------------------- */
  function initCustomCursor() {
    const dot = document.getElementById('arcade-cursor-dot');
    const ring = document.getElementById('arcade-cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;

    // Direct movement for the center pixel dot
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        dot.style.opacity = '1';
        ring.style.opacity = '0.85';
        ringX = mouseX;
        ringY = mouseY;
        isVisible = true;
      }

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    // Smooth Lerp animation loop for the outer crosshair target ring
    function renderCursor() {
      const lerpFactor = 0.18;
      ringX += (mouseX - ringX) * lerpFactor;
      ringY += (mouseY - ringY) * lerpFactor;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover state detection with event delegation
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, input, select, textarea, [role="button"], .neo-box-interactive, .milestone-item, .filter-chip, .project-card, .video-card, .book-card, details, summary');
      if (target) {
        document.body.classList.add('cursor-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, input, select, textarea, [role="button"], .neo-box-interactive, .milestone-item, .filter-chip, .project-card, .video-card, .book-card, details, summary');
      if (target) {
        document.body.classList.remove('cursor-hovering');
      }
    });

    // Click press effect
    window.addEventListener('mousedown', () => {
      document.body.classList.add('cursor-clicking');
    });

    window.addEventListener('mouseup', () => {
      document.body.classList.remove('cursor-clicking');
    });

    // Window blur/leave handling
    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '0.85';
      isVisible = true;
    });
  }

  // Start app on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
