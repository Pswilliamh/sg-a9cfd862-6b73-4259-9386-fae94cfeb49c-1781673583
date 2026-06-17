---
title: Multi-Language Selector and WhatsApp Chat Feed
status: in_progress
priority: high
type: feature
tags: [i18n, language, translation, chat, whatsapp]
created_by: agent
created_at: 2026-06-17T04:41:00Z
position: 6
---

## Notes
Add language selector dropdown (English/Indonesian) to header that updates all matrix card labels. Transform Communication Canvas into WhatsApp-style chat feed showing bilingual bubbles (English + Indonesian). Clicking matrix items or typing in TTS bar should add chat bubbles to the feed.

## Checklist
- [ ] Add language selector dropdown to header (left of offline badge)
- [ ] Populate with flag icons (🇺🇸 English, 🇮🇩 Indonesian)
- [ ] Create translation dictionary for matrix card labels
- [ ] Wire language selector to update all 6 matrix card texts
- [ ] Transform Communication Canvas into scrollable chat feed
- [ ] Style chat bubbles like WhatsApp (rounded, colored)
- [ ] Show English text + Indonesian translation in italics in bubbles
- [ ] Add click handlers to matrix sub-items to push chat bubbles
- [ ] Update TTSAudioBar to also push typed text to chat feed
- [ ] Test language switching updates all UI labels
- [ ] Ensure chat feed scrolls to newest message

## Acceptance
- Language selector switches between English and Indonesian
- All matrix card labels update when language changes
- Clicking matrix items adds bilingual chat bubbles to feed
- Typing in TTS bar and clicking SPEAK adds bubble to chat feed
- Chat feed displays messages in WhatsApp style with scrolling