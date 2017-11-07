import * as D from "looker-action-hub/lib/framework"

export class ExampleIntegration extends D.Integration {

  constructor() {
    super()
    this.name = "example"
    this.label = "Example"
    this.description = "This is an example integration."
    this.supportedActionTypes = ["query", "dashboard"]
  }

  async action(_request: D.ActionRequest) {
    return new D.ActionResponse()
  }

}

D.addIntegration(new ExampleIntegration())
