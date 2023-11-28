'use client'

import { useEffect } from "react";

export const SimpuWidget: React.FC<{app_id?:string; public_key?:string}> = ({app_id, public_key}) => {
    useEffect(() => {
      if (window.Simpu) {
        var widget = window.Simpu.default.init({
          app_id,
          public_key,
        });
        widget.render();
      }
    });
  
    return null;
};