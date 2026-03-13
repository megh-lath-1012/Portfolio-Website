export interface TechnicalChallenge {
  title: string;
  problem: string;
  decision: string;
  implementation: string;
  codeSnippet: string;
}

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
  technicalChallenges?: TechnicalChallenge[];
}

export const projects: Project[] = [
  {
    id: "appointment-booking",
    title: "Pet Palace",
    category: "Real-time Booking Service",
    description: "A comprehensive management ecosystem for pet grooming businesses featuring real-time status tracking and automated customer notifications. Live at [pixelpulse.services](https://www.pixelpulse.services/)",
    longDescription: "A comprehensive real-time booking application for pet grooming businesses (Pet Palace). It allows shop owners to manage bookings, employees, and customers in real-time. Features include a dynamic booking flow, Twilio-powered SMS alerts, and deep behavioral tracking for pets.",
    tags: ["React", "Firebase", "Twilio", "Tailwind"],
    githubRepo: "megh-lath-1012/Appointmentbookingapp",
    bgColor: "bg-rose-50",
    techSpecs: {
      language: "TypeScript",
      architecture: "Serverless / Multi-tenant",
      keyLibrary: "Firebase Firestore",
      platform: "Web App (Next.js)",
    },
    keyFeatures: [
      "Multi-tenant data isolation",
      "Real-time grooming status tracking",
      "Automated Twilio SMS integration",
      "Comprehensive pet behavioral profiles",
    ],
    technicalChallenges: [
      {
        title: "Race Condition Resolution",
        problem: "Simultaneous booking attempts for the same time slot by different customers could lead to overbooking during peak hours.",
        decision: "Implemented Firestore transactions (runTransaction) to ensure slot availability is checked and reserved as an atomic operation.",
        implementation: "The booking engine wraps the slot validation and document creation in a single transaction blocks, failing gracefully if the state changed.",
        codeSnippet: `await runTransaction(db, async (transaction) => {
  const slotDoc = await transaction.get(slotRef);
  if (slotDoc.data().isBooked) throw "Slot already taken";
  transaction.update(slotRef, { isBooked: true });
  transaction.set(bookingRef, newBooking);
});`
      },
      {
        title: "Dynamic Service Logic",
        problem: "Engineered a flexible state machine to calculate pricing and duration across multiple pet sizes and add-on services without hardcoding values.",
        decision: "Built a centralized selection matrix context that derives complex billing states from raw configuration metadata.",
        implementation: "The selection engine handles the atomic update of complex nested service fields while maintaining UI responsiveness.",
        codeSnippet: `const updateBookingData = useCallback((data: Partial<BookingData>) => {
  setBookingData((prev) => ({ 
    ...prev, 
    ...data,
    includeSpaWithGrooming: data.spaServices ? data.spaServices.length > 0 : prev.includeSpaWithGrooming
  }));
}, []);`
      },
      {
        title: "Real-time Status Sync",
        problem: "Optimized listener patterns to ensure all staff devices reflect pet status changes (e.g., 'In Bath' to 'Ready') instantly without excessive API usage.",
        decision: "Leveraged Firestore's onSnapshot with targeted document listeners instead of collection-wide polls for the current shift's dashboard.",
        implementation: "The admin dashboard uses a reactive state management hook that merges incoming server events with active UI blocks in O(1) time.",
        codeSnippet: `const upsertBooking = (updatedBooking: Booking) => {
  setBookings(prev => {
    const next = [...prev];
    const index = next.findIndex(b => b.id === updatedBooking.id);
    if (index >= 0) next[index] = updatedBooking;
    else next.unshift(updatedBooking);
    return next;
  });
};`
      }
    ]
  },
  {
    id: "outstanding-manager",
    title: "Outstanding Manager App",
    category: "FinTech / Business Ledger",
    description: "High-precision financial ledger for local businesses to track credits, debits, and outstanding balances with a focus on data integrity.",
    longDescription: "A specialized financial management tool for local businesses to track credits, debits, and outstanding balances. It features a rapid AI-driven entry system and a precise FIFO (First-In-First-Out) payment allocation engine.",
    tags: ["Flutter", "Riverpod", "Firebase", "Cloud Functions"],
    githubRepo: "megh-lath-1012/Outstanding-Manager",
    bgColor: "bg-amber-50",
    techSpecs: {
      language: "Dart",
      architecture: "Repository Pattern / Clean UI",
      keyLibrary: "Riverpod State Management",
      platform: "Android / iOS",
    },
    keyFeatures: [
      "AI-powered rapid entry agent",
      "Precise FIFO payment allocation",
      "Real-time ledger with automated balances",
      "Multi-party transaction history",
    ],
    technicalChallenges: [
      {
        title: "ACID-Compliant Ledger",
        problem: "Guaranteed atomicity in financial entries to prevent balance mismatches during local-to-cloud synchronization especially in flaky network conditions.",
        decision: "Utilized Firestore WriteBatch to ensure every ledger entry and its corresponding aggregate balance update succeed or fail together.",
        implementation: "The repository layer wraps the transaction creation and running balance update in a single atomic WriteBatch.",
        codeSnippet: `final batch = firestore.batch();
batch.set(entryRef, entry.toMap());
batch.update(accountRef, {
  'outstandingBalance': FieldValue.increment(entry.amount),
});
await batch.commit();`
      },
      {
        title: "FIFO Payment Allocation",
        problem: "Developed a First-In, First-Out algorithm to automatically distribute partial payments across multiple unpaid invoices based on age.",
        decision: "Designed an in-memory greedy allocation algorithm that pre-calculates the debt distribution before document creation.",
        implementation: "The allocation engine iterates through a chronologically sorted invoice list to distribute the incoming payment amount precisely.",
        codeSnippet: `for (var invoice in invoices) {
  if (remainingAmount <= 0) break;
  double allocateToThis = min(remainingAmount, invoice.outstandingAmount);
  allocations.add(PaymentAllocation(
    invoiceId: invoice.id,
    allocatedAmount: allocateToThis,
  ));
  remainingAmount -= allocateToThis;
}`
      },
      {
        title: "Dataset Virtualization",
        problem: "Optimized the rendering of transaction histories with 1000+ entries using list virtualization for 60fps performance on budget devices.",
        decision: "Implemented Sliver-based lazy loading in Flutter to ensure only visible items are kept in memory.",
        implementation: "The ledger screen performs a linear aggregation and uses CustomScrollView with slivers to avoid O(N²) calculation overhead during scroll events.",
        codeSnippet: `CustomScrollView(
  slivers: [
    SliverList(
      delegate: SliverChildBuilderDelegate(
        (context, index) => LedgerRow(entries[index]),
        childCount: entries.length,
      ),
    ),
  ],
)`
      }
    ]
  },
  {
    id: "nami-sdk",
    title: "Freelance SDK Engineering (Nami)",
    category: "System Architecture",
    description: "Collaborating with a US-based startup on core mobile SDK development and performance-critical library modules.",
    longDescription: "Development of core mobile SDK modules, focusing on performance-critical components and cross-platform bridges to ensure seamless integration for third-party developers.",
    tags: ["Kotlin", "Android SDK", "Native Modules", "Cross-platform Bridges"],
    githubRepo: "namiml",
    bgColor: "bg-blue-50",
    techSpecs: {
      language: "Kotlin",
      architecture: "Native SDK Modules",
      keyLibrary: "Android SDK & Coroutines",
      platform: "Android / Cross-platform Bridges",
    },
    keyFeatures: [
      "High-performance native modules",
      "Seamless cross-platform integration",
      "Performance-critical library components",
      "Reactive SDK design patterns",
    ],
  }
];
