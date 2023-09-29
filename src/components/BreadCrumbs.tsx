import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { NAVIGATION } from "../constants";

function BreadCrumbs() {
  const { pathname } = useLocation();

  return (
    <section className="flex py-5 italic">
      <p className={clsx(pathname === NAVIGATION["/"] && "text-lime-300")}>
        start
      </p>
      <span>&nbsp;&gt;&nbsp;</span>
      <p className={clsx(pathname === NAVIGATION["/step1"] && "text-lime-300")}>
        step1
      </p>
      <span>&nbsp;&gt;&nbsp;</span>
      <p className={clsx(pathname === NAVIGATION["/step2"] && "text-lime-300")}>
        step2
      </p>
      <span>&nbsp;&gt;&nbsp;</span>
      <p className={clsx(pathname === NAVIGATION["/step3"] && "text-lime-300")}>
        step3
      </p>
      <span>&nbsp;&gt;&nbsp;</span>
      <p className={clsx(pathname === NAVIGATION["/step4"] && "text-lime-300")}>
        step4
      </p>
      <span>&nbsp;&gt;&nbsp;</span>
      <p
        className={clsx(pathname === NAVIGATION["/result"] && "text-lime-300")}
      >
        result
      </p>
    </section>
  );
}

export default BreadCrumbs;
