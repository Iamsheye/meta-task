import ICONS from "../svg";
import Chart from "./Chart";
import Percentage from "./Percentage";
import ResponseTime from "./ResponseTime";
interface IChartSection {
  title: string;
  title2: string;
  color: string;
  bg: string;
}

const ChartSection = ({ title, title2, color, bg }: IChartSection) => {
  return (
    <div className="rounded-lg border border-[#ecebf5] 2xl:flex">
      <div className="flex-[7] border-b p-4 md:p-6 2xl:border-r 2xl:border-b-0">
        <div className="justify-between md:flex">
          <div className="mb-4 flex items-center gap-4 md:mb-0">
            <p className="font-semibold text-primary">{title}</p>
            <Percentage />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-r pr-4">
              <div className={`h-3 w-3 rounded-sm ${bg}`}></div>
              <p className="text-sm text-primary">High Priority</p>
            </div>
            <div className="flex gap-5 rounded-lg border border-[#e1e1eb] py-2 px-4 text-sm">
              <p>This Month</p>
              <img src={ICONS.AGENT_SVG} alt="" />
            </div>
          </div>
        </div>
        <div className="my-4 h-[182px]">
          <Chart label={title} color={color} />
        </div>
      </div>
      <div className="flex-[2] items-center justify-between gap-4 py-8 px-6 md:flex 2xl:block">
        <ResponseTime
          title={title2}
          text="30 Mins"
          addClass="2xl:mb-5 md:mb-0 mb-5"
        />
        <ResponseTime title="Response Time" text="1 Hour 30 Mins" />
      </div>
    </div>
  );
};

export default ChartSection;
