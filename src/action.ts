import * as Hub from "looker-action-hub/lib/hub"

export class ExampleAction extends Hub.Action {

  constructor() {
    super()
    this.name = "example"
    this.label = "Example"
    this.description = "This is an example integration."
    this.supportedActionTypes = [Hub.ActionType.Query]
  }

  async action(_request: Hub.ActionRequest) {
    // Implement your action here...
    return new Hub.ActionResponse()
  }

}

Hub.addAction(new ExampleAction())
