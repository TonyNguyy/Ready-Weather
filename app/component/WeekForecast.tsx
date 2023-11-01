interface DayForecast {
    date: string;
    day: {
      condition: {
        icon: string;
        text: string;
      };
      maxtemp_c: number;
      mintemp_c: number;
    };
  }
  
  interface WeekForecastProps {
    data: {
      forecast: {
        forecastday: DayForecast[];
      };
    };
  }
  
  const WeekForecast = ({ data }: WeekForecastProps) => {
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
        <h2 className="text-2xl text-white italic font-semibold text-center mt-10">Weekly Forecast 🌤</h2>
        {data.forecast.forecastday.map((day, index) => (
          <div
            key={index}
            className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center font-semibold gap-4"
            role="group"
            aria-label={`Forecast for ${new Date(day.date).toLocaleString("en-US", { weekday: "short" })}`}
          >
            <p className="italic text-2xl">{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
            <img
              className="w-50 h-50"
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              aria-label={day.day.condition.text}
            />
            <div>
              <p className="bg-black/25 px-2 italic rounded-xl text-white mb-2">
                High:{" "}
                <span aria-label={`Maximum temperature: ${day.day.maxtemp_c.toFixed()} degrees Celsius`}>
                  {day.day.maxtemp_c.toFixed()}°
                </span>
              </p>
              <p className="bg-black/25 px-2 italic rounded-xl text-white">
                Low:{" "}
                <span aria-label={`Minimum temperature: ${day.day.mintemp_c.toFixed()} degrees Celsius`}>
                  {day.day.mintemp_c.toFixed()}°
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default WeekForecast;