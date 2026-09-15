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
    pomodoro: {
      focusRhythm: "NHỊP THỞ BẮC ÂU · TĨNH LẶNG",
      focusTimer: "THỜI LƯỢNG TẬP TRUNG",
      start: "BẮT ĐẦU ĐẾM NGƯỢC",
      pause: "TẠM DỪNG",
      reset: "Đặt lại",
      presets: "Mẫu nhịp sống nhanh",
      rest: "Chợp mắt hồi sức",
      coffee: "Pha trà & Cà phê Fika",
      meditate: "Thiền định tĩnh tâm",
      rotate: "Xoay màn hình",
      background: "Nền",
      chooseBackground: "Chọn background",
      backgrounds: { aurora: "Cực quang", mist: "Sương sớm", linen: "Vải linen" },
    },
    modes: {
      world: "Thế giới",
      timer: "Hẹn giờ",
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
      timer: "Hẹn giờ",
      alarm: "Báo thức",
      recent: "Mới gần đây",
    },
    settings: {
      title: "Cài đặt",
      language: "Ngôn ngữ",
      soundscape: "Âm thanh nền",
      background: "Nền giao diện",
      defaultBackground: "Mặc định",
      aiBackground: "AI tạo nền",
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
      timer: "Timer",
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
      timer: "Timer",
      alarm: "Alarm",
      recent: "Recent",
    },
    settings: {
      title: "Settings",
      language: "Language",
      soundscape: "Soundscape",
      background: "Background",
      defaultBackground: "Default",
      aiBackground: "AI generated",
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
    pomodoro: {
      focusRhythm: "NORDIC BREATH · QUIET FOCUS",
      focusTimer: "FOCUS DURATION",
      start: "START COUNTDOWN",
      pause: "PAUSE",
      reset: "Reset",
      presets: "Quick rhythm presets",
      rest: "Restful power nap",
      coffee: "Fika tea & coffee",
      meditate: "Mindful meditation",
      rotate: "Rotate screen",
      background: "Background",
      chooseBackground: "Choose background",
      backgrounds: { aurora: "Aurora", mist: "Morning mist", linen: "Linen" },
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
  | "pomodoro.focusRhythm"
  | "pomodoro.focusTimer"
  | "pomodoro.start"
  | "pomodoro.pause"
  | "pomodoro.reset"
  | "pomodoro.presets"
  | "pomodoro.rest"
  | "pomodoro.coffee"
  | "pomodoro.meditate"
  | "pomodoro.rotate"
  | "pomodoro.background"
  | "pomodoro.chooseBackground"
  | "pomodoro.backgrounds.aurora"
  | "pomodoro.backgrounds.mist"
  | "pomodoro.backgrounds.linen"
  | "modes.world"
  | "modes.timer"
  | "modes.pomodoro"
  | "soundscapes.rain"
  | "soundscapes.stream"
  | "themes.light"
  | "themes.dark"
  | "tabs.world"
  | "tabs.pomodoro"
  | "tabs.timer"
  | "tabs.alarm"
  | "tabs.recent"
  | "settings.language"
  | "settings.title"
  | "settings.soundscape"
  | "settings.background"
  | "settings.defaultBackground"
  | "settings.aiBackground"
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
