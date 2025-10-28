import { Badge } from "@/src/components/ui/badge";

export function StatusFreeTrial() {
  return (
    <div className="p-4 bg-blue-600/20 border-white rounded-md">
      <h3 className="font-semibold text-xl mb-2 text-center">
        🚀 Free Trial available
      </h3>
      <Badge variant={"outline"} className="w-full py-1 bg-blue-900">
        1 Free Interview
      </Badge>
      <p className="text-xs mt-2">Create a free Interview with IA</p>
    </div>
  );
}
