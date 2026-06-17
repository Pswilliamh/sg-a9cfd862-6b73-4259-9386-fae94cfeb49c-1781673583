---
title: Offline Mode Toggle and Local Network Features
status: in_progress
priority: high
type: feature
tags: [offline, network, toggle, local-mesh, walkie-talkie]
created_by: agent
created_at: 2026-06-17T04:38:00Z
position: 5
---

## Notes
Add network status toggle to header switching between Online/Local Mesh modes. When offline, display amber radio wave icon, show offline banner, ensure TTS uses native browser API, and verify communication cards still route to preview canvas.

## Checklist
- [ ] Add network status toggle switch to header (right side)
- [ ] Implement "Online / Local Mesh" toggle labels
- [ ] Add offline mode state management
- [ ] Show amber radio wave icon when in Local Mesh mode
- [ ] Display "Local Sovereign Network Active - Operating Fully Offline" banner
- [ ] Verify TTS uses native speechSynthesis API (no network requests)
- [ ] Ensure command matrix cards print to Communication Canvas in offline mode
- [ ] Test all features work without network connectivity
- [ ] Style toggle and banner for 16:9 tablet layout

## Acceptance
- Toggle switches between Online and Local Mesh modes
- Offline banner displays prominently in Local Mesh mode
- TTS works offline using browser's native API
- Communication cards route to preview canvas in offline mode
- All features function without network connectivity