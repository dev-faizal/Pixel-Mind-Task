import { useState } from "react";
import "./App.css";
import { studentData } from "./components/data";
import Table from "./components/Table";


const tableHeadings = [
  "Sl.no",
  "Student Name",
  "Student Age",
  "Student DOB",
  "Total Marks",
  "Actions",
];

// Inline css has been used throughout the Application, later can integrate to external file or
// use CSS frameworks(TailwindCSS,ChakraUI etc..)

function App() {
  const [mainData, setMainData] = useState(studentData);

  const onDelete = (id) => {
    const updatedStudents = mainData.filter((student) => student.id !== id);
    setMainData(updatedStudents);
  };

  return (
    <>
      <h1>Students Data</h1>
      <Table
        tableHeadings={tableHeadings}
        data={mainData}
        handleDelete={(id)=>onDelete(id)}
        handleUpdateData={(items)=>setMainData(items)}
      />
      
    </>
  );
}

export default App;
