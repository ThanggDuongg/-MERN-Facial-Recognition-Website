# XÂY DỰNG WEB CLIENT CHO HỆ THỐNG AI NHẬN DIỆN KHUÔN MẶT

Tên đề tài: Xây dựng Web Client cho hệ thống AI nhận diện khuôn mặt  
Công nghệ: MERN Stack     
![MERN Stack](https://markovate.b-cdn.net/wp-content/uploads/2022/08/Top-10-Reasons-To-Choose-MERN-Stack-Development-For-Your-Next-Project_-1280x720px@2x-1280x720.png)

## Yêu cầu: 
- Xây dựng Web Client cho hệ thống AI nhận diện khuôn mặt
- Chạy trên Web
- Tham khảo chức năng: https://www.videonetics.com/meraface-facial-recognition-system

## Thành viên:
- Phan Thanh Tài		MSSV: 19110452
- Nguyễn Hiếu Đan		MSSV: 19110345
- Dương Đức Thắng		MSSV: 19110461

## Tìm hiểu lý thuyết về công nghệ sử dụng
### 1. Serveside
#### 1.1. NodeJS
NodeJS là một môi trường runtime chạy JavaScript đa nền tảng và có mã nguồn mở, được sử dụng để chạy các ứng dụng web bên ngoài trình duyệt của client. Nền tảng này được phát triển bởi Ryan Dahl vào năm 2009, được xem là một giải pháp hoàn hảo cho các ứng dụng sử dụng nhiều dữ liệu nhờ vào mô hình hướng sự kiện (event-driven) không đồng bộ.  
**Ưu điểm**
- IO hướng sự kiện không đồng bộ, cho phép xử lý nhiều yêu cầu đồng thời.
- Sử dụng JavaScript – một ngôn ngữ lập trình dễ học.
- Chia sẻ cùng code ở cả phía client và server.
- NPM(Node Package Manager) và module Node đang ngày càng phát triển mạnh mẽ.
- Cộng đồng hỗ trợ tích cực.
- Cho phép stream các file có kích thước lớn.  
**Nhược điểm**
- Không có khả năng mở rộng, vì vậy không thể tận dụng lợi thế mô hình đa lõi trong các phần cứng cấp server hiện nay.
- Khó thao tác với cơ sử dữ liệu quan hệ.
- Mỗi callback sẽ đi kèm với rất nhiều callback lồng nhau khác.
- Cần có kiến thức tốt về JavaScript.
- Không phù hợp với các tác vụ đòi hỏi nhiều CPU.
#### 1.2. Expressjs
Expressjs hay còn được viết là Express js, Express.js. Đây là một framework mã nguồn mở miễn phí cho Node.js. Express.js được sử dụng trong thiết kế và xây dựng các ứng dụng web một cách đơn giản và nhanh chóng.
Vì Express js chỉ yêu cầu ngôn ngữ lập trình Javascript nên việc xây dựng các ứng dụng web và API trở nên đơn giản hơn với các lập trình viên và nhà phát triển.Expressjs cũng là một khuôn khổ của Node.js do đó hầu hết các mã code đã được viết sẵn cho các lập trình viên có thể làm việc.
### 2. Clientside
#### 2.1. ReactJs
ReactJS là một opensource được phát triển bởi Facebook, ra mắt vào năm 2013, bản thân nó là một thư viện Javascript được dùng để để xây dựng các tương tác với các thành phần trên website. Một trong những điểm nổi bật nhất của ReactJS đó là việc render dữ liệu không chỉ thực hiện được trên tầng Server mà còn ở dưới Client nữa.
#### 2.2. Chakra-ui
Chakra UI là một bộ công cụ thành phần giúp các nhà phát triển nhanh chóng xây dựng các thành phần giao diện người dùng có thể truy cập và tái sử dụng cho các ứng dụng web của họ. Nó được xây dựng dựa trên React và sử dụng hệ thống được tạo kiểu cho công cụ chủ đề của nó.
Mục tiêu của Chakra UI là giúp các lập trình viên dễ dàng tạo ra các giao diện người dùng đẹp, đáp ứng và dễ tiếp cận với nỗ lực tối thiểu. Bộ công cụ bao gồm nhiều thành phần sẵn sàng sử dụng được thiết kế để có thể dễ dàng kết hợp và mở rộng.
Chakra UI là mã nguồn mở và sự phát triển của nó được tài trợ bởi Segment.



## Set up  
- Clientside  
Install dependencies
	> yarn install

- Serverside
|Variable name              |Obligatory |Description                                                                                     |Default        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |   ✔    |Port to listen to (listen) server api                                                    |5000            |
	|MONGO_URI             |✔       |Connection string to connect to MongoDb                                              |                |
	|JWT_ACCESS_KEY            |✔       |Secret key, used in Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Secret key, used in Json Web token (refreshToken)                             |                |

## List API
- POST: ***api/user/login***	--	***[content-type: application/json]***  
	Request:  
	| params    | type   | require |
    | ---       | ---    | ---     |
    | email  | string | true    |
    | password  | string | true    |
		
	Response:  
``` javascript  
"data": {
  "_id": "637a764d1436136c37a2badb",  
  "fullName": "ThanggDuongg",  
  "email": "thangduc.duong14@gmail.com",  
  "image": "https://api.cloudinary.com/v1_1/thangduong/image/upload",  
  "role": "USER",  
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdhNzY0ZDE0MzYxMzZjMzdhMmJhZGIiLCJmdWxsTmFtZSI6IlRoYW5nZ0R1b25nZyIsImVtYWlsIjoidGhhbmdkdWMuZHVvbmcxNEBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvdGhhbmdkdW9uZy9pbWFnZS91cGxvYWQiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3MDQ4ODI4OCwiZXhwIjoxNjcwNDg4ODg4fQ.etEoHH_daMn0Ix1-r6EGToARB5FixCaoFeaJSSBaXMo",  
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW5nZHVjLmR1b25nMTRAZ21haWwuY29tIiwiaWF0IjoxNjcwNDg4Mjg4LCJleHAiOjE2NzMwODAyODh9.zFayb3soc9sVl9oG1rtUjTJzmwESza0Ad1i47CfsncY"  
},  
"message": "successfully"  
```
- POST: ***api/user/register***	--	***[content-type: application/json]***  
	Request:  
| params    | type   | require |
    | ---       | ---    | ---     |
    | fullName  | string | true    |
    | email  | string | true    |
    | password  | string | true    | 
    | image  | string | true    |
    | role  | string | default user    |

	Response:  
``` javascript  
"data": {
  "_id": "637a764d1436136c37a2badb",  
  "fullName": "ThanggDuongg",  
  "email": "thangduc.duong14@gmail.com",  
  "image": "https://api.cloudinary.com/v1_1/thangduong/image/upload",  
  "role": "USER",  
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdhNzY0ZDE0MzYxMzZjMzdhMmJhZGIiLCJmdWxsTmFtZSI6IlRoYW5nZ0R1b25nZyIsImVtYWlsIjoidGhhbmdkdWMuZHVvbmcxNEBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvdGhhbmdkdW9uZy9pbWFnZS91cGxvYWQiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3MDQ4ODI4OCwiZXhwIjoxNjcwNDg4ODg4fQ.etEoHH_daMn0Ix1-r6EGToARB5FixCaoFeaJSSBaXMo",  
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYW5nZHVjLmR1b25nMTRAZ21haWwuY29tIiwiaWF0IjoxNjcwNDg4Mjg4LCJleHAiOjE2NzMwODAyODh9.zFayb3soc9sVl9oG1rtUjTJzmwESza0Ad1i47CfsncY"  
},  
"message": "successfully"  
```
- GET: ***api/user/confirmation/:token***	--	***[content-type: application/json]***  
- POST: ***api/user/reset-password***	--	***[content-type: application/json]***
- GET: ***api/user/renew-password/:email***	--	***[content-type: application/json]***
- POST: ***api/user/refresh-token***	--	***[content-type: application/json]***
- POST: ***api/iamge/detect-one-face***	--	***[content-type: application/json]***

## Implement AI
### Clarifai
### Face-api
### Tensorflowjs
### library: react-use-face-detection
### Authentication with FaceIO

## Services  
- Nhận diện đơn khuôn mặt từ url ảnh  
- Nhận diện nhiều khuôn mặt từ ảnh upload  
- Nhận diện, vẽ mask, detect emotion live camera  
- Nhận diện nhiều khuôn mặt, đếm khuôn mặt live camera  
- Đăng ký, đăng nhập bằng mặt  
- Nhận diện, vẽ mask, detect emotion từ url hoặc upload  

