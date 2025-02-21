import { Suspense } from 'react';
import { getLatestLaunch } from '@/client/spacex/launches';

async function LaunchInfo() {
  const latestLaunch = await getLatestLaunch();
  return (
    <div className="max-w-2xl w-full bg-white/5 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{latestLaunch.name}</h2>
      <div className="flex flex-col gap-2">
        <p><span className="font-semibold">Status:</span> {latestLaunch.success ? '✅ Success' : '❌ Failed'}</p>
        <p><span className="font-semibold">Fetched At:</span> {new Date(latestLaunch.fetchedAt).toLocaleString()}</p>
        <p><span className="font-semibold">Fetch Duration:</span> {latestLaunch.duration}ms</p>
        {latestLaunch.details && (
          <p><span className="font-semibold">Details:</span> {latestLaunch.details}</p>
        )}
        {latestLaunch.links.patch.small && (
          <img 
            src={latestLaunch.links.patch.small} 
            alt="Mission patch"
            className="w-24 h-24 mt-4"
          />
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-8">Latest SpaceX Launch</h1>
      <Suspense fallback={
        <div className="max-w-2xl w-full bg-white/5 p-6 rounded-lg animate-pulse">
          <div className="h-8 bg-white/10 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
            <div className="h-4 bg-white/10 rounded w-1/2"></div>
            <div className="h-4 bg-white/10 rounded w-2/3"></div>
          </div>
        </div>
      }>
        <LaunchInfo />
      </Suspense>
    </main>
  );
}