/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCoursesCredit, setSelectedCoursesCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);
  const [coursePrice, setCoursePrice] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
    

    const handleClick = (course) => {
        let credit = course.credit;
      let targetCredit = 20;
      let price = course.price;

        const isExist = selectedCourses.find((item) => item.id === course.id);
        if (isExist) {
            // return alert("already exist");
          return toast("This course already added.");
        } else {
            selectedCourses.forEach(item => {
              credit += item.credit;
              price += item.price;
            })
            
            const totalRemaining = targetCredit - credit;

          console.log(credit);
            if (credit > 20) {
              // return alert("reached credit");
              return toast("This course credit exceeds the total credit.");
            } else {
              setSelectedCoursesCredit(credit);
              setCoursePrice(price);
              setRemainingCredit(totalRemaining);
              setSelectedCourses([...selectedCourses, course]);
            }
            
        }
    
  };
  return (
    <div className="container">
      <div className="card-container">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            <img src={course.cover_img} alt="" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="card-footer">
              <p>$ price : {course.price}</p>
              <p>Credit : {course.credit}hr</p>
            </div>
            <button className="btn" onClick={() => {handleClick(course)}}>
              Submit
            </button>
            <Toaster />
          </div>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          selectedCourses={selectedCourses}
          selectedCoursesCredit={selectedCoursesCredit}
          remainingCredit={remainingCredit}
          coursePrice={coursePrice}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
