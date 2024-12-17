export interface TelemetryConfig {
    enabled: boolean;
    instanceId: string;
    createdAt: Date;
    configPath?: string;
  }
  
  export interface TelemetryKeys {
    posthogKey?: string;
    sentryDsn?: string;
  }
  
  export class TelemetryError extends Error {
    constructor(message: string, public code: string) {
      super(message);
      this.name = 'TelemetryError';
    }
  }