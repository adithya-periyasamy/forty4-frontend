import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUser } from "../context/UserContext";

const userSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z.string().default(""),
  username: z.string().default(""),
  website: z.string().default(""),
  company: z.object({
    name: z.string().default(""),
    catchPhrase: z.string().default(""),
    bs: z.string().default(""),
  }),
  address: z.object({
    street: z.string().default(""),
    suite: z.string().default(""),
    city: z.string().default(""),
    zipcode: z.string().default(""),
    geo: z.object({
      lat: z.string().default("0"),
      lng: z.string().default("0"),
    }),
  }),
});

type UserFormData = z.infer<typeof userSchema>;

interface UserFormProps {
  onClose: () => void;
}

const UserForm = ({ onClose }: UserFormProps) => {
  const { addUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      username: "",
      website: "",
      company: { name: "", catchPhrase: "", bs: "" },
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "0", lng: "0" },
      },
    },
  });

  const onSubmit = (data: UserFormData) => {
    addUser(data);
    onClose();
  };

  const inputClass =
    "block w-full px-4 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 sm:text-sm transition duration-200";

  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative mx-auto p-8 border border-gray-200 w-full max-w-md shadow-2xl rounded-2xl bg-white transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Create New User</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className={inputClass}
              {...register("name")}
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className={inputClass}
              {...register("email")}
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Phone
            </label>
            <input
              type="text"
              placeholder="e.g. 1-555-555-5555"
              className={inputClass}
              {...register("phone")}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Corp"
              className={inputClass}
              {...register("company.name")}
            />
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-sm hover:shadow-md transition-all font-medium text-sm disabled:opacity-50"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
