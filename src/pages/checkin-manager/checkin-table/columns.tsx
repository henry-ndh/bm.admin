import { Checkbox } from '@/components/ui/checkbox';
import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { CellActionStatus } from './cell-action-status';
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
        onCheckedChange={(value) => {
          row.toggleSelected(!!value);
          console.log(row.original);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'first_name',
    header: 'Tên học sinh',
    enableSorting: true
  },
  {
    accessorKey: 'Day_on',
    header: 'Số ngày học',
    enableSorting: true,
    sortingFn: (rowA, rowB) => {
      const statusA = rowA.getIsSelected();
      const statusB = rowB.getIsSelected();
      if (statusA === statusB) {
        return 0;
      }
      return statusA > statusB ? 1 : -1;
    }
  },
  {
    accessorKey: 'Day_off',
    header: 'Số ngày nghỉ',
    id: 'actions12'
  },
  {
    accessorKey: 'actions',
    cell: ({ row }) => (
      <CellAction data={row.original} isActive={row.getIsSelected()} />
    )
  }
];

// interface User {
//     id: string;
//     first_name: string;
//     address: string;
//     checkedIn: boolean; // Add this property
//   }

//   async function handleCheckIn(userId: string, isChecked: boolean) {
//     try {
//       await useCheckIn(userId, isChecked); // Call your check-in API
//     } catch (error) {
//       console.error('Error checking in user:', error);
//     }
//   }

//   async function handleCheckInAll(isChecked: boolean) {
//     try {
//       // Call your check-in API for all users
//       // You might need to iterate over all users and call the API for each user
//     } catch (error) {
//       console.error('Error checking in all users:', error);
//     }
//   }

//   async function refreshUserList() {
//     try {
//       await useGetUsers(); // Refresh the user list
//     } catch (error) {
//       console.error('Error refreshing user list:', error);
//     }
//   }
