import React from "react"
import PropTypes from "prop-types"

const footILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://unsplash.com/photos/M_mDgb8guhA",
    rating: 4.3
  },
  {
    id:2,
    name: "Potato chips",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAxNzAzMDJfMjI0%2FMDAxNDg4NDAxMjgxMzY2.IYHZFIdF4p-j_UKqWJVTZRNu1Cc8jXeOhBU9Rjzbwvkg.itR52TW52x3UouBRgZfbVoOEHLztn1kydHQL1KFNi1Eg.JPEG%2Fbigstock-Potato-chips-on-a-white-backgr-58970891.jpg%3Ftype%3Dw1200&imgrefurl=https%3A%2F%2Fpost.naver.com%2Fviewer%2FpostView.nhn%3FvolumeNo%3D6660579%26memberNo%3D10142804&tbnid=1AXW8YlK2A5SsM&vet=12ahUKEwjnuZr57dnsAhVB4pQKHbbtAD0QMygCegUIARDVAQ..i&docid=ZHAWnyHLm67JiM&w=1200&h=694&q=%EA%B0%90%EC%9E%90%EC%B9%A9&ved=2ahUKEwjnuZr57dnsAhVB4pQKHbbtAD0QMygCegUIARDVAQ",
    rating: 3.5
  }
];


function Food({ name, rating, picture })
{
  return (
    <div>
      <h2>I Love {name}</h2>
      <h3>{rating}/5</h3>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = 
{
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() 
{
  return (
    <div>
      {footILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
