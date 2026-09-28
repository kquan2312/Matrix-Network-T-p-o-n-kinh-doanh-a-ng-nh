export interface PartnerType {
  number: string;
  title: string;
  description: string;
}

export const partnerTypes: PartnerType[] = [
  {
    number: "01",
    title: "BUSINESS",
    description: "Doanh nghiệp và bài toán thực tế."
  },
  {
    number: "02",
    title: "EXPERTS",
    description: "Chuyên gia theo từng lĩnh vực."
  },
  {
    number: "03",
    title: "PARTNERS",
    description: "Đối tác chiến lược và nhà cung cấp."
  },
  {
    number: "04",
    title: "TECHNOLOGY",
    description: "Nền tảng và năng lực công nghệ."
  }
];