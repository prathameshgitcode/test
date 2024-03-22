"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
interface Props {
  callbackUrl?: string;
}
const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});
type InputType = z.infer<typeof validationSchema>;
const SigninForm: React.FC<Props> = (props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { register } = useForm<InputType>({
    resolver: zodResolver(validationSchema),
  });
  const onFinish: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      console.error("Sign in failed:", result?.error);
      setErrorMessage("Please check your email and password");
      return;
    }
    router.push(props.callbackUrl ? props.callbackUrl : "/");
  };
  if (session) {
    router.push("/");
  } else
    return (
      <div>
        <h2 className="p-bottom text-[1.375rem] font-bold">
          Sign In to your Account
        </h2>
        <p className="p-bottom text-[#4F4F4F]">
          Welcome back! Please enter your details
        </p>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<MailOutlined className="p-2 text-gray-400" />}
              placeholder="Email"
              {...register("email")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="p-2 text-gray-400" />}
              placeholder="Password"
              {...register("password")}
            />
          </Form.Item>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div className="flex justify-between">
            <Form.Item name="remember">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item className="text-[#005BAB]">
              <a href="forgot-password">Forgot Password?</a>
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="h-input flex w-full flex-col items-center justify-center rounded-[0.375rem] border-none bg-[#005BAB] text-[1rem] font-normal text-[#FFF]"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
};
export default SigninForm;