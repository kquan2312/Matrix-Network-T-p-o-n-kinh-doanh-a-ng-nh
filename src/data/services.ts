export interface ServiceGroup {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  items: string[];
}

export const services: ServiceGroup[] = [
  {
    id: "start",
    number: "01",
    label: "START",
    title: "Khởi tạo",
    description: "Xây dựng nền tảng pháp lý và tài chính để doanh nghiệp bắt đầu đúng hướng.",
    items: ["Thành lập doanh nghiệp", "Pháp lý & giấy phép", "Kế toán & thuế", "Business setup"]
  },
  {
    id: "operate",
    number: "02",
    label: "OPERATE",
    title: "Vận hành",
    description: "Tối ưu nguồn lực, quy trình và hệ thống để doanh nghiệp vận hành hiệu quả.",
    items: ["Nhân sự", "Kế toán", "Quản trị vận hành", "Quy trình & hệ thống"]
  },
  {
    id: "transform",
    number: "03",
    label: "TRANSFORM",
    title: "Chuyển đổi",
    description: "Ứng dụng công nghệ và dữ liệu để tạo ra cách vận hành mới.",
    items: ["Website & Web App", "AI & Automation", "Cloud & Data", "Digital Transformation"]
  },
  {
    id: "grow",
    number: "04",
    label: "GROW",
    title: "Tăng trưởng",
    description: "Kết nối marketing, thương hiệu và phát triển kinh doanh để mở rộng thị trường.",
    items: ["Branding", "Digital Marketing", "Sales", "Business Development"]
  }
];