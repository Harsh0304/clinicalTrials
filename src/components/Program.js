import { useState } from "react";
import { Link } from "react-router-dom";

import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "../pages/home/home.css";

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
            <a
              href="https://apps.powerapps.com/play/e/default-258ac4e4-146a-411e-9dc8-79a9e12fd6da/a/fafd8b97-d3d6-45b1-87c4-dd03f47dde9e?tenantId=258ac4e4-146a-411e-9dc8-79a9e12fd6da&hint=2481ed97-fbe5-4b47-9087-be320b79f505&sourcetime=1695706200705"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Digital ClinOps</h4>
            </a>
          </Card>
          <Card className="programs__program">
            Dashboard
            <span onClick={() => setShowActions(!showActions)}>
              <IoIosArrowDropdownCircle />
            </span>
            <input
              id="CTFP"
              type="dropdown"
              multiple
              onChange={handlefile}
              hidden
            />
            {showActions && (
              <div className="program__actions">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.powerbi.com/groups/me/reports/48460cf8-b9f2-4225-8395-8652c0eca0ec/ReportSectionce788b5542d68f05aa47?experience=power-bi"
                >
                  CTFP Analytics
                </a>
                <Link>DM</Link>
                <Link>Budget and Finance</Link>
                <Link>Starup</Link>
                <Link>DOA</Link>
                <Link>Executive summary</Link>
              </div>
            )}
          </Card>
          {/* <Card className="programs__program">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://app.powerbi.com/groups/me/reports/48460cf8-b9f2-4225-8395-8652c0eca0ec/ReportSectionce788b5542d68f05aa47?experience=power-bi"
            >
              <h4>Dashboard</h4>
            </a>
          </Card> */}

          <input id="model" type="file" multiple onChange={handlefile} hidden />
          <label htmlFor="model">
            <Card className="programs__program">Model Excel (Upload)</Card>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Program;
