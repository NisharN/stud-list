import { useContext } from "react";
import { StudentContext } from "../context/Context";
import { Link } from "react-router-dom";

function StudentDetails() {
  const { students, addFavourite } = useContext(StudentContext); // Get in StudentContext (student & addFovourite)

  return (
    <div>
      <div className="flex justify-between  bg-[#97549e]  text-[#27302C] p-5 ">
        <h1 className="text-2xl font-medium">

        {/* Student List Link */}
          <Link to="/">Student List</Link> 
        </h1>
        <h1 className="text-2xl font-medium">

             {/* Favourite Student List Link */}
          <Link to="/fav">Favourite Students List</Link>
        </h1>
      </div>
      {students.map((student, index) => (
        <div className="flex justify-between items-center mx-5 my-2 text-xl" key={student.id}>
          <h1>
            {index + 1}. {student.name}
          </h1>
          <button
            onClick={() => addFavourite(student.id)}
            className="  bg-[#97549e] text-black p-1 rounded-md "
            disabled={student.isFavourite}
          >
            {student.isFavourite ? "Added to Fav" : "Add Favourite"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentDetails;