---
title: Native Voice-to-Text and How-To Portal
status: in_progress
priority: high
type: feature
tags: [voice-recognition, microphone, tutorial, modal, walkthrough]
created_by: agent
created_at: 2026-06-17T05:22:00Z
position: 9
---

## Notes
Add microphone button to TTS bar that uses native browser Speech Recognition API to convert voice to text. Create interactive How-To modal accessible from header explaining relationship toggles, scenario routing, and broadcast methods.

## Checklist
- [ ] Add microphone icon button to TTSAudioBar (left of text input)
- [ ] Implement native Speech Recognition API (webkitSpeechRecognition/SpeechRecognition)
- [ ] Change microphone icon to glowing red when listening
- [ ] Convert spoken audio to text and populate input field
- [ ] Auto-send voice-to-text to chat preview stream
- [ ] Add "How It Works" button to header (gold text with ❓ icon)
- [ ] Create HowToModal component with centered overlay
- [ ] Design 3-step visual walkthrough grid
- [ ] Card 1: Relationship Frequency explanation
- [ ] Card 2: Environmental Scenario routing paths
- [ ] Card 3: Broadcast methods (cards, typing, microphone)
- [ ] Add "Close / Enter Dashboard" button to modal
- [ ] Style modal for landscape tablet viewing with blue/gold contrast

## Acceptance
- Microphone button activates Speech Recognition and turns red when listening
- Voice input converts to text and appears in input field + chat feed
- How-To button in header opens walkthrough modal
- Modal displays 3 clear instructional cards
- Modal is perfectly responsive for 16:9 tablet layout