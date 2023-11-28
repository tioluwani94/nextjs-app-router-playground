import { headers } from "next/headers";
import { Article, Collection, HelpCenterSettings } from "../types";

const getDomain  = () => {
    const headersInstance = headers();
    const referer = headersInstance.get("referer");
    const splitReferer = referer?.split(".");
    const defaultDomainName = splitReferer?.[0];

    return defaultDomainName
}

export async function getHelpcenterSettings(): Promise<HelpCenterSettings> {
    const defaultDomainName = getDomain();
  
    const res = await fetch(
      `${process.env.BASE_API_URL}/settings/public/findersme`,
      { next: { revalidate: 0 } }
    );
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  

export const getCollections = async (): Promise<Collection[]> => {
    const defaultDomainName = getDomain();

    const res = await fetch(
      `${process.env.BASE_API_URL}/collection/public/findersme`,
      { next: { revalidate: 0 } }
    );
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  };
  
export const getArticles = async (): Promise<Article[]> => {
    const defaultDomainName = getDomain();
    
    const res = await fetch(
      `${process.env.BASE_API_URL}/article/public/findersme`,
      { next: { revalidate: 0 } }
    );
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
};