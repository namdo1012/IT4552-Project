import { client } from "../client";

const output = {
  getUser: (payloads) => client.get(`api/`, payloads),
};
export default output;
