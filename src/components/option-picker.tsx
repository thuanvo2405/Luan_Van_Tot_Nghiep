"use client";

import * as React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "./ui/slider";

export default function OptionPicker() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-funnel-icon lucide-funnel"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          Lọc
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <RadioGroup defaultValue="comfortable">
          Khu vực
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Toàn quốc</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Hồ Chí Minh</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Hà Nội</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r4" />
            <Label htmlFor="r4">Đà Nẵng</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r5" />
            <Label htmlFor="r5">Khu vực khác</Label>
          </div>
        </RadioGroup>
        <RadioGroup defaultValue="comfortable">
          Khu vực
          <div className="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Âm nhạc</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Sân khấu</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Thể thao</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r4" />
            <Label htmlFor="r4">Khác</Label>
          </div>
        </RadioGroup>
        <div>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
