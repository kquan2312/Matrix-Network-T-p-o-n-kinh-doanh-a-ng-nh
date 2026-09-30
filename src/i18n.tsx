import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "vi";

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.ecosystem": "Ecosystem",
    "nav.services": "Services",
    "nav.network": "Network",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.connect": "Get in touch",
    "nav.switch": "Tiếng Việt",
    "nav.switchLabel": "Switch language to Vietnamese",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",
    "hero.eyebrow": "BUSINESS SERVICE ECOSYSTEM",
    "hero.title": "Connecting<br /><em>resources.</em><br />Creating growth.",
    "hero.description": "Matrix Network connects businesses with services, experts, partners, and technology — from launch and operations to transformation and growth.",
    "hero.explore": "Explore the ecosystem",
    "hero.connect": "Get in touch",
    "intro.eyebrow": "WHY AN ECOSYSTEM?",
    "intro.title": "Businesses<br /><span>cannot grow alone.</span>",
    "intro.description": "A business needs more than a service provider. It needs expertise, technology, resources, experience, and the right partners at the right time.",
    "journey.need": "Need",
    "journey.connect": "Connect",
    "journey.solve": "Solve",
    "journey.grow": "Grow",
    "ecosystem.eyebrow": "THE ECOSYSTEM",
    "ecosystem.title": "One ecosystem.<br /><span>Many capabilities.</span>",
    "ecosystem.detailEyebrow": "CONNECTED CAPABILITY",
    "ecosystem.learn": "Explore solutions",
    "services.eyebrow": "SERVICES",
    "services.title": "Where is your business<br /><span>on its journey?</span>",
    "network.eyebrow": "THE NETWORK",
    "network.title": "Find the right<br /><span>business connections.</span>",
    "network.description": "Search by company, capability, or location, then ask Matrix Network to help make an introduction.",
    "network.sampleNote": "These sample profiles are for demonstration only. Connection requests are sent to Matrix Network.",
    "network.searchLabel": "Search",
    "network.searchPlaceholder": "Company, service, or capability",
    "network.categoryLabel": "Industry",
    "network.allCategories": "All industries",
    "network.locationLabel": "Location",
    "network.allLocations": "All locations",
    "network.resultCount": "{count} businesses",
    "network.clearFilters": "Clear filters",
    "network.sampleBadge": "Sample profile",
    "network.contact": "Request an introduction",
    "network.emptyTitle": "No businesses found",
    "network.emptyDescription": "Try another keyword or clear your filters to see all sample profiles.",
    "network.emailSubject": "Introduction request: {company}",
    "network.emailBody": "Hello Matrix Network,\n\nI would like to learn more about or connect with {company}.\n\nPlease contact me about an introduction.",
    "network.category.technology": "Technology",
    "network.category.finance": "Finance",
    "network.category.legal": "Legal",
    "network.category.hr": "Human resources",
    "network.category.marketing": "Marketing",
    "network.category.consulting": "Consulting",
    "network.location.hanoi": "Hanoi",
    "network.location.bac-ninh": "Bac Ninh",
    "network.location.hai-phong": "Hai Phong",
    "network.location.hung-yen": "Hung Yen",
    "process.eyebrow": "HOW IT WORKS",
    "process.title": "From a need<br /><span>to a solution.</span>",
    "why.eyebrow": "WHY MATRIX NETWORK",
    "why.title": "A strong network<br /><span>creates greater value.</span>",
    "cases.eyebrow": "CASE STUDIES",
    "cases.title": "Challenges<br /><span>solved together.</span>",
    "cases.itemLabel": "CASE",
    "case.label": "CASE 01 / DIGITAL TRANSFORMATION",
    "case.title": "From fragmented processes<br />to one unified system.",
    "cta.eyebrow": "START A CONNECTION",
    "cta.title": "What connections<br /><em>does your business need?</em>",
    "cta.description": "Start with a need. Matrix Network helps you find the right resources.",
    "cta.connect": "Connect with Matrix Network",
    "form.title": "Tell us what you need",
    "form.description": "Share a few details and our team will be in touch.",
    "form.close": "Close contact form",
    "form.name": "Full name",
    "form.email": "Work email",
    "form.company": "Company (optional)",
    "form.phone": "Phone (optional)",
    "form.topic": "What area can we help with?",
    "form.topicPlaceholder": "Select an area",
    "form.topic.technology": "Technology",
    "form.topic.finance": "Finance",
    "form.topic.legal": "Legal",
    "form.topic.hr": "Human resources",
    "form.topic.marketing": "Marketing",
    "form.topic.consulting": "Consulting",
    "form.topic.other": "Other",
    "form.topicOther": "Please specify",
    "form.message": "How can we help?",
    "form.messagePlaceholder": "Tell us a little about your needs...",
    "form.submit": "Continue by email",
    "form.emailNotice": "This will open your email app with your message prepared.",
    "footer.tagline": "Business Service Ecosystem",
    "footer.ecosystem": "OUR ECOSYSTEM",
    "footer.about": "ABOUT US",
    "footer.follow": "FOLLOW US",
    "footer.holding": "Matrix Holding",
    "footer.network": "Matrix Network",
    "footer.connect": "Matrix Connect",
    "footer.ventures": "Matrix Ventures",
    "footer.introduction": "Introduction",
    "footer.guide": "User guide",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Terms of use",
    "footer.copyright": "All rights reserved.",
    "footer.address": "Bac Linh Dam Urban Area, Hoang Liet Ward, Hanoi",
    "footer.facebook": "Facebook"
  },
  vi: {
    "nav.ecosystem": "Hệ sinh thái",
    "nav.services": "Dịch vụ",
    "nav.network": "Mạng lưới",
    "nav.process": "Quy trình",
    "nav.contact": "Liên hệ",
    "nav.connect": "Kết nối",
    "nav.switch": "English",
    "nav.switchLabel": "Chuyển ngôn ngữ sang tiếng Anh",
    "nav.menuOpen": "Mở trình đơn",
    "nav.menuClose": "Đóng trình đơn",
    "hero.eyebrow": "HỆ SINH THÁI DỊCH VỤ DOANH NGHIỆP",
    "hero.title": "Kết nối<br /><em>nguồn lực.</em><br />Kiến tạo tăng trưởng.",
    "hero.description": "Matrix Network kết nối doanh nghiệp với dịch vụ, chuyên gia, đối tác và công nghệ — từ khởi tạo, vận hành đến chuyển đổi và tăng trưởng.",
    "hero.explore": "Khám phá hệ sinh thái",
    "hero.connect": "Kết nối với chúng tôi",
    "intro.eyebrow": "VÌ SAO CẦN HỆ SINH THÁI?",
    "intro.title": "Doanh nghiệp<br /><span>không thể phát triển một mình.</span>",
    "intro.description": "Một doanh nghiệp cần nhiều hơn một nhà cung cấp. Cần chuyên môn, công nghệ, nguồn lực, kinh nghiệm và những đối tác phù hợp tại đúng thời điểm.",
    "journey.need": "Nhu cầu",
    "journey.connect": "Kết nối",
    "journey.solve": "Giải quyết",
    "journey.grow": "Tăng trưởng",
    "ecosystem.eyebrow": "HỆ SINH THÁI",
    "ecosystem.title": "Một hệ sinh thái.<br /><span>Nhiều năng lực.</span>",
    "ecosystem.detailEyebrow": "NĂNG LỰC KẾT NỐI",
    "ecosystem.learn": "Tìm hiểu giải pháp",
    "services.eyebrow": "DỊCH VỤ",
    "services.title": "Doanh nghiệp đang ở đâu<br /><span>trên hành trình?</span>",
    "network.eyebrow": "MẠNG LƯỚI",
    "network.title": "Tìm đúng doanh nghiệp<br /><span>kết nối trong khu vực.</span>",
    "network.description": "Tìm theo tên doanh nghiệp, năng lực hoặc khu vực, sau đó gửi yêu cầu để Matrix Network hỗ trợ giới thiệu.",
    "network.sampleNote": "Các hồ sơ dưới đây chỉ là dữ liệu minh họa. Yêu cầu kết nối sẽ được gửi tới Matrix Network.",
    "network.searchLabel": "Tìm kiếm",
    "network.searchPlaceholder": "Tên doanh nghiệp, dịch vụ hoặc năng lực",
    "network.categoryLabel": "Lĩnh vực",
    "network.allCategories": "Tất cả lĩnh vực",
    "network.locationLabel": "Khu vực",
    "network.allLocations": "Tất cả khu vực",
    "network.resultCount": "{count} doanh nghiệp",
    "network.clearFilters": "Xóa bộ lọc",
    "network.sampleBadge": "Hồ sơ mẫu",
    "network.contact": "Yêu cầu giới thiệu",
    "network.emptyTitle": "Chưa tìm thấy doanh nghiệp phù hợp",
    "network.emptyDescription": "Thử từ khóa khác hoặc xóa bộ lọc để xem toàn bộ hồ sơ mẫu.",
    "network.emailSubject": "Yêu cầu kết nối: {company}",
    "network.emailBody": "Xin chào Matrix Network,\n\nTôi muốn tìm hiểu thêm hoặc kết nối với {company}.\n\nVui lòng liên hệ tôi để hỗ trợ giới thiệu.",
    "network.category.technology": "Công nghệ",
    "network.category.finance": "Tài chính",
    "network.category.legal": "Pháp lý",
    "network.category.hr": "Nhân sự",
    "network.category.marketing": "Tiếp thị",
    "network.category.consulting": "Tư vấn",
    "network.location.hanoi": "Hà Nội",
    "network.location.bac-ninh": "Bắc Ninh",
    "network.location.hai-phong": "Hải Phòng",
    "network.location.hung-yen": "Hưng Yên",
    "process.eyebrow": "QUY TRÌNH HOẠT ĐỘNG",
    "process.title": "Từ nhu cầu<br /><span>đến giải pháp.</span>",
    "why.eyebrow": "VÌ SAO CHỌN MATRIX NETWORK",
    "why.title": "Một mạng lưới tốt<br /><span>tạo ra nhiều giá trị hơn.</span>",
    "cases.eyebrow": "DỰ ÁN TIÊU BIỂU",
    "cases.title": "Những bài toán<br /><span>được kết nối.</span>",
    "cases.itemLabel": "DỰ ÁN",
    "case.label": "DỰ ÁN 01 / CHUYỂN ĐỔI SỐ",
    "case.title": "Từ quy trình rời rạc<br />đến một hệ thống thống nhất.",
    "cta.eyebrow": "BẮT ĐẦU KẾT NỐI",
    "cta.title": "Doanh nghiệp của bạn<br /><em>đang cần kết nối nào?</em>",
    "cta.description": "Hãy bắt đầu từ một nhu cầu. Matrix Network giúp bạn tìm đúng nguồn lực.",
    "cta.connect": "Kết nối với Matrix Network",
    "form.title": "Chia sẻ nhu cầu của bạn",
    "form.description": "Để lại một vài thông tin, đội ngũ Matrix Network sẽ liên hệ với bạn.",
    "form.close": "Đóng biểu mẫu liên hệ",
    "form.name": "Họ và tên",
    "form.email": "Email công việc",
    "form.company": "Doanh nghiệp (không bắt buộc)",
    "form.phone": "Số điện thoại (không bắt buộc)",
    "form.topic": "Bạn cần hỗ trợ lĩnh vực nào?",
    "form.topicPlaceholder": "Chọn lĩnh vực",
    "form.topic.technology": "Công nghệ",
    "form.topic.finance": "Tài chính",
    "form.topic.legal": "Pháp lý",
    "form.topic.hr": "Nhân sự",
    "form.topic.marketing": "Tiếp thị",
    "form.topic.consulting": "Tư vấn",
    "form.topic.other": "Khác",
    "form.topicOther": "Vui lòng ghi rõ lĩnh vực",
    "form.message": "Nội dung cần hỗ trợ",
    "form.messagePlaceholder": "Chia sẻ đôi chút về nhu cầu của bạn...",
    "form.submit": "Gửi qua email",
    "form.emailNotice": "Ứng dụng email sẽ mở cùng nội dung liên hệ đã chuẩn bị sẵn.",
    "footer.tagline": "Hệ sinh thái dịch vụ doanh nghiệp",
    "footer.ecosystem": "HỆ SINH THÁI",
    "footer.about": "VỀ CHÚNG TÔI",
    "footer.follow": "THEO DÕI CHÚNG TÔI",
    "footer.holding": "Matrix Holding",
    "footer.network": "Matrix Network",
    "footer.connect": "Matrix Connect",
    "footer.ventures": "Matrix Ventures",
    "footer.introduction": "Giới thiệu",
    "footer.guide": "Hướng dẫn sử dụng",
    "footer.privacy": "Chính sách bảo mật",
    "footer.terms": "Điều khoản sử dụng",
    "footer.copyright": "Bảo lưu mọi quyền.",
    "footer.address": "KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội",
    "footer.facebook": "Facebook"
  }
};

