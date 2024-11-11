export default function Skeleton() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col items-center space-y-3">
        <div className="rounded-full bg-slate-700 h-16 w-16"></div>
        <div className="h-3 bg-slate-700 rounded w-3/4"></div>
        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
        <div className="h-2 bg-slate-700 rounded w-1/3"></div>
      </div>
    </div>
  );
}
