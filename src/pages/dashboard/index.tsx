import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs.js';
import BasePages from '@/components/shared/base-pages.js';
import SalaryGraph from './components/salary-graph.js';
import { OverViewTab } from './overview/index.js';
export const ListOverViewDashBoard = [
  {
    id: 1,
    title: 'Tổng doanh thu',
    value: '23.543.000',
    percent: '+20.1 %'
  }
];

export default function DashboardPage() {
  return (
    <>
      <BasePages
        className="relative max-h-screen flex-1 space-y-4 overflow-y-auto p-4"
        pageHead="Thống kê | Happy Kids"
      >
        <div className="top-4 flex items-center justify-between space-y-2 md:absolute">
          <h2 className=" text-2xl font-bold tracking-tight">
            Hi, Happy Kids xin chào 👋
          </h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Tổng quan</TabsTrigger>
            <TabsTrigger value="analytics">Thống kê chi tiết</TabsTrigger>
          </TabsList>
          {/* tab overview detail */}
          <TabsContent value="overview" className="space-y-4">
            <OverViewTab />
          </TabsContent>

          {/* tab analytics */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid space-y-4">
              <Card className="w-full md:w-1/3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Tổng doanh thu
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23.543.000 VNĐ</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1 % so với tháng trước
                  </p>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-7">
                <Card className="col-span-7">
                  <CardHeader>
                    <CardTitle>Doanh thu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SalaryGraph />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </BasePages>
    </>
  );
}
