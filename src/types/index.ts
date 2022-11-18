export type Goal = {
  id: number,
  title: string,
  description: string
  dueDate?: string | null
}

export type Group = {
  theme: string;
  name: string;
  memberCount: number;
}

