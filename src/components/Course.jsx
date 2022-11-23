import React, { useCallback, useState } from 'react'

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState({});
  const courseList = [{
    id: 1,
    cName: "react",
    amount: 500,
    isSelected: false
  },
  {
    id: 2,
    cName: "Angular",
    amount: 300,
    isSelected: false
  },
  {
    id: 3,
    cName: "vue",
    amount: 200,
    isSelected: false
  }]
  const handleChange = useCallback(
    (id) => {
      const courses = courseList.map((course) => {
        if (course.id === id) {
          return {
            ...course,
            isSelected: !course.isSelected,
          };
        }
        return course;
      });
      setSelectedCourse(courses);
      console.log(selectedCourse);
    },
    [courseList]
  );
  return (
    <div>
      <table>
        <tbody>
          {courseList && courseList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.cName}<input type="checkbox" onChange={() => handleChange(item.id)} /> <span>{item.amount}</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <h3>Selected Course : </h3>
      <h3>Total Amount :</h3>
    </div>
  )
}

export default Course