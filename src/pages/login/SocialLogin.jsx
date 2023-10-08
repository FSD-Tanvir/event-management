import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate()

  const socialLogin = (media) => {
    media()
      .then(() => {
        toast.success("User logged in successfully");
        navigate("/")

      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around">
        <button
          onClick={() => socialLogin(googleLogin)}
          className="btn btn-neutral  btn-sm"
        >
          Google
        </button>
        <button
          onClick={() => socialLogin(githubLogin)}
          className="btn btn-neutral  btn-sm"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;