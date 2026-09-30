import type { Language } from "../i18n";

export type CompanyCategory =
  | "technology"
  | "finance"
  | "legal"
  | "hr"
  | "marketing"
  | "consulting";

export type CompanyLocation = "hanoi" | "bac-ninh" | "hai-phong" | "hung-yen";

export interface NetworkCompany {
  id: string;
  name: Record<Language, string>;
  category: CompanyCategory;
  location: CompanyLocation;
  description: Record<Language, string>;
  capabilities: Record<Language, string[]>;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  imageUrl?: string;
}

export const companyCategories: CompanyCategory[] = [
  "technology",
  "finance",
  "legal",
  "hr",
  "marketing",
  "consulting"
];

export const companyLocations: CompanyLocation[] = [
  "hanoi",
  "bac-ninh",
  "hai-phong",
  "hung-yen"
];

export const networkCompanies: NetworkCompany[] = [
  {
    id: "sample-01",
    name: { vi: "Doanh nghiệp mẫu 01", en: "Sample business 01" },
    category: "technology",
    location: "hanoi",
    description: {
      vi: "Hồ sơ minh họa cho đơn vị cung cấp giải pháp phần mềm và tự động hóa.",
      en: "A sample profile for a provider of software and automation solutions."
    },
    capabilities: {
      vi: ["Phần mềm", "Tự động hóa", "Tích hợp hệ thống"],
      en: ["Software", "Automation", "System integration"]
    },
    contact: {
      phone: "0901234567",
      email: "contact@techsample.vn",
      website: "https://techsample.vn"
    },
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "sample-02",
    name: { vi: "Doanh nghiệp mẫu 02", en: "Sample business 02" },
    category: "finance",
    location: "hanoi",
    description: {
      vi: "Hồ sơ minh họa cho đơn vị hỗ trợ kế toán, thuế và quản trị tài chính.",
      en: "A sample profile for a provider of accounting, tax, and financial management."
    },
    capabilities: {
      vi: ["Kế toán", "Thuế", "Tư vấn tài chính"],
      en: ["Accounting", "Tax", "Financial advisory"]
    },
    contact: {
      phone: "0987654321",
      email: "hello@financesample.vn"
    },
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "sample-03",
    name: { vi: "Doanh nghiệp mẫu 03", en: "Sample business 03" },
    category: "legal",
    location: "bac-ninh",
    description: {
      vi: "Hồ sơ minh họa cho đơn vị tư vấn pháp lý và tuân thủ doanh nghiệp.",
      en: "A sample profile for a business legal and compliance consultancy."
    },
    capabilities: {
      vi: ["Tư vấn pháp lý", "Hợp đồng", "Tuân thủ"],
      en: ["Legal advice", "Contracts", "Compliance"]
    },
    contact: {
      phone: "0912345678",
      website: "https://legalsample.vn"
    },
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "sample-04",
    name: { vi: "Doanh nghiệp mẫu 04", en: "Sample business 04" },
    category: "marketing",
    location: "hai-phong",
    description: {
      vi: "Hồ sơ minh họa cho đơn vị phát triển thương hiệu và tiếp thị số.",
      en: "A sample profile for a branding and digital marketing provider."
    },
    capabilities: {
      vi: ["Thương hiệu", "Nội dung", "Tiếp thị số"],
      en: ["Branding", "Content", "Digital marketing"]
    },
    contact: {
      email: "hi@marketingsample.vn",
      website: "https://marketingsample.vn"
    },
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "sample-05",
    name: { vi: "Doanh nghiệp mẫu 05", en: "Sample business 05" },
    category: "hr",
    location: "hung-yen",
    description: {
      vi: "Hồ sơ minh họa cho đơn vị cung cấp giải pháp nhân sự và tuyển dụng.",
      en: "A sample profile for a human resources and recruitment solutions provider."
    },
    capabilities: {
      vi: ["Tuyển dụng", "Đào tạo", "Quản trị nhân sự"],
      en: ["Recruitment", "Training", "HR management"]
    },
    contact: {
      phone: "0934567890",
      email: "hr@hrsample.vn"
    },
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "sample-06",
    name: { vi: "Doanh nghiệp mẫu 06", en: "Sample business 06" },
    category: "consulting",
    location: "hanoi",
    description: {
      vi: "Hồ sơ minh họa cho đơn vị tư vấn chiến lược và tối ưu vận hành.",
      en: "A sample profile for a strategy and operations consultancy."
    },
    capabilities: {
      vi: ["Chiến lược", "Vận hành", "Tăng trưởng"],
      en: ["Strategy", "Operations", "Growth"]
    },
    contact: {
      phone: "0967890123",
      email: "consulting@sample.vn",
      website: "https://consulting.vn"
    },
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
  }
];