export const ecosystemTranslations: Record<Language, Record<string, { label: string; description: string }>> = {
  en: {
    technology: { label: "Technology", description: "Technology, AI, software, and automation help businesses operate more intelligently." },
    finance: { label: "Finance", description: "Connect with accounting, tax, and financial advisory capabilities for your business." },
    legal: { label: "Legal", description: "Legal and compliance support throughout the life of your business." },
    hr: { label: "Human Resources", description: "People resources spanning recruitment, training, and HR systems." },
    marketing: { label: "Marketing", description: "Build your brand and connect your business with the market." },
    consulting: { label: "Consulting", description: "Strategy, process, and solution consulting tailored to your business challenges." }
  },
  vi: {
    technology: { label: "Công nghệ", description: "Công nghệ, AI, phần mềm và tự động hóa giúp doanh nghiệp vận hành thông minh hơn." },
    finance: { label: "Tài chính", description: "Kết nối các năng lực kế toán, thuế và tư vấn tài chính cho doanh nghiệp." },
    legal: { label: "Pháp lý", description: "Hỗ trợ pháp lý và tuân thủ trong suốt vòng đời doanh nghiệp." },
    hr: { label: "Nhân sự", description: "Nguồn lực con người từ tuyển dụng, đào tạo đến hệ thống nhân sự." },
    marketing: { label: "Tiếp thị", description: "Xây dựng thương hiệu và kết nối doanh nghiệp với thị trường." },
    consulting: { label: "Tư vấn", description: "Tư vấn chiến lược, quy trình và giải pháp theo bài toán cụ thể." }
  }
};

