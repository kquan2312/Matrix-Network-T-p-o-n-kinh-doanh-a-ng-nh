export interface EcosystemNode {
  id: string;
  label: string;
  short: string;
  description: string;
  tags: string[];
}

export const ecosystem: EcosystemNode[] = [
  {
    id: "technology",
    label: "Technology",
    short: "TECH",
    description: "Công nghệ, AI, phần mềm và tự động hóa giúp doanh nghiệp vận hành thông minh hơn.",
    tags: ["Software", "AI", "Automation", "Cloud", "Data"]
  },
  {
    id: "finance",
    label: "Finance",
    short: "FIN",
    description: "Kết nối các năng lực kế toán, thuế và tư vấn tài chính cho doanh nghiệp.",
    tags: ["Accounting", "Tax", "Finance", "Audit"]
  },
  {
    id: "legal",
    label: "Legal",
    short: "LAW",
    description: "Hỗ trợ pháp lý và tuân thủ trong suốt vòng đời doanh nghiệp.",
    tags: ["Legal", "License", "Contract", "Compliance"]
  },
  {
    id: "hr",
    label: "Human Resources",
    short: "HR",
    description: "Nguồn lực con người từ tuyển dụng, đào tạo đến hệ thống nhân sự.",
    tags: ["Recruitment", "Payroll", "Training", "HR"]
  },
  {
    id: "marketing",
    label: "Marketing",
    short: "MKT",
    description: "Xây dựng thương hiệu và kết nối doanh nghiệp với thị trường.",
    tags: ["Branding", "Content", "SEO", "Performance"]
  },
  {
    id: "consulting",
    label: "Consulting",
    short: "CONSULT",
    description: "Tư vấn chiến lược, quy trình và giải pháp theo bài toán cụ thể.",
    tags: ["Strategy", "Process", "Operations", "Growth"]
  }
];