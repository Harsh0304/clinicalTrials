import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "../pages/home/home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Program = ({ currentUser }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showActions, setShowActions] = useState(false);

  const handlefile = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };
  return (
    <section className="programs">
      <div className="container program__container">
        <SectionHead icon={<FaCrown />} title="Our Apps" />
        <div className="programs__wrapper">
          <Card className="programs__program">
            <Link to="/data-points">
              <h4>Digital ClinOps</h4>
            </Link>
          </Card>

          <input id="model" type="file" multiple onChange={handlefile} hidden />
          <label htmlFor="model">
            <Card className="programs__program">Model Excel (Upload)</Card>
          </label>

          <Card className="programs__program">
            CTFP Analytics
            <span onClick={() => setShowActions(!showActions)}>
              <BiDotsVerticalRounded />
            </span>
            <input
              id="CTFP"
              type="file"
              multiple
              onChange={handlefile}
              hidden
            />
            {showActions && (
              <div className="program__actions">
                <label htmlFor="CTFP">Upload</label>
                <Link>Run</Link>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Program;
