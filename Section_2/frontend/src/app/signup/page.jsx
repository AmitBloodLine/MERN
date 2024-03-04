import React from "react";

const page = () => {
  return (
    <div>
      <div className="row align-items-center vh-100">
        <div className="col-md-3 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center">Brand Logo</h2>
              <h2 className="text-center">SignUp</h2>

              <form>
                <div class="mb-3">
                  <label for="username" class="form-label">
                    Username
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id="username"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>

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
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    class="form-control"
                    name=""
                    id="password"
                    aria-describedby="helpId"
                    placeholder=""
                  />

                </div>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Remember Me
                    </label>
                </div>

                <button class="btn btn-dark w-100 my-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
