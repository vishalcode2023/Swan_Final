import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Vinayaka T.",
    role: "Technical",
    des: "To become the leader in manufacturing of color sorters as per the international standards and generate global demand of color sorter machine.",
    image: "partners2.jpeg",
  },
  {
    name: "Shijo George",
    role: "Director - Sales",
    des: "To become the leader in manufacturing of color sorters as per the international standards and generate global demand of color sorter machine.",
    image: "partners1.jpeg",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white py-10 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Meet Our <span className="text-white font-bold bg-gradient-to-r from-green-400 to-blue-400 py-1 px-1.5 rounded-xl"> Professional </span> Partners
      </h2>

      {/* Scrollable on mobile, grid on larger screens */}
      <div className="flex md:w-[60%] m-auto flex-wrap md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x px-4 pb-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-2xl shadow-lg w-[90%] sm:w-[70%] md:w-full mx-auto snap-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-orange-400">{member.role}</p>

            {/* Description */}
            {member.des && (
              <p className="text-gray-600 mt-2 text-sm">{member.des}</p>
            )}


            
          </div>
        ))}
      </div>
    </div>
  );
}
