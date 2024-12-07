import React from 'react';

const teamMembers = [
  { name: "Lucas Peterson", role: "Co-Founder / CTO", img: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Sophia Bennett", role: "Business Relations", img: "https://randomuser.me/api/portraits/women/22.jpg" },
  { name: "Isabella Murphy", role: "Front-end Developer", img: "https://randomuser.me/api/portraits/women/15.jpg" },
  { name: "Ethan Rogers", role: "Designer", img: "https://randomuser.me/api/portraits/men/8.jpg" },
  { name: "Olivia Foster", role: "Director of Product", img: "https://randomuser.me/api/portraits/women/32.jpg" },
  { name: "Jacob Mitchell", role: "Copywriter", img: "https://randomuser.me/api/portraits/men/18.jpg" },
  { name: "Ava Turner", role: "VP, Human Resources", img: "https://randomuser.me/api/portraits/women/26.jpg" },
  { name: "James Cooper", role: "Lead Engineer", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Emily Howard", role: "UX Researcher", img: "https://randomuser.me/api/portraits/women/34.jpg" },
  { name: "Henry Parker", role: "Marketing Manager", img: "https://randomuser.me/api/portraits/men/50.jpg" },
  { name: "Amelia Wright", role: "Data Scientist", img: "https://randomuser.me/api/portraits/women/40.jpg" },
  { name: "Liam Brooks", role: "Product Analyst", img: "https://randomuser.me/api/portraits/men/30.jpg" },
  { name: "Mia Collins", role: "Content Strategist", img: "https://randomuser.me/api/portraits/women/50.jpg" },
  { name: "Noah Simmons", role: "Operations Manager", img: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "Grace Carter", role: "Client Success Lead", img: "https://randomuser.me/api/portraits/women/52.jpg" },
];

const TeamMember = ({ img, name, role }) => (
  <div className="flex flex-col items-center text-center space-y-2 p-4">
    <img className="hover:scale-110 ease-in duration-200 rounded-full h-24 w-24 shadow-lg" src={img} alt={`${name}`} />
    <h3 className="text-lg font-medium">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const TeamPage = () => (
  <div className="py-2 mt-36 mb-10 px-4 md:px-10 lg:px-20">
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-5xl font-bold">Our Team</h1>
      <p className="text-gray-500 mt-2">
        Meet the passionate team behind our journey.
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  </div>
);

export default TeamPage;
