import { Link } from "react-router-dom";
import { CSSProperties } from "react";
import useTranslation from "@/hooks/useTranslation";

export default function HomeHeader({ subtitle }: { subtitle: string }) {
  const { generics } = useTranslation();

  return (
    <>
      <div className="relative max-w-[1182px] flex m-auto items-center justify-center flex-row gap-7">
        <div className="md:w-2/5">
          <h1 className="text-6xl leading-none font-black title-dashboard">
            <span className="text-success">
              {"Learn".split("").map(function (char, index) {
                const style = {
                  animationDelay: 0.5 + index / 10 + "s",
                } as CSSProperties;
                return (
                  <span aria-hidden="true" key={index} style={style}>
                    {char}
                  </span>
                );
              })}
            </span>
            <br />
            <span className="text-info">
              {"Languages".split("").map(function (char, index) {
                const style = {
                  animationDelay: 0.5 + index / 10 + "s",
                } as CSSProperties;
                return (
                  <span aria-hidden="true" key={index} style={style}>
                    {char}
                  </span>
                );
              })}
            </span>
            <br />
            <span className="text-secondary">
              {"Online".split("").map(function (char, index) {
                const style = {
                  animationDelay: 0.5 + index / 10 + "s",
                } as CSSProperties;
                return (
                  <span aria-hidden="true" key={index} style={style}>
                    {char}
                  </span>
                );
              })}
            </span>
          </h1>
          <p className="mt-6 text-xl text-base/60 font-light">{subtitle}</p>
          <div className="mt-6 inline-flex items-center w-full gap-2 ">
            <Link
              className="btn btn-success flex-1 px-12 normal-case text-base"
              to="/auth/signup"
            >
              {generics("signUp")}
            </Link>
            <Link
              className="btn md:btn-wide flex-1 px-12 normal-case text-base"
              to="/auth/signin"
            >
              {generics("signIn")}
            </Link>
          </div>
        </div>
        <div className="max-md:hidden md:flex md:w-2/5">
          <img
            src="https://www.katywang.co.uk/img/misc/stickers/lion.gif"
            alt=""
            width={80}
            height={80}
            className="w-full mask mask-squircle bg-gradient-to-r from-info to-info"
          />
        </div>
      </div>
    </>
  );
}
