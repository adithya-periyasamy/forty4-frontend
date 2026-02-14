import { ArrowLeft, Building2, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { getUserById, loading } = useUser();

  const user = id ? getUserById(Number(id)) : undefined;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">User not found</h2>
        <Link
          to="/"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors w-fit"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200 mb-6">
          <div className="p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500 mt-1">
                @{user.username || "unknown"}
              </p>
            </div>
            <div className="flex gap-3"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              Contact Information
            </h3>
            <div className="space-y-5">
              <div className="flex items-center text-gray-600 group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Email
                  </p>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center text-gray-600 group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Phone
                  </p>
                  <a
                    href={`tel:${user.phone}`}
                    className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
                  >
                    {user.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center text-gray-600 group">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 text-blue-600 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Website
                  </p>
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
                  >
                    {user.website || "N/A"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              Company
            </h3>
            {user.company ? (
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mr-4 text-purple-600 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">
                    {user.company.name}
                  </p>
                  <p className="italic text-gray-500 mt-1">
                    "{user.company.catchPhrase}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
                      Business focus
                    </p>
                    <p className="text-sm text-gray-700">{user.company.bs}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No company information available.</p>
            )}
          </div>

          <div className="md:col-span-2 bg-white shadow-sm rounded-xl p-8 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Address</h3>
            {user.address ? (
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-4 text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {user.address.street}, {user.address.suite}
                    </p>
                    <p className="text-gray-600">{user.address.city}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Zip: {user.address.zipcode}
                    </p>
                  </div>
                  {user.address.geo && (
                    <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-500 font-mono">
                      <p>Latitude: {user.address.geo.lat}</p>
                      <p>Longitude: {user.address.geo.lng}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No address information available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
