import { useUrlStore } from "@/store/useUrlStore";
import UrlCard from "./UrlCard";

export default function UrlList() {
  const { urls } : any = useUrlStore();

  return (
    <div>
      {urls.map((url: any) => (
        <UrlCard key={url.id} url={url} />
      ))}
    </div>
  );
}