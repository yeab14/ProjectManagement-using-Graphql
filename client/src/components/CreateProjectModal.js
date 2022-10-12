import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { RiProjectorLine } from "react-icons/ri";
import { GET_PROJECTS } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientQueries";
import { CREATE_PROJECT } from "../mutations/projectMutations";

const CreateProjectModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // "new" is the Enum key of "Not Started"
  const [status, setStatus] = useState("new");
  const [clientId, setClientId] = useState("");

  const [createProject] = useMutation(CREATE_PROJECT, {
    variables: { name, description, status, clientId },
    update(cache, { data: { createProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: { ...projects, createProject } },
      });
    },
  });

  const onSubmitProject = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "" || clientId === "") {
      return alert("Please fill in all fields");
    }

    createProject(name, description, status, clientId);
  };

  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return null;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      {data && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#createProjectModal"
          >
            <div className="d-flex align-items-center">
              <RiProjectorLine className="icon" />
              <span>Add Project</span>
            </div>
          </button>

          <div
            className="modal fade"
            id="createProjectModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="createProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="createProjectModalLabel">
                    New Project
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form id="frm-project" onSubmit={onSubmitProject}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        name="project-name"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="description">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="status">
                        Status
                      </label>
                      <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="clientId">
                        Client
                      </label>
                      <select
                        id="clientId"
                        className="form-select"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value="" disabled>
                          Select Client
                        </option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    form="frm-project"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateProjectModal;
