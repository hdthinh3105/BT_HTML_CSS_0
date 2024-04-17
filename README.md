# AppDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## cách chạy cho 1 bài tập 

nếu bạn muốn chạy 1 bài tập bt-class-1 thì bạn có thể dùng cách sau 
+ step 1 : bạn kiếm file app.component.html trong project
+ step 2 : bạn mở comment cho component <app-bt-class-1></app-bt-class-1>
+ step 3 : đóng tất cả các comment ngoài <app-bt-class-1></app-bt-class-1>

ví dụ hình ảnh 
![image](https://github-production-user-asset-6210df.s3.amazonaws.com/93094572/323037182-7b37f5a2-0047-4b49-90e3-9f32462654be.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240417T020756Z&X-Amz-Expires=300&X-Amz-Signature=d4820465669070a427b97ea83bedea762ebb2fe28b2a9adf23e8e41eab424700&X-Amz-SignedHeaders=host&actor_id=93094572&key_id=0&repo_id=783206470)


## chạy docker file

nếu bạn muốn deploy 1 bài tập bất kì trên docker bạn thực hiện lại các bước :

sau đây là 1 ví dụ để chạy docker file cho bt-class-1:
+ step 1 : bạn kiếm file app.component.html trong project
+ step 2 : bạn mở comment cho component <app-bt-class-1></app-bt-class-1>
+ step 3 : đóng tất cả các comment ngoài <app-bt-class-1></app-bt-class-1>
+ step 4 : bật terminal
+ step 5 : bật docker desktop
+ step 6 : nhập "docker built -t bt1 ."
+ step 7 : nhập "docker run -p 4200:4200 --name bt1 bt1"
+ step 8 : mở docker desktop và truy cập vào container bt1 mới tạo với port là 4200
 Từ đó chúng ta đã deploy được 1 bài tập theo mong muốn



