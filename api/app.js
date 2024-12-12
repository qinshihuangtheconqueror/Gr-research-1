import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
const app = express();

// Middleware xử lý JSON và URL-encoded (không cần thiết trong ví dụ này, nhưng hữu ích cho các API thực tế)
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//heavy is the crown

app.use(express.json());
app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);
// Lắng nghe trên cổng 8800
app.listen(8800, () => {
  console.log("Server is running ");
});
