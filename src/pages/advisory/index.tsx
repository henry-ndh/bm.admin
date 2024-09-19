import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.js';
import BasePages from '@/components/shared/base-pages.js';
export const ListOverViewDashBoard = [
  {
    id: 1,
    title: 'Tổng doanh thu',
    value: '23.543.000',
    percent: '+20.1 %'
  }
];

export default function Advisory() {
  return (
    <>
      <BasePages
        className="relative max-h-screen flex-1 space-y-4 overflow-y-auto p-4"
        pageHead="Tư vấn | Happy Kids"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Tư vấn', link: '/advisory' }
        ]}
      >
        <Tabs defaultValue="student" className="space-y-4">
          <TabsList>
            <TabsTrigger value="student">Học sinh</TabsTrigger>

            <TabsTrigger value="teacher">Giáo viên</TabsTrigger>
          </TabsList>
        </Tabs>
      </BasePages>
    </>
  );
}
