import type { Language } from "@/store/use-global-store"

export const translations = {
  vi: {
    brand: "KLOCKA",
    home: {
      worldTitle: "Thế giới",
      currentCity: "Stockholm",
      currentCityCountry: "Thụy Điển",
      profile: "Hồ sơ",
      now: "Bây giờ",
      daylight: "Ban ngày",
      midnight: "Nửa đêm",
      addCountry: "Thêm quốc gia",
      chooseCountry: "Chọn quốc gia",
    },
    modes: {
      world: "Thế giới",
      timer: "Setting",
      pomodoro: "Pomodoro",
    },
    soundscapes: {
      rain: "Tiếng mưa rừng",
      stream: "Tiếng suối",
    },
    themes: {
      light: "Sáng",
      dark: "Tối",
    },
    tabs: {
      world: "Thế giới",
      pomodoro: "Pomodoro",
      setting: "Cài đặt",
    },
    settings: {
      title: "Cài đặt",
      language: "Ngôn ngữ",
      soundscape: "Âm thanh nền",
      background: "Nền giao diện",
      defaultBackground: "Mặc định",
      aiBackground: "AI tạo nền",
    },
    pomodoro: {
      status: "NHỊP THỞ BẮC ÂU • TĨNH LẶNG\nNORDIC BREATH • STILLNESS",
      ready: "CHUẨN BỊ / READY",
      hours: "GIỜ",
      minutes: "PHÚT",
      seconds: "GIÂY",
      start: "Bắt đầu",
      pause: "Tạm dừng",
      routines: "Mẫu nhịp sống nhanh",
      nap: "Chợp mắt hồi sức",
      fika: "Pha trà & Cà phê Fika",
      egg: "Luộc trứng lòng đào",
      meditation: "Thiền định tĩnh tâm",
      reset: "Đặt lại bộ đếm giờ",
    },
    screens: {
      scannerTitle: "Pomodoro",
      scannerDescription: "Tập trung trong những nhịp nhỏ, đều đặn.",
      historyTitle: "Mới gần đây",
      historyDescription: "Các phiên thời gian của bạn sẽ xuất hiện ở đây.",
      profileTitle: "Hồ sơ",
      profileDescription: "Không gian thời gian cá nhân của bạn.",
      signOut: "Đăng xuất",
      welcome: "Chào mừng trở lại",
      signInDescription: "Đăng nhập để tiếp tục với KLOCKA.",
      email: "Email",
      password: "Mật khẩu",
      emailPlaceholder: "Nhập email của bạn",
      passwordPlaceholder: "Nhập mật khẩu",
      signIn: "Đăng nhập",
      signingIn: "Đang đăng nhập…",
      continueGoogle: "Tiếp tục với Google",
      newToKlocka: "Mới dùng KLOCKA?",
      createAccount: "Tạo tài khoản",
      terms: "Bằng cách đăng nhập, bạn đồng ý với Điều khoản và Chính sách bảo mật.",
      posts: "Bài viết",
      likes: "Lượt thích",
      followers: "Người theo dõi",
      about: "Giới thiệu",
    },
    cities: {
      hoChiMinh: { country: "Việt Nam", timezone: "ICT" },
      stockholm: { country: "Thụy Điển", timezone: "CET" },
      tokyo: { country: "Nhật Bản", timezone: "JST" },
      shanghai: { country: "Trung Quốc", timezone: "CST" },
      newYork: { country: "Hoa Kỳ", timezone: "EST" },
      london: { country: "Vương quốc Anh", timezone: "GMT" },
      paris: { country: "Pháp", timezone: "CET" },
      sydney: { country: "Úc", timezone: "AEST" },
    },
  },
  en: {
    brand: "KLOCKA",
    home: {
      worldTitle: "World",
      currentCity: "Stockholm",
      currentCityCountry: "Sweden",
      profile: "Profile",
      now: "Now",
      daylight: "Daylight",
      midnight: "Midnight",
      addCountry: "Add country",
      chooseCountry: "Choose a country",
    },
    modes: {
      world: "World",
      timer: "Settings",
      pomodoro: "Pomodoro",
    },
    soundscapes: {
      rain: "Forest rain",
      stream: "Running stream",
    },
    themes: {
      light: "Light",
      dark: "Dark",
    },
    tabs: {
      world: "World",
      pomodoro: "Pomodoro",
      setting: "Setting",
    },
    settings: {
      title: "Settings",
      language: "Language",
      soundscape: "Soundscape",
      background: "Background",
      defaultBackground: "Default",
      aiBackground: "AI generated",
    },
    pomodoro: {
      duration: "TIMER DURATION",
      ready: "READY",
      hours: "HOURS ",
      minutes: "MINUTES",
      seconds: "SECONDS",
      start: "Start",
      pause: "Pause",
      routines: "Quick routines",
      nap: "Restorative nap",
      fika: "Tea & Fika coffee",
      egg: "Soft-boiled egg",
      meditation: "Mindful meditation",
      reset: "Reset timer",
    },
    screens: {
      scannerTitle: "Pomodoro",
      scannerDescription: "Focus in small, steady rhythms.",
      historyTitle: "Recent",
      historyDescription: "Your time sessions will appear here.",
      profileTitle: "Profile",
      profileDescription: "Your personal time space.",
      signOut: "Sign out",
      welcome: "Welcome back",
      signInDescription: "Sign in to continue with KLOCKA.",
      email: "Email",
      password: "Password",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
      signIn: "Sign in",
      signingIn: "Signing in…",
      continueGoogle: "Continue with Google",
      newToKlocka: "New to KLOCKA?",
      createAccount: "Create an account",
      terms: "By signing in, you agree to our Terms and Privacy Policy.",
      posts: "Posts",
      likes: "Likes",
      followers: "Followers",
      about: "About",
    },
    cities: {
      hoChiMinh: { country: "Vietnam", timezone: "ICT" },
      stockholm: { country: "Sweden", timezone: "CET" },
      tokyo: { country: "Japan", timezone: "JST" },
      shanghai: { country: "China", timezone: "CST" },
      newYork: { country: "United States", timezone: "EST" },
      london: { country: "United Kingdom", timezone: "GMT" },
      paris: { country: "France", timezone: "CET" },
      sydney: { country: "Australia", timezone: "AEST" },
    },
  },
} as const

