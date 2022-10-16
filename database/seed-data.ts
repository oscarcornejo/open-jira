interface Seeddata {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: Seeddata = {
  entries: [
    {
      description:
        "Pendiente: Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En Progreso: Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Terminadas: Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
