import { Request, Response } from "express";
import { GetTimeslotsInput } from "../schema/timeslots.schema";
import { getTimeslots } from "../service/timeslots.service";

export const getTimeslotHandler = async (
  req: Request<{}, {}, GetTimeslotsInput["body"]>,
  res: Response
) => {
  try {
    const body = req.body;
    const timeslots = getTimeslots({ ...body });
    return res.send(timeslots);
  } catch (error: any) {
    res.status(500).send({ err: error.message });
  }
};
