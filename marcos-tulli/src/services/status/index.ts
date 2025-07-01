import { getConfig } from "@config";
import { StatusBody } from "@types";

class StatusService {
  private version: string;
  private mode: string;

  constructor() {
    const { version, mode } = getConfig();
    this.version = version;
    this.mode = mode;
  }

  public getStatus(): StatusBody {
    const statusData: StatusBody = {
      status: 'ok',
      version: this.version,
      timestamp: new Date().toISOString(), 
      mode: this.mode,
    };
    return statusData;
  }
}

export const StatusServiceInstance = new StatusService()
