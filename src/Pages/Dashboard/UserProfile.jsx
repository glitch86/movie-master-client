import { User, Mail, Calendar, MapPin, Star, Edit, LogOut } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="max-w-md mx-auto rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 flex items-center gap-4">
        <img
          src={user.photoURL}
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-white object-cover"
          referrerPolicy="no-referrer"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.displayName}</h2>
          <p className="text-sm opacity-90 flex items-center gap-1">
            <Star size={14} className="text-yellow-300" />
            member
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm ">
          <Mail size={18} />
          <span>{user.email}</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Calendar size={18} />
          <span>Joined {user.metadata.creationTime}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="p-6 border-t border-gray-800 flex gap-3">
        <button className="flex-1 flex items-center border border-base-200 justify-center gap-2 px-4 py-2 rounded-lg hover:bg-base-200 transition">
          <Edit size={16} />
          Edit Profile
        </button>

        <button
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-black hover:bg-red-700 transition"
          onClick={handleSignout}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
