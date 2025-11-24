export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export enum GeneratorState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface Translations {
  nav: {
    manifesto: string;
    generator: string;
    skills: string; // Renamed from gallery
    contacts: string;
    join: string;
  };
  hero: {
    tag: string;
    role1: string;
    role2: string;
    role3: string;
    btn_listen: string;
    btn_collab: string;
  };
  manifesto: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    stat1: string;
    stat1_desc: string;
    stat2: string;
    stat2_desc: string;
    stat3: string;
    stat3_desc: string;
  };
  generator: {
    bg_text: string;
    title: string;
    desc: string;
    placeholder: string;
    btn_generate: string;
    result_prefix: string;
  };
  skills: { // New section
    title_main: string;
    title_stroke: string;
    card1_title: string;
    card1_desc: string;
    card2_title: string;
    card2_desc: string;
    card3_title: string;
    card3_desc: string;
    card4_title: string;
    card4_desc: string;
  };
  footer: {
    title_pre: string;
    desc: string;
    form_name: string;
    form_email: string;
    form_msg: string;
    form_btn: string;
    rights: string;
    credits: string;
  };
}