export type Voidfn = () => void;
export interface CreateTodoProps {
  open: boolean;
  onClose: Voidfn;
  onSubmit: (data: any) => void;
  isUpdate?: boolean;
  initialData?: any;
}
