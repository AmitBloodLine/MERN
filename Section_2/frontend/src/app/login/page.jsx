import React from "react";
import classes from "./login.module.css";

const page = () => {
  return (
    <div>
      <main className={classes.random}>
        <div className="row align-items-center vh-100">
          <div className="col-md-3 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="text-center">Brand Logo</h2>
                <h2 className="text-center">Login</h2>

                <form>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email Address
                    </label>

                    <input
                      type="text"
                      class="form-control"
                      name=""
                      id="email"
                      aria-describedby="helpId"
                      placeholder=""
                    />

                    <small id="helpId" class="form-text text-muted">
                      Enter valid Email Address
                    </small>
                  </div>

                  <div class="mb-3">
                    <label for="password" class="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      class="form-control"
                      name=""
                      id="password"
                      aria-describedby="helpId"
                      placeholder=""
                    />

                    <small id="helpId" class="form-text text-muted">
                      Create a strong password
                    </small>
                  </div>

                  <button class="btn btn-dark w-100 my-4">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
