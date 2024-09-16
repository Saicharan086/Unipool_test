// src/TeamPage.js

import React from 'react';

const teamMembers = [
  {
    name: "Charles Babu",
    role: "Co-Founder / CTO",
    img: "https://cdn.gulte.com/wp-content/uploads/2021/04/Ch.jpg",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyupaooXxurULz_QgTYwLukNY5VQhuPBhYieuO-9BVeVgT1IECOrxb7MjWRqvAFO1Tio&usqp=CAU",
  },
  {
    name: "Ayesha Khan",
    role: "Front-end Developer",
    img: "https://pbs.twimg.com/media/GIt93j5XUAI1ZnG?format=jpg&name=900x900",
  },
  {
    name: "Ranveer Singh",
    role: "Designer",
    img: "https://preview.redd.it/haa08gmfwqi51.jpg?width=647&format=pjpg&auto=webp&s=06cd415a2a5364447e151e20825b72d793dd1dd1",
  },
  {
    name: "Walter White",
    role: "Director of Product",
    img: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
  },
  {
    name: "SS Thaman",
    role: "Copywriter",
    img: "https://images.filmibeat.com/webp/img/2022/11/1628509998-sthaman-1668580577.jpg",
  },
  {
    name: "Balakrishna",
    role: "VP, Human Resources",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCMqMi7V3ZQR6_smmP8VQf045cw0AQxWLUA&s",
  },
];

const TeamMember = ({ img, name, role }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <img className="rounded-full h-24 w-24 " src={img} alt={`${name}`} />
    <h3 className="text-lg font-medium">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const TeamPage = () => (
  <div className="py-2">
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold">Our Team</h1>
      <p className="text-gray-500 mt-2">
        Jai Telugu Desam. Johar NTR
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 px-10 max-w-7xl mx-auto">
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
    <div className='mt-9 text-8xl font-extrabold text-yellow-300 flex justify-center'>All hail tiger</div>
  </div>
);

export default TeamPage;
