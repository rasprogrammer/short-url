import ClickChart from "@/components/analytics/ClickChart";
import CountryChart from "@/components/analytics/CountryChart";
import DeviceChart from "@/components/analytics/DeviceChart";

export default function AnalyticsPage() {
  return (
    <div>
      <ClickChart />
      <CountryChart />
      <DeviceChart />
    </div>
  );
}