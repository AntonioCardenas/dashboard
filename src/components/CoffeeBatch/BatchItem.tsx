import React from "react";
import QRCode from "react-qr-code";
import { CoffeeBatchType, PaginationType } from "../common/types";

type props = {
  index: number;
  coffeeBatch: CoffeeBatchType;
  pagination: PaginationType;
};

const BatchItem = ({ index, coffeeBatch, pagination }: props) => {
  const itemPage = Math.ceil((index + 1) / pagination.itemsPerPage);
  const batchUrl = window.location.origin
    .concat("/batch/")
    .concat(coffeeBatch.ipfsHash);

  return (
    <tr
      key={coffeeBatch.id}
      className={pagination.current === itemPage ? "show" : "hide"}
    >
      <td className="main">
        <div className="qrcode">
          <QRCode value={batchUrl} size={60} />
        </div>
        <div className="info">
          {/* <div className="item">
            <span>{coffeeBatch.name}</span>
          </div> */}
          <div className="item">
            {coffeeBatch.description.length > 80 ? (
              <span>{coffeeBatch.description.slice(0, 79)}...</span>
            ) : (
              <span>{coffeeBatch.description}</span>
            )}
          </div>
        </div>
      </td>
      <td>
        <div className="location">
          <span className="village">{coffeeBatch.farm.village}</span>
          <span>
            {coffeeBatch.farm.region}, {coffeeBatch.farm.country}
          </span>
        </div>
      </td>
      <td>{coffeeBatch.farm.name}</td>
      <td>{coffeeBatch.farm.certifications}</td>
      <td className="batch">
        <span>
          {coffeeBatch.farm.altitude}{" "}
          {coffeeBatch.farm.altitude === "-" ? "" : "MSNM"}
        </span>
      </td>
      <td>
        <span>{coffeeBatch.batch.variety}</span>
      </td>
      <td>
        <span>{coffeeBatch.batch.process}</span>
      </td>
      <td>
        <span>{coffeeBatch.batch.weight} Lbs</span>
      </td>
      <td className="cupprofile">
        <span>{coffeeBatch.cupProfile.aroma}</span>
      </td>
      <td>
        <span>{coffeeBatch.cupProfile.acidity}</span>
      </td>
      <td>
        <span>{coffeeBatch.cupProfile.aftertaste}</span>
      </td>
      <td>
        <span>{coffeeBatch.cupProfile.body}</span>
      </td>
      <td>
        <span>{coffeeBatch.cupProfile.flavor}</span>
      </td>
      <td>
        <span>{coffeeBatch.cupProfile.sweetness}</span>
      </td>
      <td>
        <span>{coffeeBatch.cupProfile.note}</span>
      </td>
    </tr>
  );
};

export default BatchItem;
