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
    title: "Chuẩn hóa vận hành<br />trên một nền tảng số thống nhất.",
    titleEn: "Standardizing operations<br />through one unified digital platform.",
    categoryVi: "CHUYỂN ĐỔI SỐ",
    services: "Technology + Digital Consulting",
    servicesVi: "Công nghệ + Tư vấn chuyển đổi số",
  },
  {
    id: "02",
    category: "BRAND & MARKET ENTRY",
    title: "Xây dựng nền tảng thương hiệu<br />cho một doanh nghiệp mới.",
    titleEn: "Building a brand foundation<br />for a new business.",
    categoryVi: "THƯƠNG HIỆU & THỊ TRƯỜNG",
    services: "Brand Strategy + Marketing",
    servicesVi: "Chiến lược thương hiệu + Tiếp thị",
  },
  {
    id: "03",
    category: "BUSINESS OPERATIONS",
    title: "Thiết lập nền tảng pháp lý,<br />tài chính và nhân sự ngay từ đầu.",
    titleEn: "Establishing legal, financial<br />and human resource foundations from day one.",
    categoryVi: "VẬN HÀNH DOANH NGHIỆP",
    services: "Legal + Finance + HR",
    servicesVi: "Pháp lý + Tài chính + Nhân sự",
  },
  {
    id: "04",
    category: "BUSINESS DEVELOPMENT",
    title: "Mở rộng thị trường<br />từ nền tảng kinh doanh sẵn có.",
    titleEn: "Expanding into new markets<br />from an established business foundation.",
    categoryVi: "PHÁT TRIỂN KINH DOANH",
    services: "Business Development + Sales + Consulting",
    servicesVi: "Phát triển kinh doanh + Bán hàng + Tư vấn",
  },
  {
    id: "05",
    category: "DIGITAL PRODUCTS",
    title: "Biến một ý tưởng sản phẩm<br />thành giải pháp có thể vận hành.",
    titleEn: "Turning a product idea<br />into an operational solution.",
    categoryVi: "SẢN PHẨM SỐ",
    services: "Product Strategy + Technology",
    servicesVi: "Chiến lược sản phẩm + Công nghệ",
  },
  {
    id: "06",
    category: "MARKET EXPANSION",
    title: "Kết nối nguồn lực<br />để mở rộng một mô hình kinh doanh.",
    titleEn: "Connecting resources<br />to scale a business model.",
    categoryVi: "MỞ RỘNG THỊ TRƯỜNG",
    services: "Strategy + Partnerships + Investment",
    servicesVi: "Chiến lược + Đối tác + Đầu tư",
  },
];