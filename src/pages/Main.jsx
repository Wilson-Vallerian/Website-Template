import "../styles/body/main.css";
import ModelViewer from "../components/Main/ModelViewer";
import { useNavigate } from "react-router-dom";
import InterestedButton from "../components/InterestedButton";

export default function Main() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/services");
  }

  return (
    <>
      <div className="hero">
        <div className="transparent-layer">
          <div className="hero-text">
            <h1>Template</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
            <InterestedButton
              onClick={handleClick}
              wrapperStyle={{
                justifyContent: "flex-start",
              }}
            >
              Click Me
            </InterestedButton>
          </div>
          <div className="image-container">
            <ModelViewer
              modelPath="/model3d/scene.gltf"
              className="container3D"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// TODO: CORRECT MOBILE ALLIGNMENT ON MAIN PAGE
