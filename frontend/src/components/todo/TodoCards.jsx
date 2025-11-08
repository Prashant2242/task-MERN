import React from "react";
import { MdDelete, MdDeliveryDining } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({ data , id, delid, display}   ) => {
  return (
    <div className="todo-card p-3">
      <div>
        <h5>{data.title}</h5>
        <p>{data.body.length > 77 ? data.body.substring(0, 77) + "..." : data.body}</p>
      </div>

      <div className="d-flex justify-content-end gap-3">
        <div className="card-icon-head px-2 py-1" onClick={()=>{
            display("block");
        }}>
          <GrDocumentUpdate className="cards-icons" /> Update
        </div>
        <div className="card-icon-head px-2 py-1 text-danger" 
        onClick={()=>{
              delid(id);
        }}>
          <MdDelete className="cards-icons del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;

