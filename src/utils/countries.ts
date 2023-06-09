import {ImageSourcePropType} from 'react-native';
import {getLocales} from 'react-native-localize';

export type LanguageCode =
  | 'ru'
  | 'es'
  | 'en'
  | 'cs'
  | 'de'
  | 'fr'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pl'
  | 'pt'
  | 'uk';

export type CountryItem = {
  id: number;
  alpha2: string;
  alpha3: string;
  name: string;
};

export const deviceLanguage = 'ru' as LanguageCode;

export const countryFlags: Record<string, ImageSourcePropType> = {
  AD: require('../assets/flags/16x16/ad.png'),
  AE: require('../assets/flags/16x16/ae.png'),
  AF: require('../assets/flags/16x16/af.png'),
  AG: require('../assets/flags/16x16/ag.png'),
  AL: require('../assets/flags/16x16/al.png'),
  AM: require('../assets/flags/16x16/am.png'),
  AO: require('../assets/flags/16x16/ao.png'),
  AR: require('../assets/flags/16x16/ar.png'),
  AT: require('../assets/flags/16x16/at.png'),
  AU: require('../assets/flags/16x16/au.png'),
  AZ: require('../assets/flags/16x16/az.png'),
  BA: require('../assets/flags/16x16/ba.png'),
  BB: require('../assets/flags/16x16/bb.png'),
  BD: require('../assets/flags/16x16/bd.png'),
  BE: require('../assets/flags/16x16/be.png'),
  BF: require('../assets/flags/16x16/bf.png'),
  BG: require('../assets/flags/16x16/bg.png'),
  BH: require('../assets/flags/16x16/bh.png'),
  BI: require('../assets/flags/16x16/bi.png'),
  BJ: require('../assets/flags/16x16/bj.png'),
  BN: require('../assets/flags/16x16/bn.png'),
  BO: require('../assets/flags/16x16/bo.png'),
  BR: require('../assets/flags/16x16/br.png'),
  BS: require('../assets/flags/16x16/bs.png'),
  BT: require('../assets/flags/16x16/bt.png'),
  BW: require('../assets/flags/16x16/bw.png'),
  BY: require('../assets/flags/16x16/by.png'),
  BZ: require('../assets/flags/16x16/bz.png'),
  CA: require('../assets/flags/16x16/ca.png'),
  CD: require('../assets/flags/16x16/cd.png'),
  CF: require('../assets/flags/16x16/cf.png'),
  CG: require('../assets/flags/16x16/cg.png'),
  CH: require('../assets/flags/16x16/ch.png'),
  CI: require('../assets/flags/16x16/ci.png'),
  CL: require('../assets/flags/16x16/cl.png'),
  CM: require('../assets/flags/16x16/cm.png'),
  CN: require('../assets/flags/16x16/cn.png'),
  CO: require('../assets/flags/16x16/co.png'),
  CR: require('../assets/flags/16x16/cr.png'),
  CU: require('../assets/flags/16x16/cu.png'),
  CV: require('../assets/flags/16x16/cv.png'),
  CY: require('../assets/flags/16x16/cy.png'),
  CZ: require('../assets/flags/16x16/cz.png'),
  DE: require('../assets/flags/16x16/de.png'),
  DJ: require('../assets/flags/16x16/dj.png'),
  DK: require('../assets/flags/16x16/dk.png'),
  DM: require('../assets/flags/16x16/dm.png'),
  DO: require('../assets/flags/16x16/do.png'),
  DZ: require('../assets/flags/16x16/dz.png'),
  EC: require('../assets/flags/16x16/ec.png'),
  EE: require('../assets/flags/16x16/ee.png'),
  EG: require('../assets/flags/16x16/eg.png'),
  ER: require('../assets/flags/16x16/er.png'),
  ES: require('../assets/flags/16x16/es.png'),
  ET: require('../assets/flags/16x16/et.png'),
  FI: require('../assets/flags/16x16/fi.png'),
  FJ: require('../assets/flags/16x16/fj.png'),
  FM: require('../assets/flags/16x16/fm.png'),
  FR: require('../assets/flags/16x16/fr.png'),
  GA: require('../assets/flags/16x16/ga.png'),
  GB: require('../assets/flags/16x16/gb.png'),
  GD: require('../assets/flags/16x16/gd.png'),
  GE: require('../assets/flags/16x16/ge.png'),
  GH: require('../assets/flags/16x16/gh.png'),
  GM: require('../assets/flags/16x16/gm.png'),
  GN: require('../assets/flags/16x16/gn.png'),
  GQ: require('../assets/flags/16x16/gq.png'),
  GR: require('../assets/flags/16x16/gr.png'),
  GT: require('../assets/flags/16x16/gt.png'),
  GW: require('../assets/flags/16x16/gw.png'),
  GY: require('../assets/flags/16x16/gy.png'),
  HN: require('../assets/flags/16x16/hn.png'),
  HR: require('../assets/flags/16x16/hr.png'),
  HT: require('../assets/flags/16x16/ht.png'),
  HU: require('../assets/flags/16x16/hu.png'),
  ID: require('../assets/flags/16x16/id.png'),
  IE: require('../assets/flags/16x16/ie.png'),
  IL: require('../assets/flags/16x16/il.png'),
  IN: require('../assets/flags/16x16/in.png'),
  IQ: require('../assets/flags/16x16/iq.png'),
  IR: require('../assets/flags/16x16/ir.png'),
  IS: require('../assets/flags/16x16/is.png'),
  IT: require('../assets/flags/16x16/it.png'),
  JM: require('../assets/flags/16x16/jm.png'),
  JO: require('../assets/flags/16x16/jo.png'),
  JP: require('../assets/flags/16x16/jp.png'),
  KE: require('../assets/flags/16x16/ke.png'),
  KG: require('../assets/flags/16x16/kg.png'),
  KH: require('../assets/flags/16x16/kh.png'),
  KI: require('../assets/flags/16x16/ki.png'),
  KM: require('../assets/flags/16x16/km.png'),
  KN: require('../assets/flags/16x16/kn.png'),
  KP: require('../assets/flags/16x16/kp.png'),
  KR: require('../assets/flags/16x16/kr.png'),
  KW: require('../assets/flags/16x16/kw.png'),
  KZ: require('../assets/flags/16x16/kz.png'),
  LA: require('../assets/flags/16x16/la.png'),
  LB: require('../assets/flags/16x16/lb.png'),
  LC: require('../assets/flags/16x16/lc.png'),
  LI: require('../assets/flags/16x16/li.png'),
  LK: require('../assets/flags/16x16/lk.png'),
  LR: require('../assets/flags/16x16/lr.png'),
  LS: require('../assets/flags/16x16/ls.png'),
  LT: require('../assets/flags/16x16/lt.png'),
  LU: require('../assets/flags/16x16/lu.png'),
  LV: require('../assets/flags/16x16/lv.png'),
  LY: require('../assets/flags/16x16/ly.png'),
  MA: require('../assets/flags/16x16/ma.png'),
  MC: require('../assets/flags/16x16/mc.png'),
  MD: require('../assets/flags/16x16/md.png'),
  ME: require('../assets/flags/16x16/me.png'),
  MG: require('../assets/flags/16x16/mg.png'),
  MH: require('../assets/flags/16x16/mh.png'),
  MK: require('../assets/flags/16x16/mk.png'),
  ML: require('../assets/flags/16x16/ml.png'),
  MM: require('../assets/flags/16x16/mm.png'),
  MN: require('../assets/flags/16x16/mn.png'),
  MR: require('../assets/flags/16x16/mr.png'),
  MT: require('../assets/flags/16x16/mt.png'),
  MU: require('../assets/flags/16x16/mu.png'),
  MV: require('../assets/flags/16x16/mv.png'),
  MW: require('../assets/flags/16x16/mw.png'),
  MX: require('../assets/flags/16x16/mx.png'),
  MY: require('../assets/flags/16x16/my.png'),
  MZ: require('../assets/flags/16x16/mz.png'),
  NA: require('../assets/flags/16x16/na.png'),
  NE: require('../assets/flags/16x16/ne.png'),
  NG: require('../assets/flags/16x16/ng.png'),
  NI: require('../assets/flags/16x16/ni.png'),
  NL: require('../assets/flags/16x16/nl.png'),
  NO: require('../assets/flags/16x16/no.png'),
  NP: require('../assets/flags/16x16/np.png'),
  NR: require('../assets/flags/16x16/nr.png'),
  NZ: require('../assets/flags/16x16/nz.png'),
  OM: require('../assets/flags/16x16/om.png'),
  PA: require('../assets/flags/16x16/pa.png'),
  PE: require('../assets/flags/16x16/pe.png'),
  PG: require('../assets/flags/16x16/pg.png'),
  PH: require('../assets/flags/16x16/ph.png'),
  PK: require('../assets/flags/16x16/pk.png'),
  PL: require('../assets/flags/16x16/pl.png'),
  PT: require('../assets/flags/16x16/pt.png'),
  PW: require('../assets/flags/16x16/pw.png'),
  PY: require('../assets/flags/16x16/py.png'),
  QA: require('../assets/flags/16x16/qa.png'),
  RO: require('../assets/flags/16x16/ro.png'),
  RS: require('../assets/flags/16x16/rs.png'),
  RU: require('../assets/flags/16x16/ru.png'),
  RW: require('../assets/flags/16x16/rw.png'),
  SA: require('../assets/flags/16x16/sa.png'),
  SB: require('../assets/flags/16x16/sb.png'),
  SC: require('../assets/flags/16x16/sc.png'),
  SD: require('../assets/flags/16x16/sd.png'),
  SE: require('../assets/flags/16x16/se.png'),
  SG: require('../assets/flags/16x16/sg.png'),
  SI: require('../assets/flags/16x16/si.png'),
  SK: require('../assets/flags/16x16/sk.png'),
  SL: require('../assets/flags/16x16/sl.png'),
  SM: require('../assets/flags/16x16/sm.png'),
  SN: require('../assets/flags/16x16/sn.png'),
  SO: require('../assets/flags/16x16/so.png'),
  SR: require('../assets/flags/16x16/sr.png'),
  SS: require('../assets/flags/16x16/ss.png'),
  ST: require('../assets/flags/16x16/st.png'),
  SV: require('../assets/flags/16x16/sv.png'),
  SY: require('../assets/flags/16x16/sy.png'),
  SZ: require('../assets/flags/16x16/sz.png'),
  TD: require('../assets/flags/16x16/td.png'),
  TG: require('../assets/flags/16x16/tg.png'),
  TH: require('../assets/flags/16x16/th.png'),
  TJ: require('../assets/flags/16x16/tj.png'),
  TL: require('../assets/flags/16x16/tl.png'),
  TM: require('../assets/flags/16x16/tm.png'),
  TN: require('../assets/flags/16x16/tn.png'),
  TO: require('../assets/flags/16x16/to.png'),
  TR: require('../assets/flags/16x16/tr.png'),
  TT: require('../assets/flags/16x16/tt.png'),
  TV: require('../assets/flags/16x16/tv.png'),
  TZ: require('../assets/flags/16x16/tz.png'),
  UA: require('../assets/flags/16x16/ua.png'),
  UG: require('../assets/flags/16x16/ug.png'),
  US: require('../assets/flags/16x16/us.png'),
  UY: require('../assets/flags/16x16/uy.png'),
  UZ: require('../assets/flags/16x16/uz.png'),
  VC: require('../assets/flags/16x16/vc.png'),
  VE: require('../assets/flags/16x16/ve.png'),
  VN: require('../assets/flags/16x16/vn.png'),
  VU: require('../assets/flags/16x16/vu.png'),
  WS: require('../assets/flags/16x16/ws.png'),
  YE: require('../assets/flags/16x16/ye.png'),
  ZA: require('../assets/flags/16x16/za.png'),
  ZM: require('../assets/flags/16x16/zm.png'),
  ZW: require('../assets/flags/16x16/zw.png'),
} as const;

export const countriesByLanguage: Record<
  LanguageCode,
  () => Promise<CountryItem[] | any>
> = {
  ru: () => import('../countries/ru/countries.json'),
  es: () => import('../countries/es/countries.json'),
  en: () => import('../countries/en/countries.json'),
  cs: () => import('../countries/cs/countries.json'),
  de: () => import('../countries/de/countries.json'),
  fr: () => import('../countries/fr/countries.json'),
  it: () => import('../countries/it/countries.json'),
  ja: () => import('../countries/ja/countries.json'),
  ko: () => import('../countries/ko/countries.json'),
  pl: () => import('../countries/pl/countries.json'),
  pt: () => import('../countries/pt/countries.json'),
  uk: () => import('../countries/uk/countries.json'),
} as const;
