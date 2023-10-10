import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import BackendMessage from "headpage/BackendMessage";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  let incomingMessage: BackendMessage<any> | undefined = req.body;

  if (!validateMessage) {
    context.res = {
      status: 400
    };
  }
};

export default httpTrigger;

function validateMessage(message: BackendMessage<any>): boolean {
  if (!message.targetServiceId || message.targetServiceId === "") {
    return false;
  }

  return true;
}