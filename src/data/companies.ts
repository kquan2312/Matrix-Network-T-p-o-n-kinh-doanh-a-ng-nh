import type { Language } from "../i18n";

export type CompanyCategory =
  | "technology"
  | "finance"
  | "legal"
  | "hr"
  | "marketing"
  | "consulting"
  | "logistics"
  | "real-estate";

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
  "consulting",
  "logistics",
  "real-estate"
];

export const companyLocations: CompanyLocation[] = [
  "hanoi",
  "bac-ninh",
  "hai-phong",
  "hung-yen"
];

export const networkCompanies: NetworkCompany[] = [
  {
    id: "nova-digital",
    name: {
      vi: "Công ty TNHH Nova Digital",
      en: "Nova Digital Co., Ltd."
    },
    category: "technology",
    location: "hanoi",
    description: {
      vi: "Đơn vị phát triển giải pháp phần mềm doanh nghiệp, tích hợp hệ thống và tự động hóa quy trình vận hành.",
      en: "A technology company providing enterprise software, system integration, and business process automation solutions."
    },
    capabilities: {
      vi: ["Phát triển phần mềm", "Tích hợp hệ thống", "Tự động hóa"],
      en: ["Software development", "System integration", "Automation"]
    },
    contact: {
      phone: "024 7308 1688",
      email: "contact@novadigital.example",
      website: "https://novadigital.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
  },

  {
    id: "an-phat-finance",
    name: {
      vi: "Công ty TNHH An Phát Tài Chính",
      en: "An Phat Financial Advisory Co., Ltd."
    },
    category: "finance",
    location: "hanoi",
    description: {
      vi: "Cung cấp dịch vụ kế toán, tư vấn tài chính doanh nghiệp và hỗ trợ quản trị dòng tiền cho doanh nghiệp vừa và nhỏ.",
      en: "Providing accounting, financial advisory, and cash-flow management services for small and medium-sized businesses."
    },
    capabilities: {
      vi: ["Kế toán doanh nghiệp", "Tư vấn tài chính", "Quản trị dòng tiền"],
      en: ["Corporate accounting", "Financial advisory", "Cash-flow management"]
    },
    contact: {
      phone: "024 3568 2299",
      email: "contact@anphatfinance.example",
      website: "https://anphatfinance.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
  },

  {
    id: "thinh-phat-legal",
    name: {
      vi: "Công ty Luật Thịnh Phát",
      en: "Thinh Phat Law Firm"
    },
    category: "legal",
    location: "bac-ninh",
    description: {
      vi: "Đơn vị tư vấn pháp lý cho doanh nghiệp trong các lĩnh vực đầu tư, hợp đồng, lao động và tuân thủ.",
      en: "A legal advisory firm supporting businesses in investment, contracts, employment, and compliance matters."
    },
    capabilities: {
      vi: ["Tư vấn doanh nghiệp", "Hợp đồng", "Pháp lý đầu tư", "Tuân thủ"],
      en: ["Corporate advisory", "Contracts", "Investment law", "Compliance"]
    },
    contact: {
      phone: "0222 389 6868",
      email: "office@thinhphatlaw.example",
      website: "https://thinhphatlaw.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },

  {
    id: "north-star-marketing",
    name: {
      vi: "North Star Creative",
      en: "North Star Creative"
    },
    category: "marketing",
    location: "hai-phong",
    description: {
      vi: "Đối tác truyền thông và marketing hỗ trợ doanh nghiệp xây dựng thương hiệu, nội dung số và chiến dịch tiếp thị.",
      en: "A marketing and communications partner helping businesses build brands, digital content, and marketing campaigns."
    },
    capabilities: {
      vi: ["Chiến lược thương hiệu", "Digital Marketing", "Sản xuất nội dung"],
      en: ["Brand strategy", "Digital marketing", "Content production"]
    },
    contact: {
      phone: "0225 388 6688",
      email: "hello@northstar.example",
      website: "https://northstar.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },

  {
    id: "viet-hr-solutions",
    name: {
      vi: "Viet HR Solutions",
      en: "Viet HR Solutions"
    },
    category: "hr",
    location: "hung-yen",
    description: {
      vi: "Cung cấp giải pháp tuyển dụng, đào tạo và tư vấn quản trị nhân sự cho doanh nghiệp đang mở rộng đội ngũ.",
      en: "Providing recruitment, training, and HR consulting solutions for growing businesses."
    },
    capabilities: {
      vi: ["Tuyển dụng", "Đào tạo nhân sự", "Tư vấn HR", "Xây dựng đội ngũ"],
      en: ["Recruitment", "Training", "HR consulting", "Team building"]
    },
    contact: {
      phone: "0221 376 8288",
      email: "hello@viethr.example",
      website: "https://viethr.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
  },

  {
    id: "eastbridge-consulting",
    name: {
      vi: "EastBridge Consulting",
      en: "EastBridge Consulting"
    },
    category: "consulting",
    location: "hanoi",
    description: {
      vi: "Đơn vị tư vấn chiến lược và vận hành, đồng hành cùng doanh nghiệp trong quá trình mở rộng thị trường và tối ưu hoạt động.",
      en: "A strategy and operations consultancy supporting businesses with market expansion and operational improvement."
    },
    capabilities: {
      vi: ["Tư vấn chiến lược", "Tối ưu vận hành", "Phát triển thị trường"],
      en: ["Strategy consulting", "Operations improvement", "Market expansion"]
    },
    contact: {
      phone: "024 3998 6688",
      email: "contact@eastbridge.example",
      website: "https://eastbridge.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
  },

  {
    id: "minh-long-logistics",
    name: {
      vi: "Minh Long Logistics",
      en: "Minh Long Logistics"
    },
    category: "logistics",
    location: "hai-phong",
    description: {
      vi: "Cung cấp dịch vụ logistics, vận chuyển hàng hóa và hỗ trợ chuỗi cung ứng cho doanh nghiệp sản xuất và thương mại.",
      en: "Providing logistics, freight transportation, and supply-chain support for manufacturing and trading businesses."
    },
    capabilities: {
      vi: ["Vận tải hàng hóa", "Kho vận", "Chuỗi cung ứng"],
      en: ["Freight transportation", "Warehousing", "Supply chain"]
    },
    contact: {
      phone: "0225 377 5588",
      email: "ops@minhlonglogistics.example",
      website: "https://minhlonglogistics.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1586528116493-da8b2a8f6f4c?auto=format&fit=crop&q=80&w=800"
  },

  {
    id: "greenfield-property",
    name: {
      vi: "Greenfield Property",
      en: "Greenfield Property"
    },
    category: "real-estate",
    location: "bac-ninh",
    description: {
      vi: "Đơn vị hoạt động trong lĩnh vực bất động sản thương mại và cung cấp giải pháp mặt bằng cho doanh nghiệp.",
      en: "A commercial real estate company providing property and workspace solutions for businesses."
    },
    capabilities: {
      vi: ["Bất động sản thương mại", "Mặt bằng doanh nghiệp", "Tư vấn đầu tư"],
      en: ["Commercial real estate", "Business premises", "Investment advisory"]
    },
    contact: {
      phone: "0222 376 5566",
      email: "contact@greenfield.example",
      website: "https://greenfield.example"
    },
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  }
];
