import * as Hub from "looker-action-hub/lib/hub"

export class ExampleAction extends Hub.Action {

  name = "example"
  label = "Example"
  description = "This is an example integration."
  supportedActionTypes = [Hub.ActionType.Query]
  params = []

  async action(_request: Hub.ActionRequest) {
    // Implement your action here...
    return new Hub.ActionResponse()
  }

}

Hub.addAction(new ExampleAction())
