import React, { useState } from "react";
import deleteIcon from "../images/delete.png";
import edit from "../images/edit.png";
import Modal from "./Modal/Modal";
import EditModal from "./Modal/EditModal";

const tableDataStyles = {
  border: "2px solid #ffd8d8",
  padding: "7px",
  cursor: "pointer",
};

// Inline css has been used throughout the Application, later can integrate to external file or
// use CSS frameworks(TailwindCSS,ChakraUI etc..)

const Table = ({ data, tableHeadings, handleDelete, handleUpdateData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsOpenEdit] = useState(false);
  const [selRow, setSelRow] = useState(null);
  const [editDetails, setEditDetails] = useState("");

  const onHandleDelete = (id) => {
    setIsOpen(true);
    setSelRow(id);
  };

  const handleDeleteRow = (row) => {
    handleDelete(row);
    setIsOpen(false);
  };

  const handleEditOpen = (row) => {
    setSelRow(row);
    setEditDetails(row);
    setIsOpenEdit(true);
  };

  const handleSaveEdit = () => {
    const updatedData = data.map((item) => {
      if (item.id === selRow.id) {
        return { ...item, studentName: editDetails };
      }
      return item;
    });
    handleUpdateData(updatedData);
    setIsOpenEdit(false);
  };

  return (
    <>
      <table
        style={{
          width: "98%",
          borderCollapse: "collapse",
          border: "2px solid #ffd8d8",
          borderRadius: "20px",
        }}
      >
        <thead>
          <tr>
            {tableHeadings?.map((tName, index) => (
              <th key={index} style={tableDataStyles}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {tName}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((person, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "white" : "#fce6e6" }}
            >
              <td style={tableDataStyles}>{person.id}</td>
              <td style={tableDataStyles}>{person?.studentName}</td>
              <td style={tableDataStyles}>{person.studentAge}</td>
              <td style={tableDataStyles}>{person.studentDOB}</td>
              <td style={tableDataStyles}>{person.totalMarks}</td>
              <td>
                <img
                  src={edit}
                  alt="Edit Icon"
                  onClick={() => handleEditOpen(person)}
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />{" "}
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  onClick={() => onHandleDelete(person.id)}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "30px",
                    cursor: "pointer",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        handleDelete={() => handleDeleteRow(selRow)}
        children={<p>You want delete this row?</p>}
      />
      <EditModal
        isOpenEdit={isEditOpen}
        handleClose={() => setIsOpenEdit(false)}
        children={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Edit Row</h2>
            <form onSubmit={handleSaveEdit}>
              <input
                style={{ marginBottom: "20px", padding: "10px" }}
                type="text"
                defaultValue={editDetails?.studentName}
                placeholder="Student Name"
                onChange={(e) => setEditDetails(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          </div>
        }
      />
    </>
  );
};

export default Table;
