export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubRepo: string;
  bgColor: string;
  techSpecs: {
    language: string;
    architecture: string;
    keyLibrary: string;
    platform: string;
  };
  keyFeatures: string[];
}

export const projects: Project[] = [
  {
    id: "0",
    title: "Core Networking SDK",
    category: "System Architecture",
    description: "A high-performance OkHttp wrapper optimizing latency and connection pooling for 10M+ DAU apps.",
    longDescription: "The Core Networking SDK was designed to provide a unified, robust, and performant networking layer for large-scale Android applications. It handles complex connection pooling, intelligent retry mechanisms with exponential backoff, and provides a clean, reactive API for feature developers.",
    tags: ["Kotlin", "Coroutines", "OkHttp", "Retrofit"],
    githubRepo: "meghlath/core-networking",
    bgColor: "bg-blue-50",
    techSpecs: {
      language: "Kotlin 2.0",
      architecture: "Clean Architecture / Repository Pattern",
      keyLibrary: "OkHttp Interceptors & Coroutines",
      platform: "Android SDK (API 21+)",
    },
    keyFeatures: [
      "Custom DNS resolution for latency reduction",
      "Automatic SSL pinning and certificate management",
      "Reactive stream support via Flow",
      "Modular plugin system for logging and telemetry",
    ],
  },
  {
    id: "1",
    title: "Secure Auth Flow Library",
    category: "Security & Biometrics",
    description: "Drop-in Android authentication flow with biometric support, encrypted shared preferences, and OAuth2.",
    longDescription: "A security-first library that simplifies the implementation of complex authentication flows. It standardizes biometric integration (fingerprint/face), handles secure token storage, and implements robust OAuth2 handshake logic with automatic token refreshing.",
    tags: ["AndroidX Biometric", "Crypto", "Jetpack Compose"],
    githubRepo: "meghlath/secure-auth-android",
    bgColor: "bg-emerald-50",
    techSpecs: {
      language: "Kotlin / Java",
      architecture: "MVI (Intent-based)",
      keyLibrary: "AndroidX Crypto & Biometrics",
      platform: "Android SDK (API 24+)",
    },
    keyFeatures: [
      "Device-specific hardware encryption hooks",
      "Seamless BiometricPrompt integration",
      "Customizable Compose-based UI components",
      "Secure EncryptedSharedPreferences wrapper",
    ],
  },
  {
    id: "2",
    title: "Dynamic UI Engine",
    category: "Developer Tools",
    description: "Server-driven UI rendering engine allowing remote layout updates without App Store releases.",
    longDescription: "This SDUI (Server-Driven UI) engine leverages Jetpack Compose to render complex, dynamic layouts defined in JSON. It allows teams to iterate on UI experiments and fix critical layout issues instantly without requiring a full app release cycle.",
    tags: ["Jetpack Compose", "Moshi", "Architecture Components"],
    githubRepo: "meghlath/sdui-engine",
    bgColor: "bg-purple-50",
    techSpecs: {
      language: "Kotlin",
      architecture: "State-driven rendering",
      keyLibrary: "Jetpack Compose & Moshi",
      platform: "Universal Android",
    },
    keyFeatures: [
      "Zstd compression for JSON payloads",
      "Component-level caching and partial updates",
      "Safe multi-threading with Coroutines",
      "Integrated analytics for UI rendering performance",
    ],
  },
];
