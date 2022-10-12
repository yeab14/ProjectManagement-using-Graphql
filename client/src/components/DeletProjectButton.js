import { useNavigate } from "react-router-dom";
import { TbTrash } from "react-icons/tb";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const DeletProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  return (
    <div className="d-flex ms-auto mt-5">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <TbTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeletProjectButton;
