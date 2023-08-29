export interface Career {
  id: string;
  title: string;
  subtitle?: string;
  details: string[];
  period: string;
  onClick?: () => void;
}
