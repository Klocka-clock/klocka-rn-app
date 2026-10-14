# Kế hoạch triển khai bộ màu xanh cho giao diện sáng

> **Dành cho agent triển khai:** Bắt buộc dùng một trong các skill con sau: `superpowers:subagent-driven-development` hoặc `superpowers:executing-plans` để thực hiện lần lượt từng tác vụ trong kế hoạch này. Theo dõi tiến độ bằng cú pháp checkbox (`- [ ]`).

**Mục tiêu:** Thay palette thương hiệu của giao diện sáng Klocka bằng bộ màu xanh đã duyệt, đồng thời giữ nguyên hoàn toàn giao diện tối.

**Kiến trúc:** Đặt màu theo ngữ nghĩa trong hệ thống theme hiện có, đồng bộ các biến Gluestack, Tailwind và CSS với theme tokens. Sau đó thay các màu palette cũ được ghi trực tiếp trong màn hình/component bằng token hoặc màu thương hiệu dùng chung, giữ các nhánh màu dark và màu trạng thái/nhận diện được loại trừ.

**Công nghệ:** React Native, Expo, NativeWind/Tailwind, Gluestack UI, TypeScript.

**Spec:** `docs/superpowers/specs/2026-10-13-green-light-theme-design.md`

## Ràng buộc chung

- Giao diện sáng dùng primary `#1D9A4F`, secondary `#4A7C59`, tertiary `#B5C9B7` và neutral `#EBF5EE`.
- Giao diện tối giữ nguyên các mã màu và diện mạo hiện tại.
- Màu nhận diện Google/Facebook và màu trạng thái lỗi/cảnh báo giữ nguyên.
- Chữ và điều khiển phải đủ tương phản với bề mặt sáng.
- Giữ nguyên các chỉnh sửa không liên quan đang có trong working tree.
- Không thay đổi bố cục, kiểu chữ, khoảng cách hay chức năng.

## Điểm cần rà soát

- **Dark theme:** màu sắc dark trong theme tokens, Gluestack và các class `dark:` không thay đổi; rà soát bằng diff và màn hình dark.
- **Auth/social:** logo Google và Facebook giữ màu thương hiệu; kiểm tra màn login ở light.
- **Trạng thái:** màu lỗi, cảnh báo và xóa không bị đổi thành màu thương hiệu; rà soát trong UI sau khi cập nhật token.
- **Độ tương phản:** chữ, placeholder, viền, trạng thái nhấn/vô hiệu hóa và nút chính đọc được trên nền mới; kiểm tra các màn hình light.
- **Khởi chạy:** nền adaptive icon/splash dùng neutral mới ở cấu hình sáng; xác nhận cấu hình tối của splash không đổi.

---

### Tác vụ 1: Cập nhật nguồn màu tập trung

**Tệp:**
- Sửa: `src/theme/tokens.ts`
- Sửa: `src/components/ui/gluestack-ui-provider/config.ts`
- Sửa: `tailwind.config.js`
- Sửa: `src/global.css`

**Giao diện:**
- Cung cấp: semantic tokens mới cho light theme; primary, secondary, tertiary, neutral, text, surface và outline.
- Giữ: shape và các giá trị hiện có của dark theme trong tokens, Gluestack và CSS variables.

- [x] **Bước 1: Cập nhật `lightTheme`** trong `src/theme/tokens.ts` với bốn màu gốc đã duyệt; ánh xạ các vai trò background/surface, chữ và outline sang sắc độ xanh trung tính có đủ tương phản. Giữ nguyên object `darkTheme` và các giá trị của nó.
- [x] **Bước 2: Cập nhật riêng `config.light`** trong Gluestack để các scale primary/secondary/tertiary/success/info/typography/outline/background phản ánh palette mới. Mỗi scale dùng màu gốc tương ứng ở mức `500`; giữ nguyên định nghĩa các scale `dark`, error và warning.
- [x] **Bước 3: Đồng bộ tên màu Tailwind** trong `tailwind.config.js` với palette xanh mới; loại bỏ tên Nordic gắn với màu cũ nếu không còn consumer. Cập nhật `src/global.css` để biến light theme khớp tokens, giữ nguyên biến `.dark`.
- [x] **Bước 4: Rà soát diff cấu hình** bằng `rtk git diff -- src/theme/tokens.ts src/components/ui/gluestack-ui-provider/config.ts tailwind.config.js src/global.css`; xác nhận các khối dark không đổi và bốn màu gốc xuất hiện đúng ở light.

### Tác vụ 2: Chuyển màn hình và component sang palette mới

