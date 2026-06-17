---
title: Sovereign Header and Scrollable Sidebar
status: in_progress
priority: high
type: feature
tags: [header, navigation, layout, scrollable]
created_by: agent
created_at: 2026-06-17T03:54:00Z
position: 3
---

## Notes
Add full-width top header with Sovereign Embassy branding and upgrade the navigation sidebar to be vertically scrollable. Header should display logo, main title "Dominion Freedom Guide", and subtitle "Ministry of Wellness & Education | Kingdom of Heaven Embassy Governance".

## Checklist
- [ ] Create SovereignHeader component with logo and branding
- [ ] Add shield logo icon to header
- [ ] Display main title in bold authoritative font
- [ ] Add subtitle with ministry information
- [ ] Make NavigationDock scrollable (overflow-y: auto)
- [ ] Style scrollbar subtly or hide it
- [ ] Verify all menu items appear in sidebar (8 items total)
- [ ] Update index.tsx layout to include header
- [ ] Test scrolling behavior on 16:9 tablet layout
- [ ] Ensure header stays fixed at top while sidebar scrolls

## Acceptance
- Top header displays logo, title, and subtitle across full width
- Sidebar scrolls vertically when content exceeds viewport height
- All 8 menu items are visible and accessible
- Layout maintains 16:9 tablet optimization