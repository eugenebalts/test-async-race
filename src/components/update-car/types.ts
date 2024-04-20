interface UpdateCarInitialData {
  name: string;
  color: string;
}

export interface UpdateCarProps {
  type: 'create' | 'update';
  onApply: (name: string, color: string) => void;
  initialData?: UpdateCarInitialData;
}
