import UrlActions from "./UrlActions";

export default function UrlCard({ url }: {url: any}) {
  return (
    <div className="card">
      <p>{url.shortUrl}</p>
      <p>{url.clicks} clicks</p>
      <p>{url.status}</p>

      <UrlActions url={url} />
    </div>
  );
}