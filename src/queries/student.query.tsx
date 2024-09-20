import { useMutation, useQuery } from '@tanstack/react-query';
import BaseRequest from '@/config/axios.config';
const SUB_URL = `api/Student`;

const PagingModel = {
  pageNumber: 1,
  pageSize: 10,
  keyword: '',
  orderBy: '',
  orderDirection: '',
  totalRecord: 0,
  day: 0,
  week: 0,
  month: 0,
  year: 0,
  createdBy: ''
};

export function useGetStudentPaging() {
  return useQuery({
    queryKey: ['get_student2'],
    queryFn: async () => {
      return BaseRequest.Post(
        `/${SUB_URL}/get-list-student-by-class-id/2`,
        PagingModel
      );
    }
  });
}
