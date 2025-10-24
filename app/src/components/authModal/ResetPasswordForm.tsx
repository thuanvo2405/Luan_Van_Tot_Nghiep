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
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { URL } from "@/constant/constant";

const resetPasswordSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});

interface ResetPasswordFormProps {
  onClose: () => void;
  switchToLogin: () => void;
}

export default function ResetPasswordForm({
  onClose,
  switchToLogin,
}: ResetPasswordFormProps) {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: "" },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    console.log(URL);
    try {
      await axios.post(`${URL}forgot-password`, {
        email: values.email,
      });
      toast.success("📩 Hãy kiểm tra email của bạn để đặt lại mật khẩu!");
      onClose();
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Gửi yêu cầu thất bại. Thử lại sau!";
      toast.error(message);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        Đặt lại mật khẩu
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
                  <Input type="email" placeholder="Email của bạn" {...field} />
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
                Đang gửi...
              </>
            ) : (
              "Gửi yêu cầu"
            )}
          </Button>
        </form>
      </Form>

      <p
        className="text-sm mt-4 text-blue-500 hover:underline cursor-pointer text-center"
        onClick={switchToLogin}
      >
        Quay lại đăng nhập
      </p>
    </div>
  );
}