**Tệp:**
- Sửa: `src/app/(auth)/login.tsx`, `src/app/(tabs)/profile.tsx`, `src/app/(tabs)/settings.tsx`, `src/app/(tabs)/signal-history.tsx`
- Sửa: `src/features/home/home-screen.tsx`, `src/features/home/home.utils.ts`
- Sửa: `src/features/home/components/home-bottom-tabs.tsx`, `src/features/home/components/current-time-card.tsx`, `src/features/home/components/home-header.tsx`, `src/features/home/components/world-clock-card.tsx`
- Sửa: `src/features/pomodoro/components/organisms/timer-card.tsx`, `src/features/pomodoro/components/organisms/routines-modal.tsx`, `src/features/pomodoro/components/organisms/timer-actions.tsx`
- Sửa: `src/features/pomodoro/components/molecules/routine-card.tsx`, `src/features/pomodoro/components/molecules/duration-control.tsx`
- Sửa: `src/features/pomodoro/components/atoms/waveform.tsx`, `src/constants/AuthStyles.tsx`, `src/components/ui/button/index.tsx`
- Sửa nếu còn màu palette cũ: các tệp giao diện còn lại trong kết quả `rtk rg -l 'nordic|#[0-9A-Fa-f]{3,8}' src`

**Giao diện:**
- Tiêu thụ: `themeTokens` sau Tác vụ 1.
- Giữ: các giá trị màu thuộc class/nhánh dark và màu nhận diện hoặc trạng thái được loại trừ.

- [x] **Bước 1: Cập nhật màu light của Home** trong `home-screen.tsx`, `home-bottom-tabs.tsx`, `home-header.tsx`, `current-time-card.tsx`, `world-clock-card.tsx` và `home.utils.ts`; ưu tiên token semantic, đồng thời giữ nguyên màu trong nhánh dark của `getWorldClockCardPalette` và các lớp `dark:`.
- [x] **Bước 2: Cập nhật màu light ở các tab** trong profile, settings, signal-history và login; thay màu nền, icon, chữ, viền, nút và accent palette cũ. Giữ nguyên logo Google/Facebook, màu lỗi/cảnh báo và nhánh dark.
- [x] **Bước 3: Cập nhật Pomodoro** trong timer card, routines modal, timer actions, routine card, duration control và waveform; đổi các accent/bề mặt light sang token xanh và giữ nguyên màu dark.
- [x] **Bước 4: Đồng bộ `AuthStyles.tsx`** bằng cách thay các màu Indigo/Slate cũ theo palette mới mà không thay đổi bố cục.
- [x] **Bước 5: Cập nhật component nút dùng chung** trong `src/components/ui/button/index.tsx` để primary/positive action dùng sắc độ đủ tương phản cho chữ sáng; giữ nguyên sắc độ và trạng thái nút dark bằng các lớp `dark:`.
- [x] **Bước 6: Rà soát các mã màu còn lại** bằng `rtk rg -n 'nordic|#[0-9A-Fa-f]{3,8}' src`; giữ các mã màu không thuộc palette (brand bên thứ ba, lỗi/cảnh báo, màu kỹ thuật như trắng/đen cho icon hoặc bóng) và thay mọi màu Nordic cũ đang đóng vai trò màu giao diện light.

### Tác vụ 3: Đồng bộ màu khởi chạy và kiểm tra toàn ứng dụng

**Tệp:**
- Sửa: `app.json`
- Có thể sửa: `app.config.ts` nếu có màu khởi chạy light tương ứng

**Giao diện:**
- Tiêu thụ: neutral mới `#EBF5EE` cho nền khởi chạy light.
- Giữ: nền splash dark `#000000` và các cấu hình khởi chạy không liên quan.

- [x] **Bước 1: Đổi nền adaptive icon/splash sáng** đang dùng màu palette cũ trong `app.json` hoặc `app.config.ts` sang neutral đã duyệt; xác nhận nền tối của splash vẫn giữ nguyên.
- [x] **Bước 2: Chạy kiểm tra kiểu dữ liệu** bằng `rtk tsc --noEmit`; xử lý lỗi phát sinh từ thay đổi palette.
- [x] **Bước 3: Kiểm tra whitespace và diff** bằng `rtk git diff --check` và rà soát diff để chắc chắn chỉ có thay đổi màu, không ghi đè các chỉnh sửa có sẵn.
- [x] **Bước 4: Rà soát light trên Home bằng iPhone simulator và đối chiếu dark trong theme tokens, Gluestack config, CSS variables, và các lớp `dark:`; xác nhận màu light nhất quán, đủ tương phản, còn dark không đổi.**
