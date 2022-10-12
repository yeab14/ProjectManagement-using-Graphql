import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { CREATE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const CreateClientModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [createClient] = useMutation(CREATE_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { createClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: { ...clients, createClient } },
      });
    },
  });

  const onSubmitClient = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all fields");
    }

    createClient(name, email, phone);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#createClientModal"
      >
        <div className="d-flex align-items-center">
          <FaUserPlus className="icon" />
          <span>Add Client</span>
        </div>
      </button>

      <div
        className="modal fade"
        id="createClientModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="createClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createClientModalLabel">
                New Client
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="frm-clinet" onSubmit={onSubmitClient}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
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
                form="frm-clinet"
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
  );
};

export default CreateClientModal;
