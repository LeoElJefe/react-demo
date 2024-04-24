import React, { useState } from 'react';
import './sidebar1.css';
import { Link } from 'react-router-dom';

const Sidebar1 = () => {
  const [search, setSearch] = useState('');

  const discounts = [
    {
      id: 1,
      title: 'Halloween Special',
      description: 'Get 20% off on all tickets this Halloween!',
    },
    {
      id: 2,
      title: 'Group Discount',
      description: 'Bring your friends and get 30% off for groups of 4 or more!',
    },
    {
      id: 3,
      title: 'Early Bird',
      description: 'Book your tickets 30 days in advance and get 15% off!',
    },
    // Add more discounts as needed
  ];

  const featuredDiscount = discounts[0]; // Change this to set the featured discount

  const filteredDiscounts = discounts.filter((discount) =>
    discount.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="sidebar1">
      <h1>Haunted House Discounts</h1>
      <input
        type="text"
        placeholder="Search discounts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="featured-discount">
        <h2>Featured Discount</h2>
        <h3>{featuredDiscount.title}</h3>
        <p>{featuredDiscount.description}</p>
        <Link to={`/discounts/${featuredDiscount.id}`}>Learn More</Link>
      </div>
      <ul>
        {filteredDiscounts.map((discount) => (
          <li key={discount.id}>
            <h2>{discount.title}</h2>
            <p>{discount.description}</p>
            <Link to={`/discounts/${discount.id}`}>Learn More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar1;