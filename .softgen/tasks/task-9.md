---
title: How-To Portal Content Population
status: done
priority: high
type: feature
tags: [voice-recognition, microphone, tutorial, modal, walkthrough, content]
created_by: agent
created_at: 2026-06-17T05:22:00Z
position: 9
---

## Notes
Add microphone button to TTS bar that uses native browser Speech Recognition API to convert voice to text. Create interactive How-To modal accessible from header explaining relationship toggles, scenario routing, and broadcast methods. Populate modal with About Us & Governance, System Capabilities Matrix, and Technology Notice sections.

## Checklist
- [x] Add microphone icon button to TTSAudioBar (left of text input)
- [x] Implement native Speech Recognition API (webkitSpeechRecognition/SpeechRecognition)
- [x] Change microphone icon to glowing red when listening
- [x] Convert spoken audio to text and populate input field
- [x] Auto-send voice-to-text to chat preview stream
- [x] Add "How It Works" button to header (gold text with ❓ icon)
- [x] Create HowToModal component with centered overlay
- [x] Design 3-step visual walkthrough grid
- [x] Card 1: Relationship Frequency explanation
- [x] Card 2: Environmental Scenario routing paths
- [x] Card 3: Broadcast methods (cards, typing, microphone)
- [x] Add "Close / Enter Dashboard" button to modal
- [x] Style modal for landscape tablet viewing with blue/gold contrast
- [x] Populate Section 1: About Us & Governance with sovereign vision statement
- [x] Populate Section 2: System Capabilities Matrix with 5 core pillars
- [x] Populate Section 3: Technology Notice & Access with support contact

## Acceptance
- Microphone button activates Speech Recognition and turns red when listening
- Voice input converts to text and appears in input field + chat feed
- How-To button in header opens walkthrough modal
- Modal displays About Us, System Capabilities, and Technology Notice sections
- Modal displays 3 clear instructional walkthrough cards
- All content is high-contrast and optimized for tablet reading
- Modal is perfectly responsive for 16:9 tablet layout