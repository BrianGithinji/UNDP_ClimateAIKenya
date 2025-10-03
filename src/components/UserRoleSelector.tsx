import { Users, Briefcase, Building2 } from "lucide-react";
import { UserRole } from "../data/counties";

interface UserRoleSelectorProps {
  selectedRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function UserRoleSelector({ selectedRole, onRoleChange }: UserRoleSelectorProps) {
  const roles = [
    { id: "farmer" as UserRole, label: "Farmer", icon: Users, description: "Agricultural insights" },
    { id: "msme" as UserRole, label: "MSME", icon: Briefcase, description: "Business intelligence" },
    { id: "government" as UserRole, label: "Government", icon: Building2, description: "Policy insights" }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <label className="block text-sm text-gray-600 mb-3">I am a...</label>
      <div className="grid grid-cols-3 gap-2">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <button
              key={role.id}
              onClick={() => onRoleChange(role.id)}
              className={`p-3 rounded-lg border transition-all ${
                selectedRole === role.id
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              <Icon className={`h-5 w-5 mx-auto mb-1 ${
                selectedRole === role.id ? "text-blue-600" : "text-gray-500"
              }`} />
              <div className="text-sm">{role.label}</div>
              <div className="text-xs text-gray-500 mt-1">{role.description}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}