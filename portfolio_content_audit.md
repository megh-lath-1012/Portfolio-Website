# Portfolio Content Audit

This document contains all the text content currently present in your portfolio website. Use this for verification and as a source for Gemini to suggest updates.

---

## 🚀 Hero Section
**Path:** `src/components/HeroSection.tsx`

- **Availability Tag:** "Available for new opportunities"
- **Main Title:** "I build robust mobile experiences at scale."
- **Intro Paragraph:** "Hi, I'm Megh. I'm an Android SDK Engineer with 4 years of experience specializing in developer tools, system architecture, and performance optimization."
- **Action Buttons:** "View My Work", "GitHub Profile"

---

## 🛠 Core Expertise
**Path:** `src/components/CoreExpertise.tsx`

- **Section Title:** "Core Expertise"
- **Section Subtitle:** "Bridging the gap between robust system architecture and seamless developer integration."

### Expertise Cards:
1. **SDK Architecture & Design**
   - *Description:* Designing clean, intuitive API surfaces for reliable and scalable Android library consumption.
2. **Developer Experience (DX)**
   - *Description:* Creating comprehensive documentation, sample apps, and streamlined integration flows for external developers.
3. **Performance Optimization**
   - *Description:* Deep dive into Android core vitals, memory management, and multi-threading for battery-efficient libraries.

---

## 📂 Technical Portfolio (Projects)
**Path:** `src/data/projects.ts`

- **Section Title:** "Technical Portfolio"
- **Section Subtitle:** "A selection of SDKs, core libraries, and architectural components designed for scale and developer experience."

### Projects:

#### 1. Core Networking SDK
- **Category:** System Architecture
- **Description:** A high-performance OkHttp wrapper optimizing latency and connection pooling for 10M+ DAU apps.
- **Long Description:** The Core Networking SDK was designed to provide a unified, robust, and performant networking layer for large-scale Android applications...
- **Tech Specs:** Kotlin 2.0, Clean Architecture, OkHttp Interceptors, Android SDK (API 21+).
- **Key Features:** Custom DNS resolution, SSL pinning, Reactive stream support, Modular plugin system.

#### 2. Secure Auth Flow Library
- **Category:** Security & Biometrics
- **Description:** Drop-in Android authentication flow with biometric support, encrypted shared preferences, and OAuth2.
- **Long Description:** A security-first library that simplifies the implementation of complex authentication flows...
- **Tech Specs:** Kotlin / Java, MVI, AndroidX Crypto, Android SDK (API 24+).
- **Key Features:** Hardware encryption hooks, BiometricPrompt integration, Compose-based UI, EncryptedSharedPreferences.

#### 3. Dynamic UI Engine
- **Category:** Developer Tools
- **Description:** Server-driven UI rendering engine allowing remote layout updates without App Store releases.
- **Long Description:** This SDUI (Server-Driven UI) engine leverages Jetpack Compose to render complex, dynamic layouts defined in JSON...
- **Tech Specs:** Kotlin, State-driven rendering, Jetpack Compose & Moshi, Universal Android.
- **Key Features:** Zstd compression, Component-level caching, Safe multi-threading, Integrated analytics.

#### 4. Pet Grooming Booking System
- **Category:** Multi-tenant SaaS
- **Description:** Real-time management for grooming salons with automated SMS notifications and multi-tenant isolation.
- **Long Description:** A comprehensive multi-tenant SaaS application for pet grooming businesses...
- **Tech Specs:** TypeScript, Serverless, Firebase Firestore, Web App (Next.js).
- **Key Features:** Multi-tenant isolation, Real-time status tracking, Twilio SMS, Pet behavioral profiles.
- **Technical Challenges:**
    - *Transactional Integrity:* Multi-step booking creation (Customer -> Pet -> Booking).
    - *Real-time Sync:* Multiple groomers updating pet statuses simultaneously.
    - *Dynamic Pricing:* Configurable services with variable add-ons.

#### 5. Outstanding Management App
- **Category:** FinTech / Business Ledger
- **Description:** Mobile-first financial ledger with AI-powered rapid entry and FIFO payment allocation.
- **Long Description:** A specialized financial management tool for local businesses to track credits, debits, and outstanding balances...
- **Tech Specs:** Dart, Repository Pattern, Riverpod, Android / iOS.
- **Key Features:** AI-powered rapid entry, Precise FIFO pricing, Real-time ledger, Multi-party transaction history.
- **Technical Challenges:**
    - *ACID Compliance:* Atomically updating payment records and invoice balances.
    - *FIFO Allocation:* Automatically distributing payments across unpaid invoices.
    - *Real-time Ledger Aggregation:* Recalculating balances across thousands of transactions.

---

## 📝 Technical Deep Dives (Articles)
**Path:** `src/data/articles.ts`

- **Section Title:** "Technical Deep Dives"
- **Section Subtitle:** "Insights on Android architecture, performance optimization, and premium UI patterns in Jetpack Compose."

### Articles:
1. **How To Create Easy Pagination In Jetpack Compose**
   - *Excerpt:* Learn to build smooth, efficient pagination in Jetpack Compose using Firestore queries and LazyColumn...
2. **How To Create a Parallax Movie Pager In Jetpack Compose**
   - *Excerpt:* Learn how to create a parallax movie pager in Jetpack Compose with detailed steps on offset calculations...
3. **Exploring Shared Element Transition with Navigation in Compose**
   - *Excerpt:* A deep dive into creating fluid transitions between screens using the core navigation library...
4. **How to Implement Biometric Authentication with Jetpack Compose**
   - *Excerpt:* Secure Android applications using fingerprint and face recognition...
5. **Introducing ComposeRecyclerView**
   - *Excerpt:* Bringing the familiar power and performance of RecyclerView's view-recycling to Jetpack Compose...
6. **Live Streaming and Audio Equalizer with ExoPlayer**
   - *Excerpt:* Implementing advanced media playback features in Jetpack Compose...
7. **How to Use Render Effects in Jetpack Compose**
   - *Excerpt:* Captivate users with advanced blur, shadow, and color effects...

---

## 📞 Footer & Contact
**Path:** `src/components/Footer.tsx`

- **Tagline:** "Ready to build something amazing?"
- **Subtext:** "I'm currently open to new opportunities and interesting projects."
- **Email:** hello@meghlath.dev
- **Location:** San Francisco, CA (Remote)
- **Socials:** GitHub, LinkedIn, Twitter
