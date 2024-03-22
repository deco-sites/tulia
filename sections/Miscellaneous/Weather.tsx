import { Temperature } from "apps/weather/loaders/temperature.ts";
import Button from "../../components/ui/Button.tsx";

export interface WeatherProps {
  temperature?: Temperature | null;
}

export default function Weather({ temperature }: WeatherProps) {
  return (
    <Button class="btn-circle fixed bottom-8 right-8 w-16 h-16 flex flex-col items-center justify-center">
      <p>Tijuca</p>
      <p>{temperature?.celsius}ºC</p>
    </Button>
  );
}
