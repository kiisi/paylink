export interface Collection {
  id: string;
  name: string;
  description: string;
  amountType: "fixed" | "flexible";
  fixedAmount?: number;
  targetAmount?: number;
  totalCollected: number;
  contributorCount: number;
  status: "active" | "paused" | "closed";
  deadline?: string;
  createdAt: string;
  link: string;
  organizer: string;
}

export interface Contributor {
  id: string;
  name: string;
  email: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
  reference: string;
}

export const mockCollections: Collection[] = [
  {
    id: "col-1",
    name: "Class Trip Fund",
    description: "Collecting for the end-of-year class trip to the national park.",
    amountType: "fixed",
    fixedAmount: 5000,
    targetAmount: 150000,
    totalCollected: 95000,
    contributorCount: 19,
    status: "active",
    deadline: "2026-03-15",
    createdAt: "2026-02-01",
    link: "https://paylink.app/c/class-trip-fund",
    organizer: "John Doe",
  },
  {
    id: "col-2",
    name: "Office Birthday Gift",
    description: "Gift contribution for Sarah's birthday celebration.",
    amountType: "flexible",
    targetAmount: 50000,
    totalCollected: 32000,
    contributorCount: 8,
    status: "active",
    createdAt: "2026-02-10",
    link: "https://paylink.app/c/office-birthday",
    organizer: "John Doe",
  },
  {
    id: "col-3",
    name: "Community Hall Repair",
    description: "Funds for repairing the community hall roof.",
    amountType: "flexible",
    targetAmount: 500000,
    totalCollected: 500000,
    contributorCount: 45,
    status: "closed",
    createdAt: "2026-01-05",
    link: "https://paylink.app/c/hall-repair",
    organizer: "John Doe",
  },
];

export const mockContributors: Contributor[] = [
  { id: "c1", name: "Alice Mwangi", email: "alice@email.com", amount: 5000, date: "2026-02-12", status: "completed", reference: "PAY-20260212-001" },
  { id: "c2", name: "Bob Karanja", email: "bob@email.com", amount: 5000, date: "2026-02-11", status: "completed", reference: "PAY-20260211-002" },
  { id: "c3", name: "Carol Njeri", email: "carol@email.com", amount: 5000, date: "2026-02-11", status: "completed", reference: "PAY-20260211-003" },
  { id: "c4", name: "David Omondi", email: "david@email.com", amount: 5000, date: "2026-02-10", status: "completed", reference: "PAY-20260210-004" },
  { id: "c5", name: "Eva Wanjiku", email: "eva@email.com", amount: 5000, date: "2026-02-10", status: "pending", reference: "PAY-20260210-005" },
  { id: "c6", name: "Frank Kiptoo", email: "frank@email.com", amount: 5000, date: "2026-02-09", status: "completed", reference: "PAY-20260209-006" },
];

export const recentPayments = [
  { name: "Alice Mwangi", collection: "Class Trip Fund", amount: 5000, date: "2026-02-12" },
  { name: "Bob Karanja", collection: "Class Trip Fund", amount: 5000, date: "2026-02-11" },
  { name: "Grace Akinyi", collection: "Office Birthday Gift", amount: 3000, date: "2026-02-11" },
  { name: "Carol Njeri", collection: "Class Trip Fund", amount: 5000, date: "2026-02-11" },
  { name: "Hassan Ali", collection: "Office Birthday Gift", amount: 5000, date: "2026-02-10" },
];

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", minimumFractionDigits: 0 }).format(amount);
};
