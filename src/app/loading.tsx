export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold mb-8">Loading latest launch...</h1>
      <div className="max-w-2xl w-full bg-white/5 p-6 rounded-lg animate-pulse">
        <div className="h-8 bg-white/10 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-white/10 rounded w-3/4"></div>
          <div className="h-4 bg-white/10 rounded w-1/2"></div>
          <div className="h-4 bg-white/10 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
}