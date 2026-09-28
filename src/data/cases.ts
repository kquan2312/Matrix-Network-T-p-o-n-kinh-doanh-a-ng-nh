export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  services: string;
}

export const cases: CaseStudy[] = [
  {
    id: "01",
    category: "DIGITAL TRANSFORMATION",
    title: "Từ quy trình rời rạc<br />đến một hệ thống thống nhất.",
    services: "Technology + Consulting"
  },
   {
    id: "02",
    category: "BRAND & DIGITAL",
    title: "Đưa một thương hiệu mới<br />ra thị trường.",
    services: "Branding + Marketing",
  },
  {
    id: "03",
    category: "BUSINESS SETUP",
    title: "Từ ý tưởng kinh doanh<br />đến nền tảng vận hành.",
    services: "Legal + Finance + HR",
  }
];
