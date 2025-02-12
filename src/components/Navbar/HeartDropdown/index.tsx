import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { addOrRemoveLifesServer } from "@/actions/auth";
import { HeartIconSolid } from "@/components/Icons";
import { MAX_LIVES, addTwoHoursToDate, getTimeRemaining } from "@/shared/helpers";
import { ILives } from "@/types/generics";

const lifesArray = [0, 1, 2, 3, 4];

export default function HeartDropdown({
  userId,
  lives,
}: {
  userId: number;
  lives?: ILives;
}) {
  const { t } = useTranslation();
  const generics = (e: string) => t("generics." + e);

  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!lives || lives?.lives === MAX_LIVES) return;
    const startDate = new Date(),
      endDate = new Date(lives.last_live_date);
    const twoHoursDate = addTwoHoursToDate(endDate),
      timer = getTimeRemaining(startDate, twoHoursDate);

    if (timer.total <= 0) {
      addOrRemoveLifesServer(userId, "sum");
    }

    setTimeRemaining(timer);
  }, [userId, lives]);
  return (
    <div className="dropdown flex justify-center items-center relative">
      <button className="btn max-md:btn-sm text-error btn-ghost flex justify-center items-center gap-1">
        <HeartIconSolid className="w-6 h-6" />
        <span className="font-extrabold text-base-content text-lg">
          {lives?.lives}
        </span>
      </button>

      <div
        tabIndex={0}
        className="dropdown-content z-[1] min-w-[200px] bg-error menu p-4 gap-2 shadow text-error-content flex-col rounded-box flex top-12"
      >
        <div className="inline-flex justify-between items-center">
          <h5 className="font-black text-xl">
            {lives?.lives || 0} {generics("lives")}
          </h5>
          <HeartIconSolid />
        </div>
        <div className="inline-flex bg-error-content p-4 gap-2 rounded-md">
          {lifesArray.map((v, i) => (
            <HeartIconSolid
              className={`w-6 h-6 ${
                i + 1 <= lives!.lives ? "text-error" : "text-base-100"
              }`}
              key={i}
            />
          ))}
        </div>
        <span className="font-mono text-lg">
          {/* {lives?.lives === MAX_LIVES
            ? ""
            : timeRemaining.hours > 0
            ? generics("nextLifeIn", {
                time: timeRemaining.hours,
                dateTime: generics("hours"),
              })
            : timeRemaining.minutes > 0
            ? generics("nextLifeIn", {
                time: timeRemaining.minutes,
                dateTime: generics("minutes"),
              })
            : generics("nextLifeIn", {
                time: timeRemaining.seconds,
                dateTime: generics("seconds"),
              })} */}
        </span>
      </div>
    </div>
  );
}
