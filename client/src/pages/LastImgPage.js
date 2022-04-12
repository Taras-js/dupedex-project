import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { PreLoader } from "../components/PreLoader";
import { LastImage } from "../components/LastImage";

export const LastImgPage = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [image, setImage] = useState(null);
  const fetchLasElement = useCallback(async () => {
    try {
      const fetchLasElement = await request(`/api/images/last`, "GET", null, {
        Authorization: `Bearer ${auth.token}`,
      });
      const [lastElement] = fetchLasElement.slice(-1);
      setImage(lastElement);
    } catch (e) {}
  }, [auth.token, request]);
  useEffect(() => {
    fetchLasElement();
  }, [fetchLasElement]);

  return (
    <div className="image-page">
      {!image ? <PreLoader /> : <LastImage image={image} />}
    </div>
  );
};