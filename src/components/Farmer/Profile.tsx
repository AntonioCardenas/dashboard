import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/esm/Card";
import Image from "react-bootstrap/esm/Image";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import "../../styles/farmer.scss";
import Loading from "../Loading";
import NotFound from "../common/NotFound";
import { getFarmer, getFarmerFarms, getImageUrl } from "../../db/firebase";

export const Profile = () => {
  const { t } = useTranslation();
  const { farmerId } = useParams();
  const [loading, setLoading] = useState(true);
  const [farmerData, setFarmerData] = useState<any>();
  const [farms, setFarms] = useState<any>();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const load = async () => {
      if (farmerId) {
        await getFarmer(farmerId).then((result) => {
          setFarmerData(result);
        });
        await getImageUrl(farmerId).then((result) => {
          setImageUrl(result);
        });
        await getFarmerFarms(farmerId).then((result) => {
          console.log(farms);
          // console.log(result[0].data());
          setFarms(result);
        });
        setLoading(false);
      }
    };
    load();
    // eslint-disable-next-line
  }, [farmerId]);

  if (loading) {
    return (
      <Loading label={t("loading").concat("...")} className="loading-wrapper" />
    );
  }

  if (farmerData === null) {
    return <NotFound msg={t("errors.farmer-not-found")} />;
  }

  return (
    <div className="farmer">
      <Card className="general">
        <Card.Header>
          <Image src={imageUrl} className="pic" />
        </Card.Header>
        <Card.Body>
          <div className="info-container">
            <div className="farmer-detail">
              {farmerData && farmerData.fullname && (
                <div className="info">
                  <h6 className="bio">
                    <>{t("farmer")}</>
                  </h6>
                  <span className="text-light">{farmerData.fullname}</span>
                </div>
              )}
              {farmerData && farmerData.gender && (
                <div className="info">
                  <h6 className="bio">
                    <>{t("gender")}</>
                  </h6>
                  <span className="text-light">
                    <>{t(farmerData.gender)}</>
                  </span>
                </div>
              )}
              {farmerData && farmerData.bio && (
                <div className="info">
                  <h6 className="bio">
                    <>{t("bio")}</>
                  </h6>
                  <span className="text-light">{farmerData.bio}</span>
                </div>
              )}
              {farmerData && farmerData.company && (
                <div className="info">
                  <h6 className="bio">
                    <>{t("company")}</>
                  </h6>
                  <span className="text-light">{farmerData.company}</span>
                </div>
              )}
              <div className="location">
                {farmerData && farmerData.region && (
                  <>
                    <div>
                      <h6 className="bio mt-2">
                        <>{t("location")}</>
                      </h6>
                      <span className="text-light">
                        {farmerData.village}, {farmerData.region}
                      </span>
                    </div>
                    <div>
                      <h6 className="bio mt-2">
                        <>{t("country")}</>
                      </h6>
                      <span className="text-light">{farmerData.country}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