export const serviceTranslations: Record<Language, Record<string, { label: string; title: string; description: string; items: string[] }>> = {
  en: {
    start: { label: "START", title: "Launch", description: "Build a legal and financial foundation so your business can start in the right direction.", items: ["Company formation", "Legal & licensing", "Accounting & tax", "Business setup"] },
    operate: { label: "OPERATE", title: "Operate", description: "Optimize resources, processes, and systems to run your business more effectively.", items: ["Human resources", "Accounting", "Operations management", "Processes & systems"] },
    transform: { label: "TRANSFORM", title: "Transform", description: "Apply technology and data to create new ways of working.", items: ["Website & Web App", "AI & Automation", "Cloud & Data", "Digital Transformation"] },
    grow: { label: "GROW", title: "Grow", description: "Connect marketing, branding, and business development to expand into new markets.", items: ["Branding", "Digital Marketing", "Sales", "Business Development"] }
  },
  vi: {
    start: { label: "KHỞI TẠO", title: "Khởi tạo", description: "Xây dựng nền tảng pháp lý và tài chính để doanh nghiệp bắt đầu đúng hướng.", items: ["Thành lập doanh nghiệp", "Pháp lý & giấy phép", "Kế toán & thuế", "Thiết lập doanh nghiệp"] },
    operate: { label: "VẬN HÀNH", title: "Vận hành", description: "Tối ưu nguồn lực, quy trình và hệ thống để doanh nghiệp vận hành hiệu quả.", items: ["Nhân sự", "Kế toán", "Quản trị vận hành", "Quy trình & hệ thống"] },
    transform: { label: "CHUYỂN ĐỔI", title: "Chuyển đổi", description: "Ứng dụng công nghệ và dữ liệu để tạo ra cách vận hành mới.", items: ["Website & ứng dụng web", "AI & tự động hóa", "Điện toán đám mây & dữ liệu", "Chuyển đổi số"] },
    grow: { label: "TĂNG TRƯỞNG", title: "Tăng trưởng", description: "Kết nối marketing, thương hiệu và phát triển kinh doanh để mở rộng thị trường.", items: ["Thương hiệu", "Tiếp thị số", "Bán hàng", "Phát triển kinh doanh"] }
  }
};

export const partnerTranslations: Record<Language, Array<{ title: string; description: string }>> = {
  en: [
    { title: "BUSINESS", description: "Businesses and real-world challenges." },
    { title: "EXPERTS", description: "Experts across specialized fields." },
    { title: "PARTNERS", description: "Strategic partners and providers." },
    { title: "TECHNOLOGY", description: "Technology platforms and capabilities." }
  ],
  vi: [
    { title: "DOANH NGHIỆP", description: "Doanh nghiệp và bài toán thực tế." },
    { title: "CHUYÊN GIA", description: "Chuyên gia theo từng lĩnh vực." },
    { title: "ĐỐI TÁC", description: "Đối tác chiến lược và nhà cung cấp." },
    { title: "CÔNG NGHỆ", description: "Nền tảng và năng lực công nghệ." }
  ]
};

const LanguageContext = createContext<{ language: Language; toggleLanguage: () => void; t: (key: string) => string } | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");
  const toggleLanguage = () => setLanguage(current => current === "vi" ? "en" : "vi");
  const t = (key: string) => translations[language][key] ?? key;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "vi"
      ? "Matrix Network — Hệ sinh thái dịch vụ doanh nghiệp"
      : "Matrix Network — Business Service Ecosystem";
  }, [language]);

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
