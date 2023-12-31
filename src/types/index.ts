export type HelpCenterSettings = {
  logo?: string;
  name?: string;
  favicon?: string;
  hero_text?: string;
  show_watermark?: boolean;
  primary_color?: string;
  hero_image?: string;
  custom_font?: string;
  secondary_color?: string;
  social_media_links?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  footer_links?: { label: string; link: string }[];
  header_links?: { label: string; link: string }[];
  home_page_link?: string;
  site_visibility?: boolean;
  enable_livechat_widget?: boolean;
  google_analytics_tag?: string;
  privacy_policy_link?: string;
  default_domain?: string;
  custom_domain?: string;
  header_theme?: "light" | "dark";
  livechat_app_id?: string;
  organization_public_key?: string;
};

export type Article = {
  slug: string;
  title: string;
  content: string;
  description: string;
  author?: {
    uuid: string;
    first_name: string;
    last_name: string;
    image: string;
  };
  author_id: string;
  collection_id?: string;
  collection_data?: {
    name: string;
    slug: string;
  }
  updated_datetime: string;
  created_datetime: string;
};

export type Collection = {
  name: string;
  slug: string;
  description: string;
  blogPosts?: Article[];
  updated_datetime: string;
  created_datetime: string;
};

declare global {
  interface Window {
    [key: string]: any;
  }
}
