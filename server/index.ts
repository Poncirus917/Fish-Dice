// server/index.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// 1. 加载环境变量 (只需调用一次)
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 2. 确保 MONGODB_URI 有值，避免 TS 报错
// 请确保你的 .env 文件里有 MONGODB_URI=xxxx
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/fishdice";

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB error:', err));

// 3. 确保文件名是 User.ts 且大小写一致
import User from './models/User';

// 注册接口
app.post('/api/register', async (req: any, res: any) => {
  try {
    const { username, password } = req.body;

    // 1. 检查用户是否已存在
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: '用户名已存在' });

    // 2. 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. 保存
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: '注册成功' });
  } catch (error) {
    res.status(500).json({ message: '服务器错误' });
  }
});

const PORT = 3001; 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});