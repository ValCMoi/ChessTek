import React, { Fragment } from "react";
import data from "./data.json";
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function CardTree(props){
  return (
    <ul>
      {props.data.map((match,index) => (
        <Fragment key={match.name}>
          <li>
            <div className="CardTree" style={{background:'grey'}}>
              <div className="CardTree-body">
                <h4>{match.joueur1.pseudo}</h4>
                <p>VS</p>
                <h4>{match.joueur2.pseudo}</h4>
              </div>
              <div className="CardTree-footer">
                <br/>
              </div>
              <div></div>
            </div>
            {match.children?.length && <CardTree data={match.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="container">
        <div className="org-tree">
            <CardTree data={data} />
        </div>
    </div>

  );
};

export default Chart;
