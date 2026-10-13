# Thiết kế bộ màu xanh cho giao diện sáng

## Mục tiêu

Thay bộ màu thương hiệu hiện tại của giao diện sáng Klocka bằng bộ màu xanh trong ảnh tham chiếu. Giữ nguyên giao diện tối hiện tại. Áp dụng bộ màu nhất quán trên các màn hình và component giao diện dùng chung.

## Bảng màu đã duyệt

| Vai trò | Mã màu |
| --- | --- |
| Chính (Primary) | `#1D9A4F` |
| Phụ (Secondary) | `#4A7C59` |
| Bổ trợ (Tertiary) | `#B5C9B7` |
| Trung tính (Neutral) | `#EBF5EE` |

Đây là bốn màu gốc. Các sắc độ bổ sung cho trạng thái nhấn, vô hiệu hóa, đường viền, bề mặt và chữ sẽ được suy ra từ các màu này, đồng thời đảm bảo độ tương phản dễ đọc. Màu lỗi và cảnh báo tiếp tục giữ ý nghĩa hiện tại. Màu nhận diện của dịch vụ bên thứ ba, bao gồm Google và Facebook, tiếp tục theo màu thương hiệu của họ.

## Cách hoạt động của giao diện sáng và tối

- Giao diện sáng dùng bộ màu xanh mới cho các vai trò thương hiệu và trung tính.
- Giao diện tối giữ nguyên các mã màu và diện mạo hiện tại.
- Component hỗ trợ giao diện sáng/tối tiếp tục chọn màu thông qua cơ chế chọn theme hiện có.
- Các bề mặt chỉ dùng ở giao diện sáng, hình minh họa và biểu đồ phụ thuộc palette sẽ dùng màu suy ra từ bộ màu xanh thay cho palette Nordic hiện tại.

## Nơi quản lý màu sắc

Quản lý palette thông qua các cơ chế theme tập trung sẵn có, không tạo thêm hệ thống style mới:

- `src/theme/tokens.ts` quản lý các giá trị theme theo ngữ nghĩa và tên màu thương hiệu.
- `src/components/ui/gluestack-ui-provider/config.ts` cung cấp các sắc độ màu cho thư viện component.
- `tailwind.config.js` khai báo tên màu dự án được dùng trong class NativeWind.
- `src/global.css` lưu các biến CSS tương ứng.
- Màn hình, tính năng và component dùng chung lấy màu từ token theo ngữ nghĩa hoặc tên màu thay vì ghi trực tiếp mã hex của palette.
- Cập nhật màu nền khởi chạy hoặc splash đang dùng palette sáng cũ để đảm bảo đồng nhất.

Đợt rà soát tìm thấy mã màu palette được ghi trực tiếp trong 21 file. Khi đổi màu, cần giữ nguyên các chỉnh sửa không liên quan hiện có trong working tree.

## Phạm vi và phần loại trừ

Trong phạm vi: bề mặt, chữ, đường viền, điều khiển, điều hướng, nút, hình minh họa, biểu đồ và chi tiết trang trí của giao diện sáng hiện đang dùng palette thương hiệu cũ.

Ngoài phạm vi: thiết kế lại bố cục hoặc hành vi, thay đổi kiểu chữ hoặc khoảng cách, đổi màu giao diện tối, đổi màu logo dịch vụ bên thứ ba hoặc màu trạng thái lỗi và cảnh báo theo ngữ nghĩa.

## Tiêu chí hoàn thành

1. Các vai trò chính, phụ, bổ trợ và trung tính trong giao diện sáng dùng đúng mã hex đã duyệt.
2. Màn hình và component dùng chung trong giao diện sáng không còn dùng màu thương hiệu Nordic cũ cho các vai trò giao diện tương ứng.
3. Mã màu và diện mạo của giao diện tối không thay đổi.
4. Màu thương hiệu Google/Facebook và màu lỗi/cảnh báo theo ngữ nghĩa được giữ nguyên.
5. Chữ và điều khiển duy trì đủ độ tương phản trên các bề mặt của giao diện sáng.
6. Định nghĩa màu theme được quản lý tập trung và đồng nhất giữa tokens, Gluestack, Tailwind và biến CSS.

## Cách kiểm tra

Rà soát định nghĩa màu của giao diện sáng và tối, tìm các mã màu cũ còn ghi trực tiếp trong mã giao diện, và xem các màn hình bị ảnh hưởng ở cả hai giao diện. Sau khi triển khai, xác nhận kiểm tra kiểu dữ liệu vẫn thành công. Công việc này không bao gồm thay đổi bố cục hoặc chức năng.
