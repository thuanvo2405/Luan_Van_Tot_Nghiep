import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useAuth } from "@/context/AuthProvider";
import { Loader2 } from "lucide-react"; // icon loading

const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

interface LoginFormProps {
  onClose: () => void;
  switchForm: () => void;
  onForgotPassword?: () => void;
}

export default function LoginForm({
  switchForm,
  onClose,
  onForgotPassword,
}: LoginFormProps) {
  const { login } = useAuth();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const success = await login(values.email, values.password);
    if (success) {
      if (typeof onClose === "function") onClose();
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
        Đăng nhập
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
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

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 mt-2 bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Đang đăng nhập...
              </>
            ) : (
              "Đăng nhập"
            )}
          </Button>
        </form>
      </Form>

      <div className="flex flex-col items-center mt-4 text-gray-500 dark:text-gray-400 gap-2">
        <p
          className="text-sm hover:underline cursor-pointer"
          onClick={onForgotPassword}
        >
          Quên mật khẩu?
        </p>

        <p className="text-sm">
          Bạn chưa có tài khoản?
          <span
            className="text-blue-500 hover:underline cursor-pointer ml-1 font-medium"
            onClick={switchForm}
          >
            Đăng ký
          </span>
        </p>
      </div>
    </div>
  );
}
