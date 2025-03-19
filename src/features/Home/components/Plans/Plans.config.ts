import { SubscriptionPlanEnum } from "./Plans.types";

export type PlanOption = {
  type: SubscriptionPlanEnum;
  title: string;
  description: string;
  price: string;
  className?: string;
  headerClassName?: string;
  disabled?: boolean;
};

export const planOptions: PlanOption[] = [
  {
    type: SubscriptionPlanEnum.FREE,
    title: "MY TUBES PUBLIC",
    description: "Get the full power of the app!",
    price: "Completely Free",
    headerClassName: "bg-[#1e88e5]",
  },
  {
    type: SubscriptionPlanEnum.CREATOR,
    title: "CREATOR",
    description: "Customize and Create your own landing page",
    price: "Details soon...",
    className: "border-2 border-primary-800",
    headerClassName: "bg-gradient-to-r from-primary-800 to-pink-500",
    disabled: true,
  },
];

type PlanDetailType = { text: string; plansIncludes: SubscriptionPlanEnum[] };

export const planDetailsConfig: PlanDetailType[] = [
  {
    text: "Insight Dashboard",
    plansIncludes: [SubscriptionPlanEnum.CREATOR, SubscriptionPlanEnum.FREE],
  },
  {
    text: "Easy track",
    plansIncludes: [SubscriptionPlanEnum.CREATOR, SubscriptionPlanEnum.FREE],
  },
  {
    text: "Share Links",
    plansIncludes: [SubscriptionPlanEnum.CREATOR, SubscriptionPlanEnum.FREE],
  },
  {
    text: "Public Profile",
    plansIncludes: [SubscriptionPlanEnum.CREATOR, SubscriptionPlanEnum.FREE],
  },
  {
    text: "Custom Links on Public Profile",
    plansIncludes: [SubscriptionPlanEnum.CREATOR],
  },
  {
    text: "Social Links on Public Profile",
    plansIncludes: [SubscriptionPlanEnum.CREATOR, SubscriptionPlanEnum.FREE],
  },
  {
    text: "Creating your own groups",
    plansIncludes: [SubscriptionPlanEnum.CREATOR, SubscriptionPlanEnum.FREE],
  },
];
