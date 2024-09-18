import { Checkbox } from '@/components/ui/checkbox';
import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Employee>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'first_name',
    header: 'Tên học sinh'
  },
  {
    accessorKey: 'country',
    header: 'Địa chỉ'
  },
  {
    accessorKey: 'parent_number',
    header: 'Số điện thoại phụ huynh'
  },
  {
    accessorKey: 'parent_name',
    header: 'Tên phụ huynh'
  },
  {
    accessorKey: 'gender',
    header: 'Giới tính'
  },
  {
    accessorKey: 'birthday',
    header: 'Ngày sinh'
  },
  {
    accessorKey: 'day_join',
    header: 'Ngày tham gia'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
