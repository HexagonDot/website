import { Link } from "./link";

type FeatureProps = {
  name: string;
  location: string;
  detail: string;
  year: number;
  yearEnd: string;
  url: string;
};

export const Feature = ({
  name,
  location,
  detail,
  year,
  yearEnd,
  url,
}: FeatureProps) => (
  <div>
    {/* <Link
      href={url}
      className="group flex flex-col gap-1 overflow-hidden text-sm sm:flex-row sm:items-center sm:gap-2"
    > */}
    <div className="group flex flex-col gap-1 overflow-hidden text-sm sm:flex-row sm:items-center sm:gap-2">
      <span className="flex flex-col gap-1 truncate sm:flex-row sm:items-center sm:gap-2">
        <p className="truncate text-foreground">{name}</p>
        <p className="shrink-0 text-foreground-lighter transition-colors ">
          {location}
        </p>
      </span>

      <div className="hidden h-px shrink-0 grow bg-border transition-colors  sm:block" />
      <p className="shrink-0 text-foreground-lighter transition-colors ">
        {year} – {yearEnd}
      </p>
      {/* </Link> */}
    </div>
    <p className="text-sm lg:pr-30 pt-6 pb-6 ">{detail}</p>
  </div>
);
