import { useForm } from "react-hook-form";

import PasswordField from "../components/passwordfield";
import Footer from "../components/footer";

import googlelogo from "../assets/google.png";

import "../css/login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <div className="w-100 flex-grow-1  d-flex flex-column align-items-center justify-content-center">
        <div
          className="w-50 py-4 px-4 px-lg-5 rounded-5 d-flex flex-column gap-4 align-items-center justify-content-center bg-transparent"
          style={{
            boxShadow: "0px 0px 6px 1px rgba(1, 116, 211, 0.2)",
            maxWidth: "380px",
            minWidth: "300px",
          }}
        >
          {/* icon-box */}
          <div
            className="rounded-4 p-2"
            style={{
              boxShadow: "0px 5px 6px 1px rgba(1, 116, 211, 0.2)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              style={{
                width: "2rem",
                height: "2rem",
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          </div>

          {/* titles */}
          <section className="w-100 d-flex flex-column align-items-center">
            <h2 className="text-center fs-5">Sign in with email</h2>
            <p className="text-center fs-6 text-muted">
              Log in to share your reviews and explore honest opinions from
              others.
            </p>
          </section>

          <form
            className="w-100 d-flex flex-column align-items-center gap-2 fs-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* email */}
            <span
              className="d-flex align-items-center gap-2 rounded-3 px-0 px-3 w-100"
              style={{ backgroundColor: "#F9F9F9" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-muted"
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                }}
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                className="flex-grow-1 shadow-none border-0 bg-transparent form-control"
                type="email"
                placeholder="Enter your email"
              />
            </span>
            <span className="w-100">
              {errors.email && (
                <p style={{ fontSize: "0.7rem" }} className="text-danger">
                  {errors.email.message}
                </p>
              )}
            </span>

            {/* password */}
            <PasswordField
              register={register}
              validation={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
            />
            <span className="w-100">
              {errors.password && (
                <p style={{ fontSize: "0.7rem" }} className="text-danger">
                  {errors.password.message}
                </p>
              )}
            </span>

            <span className="w-100 d-flex justify-content-end">
              <a
                className="text-secondary"
                style={{
                  fontSize: "0.8rem",
                  textDecoration: "none",
                }}
                href=""
              >
                Forgot password?
              </a>
            </span>
            <button className="btn w-100 fs-6 rounded-4 hover-btn">
              Log in
            </button>
          </form>

          {/* login separation */}
          <div
            style={{ fontSize: "0.9rem", marginTop: "-1rem" }}
            className="d-flex align-items-center text-muted  w-100 justify-content-between"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                style={{ color: "rgba(0, 0, 0, 0.1)" }}
                className="d-flex align-items-center"
                key={`left-dot-${index}`}
              >
                &bull;
              </span>
            ))}{" "}
            <p className="m-0">Or sign in with</p>{" "}
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                style={{ color: "rgba(0, 0, 0, 0.1)" }}
                className="d-flex align-items-center"
                key={`left-dot-${index}`}
              >
                &bull;
              </span>
            ))}
          </div>

          {/* sign in options */}
          <div className="d-flex align-items-center justify-content-center">
            <span className="shadow-sm py-1 px-4 rounded-3 cursor-pointer">
              <img
                style={{ width: "2rem", height: "2rem" }}
                src={googlelogo}
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
