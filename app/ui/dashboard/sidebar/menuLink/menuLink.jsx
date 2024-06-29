// MenuLink.jsx (or MenuLink.js)

import React from 'react';
import Link from 'next/link'; // Import Link from next/link or another routing library
import styles from './menuLink.module.css'; // Adjust the path based on your actual file structure

const MenuLink = ({ item }) => {
  return (
    <Link href={item.path}>
      <a className={styles.container}>
        {item.icon}
        {item.title}
      </a>
    </Link>
  );
}

export default MenuLink;
