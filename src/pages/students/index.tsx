import { useGetStudents } from './queries/queries';
import StudentsTable from './components/students-table';
import { useSearchParams } from 'react-router-dom';
import { DataTableSkeleton } from '@/components/shared/data-table-skeleton';
import BasePages from '@/components/shared/base-pages';

export default function StudentPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const pageLimit = Number(searchParams.get('limit') || 10);
  const country = searchParams.get('search') || null;
  const offset = (page - 1) * pageLimit;
  const { data, isLoading } = useGetStudents(offset, pageLimit, country);
  const users = data?.users;
  const totalUsers = data?.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);

  if (isLoading) {
    return (
      <div className="p-5">
        <DataTableSkeleton
          columnCount={10}
          filterableColumnCount={2}
          searchableColumnCount={1}
        />
      </div>
    );
  }

  return (
    <BasePages
      breadcrumbs={[
        { title: 'Trang chủ', link: '/' },
        { title: 'Học sinh', link: '/student' }
      ]}
      pageHead="Quản lý học sinh | Happy Kids"
      className="p-4 md:px-8"
    >
      <StudentsTable
        users={users}
        page={page}
        totalUsers={totalUsers}
        pageCount={pageCount}
      />
    </BasePages>
  );
}
