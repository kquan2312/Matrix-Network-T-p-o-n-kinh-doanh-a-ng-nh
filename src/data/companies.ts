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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
];
