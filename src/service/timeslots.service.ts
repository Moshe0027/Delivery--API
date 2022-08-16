import courierApi from "../static/courierAPI";

export const getTimeslots = ({ address }: any) => {
  try {
    const timeslots: any = [];
    
      courierApi.forEach((element: any) => {
      if (element.address === address) {
        timeslots.push(element);
      }
    });
    return timeslots;
  } catch (error: any) {
    return error.message;
  }
};
