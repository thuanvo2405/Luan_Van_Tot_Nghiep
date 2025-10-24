import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthProvider";
import { Loader2 } from "lucide-react";

const registerSchema = z
  .object({
    userName: z.string().min(2, "Họ và tên phải có ít nhất 2 ký tự"),
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

interface RegisterFormProps {
  switchToLogin: () => void;
  onClose: () => void;
}

export default function RegisterForm({
  switchToLogin,
  onClose,
}: RegisterFormProps) {
  const { signup } = useAuth();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      const success = await signup(
        values.email,
        values.userName,
        values.password
      );
      if (success) onClose();
    } catch (error: any) {
      toast.error(error.message || "Có lỗi xảy ra khi đăng ký");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        Đăng ký
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên</FormLabel>
                <FormControl>
                  <Input placeholder="Họ và tên" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email của bạn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Mật khẩu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xác nhận mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 mt-2 bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Đang đăng ký...
              </>
            ) : (
              "Đăng ký"
            )}
          </Button>
        </form>
      </Form>

      <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">
        Đã có tài khoản?
        <span
          className="text-blue-500 hover:underline cursor-pointer ml-1 font-medium"
          onClick={switchToLogin}
        >
          Đăng nhập
        </span>
      </p>
    </div>
  );
}
