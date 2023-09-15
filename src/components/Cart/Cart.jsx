/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({
  selectedCourses,
  selectedCoursesCredit,
  remainingCredit,
  coursePrice,
}) => {
  return (
    <div className="cart-details-container">
      <h4>Credit Hour Remaining {remainingCredit} hr</h4>
      <h3>Course Name</h3>
      <ol>
        {selectedCourses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ol>
      <p>Total Credit Hour : {selectedCoursesCredit}</p>
      <p>Total Price : {coursePrice} USD</p>
    </div>
  );
};

export default Cart;