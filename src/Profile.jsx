// import { useContext, useState } from "react";
// import { AuthContext } from "./Provider/AuthProvider";

// const Profile = () => {
//   const { user, updateUser } = useContext(AuthContext);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: user?.displayName || "",
//     email: user?.email || "",
//     avatar: user?.photoURL || "",
//     bloodGroup: user?.bloodGroup || "",
//     district: user?.district || "",
//     upazila: user?.upazila || "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     updateUser({ displayName: formData.name, photoURL: formData.avatar });
//     // Update other fields in DB
//     setIsEditing(false);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-8">Profile</h1>
//       <div className="card bg-base-100 shadow-xl">
//         <div className="card-body">
//           {!isEditing ? (
//             <button onClick={handleEdit} className="btn btn-primary mb-4">
//               Edit Profile
//             </button>
//           ) : (
//             <button onClick={handleSave} className="btn btn-success mb-4">
//               Save Changes
//             </button>
//           )}
//           <div className="form-control">
//             <label className="label">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="input input-bordered"
//               disabled={!isEditing}
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               className="input input-bordered"
//               disabled
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Avatar</label>
//             <input
//               type="text"
//               name="avatar"
//               value={formData.avatar}
//               onChange={handleChange}
//               className="input input-bordered"
//               disabled={!isEditing}
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Blood Group</label>
//             <select
//               name="bloodGroup"
//               value={formData.bloodGroup}
//               onChange={handleChange}
//               className="select select-bordered"
//               disabled={!isEditing}
//             >
//               <option>A+</option>
//               <option>A-</option>
//               <option>B+</option>
//               <option>B-</option>
//               <option>AB+</option>
//               <option>AB-</option>
//               <option>O+</option>
//               <option>O-</option>
//             </select>
//           </div>
//           <div className="form-control">
//             <label className="label">District</label>
//             <input
//               type="text"
//               name="district"
//               value={formData.district}
//               onChange={handleChange}
//               className="input input-bordered"
//               disabled={!isEditing}
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">Upazila</label>
//             <input
//               type="text"
//               name="upazila"
//               value={formData.upazila}
//               onChange={handleChange}
//               className="input input-bordered"
//               disabled={!isEditing}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
