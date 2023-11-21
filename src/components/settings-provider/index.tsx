"use client";

import { HelpCenterSettings } from "@/src/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useContext } from "react";

export const SettingsContext = createContext<HelpCenterSettings>({});

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data] = useGetSettingsQuery({ domain: "findersme" });
  return (
    <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const settings = useContext(SettingsContext);

  if (!settings) {
    throw new Error("useSettings must be using with SettingsProvider");
  }

  return settings;
};

function useGetSettingsQuery(props: { domain: string }) {
  const query = useSuspenseQuery({
    queryKey: ["kb-settings", props.domain],
    queryFn: async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/settings/public/${props.domain}`;

      const res: HelpCenterSettings = await (await fetch(url)).json();
      return res;
    },
  });

  return [query.data as HelpCenterSettings, query] as const;
}