export type TranslationKey =
  | "brand"
  | "home.worldTitle"
  | "home.currentCity"
  | "home.currentCityCountry"
  | "home.profile"
  | "home.now"
  | "home.daylight"
  | "home.midnight"
  | "home.addCountry"
  | "home.chooseCountry"
  | "modes.world"
  | "modes.timer"
  | "modes.pomodoro"
  | "soundscapes.rain"
  | "soundscapes.stream"
  | "themes.light"
  | "themes.dark"
  | "tabs.world"
  | "tabs.pomodoro"
  | "tabs.setting"
  | "settings.language"
  | "settings.title"
  | "settings.soundscape"
  | "settings.background"
  | "settings.defaultBackground"
  | "settings.aiBackground"
  | "pomodoro.status"
  | "pomodoro.duration"
  | "pomodoro.ready"
  | "pomodoro.hours"
  | "pomodoro.minutes"
  | "pomodoro.seconds"
  | "pomodoro.start"
  | "pomodoro.pause"
  | "pomodoro.routines"
  | "pomodoro.nap"
  | "pomodoro.fika"
  | "pomodoro.egg"
  | "pomodoro.meditation"
  | "pomodoro.reset"
  | "screens.scannerTitle"
  | "screens.scannerDescription"
  | "screens.historyTitle"
  | "screens.historyDescription"
  | "screens.profileTitle"
  | "screens.profileDescription"
  | "screens.signOut"
  | "screens.welcome"
  | "screens.signInDescription"
  | "screens.email"
  | "screens.password"
  | "screens.emailPlaceholder"
  | "screens.passwordPlaceholder"
  | "screens.signIn"
  | "screens.signingIn"
  | "screens.continueGoogle"
  | "screens.newToKlocka"
  | "screens.createAccount"
  | "screens.terms"
  | "screens.posts"
  | "screens.likes"
  | "screens.followers"
  | "screens.about"

function readTranslation(language: Language, key: TranslationKey): string | undefined {
  const [section, value] = key.split(".")

  if (!value) {
    return translations[language][section as "brand"]
  }

  const entry = translations[language][section as "home"]
  return typeof entry === "object" && value in entry
    ? String(entry[value as keyof typeof entry])
    : undefined
}

export function getTranslation(language: Language, key: TranslationKey): string {
  return readTranslation(language, key) ?? readTranslation("vi", key) ?? key
}
