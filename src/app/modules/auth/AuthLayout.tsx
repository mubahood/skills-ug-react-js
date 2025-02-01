import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/helpers";

const AuthLayout = () => {
  useEffect(() => {
    // Ensure the #root element stretches fully
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div
      className="d-flex flex-column flex-lg-row flex-column-fluid"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {/* LEFT SIDE (scrollable if content overflows) */}
      <div
        className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1"
        style={{ overflowY: "auto" }}
      >
        {/* Form Section */}
        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
          <div className="w-100 w-lg-500px p-10">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <div className="d-flex flex-center flex-wrap px-5">
          <div className="d-flex fw-semibold text-primary fs-base">
            <a href="javascript:;" className="px-5" rel="noreferrer">
              Terms
            </a>
            <a href="javascript:;" className="px-5" rel="noreferrer">
              Plans
            </a>
            <a href="javascript:;" className="px-5" rel="noreferrer">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (fixed background, no scrolling) */}
      <div
        className="d-none  d-lg-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
        style={{
          backgroundImage: `url(${toAbsoluteUrl("media/misc/auth-bg.png")})`,
          // Ensure the right side also stretches:
          minHeight: "100%",
        }}
      >
        <div className="d-flex flex-column flex-center py-15 px-5 px-md-15 w-100">
          {/* Logo */}
          <Link to="/" className="mb-12">
            <img
              alt="Logo"
              src={toAbsoluteUrl("media/logos/custom-1.png")}
              className="h-75px"
            />
          </Link>

          {/* Image */}
          <img
            className="mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
            src={toAbsoluteUrl("media/misc/auth-screens.png")}
            alt=""
          />

          {/* Title */}
          <h1 className="text-white fs-2qx fw-bolder text-center mb-7">
            Fast, Efficient and Productive
          </h1>

          {/* Description */}
          <div className="text-white fs-base text-center">
            In this kind of post,{" "}
            <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
              the blogger
            </a>
            introduces a person they’ve interviewed and provides some background
            information about
            <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
              the interviewee
            </a>
            and their work following this is a transcript of the interview.
          </div>
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };
