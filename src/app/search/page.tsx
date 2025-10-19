import Card from "@/components/card";
import OptionPicker from "@/components/option-picker";
import TimePicker from "@/components/time-picker";

export default function SearchPage() {
  return (
    <div className="w-[1284px] min-h-screen mx-auto">
      <div className="flex items-center justify-between py-4">
        <p>Danh sách sự kiện: </p>
        <div className="flex gap-3">
          <TimePicker />
          <OptionPicker />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 14 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
