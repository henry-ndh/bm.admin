import { Button } from '@/components/ui/button';
import { Employee } from '@/constants/data';

interface CellActionProps {
  data: Employee;
  isActive: boolean;
}

export const CellAction: React.FC<CellActionProps> = ({ data, isActive }) => {
  return (
    <>
      <div className="flex gap-4">
        <Button
          type="submit"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          Đánh đấu đã tư vấn
        </Button>
      </div>
    </>
  );
};
