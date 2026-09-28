export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  categoryVi?: string;
  titleEn?: string;
  services: string;
  servicesVi?: string;
}

export const cases: CaseStudy[] = [
  {
    id: "01",
    category: "DIGITAL TRANSFORMATION",
    title: "Từ quy trình rời rạc<br />đến một hệ thống thống nhất.",
    titleEn: "From fragmented processes<br />to one unified system.",
    categoryVi: "CHUYỂN ĐỔI SỐ",
    services: "Technology + Consulting",
    servicesVi: "Công nghệ + Tư vấn"
  },
  {
    id: "02",
    category: "BRAND & DIGITAL",
    title: "Đưa một thương hiệu mới<br />ra thị trường.",
    titleEn: "Taking a new brand<br />to market.",
    categoryVi: "THƯƠNG HIỆU & SỐ",
    services: "Branding + Marketing",
    servicesVi: "Thương hiệu + Tiếp thị"
  },
  {
    id: "03",
    category: "BUSINESS SETUP",
    title: "Từ ý tưởng kinh doanh<br />đến nền tảng vận hành.",
    titleEn: "From a business idea<br />to an operational foundation.",
    categoryVi: "THIẾT LẬP DOANH NGHIỆP",
    services: "Legal + Finance + HR",
    servicesVi: "Pháp lý + Tài chính + Nhân sự"
  },
  {
    id: "04",
    category: "BUSINESS DEVELOPMENT",
    title: "Từ một sản phẩm<br />đến một doanh nghiệp.",
    titleEn: "From a product<br />to a business.",
    categoryVi: "PHÁT TRIỂN KINH DOANH",
    services: "Marketing + Sales + Consulting",
    servicesVi: "Tiếp thị + Bán hàng + Tư vấn"
  }
];
